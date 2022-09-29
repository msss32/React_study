import React from "react";
import { useDispatch } from "react-redux";

const Count = ({ count, setCount }) => {
  // useDispatch함수를 사용하고
  const dipatch = useDispatch();
  // 반환된 dipatch를 사용해서 Action을 던질 수 있음
  // dipatch 함수를 사용하는데 매개변수로 객체를 전달해줌
  // 객체의 규칙은 {type, payload}
  // type : 동작시킬 행동의 이름
  // payload : (선택사항) 우리가 데이터 전달이 필요하면 사용

  const Add = () => {
    dipatch({ type: "ADD" });
    setCount(count + 1);
  };
  const Remove = () => {
    dipatch({ type: "REMOVE" });
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={Add}>+</button>
      <button onClick={Remove}>-</button>
    </div>
  );
};

export default Count;
