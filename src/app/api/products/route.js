import pool from '../../../lib/db';
import { handleCors } from '../../../lib/cors';

export const runtime = 'nodejs';

export function OPTIONS(req) {
  const { response } = handleCors(req);
  return response;
}

export async function GET(req) {
  const { isOptions, response, headers } = handleCors(req);
  if (isOptions) return response;

  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id DESC');
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return new Response('Error loading products', {
      status: 500,
      headers,
    });
  }
}

export async function POST(req) {
  const { isOptions, response, headers } = handleCors(req);
  if (isOptions) return response;

  try {
    const body = await req.json();
    const { subcategory_id, name, price, description, images } = body;

    if (!subcategory_id || !name || !images?.length) {
      return new Response('Missing required fields', {
        status: 400,
        headers,
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
        ...headers,
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return new Response('Error creating product', {
      status: 500,
      headers,
    });
  }
}
