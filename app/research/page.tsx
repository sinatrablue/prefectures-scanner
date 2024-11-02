import { LongArrowDownRight } from "iconoir-react";
import Link from "next/link";

const ResearchPage = () => {
  return (
    <div className="flex flex-col h-fit gap-10 w-1/3 bg-white py-6 px-4">
      <div className="flex flex-col gap-6">
        {/* Searched words input */}
        <div className="flex flex-col gap-2">
          <span className="text-xs tracking-wider uppercase text-gray-500">
            Mots à rechercher dans les barres de recherches
          </span>
          <div className="flex gap-2 items-center px-3 py-1 bg-white rounded border-2 hover:bg-gray-50 hover:[&>input]:bg-gray-50 border-violet-950 focus-within:border-violet-800">
            <input type="text" className="w-full h-10 focus:outline-none" />
            <button className="p-2 rounded-full hover:bg-gray-100">
              <LongArrowDownRight />
            </button>
          </div>
        </div>
        {/* Keywords on page input */}
        <div className="flex flex-col gap-2">
          <span className="text-xs tracking-wider uppercase text-gray-500">
            Mots-clé pour identifier des articles de consultation
          </span>
          <div className="flex gap-2 items-center px-3 py-1 bg-white rounded border-2 hover:bg-gray-50 hover:[&>input]:bg-gray-50 border-violet-950 focus-within:border-violet-800">
            <input type="text" className="w-full h-10 focus:outline-none" />
            <button className="p-2 rounded-full hover:bg-gray-100">
              <LongArrowDownRight />
            </button>
          </div>
        </div>
      </div>
      <Link
        href={`results`}
        className="px-5 py-2 w-fit self-center bg-violet-900 hover:bg-violet-800 rounded-md text-white hover:shadow-xl"
      >
        {"C'est parti"}
      </Link>
    </div>
  );
};

export default ResearchPage;
