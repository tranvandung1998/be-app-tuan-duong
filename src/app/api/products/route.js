import pool from '../../../lib/db';

export const runtime = 'nodejs';

// ✅ Handle preflight (CORS OPTIONS)
export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

// ✅ GET products
export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id DESC');

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // FE domain cũng được
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('GET error', err);
    return new Response('Error loading products', {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}

// ✅ POST new product
export async function POST(req) {
  try {
    const body = await req.json();
    const { subcategory_id, name, price, description, images } = body;

    if (!subcategory_id || !name || !images?.length) {
      return new Response('Missing required fields', {
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    const result = await pool.query(
      `INSERT INTO products (subcategory_id, name, price, description, images, created_at)
       VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *`,
      [subcategory_id, name, price || 0, description || '', images]
    );

    return new Response(JSON.stringify(result.rows[0]), {
      status: 201,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('POST error', err);
    return new Response('Error creating product', {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}
