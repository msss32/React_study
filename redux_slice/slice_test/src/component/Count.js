import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countActions } from "../redux/Store";

const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const plusHandler = () => {
    dispatch(countActions.plus(5));
  };
  const minusHandler = () => {
    dispatch(countActions.minus());
  };
  return (
    <div>
      <div>{count.count}</div>
      <button onClick={plusHandler}>Plus</button>
      <button onClick={minusHandler}>Minus</button>
    </div>
  );
};

export default Count;
