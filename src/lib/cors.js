// lib/cors.js
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
  const origin = request?.headers?.get('origin') || '*'; // LẤY TỪ request
  return getCorsHeaders(origin);
}
