import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const connection = await createConnection();
  const query = "SELECT * FROM loan_submissions ORDER BY created_at DESC";
  const [rows] = await connection.execute(query);
  return NextResponse.json(rows);
};

export async function POST(req: Request) {
  try {
    const connection = await createConnection();

    const { name, email, phone, university, state, bank, message } =
      await req.json();

    const query = `
      INSERT INTO loan_submissions (name, email, phone, university, state, bank, message)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    // Execute the query with the values
    await connection.execute(query, [
      name,
      email,
      phone,
      university,
      state,
      bank,
      message,
    ]);

    return new Response(
      JSON.stringify({ message: "Form submitted successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return new Response(
      JSON.stringify({
        message: "Error submitting form",
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      }),
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
    const query = "DELETE FROM loan_submissions WHERE id = ?";
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
