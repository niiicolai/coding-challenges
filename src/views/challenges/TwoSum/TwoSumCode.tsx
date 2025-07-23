import CodingChallenge from "../../../components/CodingChallenge";

export default function TwoSumCode({
  result,
}: {
  result: { correct: boolean; ended: boolean };
}) {
  const placeholderFunction = `
/**
 * Finds two indices of numbers in the array that add up to the target.
 * 
 * @function twoSum
 * @param {number[]} numbers - Array of numbers to search.
 * @param {number} target - Target sum to find.
 * @returns {number[]} An array containing the two indices. Returns [-1, -1] if no valid pair is found.
 */
(numbers, target) => {
  return [-1, -1];
}`.trim();

  const testCases = `const testCases = [
      { input: [2, 7, 11, 15], target: 9, expected: [0, 1], control: false },
      { input: [3, 2, 4], target: 6, expected: [1, 2], control: false },
      { input: [1, 5, 3, 4], target: 9, expected: [1, 3], control: false },
      { input: [1, 2, 3], target: 7, expected: [-1, -1], control: true },
    ];`.trim();

  const renderResult = `const renderResult = (tc, index) => {
                  const input = tc.input;
                  const target = tc.target;
                  const expected = tc.expected;
                  const control = tc.control;
    let result = [];
    let correct = false;

    try {
      result = twoSum([...input], target);
      correct =
        (Array.isArray(result) &&
        result.length === 2 &&
        input[result[0]] + input[result[1]] === target) 
        || 
        (control === true && 
        result.length === expected.length &&
        result.every((val, index) => val === expected[index]));
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
        <div><strong>Input:</strong> [{input.join(", ")}]</div>
        <div><strong>Target:</strong> {target}</div>
        <div><strong>Expected:</strong> [{expected.join(", ")}]</div>
        {result && Array.isArray(result) && (
           <div><strong>Result:</strong> [{result?.join(", ")}]</div>
        )}
        {!Array.isArray(result) && (
           <div><strong>Result:</strong> The function must return an array.</div>
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
          Write a function that finds the indices of two numbers in an array
          that add up to a given target.
        </p>

        <div className="relative mb-3">
          <CodingChallenge
              placeholderFunction={placeholderFunction}
              testCases={testCases}
              renderResult={renderResult}
          />

          {!result.ended && !result.correct && (
            <div className="rounded-md shadow-3xl absolute left-0 right-0 top-0 bottom-0 bg-black/[.7] font-bold text-red-500 z-50 text-center flex items-center justify-center text-xl">
              Complete the logic challenge to move on to the coding challenge.
            </div>
          )}
        </div>

        <small className="block">
          While you could check every possible pair using nested loops,
          challenge yourself to implement it with a single loop by leveraging
          the strategy you used in the logic challenge. (Hint: Think about how
          you keep track of what you’ve already seen!)
        </small>
      </div>
    </>
  );
}
