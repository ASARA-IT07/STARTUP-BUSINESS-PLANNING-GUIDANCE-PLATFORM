import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="grid min-h-screen md:grid-cols-[54%_46%]">
      {/* Left: the form */}
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

      {/* Right: the green panel */}
      <section className="hidden items-center bg-[#6b8b79] px-12 md:flex">
        <div>
          <h2 className="max-w-md text-3xl font-semibold text-[#c5dcc8]">
            From idea to a costed, compliant plan.
          </h2>
          <ul className="mt-6 space-y-4 text-sm text-[#3d5e4c]">
            {[
              "Personalised to your business type",
              "Know your break-even before you spend",
              "Guidance grounded in official sources",
            ].map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="size-4 rounded-full border-2 border-[#3d5e4c]" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

// One label + input box. Reused 4 times above.
function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[#2f5240]">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#a9bdb1] px-3 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-[#335e48] focus:ring-2 focus:ring-[#335e48]/20"
      />
    </label>
  );
}