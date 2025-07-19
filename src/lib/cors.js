// lib/cors.js
export function getCorsHeaders(origin = '*') {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };
}

export function handleCors(req) {
  const origin = req.headers.get('origin') || '*';
  const headers = getCorsHeaders(origin);

  // Nếu là request OPTIONS (preflight) thì trả về ngay
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers,
    });
  }

  return headers; // Cho các method khác
}
