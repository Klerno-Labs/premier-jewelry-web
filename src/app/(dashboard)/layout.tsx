import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:pl-64">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-20 lg:pt-8">
          {children}
        </main>
      </div>
    </div>
  );
}