import pool from '../../../lib/db';

export const runtime = 'nodejs';

// ✅ CORS preflight handler
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*', // hoặc FE domain cụ thể
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

// ✅ GET: Lấy danh sách subcategories (có thể lọc theo categoryId)
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get('categoryId');

  try {
    const result = categoryId
      ? await pool.query('SELECT * FROM subcategories WHERE category_id = $1 ORDER BY id', [categoryId])
      : await pool.query('SELECT * FROM subcategories ORDER BY id');

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('GET subcategories error:', err);
    return new Response(JSON.stringify({ error: 'Error loading subcategories' }), {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }
}

// ✅ POST: Tạo subcategory mới
export async function POST(req) {
  try {
    const { category_id, name } = await req.json();

    if (!category_id || !name) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
    }

    const result = await pool.query(
      'INSERT INTO subcategories (category_id, name) VALUES ($1, $2) RETURNING *',
      [category_id, name]
    );

    return new Response(JSON.stringify(result.rows[0]), {
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('POST subcategory error:', err);
    return new Response(JSON.stringify({ error: 'Error creating subcategory' }), {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }
}
