import { NextRequest, NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

// Helper function to check if the request is authenticated
function isAuthenticated(request: NextRequest): boolean {
  // This is a simple authentication check
  // In a real application, you would implement proper authentication
  // For example, checking JWT tokens or session cookies
  const authHeader = request.headers.get("authorization");
  return authHeader?.startsWith("Bearer ") ?? false;
}

// GET all blogs
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    const connection = await getConnection();

    if (slug) {
      // Get a single blog by slug
      const [rows] = await connection.execute(
        "SELECT * FROM blogs WHERE slug = ?",
        [slug]
      );
      connection.release();

      const blog = Array.isArray(rows) && rows.length > 0 ? rows[0] : null;

      if (!blog) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }

      return NextResponse.json(blog);
    } else {
      // Get all blogs
      const [rows] = await connection.execute(
        "SELECT * FROM blogs ORDER BY created_at DESC"
      );
      connection.release();
      return NextResponse.json(rows);
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

// POST a new blog
export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, content, slug, image_url, excerpt = "" } = body;

    if (!title || !content || !slug) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const connection = await getConnection();
    try {
      // Try inserting with excerpt field
      const [result] = await connection.execute(
        "INSERT INTO blogs (title, content, slug, image_url, excerpt, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())",
        [title, content, slug, image_url, excerpt]
      );
      connection.release();
      return NextResponse.json({
        message: "Blog created successfully",
        result,
      });
    } catch (error) {
      // If error contains 'Unknown column', try without excerpt field
      if (error instanceof Error && error.message.includes("Unknown column")) {
        const [result] = await connection.execute(
          "INSERT INTO blogs (title, content, slug, image_url, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())",
          [title, content, slug, image_url]
        );
        connection.release();
        return NextResponse.json({
          message: "Blog created successfully (without excerpt)",
          result,
        });
      } else {
        // Re-throw if it's a different error
        connection.release();
        throw error;
      }
    }
    // Connection release and response are now handled in the try/catch block above
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 }
    );
  }
}

// PUT (update) an existing blog
export async function PUT(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, title, content, slug, image_url, excerpt = "" } = body;

    if (!id || !title || !content || !slug) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const connection = await getConnection();
    try {
      // Try updating with excerpt field
      const [result] = await connection.execute(
        "UPDATE blogs SET title = ?, content = ?, slug = ?, image_url = ?, excerpt = ?, updated_at = NOW() WHERE id = ?",
        [title, content, slug, image_url, excerpt, id]
      );
      connection.release();
      return NextResponse.json({
        message: "Blog updated successfully",
        result,
      });
    } catch (error) {
      // If error contains 'Unknown column', try without excerpt field
      if (error instanceof Error && error.message.includes("Unknown column")) {
        const [result] = await connection.execute(
          "UPDATE blogs SET title = ?, content = ?, slug = ?, image_url = ?, updated_at = NOW() WHERE id = ?",
          [title, content, slug, image_url, id]
        );
        connection.release();
        return NextResponse.json({
          message: "Blog updated successfully (without excerpt)",
          result,
        });
      } else {
        // Re-throw if it's a different error
        connection.release();
        throw error;
      }
    }
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

// DELETE a blog
export async function DELETE(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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
