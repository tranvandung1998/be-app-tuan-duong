// lib/db.js
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // cần thiết khi connect từ Vercel hoặc public Railway
  },
});

export default pool;
