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
