import { useState, useEffect } from "react";

interface Result {
  correct: boolean;
  ended: boolean;
}

interface BinarySearchGameProps {
  result: Result;
  setResult: (value: Result) => void;
}

const guessTypes = { lower: "lower", is: "is", higher: "higher" };
const range = { min: 1, max: 100 };
const maxAttempts = 11;

export default function BinarySearchGame({
  result,
  setResult,
}: BinarySearchGameProps) {
  const randomNumber = () =>
    Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;

  const [target, setTarget] = useState<number>(-1);
  const [guessType, setGuessType] = useState<string>(guessTypes.is);
  const [guessNumber, setGuessNumber] = useState<number>(range.min);
  const [attempts, setAttempts] = useState<number>(0);
  const [usedNumbers, setUsedNumbers] = useState<{
    lower: Set<number>;
    is: Set<number>;
    higher: Set<number>;
  }>({
    lower: new Set(),
    is: new Set(),
    higher: new Set(),
  });

  const [minBound, setMinBound] = useState<number>(range.min);
  const [maxBound, setMaxBound] = useState<number>(range.max);

  const resetGame = () => {
    setResult({ correct: false, ended: false });
    setGuessType(guessTypes.is);
    setGuessNumber(range.min);
    setTarget(randomNumber());
    setAttempts(0);
    setUsedNumbers({
      lower: new Set(),
      is: new Set(),
      higher: new Set(),
    });
    setMinBound(range.min);
    setMaxBound(range.max);
  };

  const checkGuess = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (guessNumber < minBound || guessNumber > maxBound) {
      alert(
        `Please choose a number within the current range: ${minBound} - ${maxBound}`
      );
      return;
    }

    setAttempts((prev) => prev + 1);

    let isCorrect = false;

    if (guessType === guessTypes.is) {
      if (guessType == guessTypes.is && usedNumbers.is.has(guessNumber)) {
        alert("You already guessed this number. Try a different one.");
        return;
      }
      setUsedNumbers((prev) => {
        return {
          lower: prev.lower,
          is: new Set(prev.is).add(guessNumber),
          higher: prev.higher,
        };
      });

      isCorrect = guessNumber === target;
      if (isCorrect) {
        setResult({ correct: true, ended: true });
        return;
      } else {
        alert("Incorrect! The target is not that number.");
        // No range update on wrong 'is' guess, but game continues.
      }
    } else if (guessType === guessTypes.lower) {
      if (guessType == guessTypes.lower && usedNumbers.lower.has(guessNumber)) {
        alert("You already guessed this number. Try a different one.");
        return;
      }
      setUsedNumbers((prev) => {
        return {
          lower: new Set(prev.lower).add(guessNumber),
          is: prev.is,
          higher: prev.higher,
        };
      });

      // Player says target < guessNumber
      if (target < guessNumber) {
        // Correct hint
        setMaxBound(guessNumber - 1);
        setResult({ correct: false, ended: false });
      } else {
        // Incorrect hint but still update minBound to reflect new known info
        setMinBound(guessNumber); // we now know target >= guessNumber
        alert("Incorrect! The target is not lower than that.");
        setResult({ correct: false, ended: false });
      }
    } else if (guessType === guessTypes.higher) {
      if (guessType == guessTypes.higher && usedNumbers.higher.has(guessNumber)) {
        alert("You already guessed this number. Try a different one.");
        return;
      }
      setUsedNumbers((prev) => {
        return {
          lower: prev.lower,
          is: prev.is,
          higher: new Set(prev.higher).add(guessNumber),
        };
      });

      // Player says target > guessNumber
      if (target > guessNumber) {
        // Correct hint
        setMinBound(guessNumber + 1);
        setResult({ correct: false, ended: false });
      } else {
        // Incorrect hint but still update maxBound
        setMaxBound(guessNumber); // we now know target <= guessNumber
        alert("Incorrect! The target is not higher than that.");
        setResult({ correct: false, ended: false });
      }
    }

    if (attempts + 1 >= maxAttempts) {
      setResult({ correct: false, ended: true });
    }
  };

  useEffect(() => {
    resetGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="mb-3">
        <h2 className="text-2xl mb-3">Logic Challenge</h2>
        <p className="mb-3">
          You can start anywhere... but choosing the right starting point might
          be everything.
        </p>
        <p className="mb-3">
          A hidden number lies between <strong>{range.min}</strong> and{" "}
          <strong>{range.max}</strong>. The numbers are sorted, your path is
          not. Each guess will tell you whether you're too low, too high, or
          spot on.
        </p>
        <p>
          But beware: you only get {maxAttempts} guesses, and each number
          reveals its secret only once.
        </p>
      </div>

      <div
        className="border border-white p-6 rounded-md flex flex-col gap-6 mb-3"
        style={{ background: "#282a36" }}
      >
        <div className="text-2xl flex items-center justify-center mb-2">
          Current possible range:{" "}
          <strong>
            {minBound} - {maxBound}
          </strong>
        </div>

        <form onSubmit={checkGuess} className="flex flex-col gap-3 w-full">
          <div className="flex flex-wrap items-center gap-3 w-full">
            <input
              type="number"
              min={minBound}
              max={maxBound}
              value={guessNumber}
              onChange={(e) => setGuessNumber(Number(e.target.value))}
              className="flex-1 bg-white rounded-md border-0 text-black p-1"
              required
            />

            <select
              value={guessType}
              className="bg-white rounded-md border-0 text-black p-1"
              onChange={(e) => setGuessType(e.target.value)}
            >
              {Object.entries(guessTypes).map(([key, val]) => (
                <option key={key} value={val}>
                  {key}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={result.ended}
            className="border border-white px-3 py-1 rounded-md cursor-pointer hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Validate Answer
          </button>
        </form>

        <div className="text-lg mt-2">
          Attempts: {attempts} / {maxAttempts}
        </div>

        {result.ended && (
          <div className="py-6 flex flex-col gap-3 justify-center items-center">
            <p className="text-lg mb-2">
              {result.correct
                ? "Correct! You cracked it!"
                : `Game over! The number was ${target}. Try again!`}
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
        Divide and Conquer.
      </small>
    </>
  );
}
