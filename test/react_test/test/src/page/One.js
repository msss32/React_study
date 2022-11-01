import React, { forwardRef, useImperativeHandle, useState } from "react";

const One = forwardRef((props, ref) => {
  const [input, setInput] = useState();
  useImperativeHandle(ref, () => ({
    inputTxt: (props) => {
      setInput(props);
    },
  }));
  console.log(input);
  return <div className="one">{input}</div>;
});

export default One;
