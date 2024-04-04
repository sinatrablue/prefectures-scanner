"use client";
import { PageControls } from "../PageControls/PageControls";
import { ScanResults } from "../ScanResults/ScanResults";
import { useMainFrameController } from "./MainFrameController";

export function MainFrame() {
  const { getScanResults, resultsFromScan } = useMainFrameController();
  return (
    <>
      <PageControls updateResults={getScanResults} />
      {resultsFromScan && <ScanResults {...resultsFromScan} />}
    </>
  );
}
