import React, { useState } from "react";
import { Body, Header } from "../com";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

// 파라미터 값을 가져오는 방법
// 리액트에서 지원해주는 함수 : 리액트 훅
// useParams 사용
// url 경로에 있는 파라미터들을 객체의 형태로 불러오기 가능
// useParams함수 실행후 반환된 객체를 가지고 동작

// 검색하려면? 검색 쿼리문
// input 입력창 만들어서 useState로 값 저장
// 검색 쿼리문 만들기
// useSearchParams 함수 사용
// useSearchParams 함수를 실행해서 반환받은 객체 사용
// useSearchParams가 경로에서 뽑아주는 영역은
// ? 뒤에 키값을 기준으로
// ?q=1 이런 형태는 q라는 키값이 객체형태로 나옴 {q:1}

// 현재 경로 가져와서 사용하기 위해서는 useLocation
const Detail = () => {
  const [search, setSearch] = useState();
  const params = useParams();
  const location = useLocation();
  const [query, setQuery] = useSearchParams();
  console.log(query.get("q"));
  const keyInput = (e) => {
    console.log(e);
    setSearch(e.target.value);
  };
  return (
    <div>
      <Header title="Detail_Page" />
      <div>{search}</div>
      <div>검색결과 : {query.get("q")}</div>
      <input onChange={keyInput} />
      <Link to={location.pathname + "?q=" + search}>검색하기</Link>
    </div>
  );
};

export default Detail;
