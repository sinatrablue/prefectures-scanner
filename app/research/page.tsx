"use client";

import { LongArrowDownRight, Xmark } from "iconoir-react";
import { useRouter } from "next/navigation";
import { cn } from "../utils/cn";
import { DEFAULT_KEY_WORDS, DEFAULT_SEARCHED_WORDS } from "./constants";
import { useResearchPageViewController } from "./vue_controller";

const ResearchPage = () => {
  const router = useRouter();
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
              disabled={!searchedWordValue}
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
                  className={cn(
                    "flex items-center gap-2 rounded px-2 py-1",
                    DEFAULT_SEARCHED_WORDS.includes(word)
                      ? "bg-slate-300"
                      : "bg-slate-100",
                  )}
                  key={word}
                >
                  {word}
                  <button onClick={() => removeSearchedWord(word)}>
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
              disabled={!keyWordValue}
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
                  className={cn(
                    "flex items-center gap-2 rounded px-2 py-1",
                    DEFAULT_KEY_WORDS.includes(word)
                      ? "bg-slate-300"
                      : "bg-slate-100",
                  )}
                  key={word}
                >
                  {word}
                  <button onClick={() => removeKeyWord(word)}>
                    <Xmark />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <button
        disabled={searchedWords.length === 0 || keyWords.length === 0}
        onClick={() =>
          router.push(
            `results?searchedWords=${searchedWords}&keyWords=${keyWords}`,
          )
        }
        className={cn(
          "w-fit self-center rounded-md px-8 py-3 text-lg/6 tracking-wider text-white",
          searchedWords.length === 0 || keyWords.length === 0
            ? "bg-slate-400"
            : "bg-violet-900 hover:bg-violet-800 hover:shadow-lg",
        )}
      >
        {"C'est parti"}
      </button>
    </div>
  );
};

export default ResearchPage;
