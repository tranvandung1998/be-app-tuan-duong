import pool from '../../../lib/db';
import { handleCors } from '../../../lib/cors';

export async function GET(req) {
  const corsHeaders = handleCors(req); // ✅ truyền req
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get('categoryId');

  try {
    const result = categoryId
      ? await pool.query('SELECT * FROM subcategories WHERE category_id = $1 ORDER BY id', [categoryId])
      : await pool.query('SELECT * FROM subcategories ORDER BY id');

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('GET subcategories error:', err);
    return new Response('Error loading subcategories', {
      status: 500,
      headers: corsHeaders,
    });
  }
}

export async function POST(req) {
  const corsHeaders = handleCors(req); // ✅ truyền req
  try {
    const { category_id, name } = await req.json();
    if (!category_id || !name)
      return new Response('Missing fields', { status: 400, headers: corsHeaders });

    const result = await pool.query(
      'INSERT INTO subcategories (category_id, name) VALUES ($1, $2) RETURNING *',
      [category_id, name]
    );

    return new Response(JSON.stringify(result.rows[0]), {
      status: 201,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('POST subcategory error:', err);
    return new Response('Error creating subcategory', {
      status: 500,
      headers: corsHeaders,
    });
  }
}

export function OPTIONS(req) {
  return new Response(null, {
    status: 204,
    headers: handleCors(req), // ✅ truyền req
  });
}
