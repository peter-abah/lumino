"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service??
    console.error(error);
  }, [error]);

  return (
    <>
      <div className="py-40 md:py-80 flex flex-col items-center relative">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Something went wrong!</h2>
        <button
          onClick={reset}
          className="font-bold bg-black text-white px-10 py-4.5 rounded-button"
        >
          Reset
        </button>
      </div>
    </>
  );
}
