import { createUser } from "@/app/database/index";

export async function POST(req) {
  const { username, email, password } = await req.json();

  const result = await createUser(username, email, password);
  if (result.success) {
    return Response.json({ success: true });
  } else {
    return Response.json({ success: false, message: result.message });
  }
}
