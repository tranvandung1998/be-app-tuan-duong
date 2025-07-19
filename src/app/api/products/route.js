import pool from '../../../lib/db';
import { NextResponse } from 'next/server';
import { handleCors } from '../../../lib/cors';

export async function GET(req) {
  const corsHeaders = handleCors(req);
  if (req.method === 'OPTIONS') return corsHeaders;

  const { searchParams } = new URL(req.url);
  const subId = searchParams.get('subcategoryId');

  try {
    const result = subId
      ? await pool.query('SELECT * FROM products WHERE subcategory_id = $1 ORDER BY id DESC', [subId])
      : await pool.query('SELECT * FROM products ORDER BY id DESC');

    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('GET Error:', err);
    return new Response(err.message || 'Error loading products', {
      status: 500,
      headers: corsHeaders,
    });
  }
}

export async function POST(req) {
  const corsHeaders = handleCors(req);
  if (req.method === 'OPTIONS') return corsHeaders;

  try {
    const body = await req.json();
    const { subcategory_id, name, price, description, images } = body;

    if (!subcategory_id || !name || !images || images.length === 0) {
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
    console.error('POST Error:', err);
    return new Response(err.message || 'Error creating product', {
      status: 500,
      headers: corsHeaders,
    });
  }
}

export function OPTIONS(req) {
  return handleCors(req);
}
