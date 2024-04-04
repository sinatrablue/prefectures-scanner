import { useState } from "react";

export function useMainFrameController() {
  const [resultsFromScan, setResultsFromScan] = useState<{ data: string }>();

  const getScanResults = async () => {
    const res = await fetch("/api/scanner", {
      method: "GET",
    });
    setResultsFromScan((await res.json()).data);
  };

  return { getScanResults, resultsFromScan };
}
