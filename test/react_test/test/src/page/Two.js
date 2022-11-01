import React, { useRef } from "react";
import One from "./One";

const Two = () => {
  const inputRef = useRef();
  const oneRef = useRef();
  const inPut = (props) => {
    oneRef.current.inputTxt(props);
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => {
          inputRef.current.value = e.target.value;
          inPut(inputRef.current.value);
        }}
      />
      <One ref={oneRef} />
    </div>
  );
};

export default Two;
