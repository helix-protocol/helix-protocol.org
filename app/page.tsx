import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-100 dark:from-black dark:to-slate-900 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full flex flex-col items-center pt-12 pb-8 gap-4">
        <Image
          src="/logo.png"
          alt="Helix logo"
          width={80}
          height={80}
          priority
          className="rounded-xl shadow-lg"
        />
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center bg-gradient-to-r from-blue-600 to-fuchsia-600 bg-clip-text text-transparent">
          HELIX Protocol
        </h1>
        <p className="max-w-2xl text-center text-lg sm:text-xl text-slate-700 dark:text-slate-200 mt-2">
          Rethinking public administration for a privacy-first, zk-native world.{" "}
          <br />
          <span className="text-base text-slate-500 dark:text-slate-400">
            Open-source infrastructure for data sovereignty, starting with
            FASTER and beyond.
          </span>
        </p>
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <Link
            href="#zk-explained"
            className="rounded-full bg-blue-600 text-white px-5 py-2 text-sm font-medium shadow hover:bg-blue-700 transition"
          >
            What is zk?
          </Link>
          <Link
            href="/faster"
            className="rounded-full border border-blue-600 text-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-50 dark:hover:bg-slate-800 transition"
          >
            How Helix realizes FASTER
          </Link>
        </div>
      </header>

      {/* RfP Call-to-Action */}
      <section className="w-full flex justify-center px-4 mt-2">
        <a
          href="https://docs.google.com/document/d/10hy5gGfkUQp-RMlKUM7DsemtebkBaYyE07-QAOQgxWc/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border-2 border-fuchsia-600 bg-gradient-to-r from-fuchsia-600 to-blue-600 px-6 py-4 shadow-lg hover:scale-[1.03] transition-transform focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
          style={{ zIndex: 10 }}
        >
          <span className="text-white text-lg font-bold drop-shadow-sm">
            🚀 RfP: Development of MVP for FASTER on the HELIX Protocol
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L6.75 17.25M17.25 17.25V6.75H6.75"
            />
          </svg>
        </a>
      </section>

      <main className="flex-1 flex flex-col items-center px-4 gap-16">
        {/* Hero Section */}
        <section className="w-full max-w-3xl flex flex-col items-center gap-6 mt-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            The privacy-first protocol for public data
          </h2>
          <p className="text-center text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Helix is an open-source protocol for secure, privacy-preserving data
            exchange and compliance, built on zero-knowledge (zk) cryptography.
            Our mission: empower citizens, institutions, and the financial
            industry with transparent, resilient, and privacy-protecting digital
            infrastructure. <br />
            <br />
            We are a global community of developers, researchers, and
            policymakers working to build a more secure and private future.
          </p>
        </section>

        {/* ZK Explained */}
        <section
          id="zk-explained"
          className="w-full max-w-2xl flex flex-col items-center gap-4 bg-white/80 dark:bg-slate-900/80 rounded-xl shadow p-6 border border-slate-100 dark:border-slate-800"
        >
          <h3 className="text-xl font-semibold text-blue-600">
            What is Zero-Knowledge (zk)?
          </h3>
          <p className="text-base text-slate-700 dark:text-slate-200 text-center">
            Zero-knowledge proofs (zk) are cryptographic techniques that let you
            prove something is true without revealing the underlying data. In
            Helix, zk enables privacy-first compliance: institutions can verify
            tax residency or ownership without ever seeing your private
            information.{" "}
            <span className="font-medium">
              You stay in control of your data.
            </span>
          </p>
        </section>

        {/* Linktree Section */}
        <section className="w-full max-w-lg flex flex-col items-center gap-2 mt-2">
          <h4 className="text-lg font-semibold mb-2">Resources & Community</h4>
          <ul className="w-full flex flex-col gap-2">
            <li>
              <a
                href="https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ:L_202500050"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition"
              >
                <span className="font-medium">EU Directive:</span> FASTER
                (2024-12-10)
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/presentation/d/1GFFNHBGaw_4QwrMDfTZxloqTIn44HTGZqdf3npuQXJc/edit?slide=id.gedcb0a4945_0_57#slide=id.gedcb0a4945_0_57"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition"
              >
                <span className="font-medium">Slide deck:</span> FASTER
                Implementation Forum (2025-02-03)
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1it0RDgahXhiEDkc6JS_bPHJ75a9s8P-IL7eGd-bfw-I/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition"
              >
                <span className="font-medium">Project brief:</span> Helix
                (2025-05-08)
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/presentation/d/1c7kwl1ogZnUXx_K6cf5VGyEBGh13ocBPlX5sPeejoaw/edit?slide=id.p#slide=id.p"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition"
              >
                <span className="font-medium">Presentation:</span> W3PN HACKS
                (2025-06-15)
              </a>
            </li>

            <li>
              <a
                href="https://docs.google.com/document/d/10hy5gGfkUQp-RMlKUM7DsemtebkBaYyE07-QAOQgxWc/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-fuchsia-600 px-4 py-3 bg-white dark:bg-slate-800 hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950 transition font-semibold text-fuchsia-700 dark:text-fuchsia-400 shadow"
              >
                <span className="font-medium">RfP:</span> Development of MVP for
                FASTER on the HELIX Protocol (2025-06-24)
              </a>
            </li>
            <li>
              <a
                href="https://t.me/+ChfLKpalgGFkYzZi"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition"
              >
                <span className="font-medium">Telegram group</span>
              </a>
            </li>
            <li>
              <a
                href="http://github.com/helix-protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition"
              >
                <span className="font-medium">GitHub organization</span>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/helix_protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition"
              >
                <span className="font-medium">X (Twitter)</span>
              </a>
            </li>
          </ul>
        </section>

        {/* Resident Projects Section */}
        <section className="w-full max-w-lg flex flex-col items-center gap-2 mt-8">
          <h4 className="text-lg font-semibold mb-2">Resident Projects</h4>
          <ul className="w-full flex flex-col gap-2">
            <li>
              <a
                href="https://tax.helix-protocol.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition"
              >
                <span className="font-medium">Global Tax Law Project</span>
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1stLNFe9nlQwXD1WWUD4EuLMPLMael7rP7VWsOzs4itQ/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-3 bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition"
              >
                <span className="font-medium">Prisma</span>
              </a>
            </li>
          </ul>
        </section>

        {/* Supported by Section */}
        <section className="w-full max-w-lg flex flex-col items-center gap-2 mt-8">
          <h4 className="text-lg font-semibold mb-2">
            Supported and funded by
          </h4>
          <div className="flex flex-row items-center gap-8 justify-center mt-2">
            <a
              href="https://divizend.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Divizend"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/divizend.svg"
                alt="Divizend logo"
                width={120}
                height={32}
                className="h-8 w-auto grayscale opacity-60"
              />
            </a>
            {/* Add more logos here as needed */}
          </div>
        </section>
      </main>

      <footer className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center py-8 border-t border-slate-200 dark:border-slate-800 mt-12 text-sm text-slate-500 dark:text-slate-400">
        <Link
          href="https://github.com/helix-protocol/helix-protocol.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
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
