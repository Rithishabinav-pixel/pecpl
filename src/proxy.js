import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, isValidAdminSession } from "@/lib/adminAuth";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login/") {
    return NextResponse.next();
  }

  const session = request.cookies.get(ADMIN_SESSION_COOKIE);

  if (!isValidAdminSession(session?.value)) {
    const loginUrl = new URL("/admin/login/", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
