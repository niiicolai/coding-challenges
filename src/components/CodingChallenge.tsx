import {
  SandpackProvider,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import AceEditor from "react-ace";
import { useState, useMemo } from "react";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

export default function CodingChallenge({
  placeholderFunction,
  testCases,
  renderResult,
}: {
  placeholderFunction: string;
  testCases: string;
  renderResult: string;
}) {
  const [userCode, setUserCode] = useState(placeholderFunction);

  const userFiles = useMemo(
    () => ({
      "/twoSum.js": {
        code: userCode,
        active: true,
      },
    }),
    [userCode]
  );
  const appCode = useMemo(
    () =>
      `
    export default function App() {
      let twoSum;
      try {
        twoSum = ${userCode}
      } catch (e) {
        return <div>{e.message}</div>
      }
      ${testCases}
      ${renderResult}
      return (
        <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
          <h1>Code Checker</h1>
          {testCases.map((tc, i) => renderResult(tc, i))}
        </div>
      );
    }
    `.trim(),
    [userCode]
  );

  return (
    <div className="flex gap-6 flex-col lg:flex-row flex-wrap">
      <div className="flex-1 border border-slate-200 rounded-md overflow-hidden h-96">
        <SandpackProvider template="vanilla" files={userFiles}>
          <AceEditor
            theme="dracula"
            mode="javascript"
            defaultValue={userCode}
            onChange={setUserCode}
            fontSize={14}
            height="24rem"
            width="100%"
          />
        </SandpackProvider>
      </div>

      <div className="flex-1 border border-slate-200 rounded-md overflow-hidden h-96">
        <SandpackProvider
          template="react"
          files={{
            "/App.js": appCode,
          }}
          options={{
            autorun: true,
          }}
        >
          <SandpackPreview
            style={{ height: "24rem", border: "1px solid #282a36", backgroundColor: "#282a36" }}
          />
        </SandpackProvider>
      </div>
    </div>
  );
}
