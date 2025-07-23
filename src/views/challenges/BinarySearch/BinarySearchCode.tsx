import CodingChallenge from "../../../components/CodingChallenge";

export default function BinarySearchCode({
  result,
}: {
  result: { correct: boolean; ended: boolean };
}) {
  const placeholderFunction = `
/**
 * Finds the index of the target number in an array of numbers.
 * 
 * @function binarySearch
 * @param {number[]} numbers - Array of numbers to search.
 * @param {number} target - Target number.
 * @returns {number} Index of the target number. Returns -1 if no target number is found.
 */
(numbers, target) => {
  return -1;
}`.trim();

  const testCases = `const testCases = [
      { input: [1, 2, 3, 4], target: 3, expected: 2, control: false },
      { input: [1, 2], target: 2, expected: 1, control: false },
      { input: [5, 6, 8, 11], target: 11, expected: 3, control: false },
      { input: [2, 3, 4, 7, 9], target: 22, expected: -1, control: true },
    ];`.trim();

  const renderResult = `const renderResult = (tc, index) => {
                  const input = tc.input;
                  const target = tc.target;
                  const expected = tc.expected;
                  const control = tc.control;
    let result = -1;
    let correct = false;

    try {
      result = solution([...input], target);
      correct = result === expected;
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
        <div><strong>Expected:</strong> {expected}</div>
        {result && !Number.isNaN(result) && (
           <div><strong>Result:</strong> {result}</div>
        )}
        {Number.isNaN(result) && (
           <div><strong>Result:</strong> The function must return a number.</div>
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
          Write a function that finds the index of the target number in a sorted array.
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
          the strategy you used in the logic challenge. (Hint: Think about how you can divide the number of possiblities for getting the answer!)
        </small>
      </div>
    </>
  );
}
