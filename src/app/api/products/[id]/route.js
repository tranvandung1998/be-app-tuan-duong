import pool from '../../../../lib/db';

export const runtime = 'nodejs';

// ✅ Handle CORS preflight
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*', // hoặc domain FE
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

// ✅ GET /api/products/[id]
export async function GET(req, { params }) {
  const { id } = params;

  try {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return new Response('Not Found', {
        status: 404,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    return new Response(JSON.stringify(result.rows[0]), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('GET product by ID error:', err);
    return new Response('Error fetching product', {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
