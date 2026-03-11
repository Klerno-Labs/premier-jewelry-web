import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { redirect } from "next/navigation";
// Define public and protected routes
const publicRoutes = ["/login", "/register", "/forgot-password", "/reset-password"];
const protectedRoutes = ["/dashboard", "/settings", "/admin"];

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isProtectedRoute = protectedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  );

  // Redirect to login if trying to access protected route while logged out
  if (isProtectedRoute && !isLoggedIn) {
    const loginUrl = new URL("/login", nextUrl);
    loginUrl.searchParams.set("callbackUrl", nextUrl.href);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect to dashboard if trying to access auth route while logged in
  if (isPublicRoute && isLoggedIn && !nextUrl.pathname.includes("/reset-password")) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }
  
  // Role-based checks (Example: Admin only)
  if (nextUrl.pathname.startsWith("/admin") && req.auth?.user?.role !== "admin") {
     return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};