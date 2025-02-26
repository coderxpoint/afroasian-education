import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

// GET method to fetch all admissions
export const GET = async (request: Request) => {
  try {
    const connection = await createConnection();
    const query = "SELECT * FROM admissions_form ORDER BY created_at DESC";
    const [rows] = await connection.execute(query);
    return NextResponse.json(rows);
  } catch (error) {
    console.error("Error fetching admissions:", error);
    return NextResponse.json(
      { error: "Failed to fetch admissions." },
      { status: 500 }
    );
  }
};

// POST method to submit an admission form
export async function POST(request: Request) {
  const body = await request.json();
  const {
    first_name,
    last_name,
    email,
    phone,
    dob,
    gender,
    last_qualification,
    percentage,
    year_of_passing,
    board,
    university,
    program,
    address,
  } = body;

  if (
    !first_name ||
    !last_name ||
    !email ||
    !phone ||
    !dob ||
    !gender ||
    !last_qualification ||
    !percentage ||
    !year_of_passing ||
    !board ||
    !university ||
    !program ||
    !address
  ) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    const connection = await createConnection();
    const query =
      "INSERT INTO admissions_form (first_name, last_name, email, phone, dob, gender, last_qualification, percentage, year_of_passing, board, university, program, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    await connection.execute(query, [
      first_name,
      last_name,
      email,
      phone,
      dob,
      gender,
      last_qualification,
      percentage,
      year_of_passing,
      board,
      university,
      program,
      address,
    ]);

    return NextResponse.json(
      { message: "Admission form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to submit admission form." },
      { status: 500 }
    );
  }
}

// DELETE method to remove an admission
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "ID is required." }, { status: 400 });
  }

  try {
    const connection = await createConnection();
    const query = "DELETE FROM admissions_form WHERE id = ?";
    await connection.execute(query, [id]);
    return NextResponse.json({
      message: "Admission deleted successfully!",
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to delete admission." },
      { status: 500 }
    );
  }
}
