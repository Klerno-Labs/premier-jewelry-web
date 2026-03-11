import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login | Pegrio App",
  description: "Access your Pegrio dashboard",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
             <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100 blur-3xl opacity-60" />
             <div className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-100 blur-3xl opacity-60" />
          </div>
          
          {children}
        </div>
      </body>
    </html>
  );
}