import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM users');
    console.log('📥 Dữ liệu lấy được từ DB:', result.rows);
    return Response.json(result.rows);
  } catch (error) {
    console.error('🔥 Lỗi kết nối DB:', error.message, error.stack);
    return Response.json(
      { error: 'Lỗi kết nối cơ sở dữ liệu' },
      { status: 500 }
    );
  }
}
