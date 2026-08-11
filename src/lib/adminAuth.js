import crypto from "crypto";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "admin_session";

export function getAdminSessionToken() {
  return crypto
    .createHash("sha256")
    .update(`${process.env.ADMIN_PASSWORD}`)
    .digest("hex");
}

export function isValidAdminSession(token) {
  if (!token) return false;
  return token === getAdminSessionToken();
}

export async function isAdminRequestAuthorized() {
  const cookieStore = await cookies();
  const session = cookieStore.get(ADMIN_SESSION_COOKIE);
  return isValidAdminSession(session?.value);
}
