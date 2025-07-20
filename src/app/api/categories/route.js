import pool from '../../../lib/db';

export const runtime = 'nodejs'; // nếu cần cho Vercel hiểu rõ môi trường

// ✅ CORS preflight
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*', // hoặc FE domain cụ thể
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

// ✅ POST: Tạo subcategory
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, category_id } = body;

    if (!name || !category_id) {
      return new Response('Missing fields', {
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    const result = await pool.query(
      `INSERT INTO subcategories (name, category_id) VALUES ($1, $2) RETURNING *`,
      [name, category_id]
    );

    return new Response(JSON.stringify(result.rows[0]), {
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('Error creating subcategory:', err);
    return new Response('Internal Server Error', {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
