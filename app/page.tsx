import MainFrame from "./MainFrame/page";

export default function Home() {
  return (
    <>
      <div className="flex justify-center py-5 shadow-sm">
        <h1 className="font-bold text-2xl text-violet-950">
          PREFECTURES SCANNER
        </h1>
      </div>
      <main className="flex flex-col items-center px-5 py-8 bg-gray-50 h-screen">
        <MainFrame />
      </main>
    </>
  );
}
