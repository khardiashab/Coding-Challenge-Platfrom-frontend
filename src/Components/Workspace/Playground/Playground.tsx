"use client";
import { userState } from "@/atoms/userStateAtom";
import useLocalStorage from "@/hooks/useLocalStorage";
import { ISettings, ProblemDescription as Problem } from "@/utils/types/types";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import CodeMirror from "@uiw/react-codemirror";
import { useEffect, useState } from "react";
import Split from "react-split";

import { useSearchParams } from "next/navigation";
import { useRecoilValue } from "recoil";
import EditorFooter from "./EditorFooter";
import PreferenceNav from "./PreferenceNav/PreferenceNav";

type PlaygroundProps = {
  problem: Problem;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setSolved: React.Dispatch<React.SetStateAction<boolean>>;
};

const Playground: React.FC<PlaygroundProps> = ({
  problem,
  setSuccess,
  setSolved,
}) => {
  const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
  let [userCode, setUserCode] = useState<string>(problem.starterCode);

  const [fontSize, setFontSize] = useLocalStorage("lcc-fontSize", "16px");

  const [settings, setSettings] = useState<ISettings>({
    fontSize: fontSize,
    settingsModalIsOpen: false,
    dropdownIsOpen: false,
  });

  const user = useRecoilValue(userState);
  const searchParams = useSearchParams();
  const problemId = searchParams.get("prblemId");

  const handleSubmit = async () => {
    // if (!user) {
    // 	toast.error("Please login to submit your code", {
    // 		position: "top-center",
    // 		autoClose: 3000,
    // 		theme: "dark",
    // 	});
    // 	return;
    // }
    // try {
    // 	userCode = userCode.slice(userCode.indexOf(problem.starterFunctionName));
    // 	const cb = new Function(`return ${userCode}`)();
    // 	const handler = problems[problemId as string].handlerFunction;
    // 	if (typeof handler === "function") {
    // 		const success = handler(cb);
    // 		if (success) {
    // 			toast.success("Congrats! All tests passed!", {
    // 				position: "top-center",
    // 				autoClose: 3000,
    // 				theme: "dark",
    // 			});
    // 			setSuccess(true);
    // 			setTimeout(() => {
    // 				setSuccess(false);
    // 			}, 4000);
    // 			// FIXME UPDATING THE ARRAY UNION\
	// const userRef = doc(firestore, "users", user.uid);
    // 			// await updateDoc(userRef, {
    // 			// 	solvedProblems: arrayUnion(problemId),
    // 			// });
    // 			setSolved(true);
    // 		}
    // 	}
    // } catch (error: any) {
    // 	console.log(error.message);
    // 	if (
    // 		error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")
    // 	) {
    // 		toast.error("Oops! One or more test cases failed", {
    // 			position: "top-center",
    // 			autoClose: 3000,
    // 			theme: "dark",
    // 		});
    // 	} else {
    // 		toast.error(error.message, {
    // 			position: "top-center",
    // 			autoClose: 3000,
    // 			theme: "dark",
    // 		});
    // 	}
    // }
  };

  useEffect(() => {
    const code = localStorage.getItem(`code-${problemId}`);
    if (user) {
      setUserCode(code ? JSON.parse(code) : problem.starterCode);
    } else {
      setUserCode(problem.starterCode);
    }
  }, [problemId, user, problem.starterCode]);

  const onChange = (value: string) => {
    setUserCode(value);
    localStorage.setItem(`code-${problemId}`, JSON.stringify(value));
  };

  return (
    <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden">
      <PreferenceNav settings={settings} setSettings={setSettings} />

      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <CodeMirror
            value={userCode}
            theme={vscodeDark}
            onChange={onChange}
            extensions={[javascript()]}
            style={{ fontSize: settings.fontSize }}
          />
        </div>
        <div className="w-full px-5 overflow-auto">
          {/* testcase heading */}
          <div className="flex h-10 items-center space-x-6">
            <div className="relative flex h-full flex-col justify-center cursor-pointer">
              <div className="text-sm font-medium leading-5 text-white">
                Testcases
              </div>
              <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white" />
            </div>
          </div>

          <div className="flex">
            {problem.examples.map((example, index) => (
              <div
                className="mr-2 items-start mt-2 "
                key={example.id}
                onClick={() => setActiveTestCaseId(index)}
              >
                <div className="flex flex-wrap items-center gap-y-4">
                  <div
                    className={`font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap
										${activeTestCaseId === index ? "text-white" : "text-gray-500"}
									`}
                  >
                    Case {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="font-semibold my-4">
            <p className="text-sm font-medium mt-4 text-white">Input:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
              {problem.examples[activeTestCaseId].inputText}
            </div>
            <p className="text-sm font-medium mt-4 text-white">Output:</p>
            <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
              {problem.examples[activeTestCaseId].outputText}
            </div>
          </div>
        </div>
      </Split>
      <EditorFooter handleSubmit={handleSubmit} />
    </div>
  );
};
export default Playground;
