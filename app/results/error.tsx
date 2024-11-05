"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl text-violet-900">Oops, erreur ! ⚡️</h2>
      <p className="font-bold text-rose-600">{error.message}</p>
      <div className="flex items-center gap-6">
        <button
          className="rounded border border-violet-900 px-4 py-1 tracking-widest hover:bg-violet-200"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Réessayer
        </button>
        <Link
          href="/"
          className="rounded border border-violet-900 bg-violet-900 px-4 py-1 tracking-widest text-white hover:bg-violet-800 hover:shadow-lg"
        >
          Accueil
        </Link>
      </div>
    </div>
  );
}
