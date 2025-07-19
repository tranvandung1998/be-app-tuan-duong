import pool from "../../../lib/db";
import { handleCors } from "../../../lib/cors";

export async function POST(req) {
  const corsHeaders = handleCors(req); // ✅ Phải truyền `req` vào

  try {
    const body = await req.json();
    const { name, category_id } = body;

    if (!name || !category_id) {
      return new Response("Missing fields", { status: 400, headers: corsHeaders });
    }

    const result = await pool.query(
      `INSERT INTO subcategories (name, category_id) VALUES ($1, $2) RETURNING *`,
      [name, category_id]
    );

    return new Response(JSON.stringify(result.rows[0]), {
      status: 201,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error("Error creating subcategory:", err);
    return new Response("Internal Server Error", { status: 500, headers: corsHeaders });
  }
}

export function OPTIONS(req) {
  return new Response(null, {
    status: 204,
    headers: handleCors(req), // ✅ truyền `req`
  });
}
