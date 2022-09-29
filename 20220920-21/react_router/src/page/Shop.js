import React from "react";
import { Body, Header } from "../com";

const Shop = ({ isLogin }) => {
  return (
    <div>
      <Header title="Shop_Page" />
      <Body
        path="/detail/1/10/셔츠"
        name="1번 상품으로 이동"
        isLogin={isLogin}
      />
      <Body path="/detail/2/10/바지" name="2번 상품으로 이동" />
      <Body path="/detail/3/10/장갑" name="3번 상품으로 이동" />
    </div>
  );
};

export default Shop;
