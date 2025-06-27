import { NextResponse } from 'next/server';
import pool, { getConnectionWithRetry } from '@/app/database/config';

export async function GET() {
  let connection;
  try {
    connection = await getConnectionWithRetry();
    if (!connection) {
      throw new Error('Failed to establish database connection');
    }

    // Fetch only the 10 most recent transactions
    const [rows] = await connection.query('SELECT * FROM cashbackengine_transactions ORDER BY transaction_id DESC LIMIT 10');
    connection.release();

    return NextResponse.json({ success: true, data: rows });
  } catch (error: any) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  } finally {
    if (connection) {
      try {
        connection.release();
      } catch (releaseError) {
        // ignore
      }
    }
  }
} 

export async function POST(request: Request) {
  let connection;
  try {
    const data = await request.json();
    // You may need to adjust these fields based on your actual table structure
    const {
      user_id,
      amount,
      status = 'In Progress',
      fname = '',
      lname = '',
      email = '',
      telephone = '',
      ref_id = null,
      retailer_id = null,
      activation = null,
      payment_type = null,
      reference_id = null,
    } = data;

    if (!user_id || !amount) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    connection = await getConnectionWithRetry();
    if (!connection) {
      throw new Error('Failed to establish database connection');
    }

    console.log('Inserting order:', { user_id, fname, lname, email, telephone, status, amount, ref_id, retailer_id, activation, payment_type, reference_id });
    const [result]: any = await connection.query(
      `INSERT INTO cashbackengine_transactions 
        (user_id, fname, lname, email, telephone, status, amount, ref_id, reference_id, retailer_id, activation, payment_type) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)` ,
      [user_id, fname, lname, email, telephone, status, amount, ref_id, reference_id, retailer_id, activation, payment_type]
    );
    console.log('Insert result:', result);
    connection.release();

    return NextResponse.json({ success: true, insertId: result.insertId });
  } catch (error: any) {
    console.error('Error inserting order:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  } finally {
    if (connection) {
      try {
        connection.release();
      } catch (releaseError) {
        // ignore
      }
    }
  }
} 