import { PageControlsProps } from "./types";

export default function PageControls({
  updateResults,
}: Readonly<PageControlsProps>) {
  return (
    <div className="flex items-between mb-20">
      <button
        className=" px-5 py-2 bg-violet-300 hover:bg-violet-400"
        onClick={updateResults}
      >
        Get results
      </button>
    </div>
  );
}
