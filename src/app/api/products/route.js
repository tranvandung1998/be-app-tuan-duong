import pool from '@/lib/db';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const subId = searchParams.get('subcategoryId');

  try {
    const result = subId
      ? await pool.query('SELECT * FROM products WHERE subcategory_id = $1 ORDER BY id DESC', [subId])
      : await pool.query('SELECT * FROM products ORDER BY id DESC');

    return Response.json(result.rows);
  } catch (err) {
    console.error('GET error:', err);
    return new Response('Error loading products', { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name, price, description, images, subcategory_id } = await req.json();

    if (!name || !subcategory_id) {
      return NextResponse.json({ error: "Thiếu trường bắt buộc" }, { status: 400 });
    }

    const product = await prisma.products.create({
      data: {
        name,
        price,
        description,
        images, // nên kiểm tra là array
        subcategory_id
      }
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("❌ Error creating product:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }

}
