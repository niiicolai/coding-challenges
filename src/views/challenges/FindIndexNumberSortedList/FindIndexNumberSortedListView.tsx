import { useState } from "react";
import FindIndexNumberSortedListCode from "./FindIndexNumberSortedListCode";
import FindIndexNumberSortedListGame from "./FindIndexNumberSortedListGame";
import { Link } from "react-router-dom";

export default function FindIndexNumberSortedListView() {
  const [result, setResult] = useState<{ correct: boolean; ended: boolean }>({
    correct: false,
    ended: false,
  });

  return (
    <div className="min-h-screen bg-black text-white lg:grid lg:grid-cols-2">
      <div className="p-12 border-b lg:border-r border-white">
        <div className="mx-auto" style={{ maxWidth: "60em" }}>
          <div className="flex items-center justify-between gap-3 mb-6">
            <div>
              <h1 className="text-3xl font-bold">
                Find Index of Number in Sorted List
              </h1>
              <small>Published: 07/23/2025</small>
            </div>
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
            You are given a <strong>sorted list</strong> of numbers and a target
            number. Your goal is to find the index of the target in the list. If
            the target is not present, you should indicate that (for example, by
            returning -1).
          </p>

          <p className="mb-3">
            The simplest way is to check each number one by one until you find
            the target. However, this can be inefficient for large lists because
            it may require scanning many elements.
          </p>

          <p className="mb-3">
            <strong>Binary Search</strong> is a classic algorithm for quickly
            finding the position of a target number within a{" "}
            <strong>sorted</strong> list. By repeatedly halving the search
            range, you can locate the target efficiently, far faster than
            checking each element one by one.
          </p>

          <p className="mb-3">
            In the upcoming logic challenge, you’ll simulate the binary search
            process: making strategic guesses to narrow down where the target
            might be. While the concept is straightforward, implementing it
            reliably requires careful and methodical steps.
          </p>

          <p>
            Master the logic challenge, and the coding task will unlock for you.
            Ready to sharpen your search skills?
          </p>
        </div>
      </div>

      <div className="p-12 border-b border-white bg-indigo-800">
        <div className="mx-auto" style={{ maxWidth: "60em" }}>
          <FindIndexNumberSortedListGame
            result={result}
            setResult={setResult}
          />
        </div>
      </div>

      <div className="p-12 border-b lg:border-r border-white bg-indigo-800">
        <div className="mx-auto" style={{ maxWidth: "60em" }}>
          <FindIndexNumberSortedListCode result={result} />
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
