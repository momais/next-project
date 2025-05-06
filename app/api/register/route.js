// app/api/register/route.js
import { registerUser } from '@/app/database/index';

export async function POST(req) {
  const { username, email, password } = await req.json();

  if (!username || !email || !password) {
    return Response.json({ success: false, message: 'All fields are required' }, { status: 400 });
  }

  try {
    const result = await registerUser(username, email, password);
    if (result.success) {
      return Response.json({ success: true, message: result.message });
    } else {
      return Response.json({ success: false, message: result.message }, { status: 409 });
    }
  } catch (error) {
    console.error('Register Error:', error);
    return Response.json({ success: false, message: 'Registration failed' }, { status: 500 });
  }
}
