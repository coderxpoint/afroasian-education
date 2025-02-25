import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

// GET method to fetch all enrollments
export const GET = async (request: Request) => {
  const connection = await createConnection();
  const query = "SELECT * FROM university_submissions";
  const [rows] = await connection.execute(query);
  return NextResponse.json(rows);
};

// POST method to submit an enrollment form
export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, university, program_name } = body;

  if (!name || !email || !phone || !university || !program_name) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    const connection = await createConnection();
    const query =
      "INSERT INTO university_submissions (name, email, phone, university, program_name) VALUES (?, ?, ?, ?, ?)";
    await connection.execute(query, [
      name,
      email,
      phone,
      university,
      program_name,
    ]);

    return NextResponse.json(
      { message: "Enroll now form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to submit enroll now form." },
      { status: 500 }
    );
  }
}

// DELETE method to remove an enrollment
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required." }, { status: 400 });
  }

  try {
    const connection = await createConnection();
    const query = "DELETE FROM university_submissions WHERE id = ?";
    await connection.execute(query, [id]);
    return NextResponse.json({
      message: "Enroll now form deleted successfully!",
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to delete enroll now form." },
      { status: 500 }
    );
  }
}
