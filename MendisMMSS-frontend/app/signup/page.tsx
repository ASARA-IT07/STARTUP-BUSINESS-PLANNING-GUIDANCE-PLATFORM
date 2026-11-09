import Link from "next/link";
import { Field, GreenPanel } from "@/components/auth";

export default function SignupPage() {
  return (
    <main className="grid min-h-screen md:grid-cols-[54%_46%]">
      <section className="flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-md">
          <h1 className="mb-6 text-3xl font-semibold text-gray-900">
            Create your account
          </h1>

          <form className="space-y-5">
            <Field label="Full name" type="text" placeholder="Kasun Perera" />
            <Field label="Email" type="email" placeholder="you@example.com" />
            <Field label="Password" type="password" placeholder="At least 8 characters" />
            <Field label="Confirm password" type="password" placeholder="Repeat your password" />

            <Link
              href="/onboarding"
              className="block w-full rounded-md bg-[#335e48] py-2.5 text-center text-sm font-medium text-white hover:bg-[#2a4f3c]"
            >
              Create account
            </Link>
          </form>

          <p className="mt-5 text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="hover:text-[#335e48] hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </section>

      <GreenPanel />
    </main>
  );
}