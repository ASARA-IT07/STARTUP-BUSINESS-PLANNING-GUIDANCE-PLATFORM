import Link from "next/link";
import { Field, GreenPanel } from "@/components/auth";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen md:grid-cols-[46%_54%]">
      <GreenPanel />

      <section className="flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-md">
          <h1 className="mb-6 text-3xl font-semibold text-[#335e48]">
            Welcome back
          </h1>

          <form className="space-y-5">
            <Field label="Email" type="email" placeholder="you@example.com" />
            <Field label="Password" type="password" placeholder="At least 8 characters" />

            <Link
              href="/dashboard"
              className="block w-full rounded-md bg-[#335e48] py-2.5 text-center text-sm font-medium text-white hover:bg-[#2a4f3c]"
            >
              Log in
            </Link>
          </form>

          <p className="mt-5 text-sm text-gray-400">
            New here?{" "}
            <Link href="/signup" className="hover:text-[#335e48] hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}