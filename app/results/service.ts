import puppeteer, { Page } from "puppeteer";
import {
  PREFECTURES_URLS,
  SEARCH_BAR_SELECTOR,
  SEARCH_BUTTON_SELECTOR,
} from "./constants";
import {
  PrefecturesScannerServiceProps,
  ScanResult,
  ScanResults,
} from "./types";

export const scanPREFECTURES_URLS = async ({
  expressionsToSearch,
  keyWordsToLookFor,
}: PrefecturesScannerServiceProps) => {
  const res: ScanResults = await Promise.all(
    PREFECTURES_URLS.map(url =>
      scanOnePrefecture(url, expressionsToSearch, keyWordsToLookFor),
    ),
  );

  return res;
};

const scanOnePrefecture = async (
  url: string,
  expressionsToSearch: string[],
  keyWordsToLookFor: string[],
) => {
  try {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto(url);

    // Set screen size
    await page.setViewport({ width: 1920, height: 1080 });

    // make all the researchs on all usefull keyWordsToLookFor
    const results: string[] = [];
    await Promise.all(
      expressionsToSearch.map(async expression => {
        console.log("searching expression: ", expression);
        // do one research and then scan for interesting keyWords on the page
        const researchRes = await scanOneResearch(
          page,
          expression,
          keyWordsToLookFor,
        );
        // if results were found and they are not already our array, add them
        if (researchRes.length > 0) {
          researchRes.forEach(res => {
            if (results.indexOf(res) === -1) results.push(res);
          });
        }
      }),
    );
    await browser.close();

    return {
      results,
      url,
    } as ScanResult;
  } catch (error) {
    console.log("error: ", error);
    if ((error as Error).message.includes("ERR_EMPTY_RESPONSE"))
      throw new Error(
        `On dirait qu'on s'est fait repérer par : <${url}> 🫣. Il va falloir se faire oublier et réessayer plus tard.`,
      );
    throw new Error(`Erreur avec l'url <${url}> : ${error}`);
  }
};

const scanOneResearch = async (
  page: Page,
  expression: string,
  keyWords: string[],
) => {
  // Type into search box
  await page.type(SEARCH_BAR_SELECTOR, expression);
  const searchBtn = await page.waitForSelector(SEARCH_BUTTON_SELECTOR);
  await searchBtn?.click();

  const results: string[] = [];
  await Promise.all(
    keyWords.map(async keyWord => {
      console.log("scanning for keyWord: ", keyWord);
      try {
        const textSelector = await page.waitForSelector(`text/${keyWord}`);
        console.log(`--> text selector <${keyWord}> found`);
        const fullTitle = await textSelector?.evaluate(el => el.textContent);
        fullTitle && results.push(fullTitle);
      } catch (error) {
        console.log("error: ", error);
      }
    }),
  );
  console.log("results: ", results);
  return results;
};
