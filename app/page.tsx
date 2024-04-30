import MainFrame from "./MainFrame/page";

export default function Home() {
  return (
    <>
      <div className="flex items-center py-10">
        <h1>PREFECTURES SCANNER</h1>
      </div>
      <main className="flex flex-col items-center justify-between p-24">
        <MainFrame />
      </main>
    </>
  );
}
