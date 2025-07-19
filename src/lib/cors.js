// lib/cors.js
export function getCorsHeaders(origin = '*') {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };
}

// Trả về Response nếu là OPTIONS, còn lại thì trả về headers object
export function handleCors(req) {
  const origin = req.headers.get('origin') || '*';
  const headers = getCorsHeaders(origin);

  if (req.method === 'OPTIONS') {
    // Trả luôn Response cho request OPTIONS
    return new Response(null, {
      status: 204,
      headers,
    });
  }

  // Với các method khác thì trả headers để dùng trong Response
  return headers;
}
