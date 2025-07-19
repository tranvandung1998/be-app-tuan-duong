// lib/cors.js
export function handleCors(req) {
  const allowedOrigin = 'http://localhost:5173'; // Sửa cứng origin DEV

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
