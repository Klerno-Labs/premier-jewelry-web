import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to Pegrio App</h1>
      <p className="mt-4">Your custom application for business needs.</p>
      <Link href="/login" className="mt-6 text-blue-500 hover:underline">
        Get Started
      </Link>
    </main>
  );
}