import puppeteer, { Page } from "puppeteer";
import { ScanResult, ScanResults } from "./types";
import {
  KEY_WORDS_TO_SEARCH,
  PATTERNS_TO_SEARCH,
  PrefecturesWebsites,
  SEARCH_BAR_SELECTOR,
  SEARCH_BUTTON_SELECTOR,
} from "./constants";

export const scanPrefecturesWebsites = async () => {
  const res: ScanResults = await Promise.all(
    PrefecturesWebsites.map(websiteUrl => scanOnePrefecture(websiteUrl))
  );

  return res;
};

const scanOnePrefecture = async (websiteURL: string) => {
  try {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto(websiteURL);

    // Set screen size
    await page.setViewport({ width: 1920, height: 1080 });

    // make all the researchs on all usefull keywords
    const results: string[] = [];
    await Promise.all(
      PATTERNS_TO_SEARCH.map(async pattern => {
        console.log("searching pattern: ", pattern);
        // do one research and then scan for interesting keywords on the page
        const researchRes = await scanOneResearch(pattern, page);
        // if results were found and they are not already our array, add them
        if (researchRes.length > 0) {
          researchRes.forEach(res => {
            if (results.indexOf(res) === -1) results.push(res);
          });
        }
      })
    );
    await browser.close();

    return {
      isSuccess: results.length > 0,
      results: results,
      analyzedURL: websiteURL,
    } as ScanResult;
  } catch (error) {
    console.log("error: ", error);
    throw new Error(
      `There was an error scanning url <${websiteURL} : ${error}`
    );
  }
};

const scanOneResearch = async (searchWord: string, page: Page) => {
  // Type into search box
  await page.type(SEARCH_BAR_SELECTOR, searchWord);
  // console.log("--> search bar typing ok");
  const searchBtn = await page.waitForSelector(SEARCH_BUTTON_SELECTOR);
  // console.log("--> search button found");
  await searchBtn?.click();
  console.log("--> search click ok");

  const results: string[] = [];
  await Promise.all(
    KEY_WORDS_TO_SEARCH.map(async keyWord => {
      console.log("scanning for keyWord: ", keyWord);
      try {
        const textSelector = await page.waitForSelector(`text/${keyWord}`);
        console.log("--> text selector found");
        const fullTitle = await textSelector?.evaluate(el => el.textContent);
        // Print the full title
        // console.log("--> The title of the card is : ", fullTitle);
        fullTitle && results.push(fullTitle);
      } catch (error) {
        console.log("error: ", error);
        console.error("----> Most probably unfound text selector");
      }
    })
  );
  console.log("results: ", results);
  return results;
};
