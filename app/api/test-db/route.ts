import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';
import pool, { getConnectionWithRetry } from '@/app/database/config';

export async function GET() {
  let connection;
  try {
    connection = await getConnectionWithRetry();
    if (!connection) {
      throw new Error('Failed to establish database connection');
    }

    // Get the table structure
    const [tables] = await connection.execute('SHOW TABLES');
    
    // Release the connection back to the pool
    connection.release();

    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful',
      tables: tables
    });
  } catch (error: any) {
    console.error('Database connection error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message
    }, { status: 500 });
  } finally {
    if (connection) {
      try {
        connection.release();
      } catch (releaseError) {
        console.error('Error releasing connection:', releaseError);
      }
    }
  }
} 