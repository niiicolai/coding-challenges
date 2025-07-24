import { useState } from "react";
import TwoSumCode from "./LongestNonRepeatingSubstringCode";
import TwoSumGame from "./LongestNonRepeatingSubstringGame";
import { Link } from "react-router-dom";

export default function LongestNonRepeatingSubstringView() {
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
                Longest Non-Repeating Substring
              </h1>
              <small>Published: 07/24/2025</small>
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
            The <strong>Longest Non-Repeating Substring</strong> problem asks
            you to find the longest substring within a string that contains no
            repeated characters. This is a classic challenge that demonstrates
            how to efficiently analyze sequences without redundant checks.
          </p>

          <p className="mb-3">
            The <strong>Sliding Window</strong> technique is an effective way to
            solve such problems. Instead of checking every possible substring
            (which can be very slow), a sliding window uses two pointers to
            represent a range within the string, expanding and shrinking
            dynamically to maintain the desired property, in this case, no
            repeated characters.
          </p>

          <p className="mb-3">
            In the upcoming logic challenge, you’ll control a sliding window
            over a target string to find non-repeating substrings. Your
            goal is to keep moving the end pointer forward, cutting substrings
            along the way, until you reach the end of the string. This hands-on
            experience will help you grasp the sliding window technique and the
            logic behind finding the longest substring without repeated
            characters.
          </p>

          <p>
            Solve the logic challenge, and the coding challenge will unlock for
            you. Ready to dive in?
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
        <div
          className="mx-auto flex flex-col gap-6"
          style={{ maxWidth: "60em" }}
        >
          <div>
            <h2 className="text-2xl mb-3">Hint</h2>
            <p>
              Keep track of the current window and the longest string you have
              seen so far.
            </p>
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
