import { NextResponse } from 'next/server';

export function getCorsHeaders(origin = '*') {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };
}

export function handleCors(request) {
  const origin = request.headers.get('origin') || '*';
  const headers = getCorsHeaders(origin);

  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers,
    });
  }

  return headers; // headers dùng cho các method khác
}
