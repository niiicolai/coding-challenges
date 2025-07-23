import { useState } from "react";
import TwoSumCode from "./TwoSumCode";
import TwoSumGame from "./TwoSumGame";
import { Link } from "react-router-dom";

export default function TwoSumView() {
  const [result, setResult] = useState<{ correct: boolean; ended: boolean }>({
    correct: false,
    ended: false,
  });

  return (
    <div className="min-h-screen bg-black text-white lg:grid lg:grid-cols-2">
      <div className="p-12 border-b lg:border-r border-white">
        <div className="mx-auto" style={{ maxWidth: "60em" }}>
          <div className="flex items-center justify-between gap-3 mb-6">
            <h1 className="text-3xl font-bold">Two Sum</h1>
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
            Two Sum is a classic puzzle: find two numbers in a list that add up
            to a target number. It’s a simple problem, but there’s more to it
            than just brute force.
          </p>
          <p className="mb-3">
            First, take on the logic challenge below. You’ll reveal hidden cards
            and figure out which two add up to the target. The solution might seem obvious at first, 
            but implementing it in code requires stepping back and thinking holistically.
          </p>
          <p>
            Beat the logic challenge, and the coding challenge will unlock for
            you. Let’s get started!
          </p>
        </div>
      </div>

      <div className="p-12 border-b border-white bg-indigo-800">
        <div className="mx-auto" style={{ maxWidth: "60em" }}>
          <TwoSumGame result={result} setResult={setResult} />
        </div>
      </div>

      <div className="p-12 border-b lg:border-r border-white bg-indigo-800">
        <div className="mx-auto" style={{ maxWidth: "60em" }}>
          <TwoSumCode result={result} />
        </div>
      </div>

      <div className="p-12 border-b border-white">
        <div className="mx-auto flex flex-col gap-6" style={{ maxWidth: "60em" }}>
          <div>
            <h2 className="text-2xl mb-3">Hint</h2>
            <p>
              If you solve the logic challenge using memory instead of brute force, 
              you’re already halfway to writing the actual function!
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-3">Credits</h2>
            <p>
              This site was inspired by classic algorithm problems, including the Two Sum challenge, 
              which is well-known from platforms like LeetCode. This site and its content is offered free of charge for
              educational and practice purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
