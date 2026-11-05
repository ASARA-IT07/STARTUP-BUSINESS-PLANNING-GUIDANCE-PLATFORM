import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#4a7a57]">
      {/* Blurry background blobs */}
      <div className="absolute left-1/3 top-[-10%] size-125 rounded-full bg-white/70 blur-[120px] animate-blob-1" />
      <div className="absolute bottom-[-10%] right-[-10%] size-100 rounded-full bg-[#b9d1b8]/70 blur-[100px] animate-blob-2" />
      <div className="absolute left-[-10%] top-1/2 size-87.5 rounded-full bg-[#9fbf9f]/60 blur-[100px] animate-blob-3" />

      {/* Content */}
      <div className="relative flex flex-col items-center text-center">
        <h1 className="text-7xl font-black text-[#1f5a3d] drop-shadow-md md:text-8xl">
          ASARA
        </h1>
        <p className="mt-2 text-xl tracking-[0.15em] text-[#1f5a3d]/90 md:text-2xl">
          Make your idea into business
        </p>
        <Link
          href="/signup"
          className="mt-14 w-72 rounded-md border border-white/40 bg-[#a8c3a3]/80 py-2 text-center text-sm font-semibold text-white transition hover:bg-[#a8c3a3]"
        >
          Let&apos;s get started
        </Link>
      </div>
    </main>
  );
}