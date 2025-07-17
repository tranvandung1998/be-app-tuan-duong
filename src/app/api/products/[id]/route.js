import pool from '../../../../lib/db';

export async function GET(_, { params }) {
  const { id } = params;

  try {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    if (result.rows.length === 0)
      return new Response('Not Found', { status: 404 });

    return Response.json(result.rows[0]);
  } catch (err) {
    return new Response('Error fetching product', { status: 500 });
  }
}