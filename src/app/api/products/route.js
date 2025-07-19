import pool from '../../../lib/db';
import { handleCors } from '../../../lib/cors';

export function OPTIONS(req) {
  const corsHeaders = handleCors(req);
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function GET(req) {
  const corsHeaders = handleCors(req);

  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id DESC');
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return new Response('Error loading products', {
      status: 500,
      headers: corsHeaders,
    });
  }
}

export async function POST(req) {
  const corsHeaders = handleCors(req);

  try {
    const body = await req.json();
    const { subcategory_id, name, price, description, images } = body;

    if (!subcategory_id || !name || !images?.length) {
      return new Response('Missing required fields', {
        status: 400,
        headers: corsHeaders,
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
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    return new Response('Error creating product', {
      status: 500,
      headers: corsHeaders,
    });
  }
}
