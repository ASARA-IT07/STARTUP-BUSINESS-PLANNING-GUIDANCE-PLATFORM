// Pieces shared by the Create account and Log in pages.

export function GreenPanel() {
  return (
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
  );
}

export function Field({ label, type, placeholder, name }: { label: string; type: string; placeholder: string; name?: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[#2f5240]">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border border-[#a9bdb1] px-3 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-[#335e48] focus:ring-2 focus:ring-[#335e48]/20"
      />
    </label>
  );
}