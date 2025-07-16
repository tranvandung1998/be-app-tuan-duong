// src/app/api/subcategories/route.js
import pool from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, category_id } = body;

    if (!name || !category_id) {
      return new Response("Missing fields", { status: 400 });
    }

    const result = await pool.query(
      `INSERT INTO subcategories (name, category_id) VALUES ($1, $2) RETURNING *`,
      [name, category_id]
    );

    return Response.json(result.rows[0]);
  } catch (err) {
    console.error("Error creating subcategory:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
