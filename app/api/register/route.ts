// app/api/register/route.js
'use server';

import { NextResponse } from 'next/server';
import { registerUser, findUserByEmail } from '@/app/database';

export async function POST(request: Request) {
  try {
    const { username, email, password, usertype } = await request.json();

    // Validate input
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 400 }
      );
    }

    // Register the user
    const user = await registerUser({
      username,
      email,
      password,
      usertype: usertype || 3,
    });

    return NextResponse.json(
      { message: 'User registered successfully', user },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Error registering user' },
      { status: 500 }
    );
  }
}