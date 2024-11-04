import { useState } from "react";
import { DEFAULT_SEARCHED_WORDS, DEFAULT_KEY_WORDS } from "./constants";

export const useResearchPageViewController = () => {
  const [searchedWordValue, setSearchedWordValue] = useState("");
  const [keyWordValue, setKeyWordValue] = useState("");

  const [searchedWords, setSearchWords] = useState(DEFAULT_SEARCHED_WORDS);
  const [keyWords, setKeyWords] = useState(DEFAULT_KEY_WORDS);

  const pushSearchedWord = () => {
    setSearchWords(prev => prev.concat(searchedWordValue));
    setSearchedWordValue("");
  };

  const pushKeyWord = () => {
    setKeyWords(prev => prev.concat(keyWordValue));
    setKeyWordValue("");
  };

  const removeSearchedWord = (word: string) =>
    setSearchWords(prev => prev.filter(val => val !== word));

  const removeKeyWord = (word: string) =>
    setKeyWords(prev => prev.filter(val => val !== word));

  return {
    searchedWordValue,
    setSearchedWordValue,
    pushSearchedWord,
    keyWordValue,
    setKeyWordValue,
    pushKeyWord,
    searchedWords,
    keyWords,
    removeSearchedWord,
    removeKeyWord,
  };
};
