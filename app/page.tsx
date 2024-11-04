import { Exo_2 } from "next/font/google";
import Link from "next/link";

const exo2 = Exo_2({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex h-fit w-1/2 flex-col gap-20 rounded-lg bg-white px-6 py-10">
      <div className="flex flex-col gap-6">
        <h1
          className={`${exo2.className} text-5xl font-extrabold tracking-wider text-violet-950`}
        >
          Voici la première version du scanner de préfecture
        </h1>
        <h2 className="text-xl">
          On va tâcher de trouver des consultations publiques ensemble.
        </h2>
      </div>

      <Link
        href="research"
        className="w-fit self-center rounded-md bg-violet-900 px-8 py-4 text-lg/tight tracking-wide text-white hover:bg-violet-800 hover:shadow-xl"
      >
        Lancer une recherche
      </Link>
    </div>
  );
}
