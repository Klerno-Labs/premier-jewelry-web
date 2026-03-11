import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pegrio App | Dashboard",
  description: "High-performance custom application dashboard",
  metadataBase: new URL('https://pegrio.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-gray-50/50")}>
        <div className="flex min-h-screen">
          <Sidebar isCollapsed={false} toggleSidebar={() => {}} />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-4 md:p-8">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}