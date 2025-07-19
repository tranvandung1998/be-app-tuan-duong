// lib/cors.js
export function handleCors(req) {
  const origin = req.headers.get('origin') || '*';

  const headers = {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };

  // Trả về response nếu là OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return {
      isOptions: true,
      response: new Response(null, {
        status: 204,
        headers,
      }),
    };
  }

  // Với các method khác
  return {
    isOptions: false,
    headers,
  };
}
