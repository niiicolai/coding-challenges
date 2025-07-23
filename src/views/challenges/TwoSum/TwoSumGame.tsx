import { useState, useEffect } from "react";

interface Card {
  n: number;
  seen: boolean;
  show: boolean;
}

export default function TwoSumGame({
  result,
  setResult,
}: {
  result: { correct: boolean; ended: boolean };
  setResult: (value: { correct: boolean; ended: boolean }) => void;
}) {
  const limit = 10;
  const range = { min: 1, max: 10 };
  const displayTime = 2000;

  const [cards, setCards] = useState<Card[]>([]);
  const [target, setTarget] = useState<number>(-1);
  const [timeouts, setTimeouts] = useState<number[]>([]);
  const [guessOne, setGuessOne] = useState<string>("");
  const [guessTwo, setGuessTwo] = useState<string>("");

  const randomNumber = () =>
    Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
  const randomIndex = () => Math.floor(Math.random() * limit);

  const showCard = (index: number) => {
    if (cards[index].seen) return;

    const newCards = [...cards];
    newCards[index] = { ...newCards[index], show: true, seen: true };
    setCards(newCards);

    const timeoutId = window.setTimeout(() => {
      setCards((prev) => {
        const updated = [...prev];
        updated[index] = { ...updated[index], show: false };
        return updated;
      });
    }, displayTime);

    setTimeouts((prev) => [...prev, timeoutId]);
  };

  const clearAllTimeouts = () => {
    timeouts.forEach((t) => clearTimeout(t));
    setTimeouts([]);
  };

  const resetGame = () => {
    clearAllTimeouts();
    setResult({ correct: false, ended: false });
    setGuessOne("");
    setGuessTwo("");

    const newCards: Card[] = [];
    for (let i = 0; i < limit; i++) {
      newCards.push({ n: randomNumber(), seen: false, show: false });
    }

    const num1Index = randomIndex();
    let num2Index = randomIndex();
    while (num2Index === num1Index) {
      num2Index = randomIndex();
    }

    const newTarget = newCards[num1Index].n + newCards[num2Index].n;

    setCards(newCards);
    setTarget(newTarget);
  };

  const checkGuess = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const i1 = parseInt(guessOne, 10);
    const i2 = parseInt(guessTwo, 10);

    if (
      isNaN(i1) ||
      isNaN(i2) ||
      i1 < 0 ||
      i1 >= cards.length ||
      i2 < 0 ||
      i2 >= cards.length ||
      i1 === i2
    ) {
      alert("Invalid input — make sure indices are valid and not the same.");
      return;
    }

    const sum = cards[i1].n + cards[i2].n;
    const correct = sum === target;

    setResult({ correct, ended: true });
  };

  useEffect(() => {
    resetGame();
    return clearAllTimeouts;
  }, [limit, range.min, range.max]);

  return (
    <>
      <div>
        <h2 className="text-2xl mb-3">Logic Challenge</h2>
        <p className="mb-3">
          Find two cards that add up to <strong>{target}</strong>. Reveal a
          card’s number by clicking it, but beware, each card only reveals its
          secret once.
        </p>
      </div>

      <div
        className="border border-white p-6 rounded-md flex flex-col gap-6 mb-3"
        style={{ background: "#282a36" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-3 border-b pb-6">
          {cards.map((card, i) => (
            <div key={i} className="flex-1 w-full flex flex-col gap-3">
              <p className="flex items-center justify-center">#{i}</p>
              <button
                className="border border-white p-3 w-full rounded-md cursor-pointer hover:bg-white hover:text-black"
                onClick={() => showCard(i)}
              >
                {card.show ? card.n : "?"}
              </button>
            </div>
          ))}
        </div>

        <form onSubmit={checkGuess} className="flex gap-3 w-full">
          <div className="flex flex-row flex-wrap items-center gap-3 w-full">
            <input
              type="number"
              placeholder="Card index"
              value={guessOne}
              className="flex-1 bg-white rounded-md border-0 text-black p-1"
              onChange={(e) => setGuessOne(e.target.value)}
            />
            <div className="text-2xl flex items-center justify-center">+</div>
            <input
              type="number"
              placeholder="Card index"
              value={guessTwo}
              className="flex-1 bg-white rounded-md border-0 text-black p-1"
              onChange={(e) => setGuessTwo(e.target.value)}
            />
            <div className="text-2xl flex items-center justify-center">=</div>
            <div className="text-2xl flex items-center justify-center">
              {target}
            </div>
          </div>
          <button
            type="submit"
            className="border border-white px-3 py-1 rounded-md cursor-pointer hover:bg-white hover:text-black"
          >
            Validate Answer
          </button>
        </form>

        {result.ended && (
          <div className="py-6 flex flex-col gap-3 justify-center items-center">
            <p className="text-lg mb-2">
              {result.correct ? "Correct!" : "Incorrect. Try again!"}
            </p>
            <button
              onClick={resetGame}
              className="border border-white px-3 py-1 rounded-md cursor-pointer hover:bg-white hover:text-black"
            >
              Play Again
            </button>
          </div>
        )}
      </div>

      <small>
        Struggling? Try jotting down your thought process, it might just reveal the solution hiding in plain sight.
      </small>
    </>
  );
}
