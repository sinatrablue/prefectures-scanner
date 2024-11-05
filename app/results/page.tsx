type ResultsPageSearchParams = {
  searchedWords: string;
  keyWords: string;
};

const ResultsPage = async ({
  searchParams,
}: Readonly<{
  searchParams: Promise<ResultsPageSearchParams>;
}>) => {
  const { keyWords, searchedWords } = await searchParams;
  return (
    <div>
      ResultsPage : {keyWords}, {searchedWords}
    </div>
  );
};

export default ResultsPage;
