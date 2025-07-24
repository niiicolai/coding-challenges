import { useState, useEffect } from "react";

interface Target {
  s: string;
  e: string[];
}

interface Window {
  start: number;
  end: number;
}

export default function LongestNonRepeatingSubstringGame({
  result,
  setResult,
}: {
  result: { correct: boolean; ended: boolean };
  setResult: (value: { correct: boolean; ended: boolean }) => void;
}) {
  const generateTarget = () => {
    const randomStrings = [
      {
        s: "erfderfdve",
        e: [
          "e",
          "er",
          "erf",
          "erfd",
          "rfd",
          "rfde",
          "fde",
          "fder",
          "der",
          "derf",
          "erf",
          "erfd",
          "erfdv",
          "rfdv",
          "rfdve",
        ],
      },
      {
        s: "bnmbnmerb",
        e: [
          "b",
          "bn",
          "bnm",
          "nm",
          "nmb",
          "mb",
          "mbn",
          "bn",
          "bnm",
          "bnme",
          "bnmer",
          "nmer",
          "nmerb",
        ],
      },
    ];

    return randomStrings[Math.floor(Math.random() * randomStrings.length)];
  };
  const [window, setWindow] = useState<Window>({ start: 0, end: 0 });
  const [target, setTarget] = useState<Target>(generateTarget());
  const [seen, setSeen] = useState<Map<string, number>>(new Map());
  const [subStrings, setSubstrings] = useState<string[]>([]);

  const resetGame = () => {
    setResult({ correct: false, ended: false });
    setWindow({ start: 0, end: 0 });
    setTarget(generateTarget());
    setSubstrings([]);
    setSeen(new Map().set(target.s[0], 0));
  };

  const carveString = () => {
    const next = window.end + 1;

    if (next >= target.s.length) {
      setSubstrings([
        ...subStrings,
        target.s.slice(window.start, window.end + 1),
      ]);
      setWindow({ ...window, start: target.s.length });
      return;
    }

    const char = target.s[next];
    setSubstrings([
      ...subStrings,
      target.s.slice(window.start, window.end + 1),
    ]);

    const index = seen.get(char);
    if (index !== undefined && index >= window.start) {
      setWindow({ ...window, start: index + 1 });
    }
  };

  const moveEnd = () => {
    const next = window.end + 1;
    if (next >= target.s.length) return;
    setWindow({ ...window, end: next });
    setSeen(new Map(seen.set(target.s[next], next)));
  };

  const checkGuess = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (subStrings.length !== target.e.length) {
      setResult({ correct: false, ended: true });
      return;
    }

    let correct = true;
    for (let i = 0; i < subStrings.length; i++) {
      if (subStrings[i] != target.e[i]) {
        correct = false;
        break;
      }
    }

    setResult({ correct, ended: true });
  };

  useEffect(() => {
    resetGame();
  }, []);

  useEffect(() => {
    setSeen(new Map().set(target.s[0], 0));
  }, [target]);

  return (
    <>
      <div>
        <h2 className="text-2xl mb-3 font-semibold">Logic Challenge</h2>

        <p className="mb-3">
          This challenge is a bit different from the following coding challenge.
        </p>

        <p className="mb-3">
          Your task is to find non-repeating substrings inside a target string.
          (e.g. "abacdab" = ["a", "ab", "ba", "bac", "bacd", "cd", "cda",
          "cdab"]). When you save a substring and the next character right after
          the end of the window is the same as a character already inside the
          current substring, the start of the window moves forward
          automatically, right after the first repeated character.
        </p>

        <p className="mb-3">
          You control a sliding window with two pointers: the start pointer (
          <span className="text-blue-300 font-bold">blue line</span>) and the
          end pointer (<span className="text-red-500 font-bold">red line</span>
          ). You can only move the end pointer one character to the right at a
          time.
        </p>

        <p className="mb-3">
          <strong>Important:</strong> You control <em>only</em> the{" "}
          <em>end pointer</em> and decide when to "cut" (save) the current
          substring. The start pointer never moves manually, it moves
          automatically <em>only</em> when the character immediately after the
          end pointer would cause a repetition inside the current substring. In
          that case, the start pointer jumps just past the first occurrence of
          that repeated character to maintain a non-repeating substring.
        </p>

        <p className="mb-3">
          Keep moving the end pointer forward one character at a time, cutting
          substrings along the way, until you reach the end of the string.
        </p>
      </div>

      <div
        className="border border-white p-6 rounded-md flex flex-col gap-6 mb-3"
        style={{ background: "#282a36" }}
      >
        <div className="flex items-center flex-wrap justify-center gap-3 border-b pb-6">
          {target.s.split("").map((c, i) => (
            <div
              key={i}
              className="flex-1 w-full h-8 flex flex-col gap-3 relative"
            >
              {window.start == i && (
                <div className="h-full w-1 bg-blue-500 absolute"></div>
              )}
              {window.end == i && (
                <div className={`h-full w-1 bg-red-500 absolute right-0`}></div>
              )}
              <p
                className={`flex items-center justify-center ${
                  (seen.has(target.s[i]) && i === window.start) ||
                  (seen.has(target.s[i]) && i === window.end + 1)
                    ? "text-green-500"
                    : ""
                } ${window.start > i ? "hidden" : ""}`}
              >
                {c}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center flex-wrap justify-center gap-3 border-b pb-6">
          {subStrings.map((c, i) => (
            <div
              key={i}
              className="flex-1 w-full h-8 flex flex-col gap-3 relative"
            >
              {c}
            </div>
          ))}
          {subStrings.length == 0 && (
            <div>Your substrings will appear here</div>
          )}
        </div>

        <button
          className={`border border-white px-3 py-1 rounded-md bg-blue-500 text-white cursor-pointer hover:bg-white hover:text-black`}
          onClick={() => carveString()}
        >
          Cut
        </button>
        <button
          className={`border border-white px-3 py-1 rounded-md 
        ${
          window.end >= target.s.length - 1
            ? "bg-gray-400 text-gray-700 cursor-not-allowed"
            : "bg-red-500 text-white cursor-pointer hover:bg-white hover:text-black"
        }`}
          onClick={() => moveEnd()}
          disabled={window.end >= target.s.length}
        >
          Slide the end pointer one step to the right.
        </button>

        <form onSubmit={checkGuess} className="flex gap-3 w-full">
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
        Struggling? Here is the first eight substrings for the current answer: [
        {target.e.slice(0, 8).join(", ")}]. You must always cut after the start of the window moves.
      </small>
    </>
  );
}
