import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Body = ({ path, name, item }) => {
  // Link 리액트에서 a태그 같은 역할
  // Link 컴포넌트를 이용해서 경로를 바꿔주고 컴포넌트를 교체해줌
  // 라우터간의 이동을 할 수 있게 도와줌
  // Link에 필요한 props는 to 어디로
  // to 이름의 props에 이동할 경로를 넣어줌

  // useNavigate 똑같이 페이지 이동을 도와주는 아이
  // useNavigate의 사용방법 : 함수 실행 이후 반환받은 객체로 사용
  const nav = useNavigate();
  return (
    <div className="body">
      <Link to={path}>{name}으로 이동</Link>
      <button
        onClick={() => {
          nav(path);
        }}
      >
        이건 {name}으로 이동버튼
      </button>
      {item && item.id ? <div>{item.id}번 상품</div> : null}
      {item && item.num ? <div>{item.num}개</div> : null}
      {item && item.name ? <div>이름 : {item.name} </div> : null}
    </div>
  );
};

export default Body;
