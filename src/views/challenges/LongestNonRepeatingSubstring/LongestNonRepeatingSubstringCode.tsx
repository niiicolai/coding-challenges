import CodingChallenge from "../../../components/CodingChallenge";

export default function LongestNonRepeatingSubstringCode({
  result,
}: {
  result: { correct: boolean; ended: boolean };
}) {
  const placeholderFunction = `
/**
 * Finds the longest non-repeating substring.
 * 
 * @function findLongestNonRepeatingSubstring
 * @param {string} target - Target string.
 * @returns {string} A string containing the longest substring.
 */
(target) => {
  let longest = "";
  // code here
  return longest;
}`.trim();

  const testCases = `const testCases = [
  { target: "abacdab", expected: ["bacd", "cdab"], control: false },
  { target: "bnmbnmerb", expected: ["bnmer"], control: false },
  { target: "abcdabcdea", expected: ["abcde"], control: false },
  { target: "erfderfdve", expected: ["erfdv"], control: false },
  { target: "bbbbb", expected: ["b"], control: true },
];`.trim();

  const renderResult = `const renderResult = (tc, index) => {
                  const target = tc.target;
                  const expected = tc.expected;
                  const control = tc.control;
    let result = [];
    let correct = false;

    try {
      result = solution(target);
      correct = expected.includes(result);
    } catch {}

    return (
      <div
        key={index}
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px",
          margin: "1rem 0",
          background: "#fff"
        }}
      >
        <div><strong>Target:</strong> {target}</div>
        <div><strong>Expected:</strong> {expected.join(" or ")}</div>
        {result && typeof result === "string" && (
           <div><strong>Result:</strong> {result}</div>
        )}
        {typeof result !== "string" && (
           <div><strong>Result:</strong> The function must return a string.</div>
        )}
       
        <div style={{ color: correct ? "green" : "crimson", fontWeight: "bold" }}>
          {correct ? "Correct!" : "Incorrect"} 
          {control && (<div>Control case</div>)}
        </div>
      </div>
    );
  };`.trim();

  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl mb-3">JavaScript Coding Challenge</h2>
        <p className="mb-3">
          Write a function that returns the longest substring of non-repeating characters.
        </p>

        <div className="relative mb-3">
          <CodingChallenge
              placeholderFunction={placeholderFunction}
              testCases={testCases}
              renderResult={renderResult}
          />

          {!result.correct && (
            <div className="p-3 rounded-md shadow-3xl absolute left-0 right-0 top-0 bottom-0 bg-black/[.7] font-bold text-red-500 z-50 text-center flex items-center justify-center text-xl">
              Complete the logic challenge to move on to the coding challenge.
            </div>
          )}
        </div>

        <small className="block">
          While you could check every possible pair using nested loops,
          challenge yourself to implement it with a single loop by leveraging
          the strategy you used in the logic challenge.
        </small>
      </div>
    </>
  );
}
