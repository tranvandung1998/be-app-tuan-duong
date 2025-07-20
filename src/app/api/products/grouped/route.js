import pool from '../../../../lib/db';

export const runtime = 'nodejs'; // Bắt buộc nếu chạy trên Vercel

// ✅ Preflight CORS
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

// ✅ GET grouped products theo categoryId
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get('categoryId');

  if (!categoryId) {
    return new Response(JSON.stringify({ error: 'Missing categoryId' }), {
      status: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const subRes = await pool.query(
      'SELECT id, name FROM subcategories WHERE category_id = $1 ORDER BY id',
      [categoryId]
    );

    const data = [];

    for (const sub of subRes.rows) {
      const prodRes = await pool.query(
        'SELECT * FROM products WHERE subcategory_id = $1 ORDER BY id DESC',
        [sub.id]
      );

      data.push({
        subcategory_id: sub.id,
        subcategory_name: sub.name,
        products: prodRes.rows,
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('GET grouped products error:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }
}
