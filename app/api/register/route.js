// app/api/register/route.js
import { registerUser } from "@/app/database/index";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();
    await registerUser(username, email, password);
    return new Response(JSON.stringify({ message: "User registered successfully" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 400 });
  }
}