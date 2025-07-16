import pool from '@/lib/db';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const subId = searchParams.get('subcategoryId');

  try {
    const result = subId
      ? await pool.query('SELECT * FROM products WHERE subcategory_id = $1 ORDER BY id DESC', [subId])
      : await pool.query('SELECT * FROM products ORDER BY id DESC');

    return Response.json(result.rows);
  } catch (err) {
    return new Response('Error loading products', { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { subcategory_id, name, price, description, images } = await req.json();
    if (!subcategory_id || !name || !images || images.length === 0)
      return new Response('Missing fields', { status: 400 });

    const result = await pool.query(
      `INSERT INTO products (subcategory_id, name, price, description, images, created_at)
       VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *`,
      [subcategory_id, name, price || 0, description || '', images]
    );

    return Response.json(result.rows[0]);
  } catch (err) {
    return new Response('Error creating product', { status: 500 });
  }
}