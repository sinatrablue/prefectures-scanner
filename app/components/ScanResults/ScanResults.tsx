import { ScanResult } from "@/app/api/scanner/types";

export function ScanResults({
  isSuccess,
  resultStr,
  analyzedURL,
}: Readonly<ScanResult>) {
  return (
    <div className="flex flex-col gap-5">
      <h1 className={isSuccess ? "text-lime-600" : "text-red-600"}>
        ScanResults :
      </h1>
      <span>{resultStr}</span>
      <span className="text-slate-800 italic">from URL : {analyzedURL}</span>
    </div>
  );
}
