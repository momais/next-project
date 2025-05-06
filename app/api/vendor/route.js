// app/api/vendor/route.js
import pool from '@/app/database/config';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [rows] = await pool.query(
      'SELECT company_name, company_picture FROM cashbackengine_users WHERE usertype = 2 LIMIT 12'
    );
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 });
  }
}
