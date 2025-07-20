import pool from '../../../lib/db';

export const runtime = 'nodejs'; // BẮT BUỘC để tránh bị CORS khi dùng Edge Function

// ✅ Xử lý preflight request từ trình duyệt
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*', // Thay bằng domain cụ thể khi production
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

// ✅ Xử lý POST request để tạo subcategory
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, category_id } = body;

    if (!name || !category_id) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
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
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }
}
