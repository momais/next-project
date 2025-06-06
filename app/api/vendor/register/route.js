import { NextResponse } from 'next/server';
import { registerUser, findUserByEmail } from '../../../database/index';

export async function POST(req) {
  try {
    const { username, email, password, phone, usertype } = await req.json();

    // Validate input
    if (!username || !email || !password || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Password strength check
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Register vendor
    const result = await registerUser({
      username,
      email,
      password,
      phone,
      usertype: usertype || 2 // Default to vendor type if not specified
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Vendor registered successfully' },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    if (error.message.includes('Database access denied')) {
      return NextResponse.json(
        { error: 'Database connection error. Please try again later.' },
        { status: 500 }
      );
    }
    if (error.message.includes('Could not connect to database')) {
      return NextResponse.json(
        { error: 'Unable to connect to database. Please try again later.' },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { error: 'Error registering vendor. Please try again.' },
      { status: 500 }
    );
  }
} 