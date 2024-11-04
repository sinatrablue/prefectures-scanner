"use client";

import { LongArrowDownRight, Xmark } from "iconoir-react";
import Link from "next/link";
import { useResearchPageViewController } from "./vue_controller";

const ResearchPage = () => {
  const {
    searchedWordValue,
    setSearchedWordValue,
    pushSearchedWord,
    keyWordValue,
    setKeyWordValue,
    pushKeyWord,
    keyWords,
    removeKeyWord,
    searchedWords,
    removeSearchedWord,
  } = useResearchPageViewController();

  return (
    <div className="flex h-fit w-1/3 flex-col gap-10 bg-white px-4 py-6">
      <div className="flex flex-col gap-6">
        {/* Searched words input */}
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wider text-gray-500">
            Mots à rechercher dans les barres de recherches
          </span>
          <div className="flex items-center gap-2 rounded border-2 border-violet-950 bg-white px-3 py-1 focus-within:border-violet-800 hover:bg-gray-50 hover:[&>input]:bg-gray-50">
            <input
              type="text"
              value={searchedWordValue}
              onChange={e => setSearchedWordValue(e.target.value)}
              className="h-10 w-full focus:outline-none"
            />
            <button
              onClick={pushSearchedWord}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <LongArrowDownRight />
            </button>
          </div>
          {searchedWords.length > 0 && (
            <div className="flex gap-4">
              {searchedWords.map(word => (
                <div
                  className="flex items-center gap-2 rounded bg-slate-200 px-2 py-1"
                  key={word}
                >
                  {word}
                  <button
                    className="rounded-full p-1 hover:bg-slate-300"
                    onClick={() => removeSearchedWord(word)}
                  >
                    <Xmark />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Keywords on page input */}
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-wider text-gray-500">
            Mots-clé pour identifier des articles de consultation
          </span>
          <div className="flex items-center gap-2 rounded border-2 border-violet-950 bg-white px-3 py-1 focus-within:border-violet-800 hover:bg-gray-50 hover:[&>input]:bg-gray-50">
            <input
              type="text"
              value={keyWordValue}
              onChange={e => setKeyWordValue(e.target.value)}
              className="h-10 w-full focus:outline-none"
            />
            <button
              onClick={pushKeyWord}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <LongArrowDownRight />
            </button>
          </div>
          {keyWords.length > 0 && (
            <div className="flex gap-4">
              {keyWords.map(word => (
                <div
                  className="flex items-center gap-2 rounded bg-slate-200 px-2 py-1"
                  key={word}
                >
                  {word}
                  <button
                    className="rounded-full p-1 hover:bg-slate-300"
                    onClick={() => removeKeyWord(word)}
                  >
                    <Xmark />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Link
        href={`results`}
        className="w-fit self-center rounded-md bg-violet-900 px-5 py-2 text-white hover:bg-violet-800 hover:shadow-xl"
      >
        {"C'est parti"}
      </Link>
    </div>
  );
};

export default ResearchPage;
