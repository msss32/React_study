import React from "react";
import { Header, Body } from "../com";

const Login = (login, isLogin) => {
  const setLogin = () => {
    login(true);
  };
  return (
    <div>
      <Header title="Login_Page" />
      <Body path="/shop" name="Shop_Page" isLogin={isLogin} />
      <Body path="/mypage" name="My_Page" isLogin={isLogin} />
      <button onClick={setLogin}>로그인</button>
    </div>
  );
};

export default Login;
