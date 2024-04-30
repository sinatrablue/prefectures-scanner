import { ScanResults } from "@/app/api/scanner/types";

export default function ResultsPresenter(scanResults: Readonly<ScanResults>) {
  return scanResults.map(({ isSuccess, results, analyzedURL }) => (
    <div className="flex flex-col gap-5 mb-8" key={analyzedURL}>
      <h1 className={isSuccess ? "text-lime-600" : "text-red-600"}>
        ScanResults :
      </h1>
      {results.map(res => (
        <span key={res}>{res}</span>
      ))}
      <span className="text-slate-800 italic">from URL : {analyzedURL}</span>
    </div>
  ));
}
