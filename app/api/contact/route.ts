
import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const connection = await createConnection();
  const query = "SELECT * FROM contact_submissions";
  const [rows] = await connection.execute(query);
  return NextResponse.json(rows);
};

export async function POST(request: Request) {
  const body = await request.json();
  const { first_name, last_name, email, phone, message } = body;

  if (!first_name || !last_name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    const connection = await createConnection();
    const query =
      "INSERT INTO contact_submissions (first_name, last_name, email, phone, message) VALUES (?, ?, ?, ?, ?)";
    await connection.execute(query, [
      first_name,
      last_name,
      email,
      phone,
      message,
    ]);

    return NextResponse.json(
      { message: "Contact form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to submit contact form." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required." }, { status: 400 });
  }

  try {
    const connection = await createConnection();
    const query = "DELETE FROM contact_submissions WHERE id = ?";
    await connection.execute(query, [id]);
    return NextResponse.json({ message: "Contact form deleted successfully!" });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to delete contact form." },
      { status: 500 }
    );
  }
}