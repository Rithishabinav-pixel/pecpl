import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, isValidAdminSession } from "@/lib/adminAuth";

// CSP lives in next.config.mjs (static headers) rather than here. A
// nonce-based CSP would need a fresh value read via headers() in the root
// layout on every request, which forces the entire site into dynamic
// (per-request) rendering — every currently statically-prerendered page
// would lose that. Confirmed by testing: wiring headers()-based nonce into
// the root layout flipped every route from static to dynamic in the build
// output, and reverting it restored static generation.
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
