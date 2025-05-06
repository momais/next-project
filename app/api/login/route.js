// app/api/login/route.js
import { loginUser } from '@/app/database/index';

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return Response.json({ success: false, message: 'Email and password are required' }, { status: 400 });
  }

  try {
    const result = await loginUser(email, password);
    if (result.success) {
      return Response.json({ success: true, user: result.user });
    } else {
      return Response.json({ success: false, message: result.message }, { status: 401 });
    }
  } catch (error) {
    console.error('Login Error:', error);
    return Response.json({ success: false, message: 'Login failed' }, { status: 500 });
  }
}
