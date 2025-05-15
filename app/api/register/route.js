// app/api/register/route.js
import pool from '@/app/database/config';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { username, email, password } = await req.json();

  const [existing] = await pool.query(
    'SELECT * FROM cashbackengine_users WHERE email = ? OR username = ?',
    [email, username]
  );

  if (existing.length > 0) {
    return NextResponse.json({ success: false, message: 'Email or username already exists' });
  }

  await pool.query(
    'INSERT INTO cashbackengine_users (username, email, password) VALUES (?, ?, ?)',
    [username, email, password]
  );

  return NextResponse.json({ success: true, message: 'Registration successful' });
}
