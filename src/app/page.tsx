"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] px-6 sm:px-20 py-12 gap-12 bg-white text-neutral-900 font-sans">
      
      {/* Circular Logo and Brand Name */}
      <header className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-300 shadow">
          <Image
            src="/logo.png" // Replace with your actual logo path
            alt="Leaptics Logo"
            width={80}
            height={80}
          />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Welcome to Leaptics</h1>
        <p className="text-sm text-gray-600 text-center max-w-md">
          Powering your business growth with smart digital marketing solutions.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <ol className="list-inside list-decimal text-base text-center sm:text-left font-mono">
          <li className="mb-2">
            Start by editing{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white hover:bg-gray-800 dark:hover:bg-white dark:hover:text-black rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2 transition"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel"
              width={20}
              height={20}
            />
            Deploy Now
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 hover:border-transparent hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full px-6 py-3 text-sm font-medium transition"
          >
            Read Docs
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-wrap gap-6 justify-center text-sm text-gray-500">
        <a
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Image src="/file.svg" alt="Learn" width={16} height={16} />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Image src="/window.svg" alt="Examples" width={16} height={16} />
          Examples
        </a>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline"
        >
          <Image src="/globe.svg" alt="Next.js" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
