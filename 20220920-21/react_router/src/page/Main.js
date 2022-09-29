import React from "react";
import { Header, Body } from "../com";

const Main = ({ isLogin }) => {
  return (
    <div>
      <Header title="Main_Page" />
      <Body path="/login" name="Login_Page" isLogin={isLogin} />
    </div>
  );
};

export default Main;
