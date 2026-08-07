import { cookies } from "next/headers";
import { ADMIN_SESSION_COOKIE, getAdminSessionToken } from "@/lib/adminAuth";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { password } = body ?? {};

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return Response.json({ error: "Incorrect password." }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, getAdminSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return Response.json({ success: true }, { status: 200 });
}
