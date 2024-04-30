"use client";
import { useState } from "react";
import PageControls from "./PageControls/page";
import { ScanResults } from "../api/scanner/types";
import ResultsPresenter from "./ResultsPresenter/page";

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
      {resultsFromScan && <ResultsPresenter {...resultsFromScan} />}
    </>
  );
}
