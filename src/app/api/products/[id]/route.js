import pool from '../../../../lib/db';
import { handleCors } from '../../../../lib/cors';

export async function GET(_, { params }) {
  const corsHeaders = handleCors();

  const { id } = params;

  try {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return new Response('Not Found', {
        status: 404,
        headers: corsHeaders,
      });
    }

    return new Response(JSON.stringify(result.rows[0]), {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('GET product by ID error:', err);
    return new Response('Error fetching product', {
      status: 500,
      headers: corsHeaders,
    });
  }
}

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: handleCors(),
  });
}
