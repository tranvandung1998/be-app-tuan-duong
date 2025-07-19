const whitelist = [
  'http://localhost:5173', // ✅ Cho phép FE chạy local
  'https://app-fe-tuan-duong.vercel.app', // ✅ Cho phép FE production
];

export function handleCors(req) {
  const origin = req.headers.get('origin') || '';
  const allowedOrigin = whitelist.includes(origin) ? origin : '';

  const headers = {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };

  if (req.method === 'OPTIONS') {
    return {
      isOptions: true,
      response: new Response(null, {
        status: 204,
        headers,
      }),
    };
  }

  return {
    isOptions: false,
    headers,
  };
}
