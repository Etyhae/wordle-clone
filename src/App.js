import WordToGuess from "./components/WordToGuess";

function App() {
  const rightWord = ["м", "а", "с", "к", "а"];
  return (
    <>
      <div className="w-screen h-screen px-48 py-12 bg-slate-950 text-white">
        <div className="flex flex-col gap-4">
          <WordToGuess attempt={1} rightWord={rightWord} />
          <WordToGuess attempt={2} rightWord={rightWord} />
          <WordToGuess attempt={3} rightWord={rightWord} />
          <WordToGuess attempt={4} rightWord={rightWord} />
          <WordToGuess attempt={5} rightWord={rightWord} />
        </div>
      </div>
    </>
  );
}

export default App;
