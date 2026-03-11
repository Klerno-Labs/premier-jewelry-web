import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [
    // Providers added in auth.ts to avoid edge runtime issues
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isOnAdmin = nextUrl.pathname.startsWith("/dashboard/users");

      if (isOnAdmin) {
        if (isLoggedIn && auth?.user?.role === "admin") return true;
        return false; // Redirect to login or 403
      }

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }

      return true;
    },
  },
} satisfies NextAuthConfig;