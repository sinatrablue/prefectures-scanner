"use client";
import { PageControlsProps } from "./types";

export default function PageControls({
  updateResults,
}: Readonly<PageControlsProps>) {
  return (
    <div className="flex items-between mb-8">
      <button
        className=" px-5 py-2 bg-violet-900 hover:bg-violet-800 rounded-md text-white hover:shadow-xl"
        onClick={updateResults}
      >
        Get results
      </button>
    </div>
  );
}
