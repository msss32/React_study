import React from "react";
import { useSelector } from "react-redux";

const CountView = () => {
  // 저장소의 값 가져오기
  const count2 = useSelector((state) => state.count);
  // useSelector함수를 콜백으로 리듀스 폴더 안에 있는 index.js에 작성한
  // state값을 받을 수 있음
  // (state) => state.count 저장소의 state객체 안에 있는 count값만 가져옴
  return <div>{count2}</div>;
};

export default CountView;
