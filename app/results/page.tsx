import { cn } from "../utils/cn";
import { scanPREFECTURES_URLS } from "./service";

type ResultsPageSearchParams = {
  expressionsToSearch: string;
  keyWordsToLookFor: string;
};

const ResultsPage = async ({
  searchParams,
}: Readonly<{
  searchParams: Promise<ResultsPageSearchParams>;
}>) => {
  const { keyWordsToLookFor, expressionsToSearch } = await searchParams;
  const scanResults = await scanPREFECTURES_URLS({
    expressionsToSearch: expressionsToSearch.split(","),
    keyWordsToLookFor: keyWordsToLookFor.split(","),
  });

  return (
    <div className="flex flex-col gap-8 rounded bg-white px-6 py-4">
      {scanResults.map(result => (
        <div key={result.url} className="p-2">
          <p
            className={cn(
              result.results.length > 0 ? "text-green-700" : "text-red-700",
            )}
          >
            {result.url}
          </p>
          {result.results.length === 0 && <p>Rien trouvé 😩</p>}
          {result.results.map(res => (
            <p key={res}>{res}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ResultsPage;
