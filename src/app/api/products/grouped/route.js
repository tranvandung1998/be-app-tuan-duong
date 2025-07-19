import pool from '../../../../lib/db';
import { handleCors } from '../../../../lib/cors';

export async function GET(req) {
  const corsHeaders = handleCors(req); // ✅ truyền đúng req

  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get('categoryId');

  if (!categoryId) {
    return new Response('Missing categoryId', {
      status: 400,
      headers: corsHeaders,
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
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('GET grouped products error:', err);
    return new Response('Error fetching grouped products', {
      status: 500,
      headers: corsHeaders,
    });
  }
}

// ✅ Xử lý preflight request (CORS) đúng cách
export function OPTIONS(req) {
  return handleCors(req);
}
