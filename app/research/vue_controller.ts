import { useState } from "react";
import { DEFAULT_KEY_WORDS, DEFAULT_SEARCHED_WORDS } from "./constants";

export const useResearchPageViewController = () => {
  const [searchedWordValue, setSearchedWordValue] = useState("");
  const [keyWordValue, setKeyWordValue] = useState("");

  const [expressionsToSearch, setSearchWords] = useState(
    DEFAULT_SEARCHED_WORDS,
  );
  const [keyWordsToLookFor, setkeyWordsToLookFor] = useState(DEFAULT_KEY_WORDS);

  const pushSearchedWord = () => {
    !expressionsToSearch.includes(searchedWordValue) &&
      setSearchWords(prev => prev.concat(searchedWordValue));
    setSearchedWordValue("");
  };

  const pushKeyWord = () => {
    !keyWordsToLookFor.includes(keyWordValue) &&
      setkeyWordsToLookFor(prev => prev.concat(keyWordValue));
    setKeyWordValue("");
  };

  const removeSearchedWord = (word: string) =>
    setSearchWords(prev => prev.filter(val => val !== word));

  const removeKeyWord = (word: string) =>
    setkeyWordsToLookFor(prev => prev.filter(val => val !== word));

  return {
    searchedWordValue,
    setSearchedWordValue,
    pushSearchedWord,
    keyWordValue,
    setKeyWordValue,
    pushKeyWord,
    expressionsToSearch,
    keyWordsToLookFor,
    removeSearchedWord,
    removeKeyWord,
  };
};
