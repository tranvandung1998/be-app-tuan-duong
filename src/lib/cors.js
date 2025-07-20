// lib/cors.js

const ALLOWED_ORIGIN = '*'; // Hoặc '*' nếu thử cho tất cả

export function handleCors(req) {
  const headers = {
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  // Handle preflight (OPTIONS)
  if (req.method === 'OPTIONS') {
    return {
      isOptions: true,
      response: new Response(null, {
        status: 204,
        headers,
      }),
      headers,
    };
  }

  return {
    isOptions: false,
    headers,
  };
}
