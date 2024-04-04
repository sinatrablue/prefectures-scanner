import { PageControlsProps } from "./types";

export function PageControls({ updateResults }: Readonly<PageControlsProps>) {
  return (
    <div className="flex items-between mb-20">
      <button onClick={updateResults}>Get results</button>
    </div>
  );
}
