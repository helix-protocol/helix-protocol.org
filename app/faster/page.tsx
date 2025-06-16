import Link from "next/link";

export default function FasterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-100 dark:from-black dark:to-slate-900 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full flex flex-col items-center pt-12 pb-8 gap-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-center bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
          FASTER & Helix
        </h1>
        <p className="max-w-xl text-center text-lg text-slate-700 dark:text-slate-200 mt-2">
          How Helix Protocol will realize the new EU directive for withholding
          tax relief
        </p>
        <Link
          href="/"
          className="mt-4 rounded-full border border-blue-600 text-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-50 dark:hover:bg-slate-800 transition"
        >
          ← Back to Helix Home
        </Link>
      </header>
      <main className="flex-1 flex flex-col items-center px-4 gap-12">
        <section className="w-full max-w-2xl flex flex-col gap-6 mt-4">
          <h2 className="text-xl font-semibold text-blue-600">
            What is FASTER?
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-200">
            FASTER (Council Directive (EU) 2025/50) is a new EU regulation
            requiring all member states to implement fast, safe, and
            standardized relief of excess withholding taxes on cross-border
            dividends and interest. It mandates digital, privacy-respecting
            solutions for tax residency and beneficial ownership verification.
          </p>
        </section>
        <section className="w-full max-w-2xl flex flex-col gap-4 bg-white/80 dark:bg-slate-900/80 rounded-xl shadow p-6 border border-slate-100 dark:border-slate-800">
          <h3 className="text-lg font-semibold">How Helix Realizes FASTER</h3>
          <ul className="list-disc list-inside text-base text-slate-700 dark:text-slate-200 flex flex-col gap-2">
            <li>
              <span className="font-medium">
                Electronic Tax Residency Certificate (eTRC):
              </span>{" "}
              Helix enables every tax office to issue digital, zk-verifiable
              certificates, proving tax residency without exposing personal
              data.
            </li>
            <li>
              <span className="font-medium">Beneficial Ownership Proofs:</span>{" "}
              Financial intermediaries report and prove ownership using
              zk-proofs, ensuring only the necessary information is shared for
              compliance.
            </li>
            <li>
              <span className="font-medium">Privacy-first Data Exchange:</span>{" "}
              All compliance and reporting flows are built on zero-knowledge
              cryptography, so institutions can verify what they need—without
              ever seeing your private financial data.
            </li>
            <li>
              <span className="font-medium">Open Source Commons:</span> Helix is
              public infrastructure, not owned by any single government or
              company, but by the community.
            </li>
          </ul>
        </section>
        <section className="w-full max-w-2xl flex flex-col gap-4 mt-2">
          <h4 className="text-base font-semibold">Why zk for FASTER?</h4>
          <p className="text-base text-slate-700 dark:text-slate-200">
            Zero-knowledge (zk) cryptography allows Helix to deliver compliance
            and transparency without sacrificing privacy. Citizens and
            institutions can prove what's required—tax residency, beneficial
            ownership, and more—without revealing sensitive details. This is the
            foundation for a new era of digital public administration.
          </p>
        </section>
      </main>
      <footer className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center py-8 border-t border-slate-200 dark:border-slate-800 mt-12 text-sm text-slate-500 dark:text-slate-400">
        <Link href="/" className="hover:underline">
          Helix Home
        </Link>
        <span className="hidden sm:inline">·</span>
        <Link
          href="http://divizend.com/imprint"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Imprint (Divizend)
        </Link>
      </footer>
    </div>
  );
}
