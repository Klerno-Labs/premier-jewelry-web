export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between bg-gray-900 p-12 text-white">
        <div className="text-2xl font-bold">Pegrio</div>
        <div>
          <h2 className="text-3xl font-bold mb-4">
            "Pegrio transformed our workflow completely."
          </h2>
          <p className="text-gray-400">
            Join thousands of teams managing their business with Pegrio.
          </p>
        </div>
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Pegrio Inc.
        </div>
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}