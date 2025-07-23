import { useState } from "react";
import BinarySearchCode from "./BinarySearchCode";
import BinarySearchGame from "./BinarySearchGame";
import { Link } from "react-router-dom";

export default function BinarySearchView() {
  const [result, setResult] = useState<{ correct: boolean; ended: boolean }>({
    correct: false,
    ended: false,
  });

  return (
    <div className="min-h-screen bg-black text-white lg:grid lg:grid-cols-2">
      <div className="p-12 border-b lg:border-r border-white">
        <div className="mx-auto" style={{ maxWidth: "60em" }}>
          <div className="flex items-center justify-between gap-3 mb-6">
            <h1 className="text-3xl font-bold">Binary Search</h1>
            <div>
              <Link
                to="/"
                className="border border-white px-3 py-1 w-full rounded-md cursor-pointer hover:bg-white hover:text-black"
              >
                Home
              </Link>
            </div>
          </div>
          <p className="mb-3">
            Binary Search is a foundational algorithm: find the position of a
            target number in a <strong>sorted</strong> list by repeatedly dividing the search
            range in half. It's fast, efficient, and elegant.
          </p>
          <p className="mb-3">
            Try the logic challenge. You’ll step through a sequence,
            making educated guesses to narrow down the possibilities. While the
            idea is simple, turning it into reliable code takes a careful,
            methodical approach.
          </p>
          <p>
            Conquer the logic challenge, and the coding task will unlock for
            you. Let’s dive in!
          </p>
        </div>
      </div>

      <div className="p-12 border-b border-white bg-indigo-800">
        <div className="mx-auto" style={{ maxWidth: "60em" }}>
          <BinarySearchGame result={result} setResult={setResult} />
        </div>
      </div>

      <div className="p-12 border-b lg:border-r border-white bg-indigo-800">
        <div className="mx-auto" style={{ maxWidth: "60em" }}>
          <BinarySearchCode result={result} />
        </div>
      </div>

      <div className="p-12 border-b border-white">
        <div
          className="mx-auto flex flex-col gap-6"
          style={{ maxWidth: "60em" }}
        >
          <div>
            <h2 className="text-2xl mb-3">Hint</h2>
            <p>Is it higher, lower, or exactly the number?</p>
          </div>

          <div>
            <h2 className="text-2xl mb-3">Credits</h2>
            <p>
              This site and its content is offered free of charge for
              educational and practice purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
