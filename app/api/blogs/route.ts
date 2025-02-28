import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

// Helper function to check authentication
const isAuthenticated = (request: NextRequest) => {
  const isAuthCookie = request.cookies.get('isAuthenticated')?.value;
  return isAuthCookie === 'true';
};

// GET all blogs (public route)
export async function GET() {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute(
      "SELECT * FROM blogs ORDER BY created_at DESC"
    );
    connection.release();
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// POST new blog (protected route)
export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { title, content, slug, image_url } = body;

    if (!title || !content || !slug) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const connection = await getConnection();
    const [result] = await connection.execute(
      "INSERT INTO blogs (title, content, slug, image_url, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())",
      [title, content, slug, image_url]
    );
    connection.release();

    return NextResponse.json({ message: "Blog created successfully", result });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}

// PUT update blog (protected route)
export async function PUT(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { id, title, content, slug, image_url } = body;

    if (!id || !title || !content || !slug) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const connection = await getConnection();
    const [result] = await connection.execute(
      "UPDATE blogs SET title = ?, content = ?, slug = ?, image_url = ?, updated_at = NOW() WHERE id = ?",
      [title, content, slug, image_url, id]
    );
    connection.release();

    return NextResponse.json({ message: "Blog updated successfully", result });
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

// DELETE blog (protected route)
export async function DELETE(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Blog ID is required" },
        { status: 400 }
      );
    }

    const connection = await getConnection();
    const [result] = await connection.execute(
      "DELETE FROM blogs WHERE id = ?",
      [id]
    );
    connection.release();

    return NextResponse.json({ message: "Blog deleted successfully", result });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}