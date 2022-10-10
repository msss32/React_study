import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main, Shop } from "./page";
import { Header } from "./component";
import { useSelector } from "react-redux";

function App() {
  const isLogin = useSelector((state) => state.login.isLogin);
  const LoginRedirect = () => {
    // <Shop />이나 <Navigate to="/" /> 컴포넌트를 반환하기 때문에 Redirect를 컴포넌트 형태로 적어주어야한다
    return isLogin === true ? <Shop /> : loginMsg();
  };

  function loginMsg() {
    alert("로그인 하세요");
    return <Navigate to="/" />;
  }
  return (
    <div className="App">
      <Header isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop" element={<LoginRedirect />} />
      </Routes>
    </div>
  );
}

export default App;
