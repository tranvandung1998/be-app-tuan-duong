import pool from '@/lib/db';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get('categoryId');

  try {
    const result = categoryId
      ? await pool.query('SELECT * FROM subcategories WHERE category_id = $1 ORDER BY id', [categoryId])
      : await pool.query('SELECT * FROM subcategories ORDER BY id');

    return Response.json(result.rows);
  } catch (err) {
    return new Response('Error loading subcategories', { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { category_id, name } = await req.json();
    if (!category_id || !name) return new Response('Missing fields', { status: 400 });

    const result = await pool.query(
      'INSERT INTO subcategories (category_id, name) VALUES ($1, $2) RETURNING *',
      [category_id, name]
    );

    return Response.json(result.rows[0]);
  } catch (err) {
    return new Response('Error creating subcategory', { status: 500 });
  }
}