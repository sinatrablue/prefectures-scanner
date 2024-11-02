import { Exo_2 } from "next/font/google";
import MainFrame from "./MainFrame/page";
import Link from "next/link";

const exo2 = Exo_2({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col h-fit gap-20 py-10 px-6 bg-white w-1/2 rounded-lg">
      <div className="flex flex-col gap-6">
        <h1
          className={`${exo2.className} font-extrabold text-5xl tracking-wider text-violet-950`}
        >
          Voici la première version du scanner de préfecture
        </h1>
        <h2 className="text-xl">
          On va tâcher de trouver des consultations publiques ensemble.
        </h2>
      </div>

      <Link
        href="research"
        className="px-8 py-4 w-fit self-center bg-violet-900 hover:bg-violet-800 rounded-md text-white text-lg/tight tracking-wide hover:shadow-xl"
      >
        Lancer une recherche
      </Link>
    </div>
  );
}
