// app/api/auth/register/route.ts
import { NextResponse } from 'next/server';
import { registerUser, findUserByEmail } from '@/app/database';

export async function POST(request: Request) {
  try {
    const { username, email, password } = await request.json();

    // Validate required fields
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: 'Please fill in all fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json(
        { message: 'Password must be at least 6 characters long' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { message: 'Email already registered' },
        { status: 400 }
      );
    }

    try {
      const user = await registerUser({
        username,
        email,
        password,
        usertype: 3
      });

      if (!user) {
        return NextResponse.json(
          { message: 'Failed to create user' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { message: 'Registration successful' },
        { status: 201 }
      );
    } catch (error: any) {
      console.error('Registration DB error:', error);
      
      if (error.code === 'ER_DUP_ENTRY') {
        return NextResponse.json(
          { message: 'Email already registered' },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { message: 'Failed to create account. Please try again.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Registration general error:', error);
    return NextResponse.json(
      { message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
