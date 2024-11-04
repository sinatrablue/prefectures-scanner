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
    <div className="flex flex-col h-fit gap-10 w-1/3 bg-white py-6 px-4">
      <div className="flex flex-col gap-6">
        {/* Searched words input */}
        <div className="flex flex-col gap-2">
          <span className="text-xs tracking-wider uppercase text-gray-500">
            Mots à rechercher dans les barres de recherches
          </span>
          <div className="flex gap-2 items-center px-3 py-1 bg-white rounded border-2 hover:bg-gray-50 hover:[&>input]:bg-gray-50 border-violet-950 focus-within:border-violet-800">
            <input
              type="text"
              value={searchedWordValue}
              onChange={e => setSearchedWordValue(e.target.value)}
              className="w-full h-10 focus:outline-none"
            />
            <button
              onClick={pushSearchedWord}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <LongArrowDownRight />
            </button>
          </div>
          {searchedWords.length > 0 && (
            <div className="flex gap-4">
              {searchedWords.map(word => (
                <div
                  className="rounded flex items-center gap-2 py-1 px-2 bg-slate-200"
                  key={word}
                >
                  {word}
                  <button
                    className="p-1 rounded-full hover:bg-slate-300"
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
          <span className="text-xs tracking-wider uppercase text-gray-500">
            Mots-clé pour identifier des articles de consultation
          </span>
          <div className="flex gap-2 items-center px-3 py-1 bg-white rounded border-2 hover:bg-gray-50 hover:[&>input]:bg-gray-50 border-violet-950 focus-within:border-violet-800">
            <input
              type="text"
              value={keyWordValue}
              onChange={e => setKeyWordValue(e.target.value)}
              className="w-full h-10 focus:outline-none"
            />
            <button
              onClick={pushKeyWord}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <LongArrowDownRight />
            </button>
          </div>
          {keyWords.length > 0 && (
            <div className="flex gap-4">
              {keyWords.map(word => (
                <div
                  className="rounded flex items-center gap-2 py-1 px-2 bg-slate-200"
                  key={word}
                >
                  {word}
                  <button
                    className="p-1 rounded-full hover:bg-slate-300"
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
        className="px-5 py-2 w-fit self-center bg-violet-900 hover:bg-violet-800 rounded-md text-white hover:shadow-xl"
      >
        {"C'est parti"}
      </Link>
    </div>
  );
};

export default ResearchPage;
