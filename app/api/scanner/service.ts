import puppeteer from "puppeteer";
import { ScanResult } from "./types";
import {
  KEY_WORDS_TO_SEARCH,
  PATTERN_TO_SEARCH,
  PrefecturesWebsites,
  SEARCH_BAR_SELECTOR,
  SEARCH_BUTTON_SELECTOR,
} from "./constants";

export const scanPrefecturesWebsites = async () => {
  const res: ScanResult = await scanOnePrefecture(PrefecturesWebsites[0]);

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
    await page.setViewport({ width: 1080, height: 1024 });

    // Type into search box
    await page.type(SEARCH_BAR_SELECTOR, PATTERN_TO_SEARCH);
    console.log("--> search bar typing ok");
    const searchBtn = await page.waitForSelector(SEARCH_BUTTON_SELECTOR);
    console.log("--> search button found");
    await searchBtn?.click();
    console.log("--> search click ok");

    const results: string[] = [];
    await Promise.all(
      KEY_WORDS_TO_SEARCH.map(async keyWord => {
        try {
          const textSelector = await page.waitForSelector(`text/${keyWord}`);
          console.log("--> text selector found");
          const fullTitle = await textSelector?.evaluate(el => el.textContent);
          // Print the full title
          console.log("--> The title of the card is : ", fullTitle);
          fullTitle && results.push(fullTitle);
        } catch (error) {
          console.log("error: ", error);
          console.error("----> Most probably unfound text selector");
        }
      })
    );

    await browser.close();

    return {
      isSuccess: results.length > 0,
      resultStr: results.join("\n"),
      analyzedURL: websiteURL,
    } as ScanResult;
  } catch (error) {
    console.log("error: ", error);
    return {
      isSuccess: false,
      resultStr: "There was an error",
      analyzedURL: websiteURL,
    };
  }
};
