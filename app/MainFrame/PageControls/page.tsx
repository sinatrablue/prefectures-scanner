"use client";
import { LongArrowDownRight } from "iconoir-react";
import { PageControlsProps } from "./types";

export default function PageControls({
  updateResults,
}: Readonly<PageControlsProps>) {
  return (
    <div className="flex flex-col gap-10 w-1/3 self-center py-4">
      <div className="flex flex-col gap-6">
        {/* Searched words input */}
        <div className="flex flex-col gap-2">
          <span className="text-xs tracking-wider uppercase text-gray-800">
            Mots à rechercher dans les barres de recherches
          </span>
          <div className="flex gap-2 items-center px-3 py-1 bg-white rounded focus-within:shadow-[inset_0_0_0_1px] focus-within:shadow-violet-800">
            <input type="text" className="w-full h-10 focus:outline-none" />
            <button className="p-2 rounded-full hover:bg-gray-100">
              <LongArrowDownRight />
            </button>
          </div>
        </div>
        {/* Keywords on page input */}
        <div className="flex flex-col gap-2">
          <span className="text-xs tracking-wider uppercase text-gray-800">
            Mots-clé pour identifier des articles de consultation
          </span>
          <div className="flex gap-2 items-center px-3 py-1 bg-white rounded focus-within:shadow-[inset_0_0_0_1px] focus-within:shadow-violet-800">
            <input type="text" className="w-full h-10 focus:outline-none" />
            <button className="p-2 rounded-full hover:bg-gray-100">
              <LongArrowDownRight />
            </button>
          </div>
        </div>
      </div>

      <button
        className="px-5 py-2 w-fit self-center bg-violet-900 hover:bg-violet-800 rounded-md text-white hover:shadow-xl"
        onClick={updateResults}
      >
        Get results
      </button>
    </div>
  );
}
