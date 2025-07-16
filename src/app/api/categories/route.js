import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM categories ORDER BY id');
    return Response.json(result.rows);
  } catch (err) {
    return new Response('Error loading categories', { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name } = await req.json();
    if (!name) return new Response('Missing name', { status: 400 });

    const result = await pool.query(
      'INSERT INTO categories (name) VALUES ($1) RETURNING *',
      [name]
    );

    return Response.json(result.rows[0]);
  } catch (err) {
    return new Response('Error creating category', { status: 500 });
  }
}
