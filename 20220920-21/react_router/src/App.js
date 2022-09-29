import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Login, Shop, Detail, Mypage } from "./page";
import { useState } from "react";

function App() {
  // Routers : 페이지를 스위치 해주는 일을 해줌
  // 버전업되면서 이름이 변경됨(원래는 Switch)

  // Route : 페이지들을 정의해줌. Route에는 props 값이 두개 필요한데
  // path, element
  // path : 경로(보여줄 컴포넌트들의 경로)
  // element : 보여줄 경로의 컴포넌트

  const [login, setLogin] = useState(false);
  // 페이지를 접속할 때 권한이 필요해서 막아야할 페이지 처리
  // 페이지를 보호하는 법 리다이렉트를 해주는 방법
  // Navigate라는 컴포넌트를 사용해서 리다이렉트를 하게 만들어줄 수 있다.
  // react-router-dom이 지원해주는 컴포넌트
  // props를 받는데 to 한개 보내주면된다(to = "보내주고 싶은 경로")
  // Redirect 컴포넌트를 만들어준 것!
  // 로그인이 안되었으면 메인페이지로 이동시킨다.
  const Redirect = () => {
    return login === true ? <Mypage /> : <Navigate to="/" />;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main isLogin={login} />} />
        <Route
          path="/login"
          element={<Login isLogin={login} login={setLogin} />}
        />
        <Route path="/shop" element={<Shop isLogin={login} />} />
        <Route
          path="/detail/:id/:num/:name"
          element={<Detail isLogin={login} />}
        />
        <Route path="/mypage" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
