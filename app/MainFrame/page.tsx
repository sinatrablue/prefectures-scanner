"use client";
import { useState } from "react";
import PageControls from "./PageControls/page";
import { ScanResults } from "../api/scanner/types";

export default function MainFrame() {
  const [resultsFromScan, setResultsFromScan] = useState<ScanResults>();

  const getScanResults = async () => {
    const res = await fetch("/api/scanner", {
      method: "GET",
    });
    setResultsFromScan((await res.json()).data);
  };

  return (
    <>
      <PageControls updateResults={getScanResults} />
      {resultsFromScan &&
        resultsFromScan.map(({ isSuccess, results, analyzedURL }) => (
          <div
            className="flex flex-col gap-5 p-5 mb-8 border-2 rounded-md"
            key={analyzedURL}
          >
            <h1 className={isSuccess ? "text-lime-600" : "text-red-600"}>
              ScanResults :
            </h1>
            {results.map(res => (
              <span key={res}>{res}</span>
            ))}
            <span className="text-slate-800 italic">
              from URL : {analyzedURL}
            </span>
          </div>
        ))}
    </>
  );
}
