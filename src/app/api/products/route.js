import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM public."Products" ORDER BY created_at DESC');
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('🔥 Lỗi khi truy vấn Products:', error);
    return new Response(JSON.stringify({ error: 'Lỗi truy vấn sản phẩm' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 
