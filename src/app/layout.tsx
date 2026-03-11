import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pegrio.app"),
  title: "Pegrio | Project Management Platform",
  description: "Manage your projects and team with Pegrio. The modern growth platform for teams.",
  openGraph: {
    title: "Pegrio",
    description: "Manage your projects and team with Pegrio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen bg-gray-50 text-gray-900")}>
        {children}
      </body>
    </html>
  );
}