import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const Editor = ({ setValue }) => {
  const editor = useRef(null);
  return <JoditEditor ref={editor} onChange={(content) => setValue(content)} />;
};

export default Editor;
