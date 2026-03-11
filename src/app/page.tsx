import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b bg-white px-6 py-4">
        <div className="text-xl font-bold tracking-tight text-primary">
          Pegrio
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost">Log in</Button>
          </Link>
          <Link href="/login">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              v2.0 is now live
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Scale your business with confidence
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Pegrio provides the infrastructure you need to manage customers,
              process payments, and analyze data — all in one bespoke platform.
              Built for growth, designed for simplicity.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/login">
                <Button size="lg" className="h-12 px-8">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-12 px-8">
                View Demo
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Built on Next.js 14 for optimal performance. Load times under
                  100ms guaranteed.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-600">
                  Bank-grade encryption, role-based access control, and
                  compliance-ready infrastructure.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Deep Analytics</h3>
                <p className="text-gray-600">
                  Visualize your data with powerful charts and exports. Make
                  decisions based on real-time insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl rounded-xl border bg-gray-900 p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Everything you need</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "User Authentication & Management",
                  "Admin Dashboard & Reports",
                  "Secure Payment Processing",
                  "Email & SMS Notifications",
                  "File Uploads & Storage",
                  "Third-Party API Integrations",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/login">
                  <Button size="lg" className="w-full md:w-auto">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Pegrio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}