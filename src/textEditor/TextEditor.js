import { isEqual } from "lodash";
import React, { useCallback, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
});

const TextEditor = (props) => {
    const [output, setOutput] = useState('')
    const initialContent = ""
    const editorRef = useRef();

    const onUpdate = useCallback(
        async (content) => {
            setOutput(content);
        },
        [setOutput]
    );

    const handleChange = (content) => {
        onUpdate(content);
        console.log(content)
    };


    return (
        <div>
            <SunEditor
                ref={editorRef}
                onChange={handleChange}
                setContents={initialContent}
                setOptions={{
                    charCounter: true,
                    charCounterLabel: "Chars: ",
                    height: "200",
                    previewTemplate:
                        "<div style='width:auto; max-width:1080px; margin:auto;'> <h1>Preview Template</h1> {{contents}} <div>_Footer_</div></div> ",

                    buttonList: [
                        ["undo", "redo"],
                        ["bold", "underline", "italic", "list"],
                        ["link"],
                        ["codeView", "preview"],
                        ["removeFormat"],
                    ],
                }}
                placeholder="Please type here..."
            />
        </div>
    );
};

export default React.memo(TextEditor, (prev, next) => {
    return isEqual(prev, next)
});