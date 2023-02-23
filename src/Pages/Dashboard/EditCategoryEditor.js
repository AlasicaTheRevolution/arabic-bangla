import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const Editor = ({ setValue, value }) => {
  const editor = useRef(null);
  return (
    <JoditEditor
      ref={editor}
      value={value}
      onChange={(content) => setValue(content)}
    />
  );
};

export default Editor;
