export type ScanResult = {
  results: string[];
  url: string;
};
export type ScanResults = ScanResult[];

export type PrefecturesScannerServiceProps = {
  expressionsToSearch: string[];
  keyWordsToLookFor: string[];
};
