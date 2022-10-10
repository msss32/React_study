import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  HeaderWrap,
  HeaderContent,
  ContentBtn,
  LoginWrap,
  LoginInput,
} from "./styledComponent";
import { loginAction } from "../../redux/middleware/loginAction";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ isLogin }) => {
  // useRef
  // current 속성을 가지고 있는 객체 반환
  // 객체에 원하는 키값에 값 넣기 가능
  // 이 값이 바뀌어도 렌더링은 되지 않지만 값은 계속 남음
  // current = 태그가 들어옴
  // 사용방법은 들고싶은 컴포넌트에
  // props ref로 useRef 반환한 객체를 넣어준다
  const idInput = useRef();
  const pwInput = useRef();
  const dispatch = useDispatch();
  // 로그인 할 수 있는 상태와 회원가입 할 수 있는 상태를 나눠주기 위해
  const [wrapState, setWrapState] = useState(true);
  const userName = useSelector((state) => state.login.id);

  const login = () => {
    console.log(idInput.value);
    dispatch(loginAction.login(idInput.value, pwInput.value));
  };
  const logout = () => {
    dispatch(loginAction.logout());
  };

  const signup = () => {
    dispatch(loginAction.signup(idInput.value, pwInput.value, setWrap));
  };
  const nav = useNavigate();
  const setWrap = () => {
    setWrapState(!wrapState);
    idInput.value = "";
    pwInput.value = "";
    idInput.current.value = "";
    pwInput.current.value = "";
  };
  return (
    <HeaderWrap>
      <HeaderContent>
        <ContentBtn
          onClick={() => {
            nav("/");
          }}
        >
          MAIN
        </ContentBtn>
        <ContentBtn
          onClick={() => {
            nav("/shop");
          }}
        >
          SHOP
        </ContentBtn>
      </HeaderContent>
      <LoginWrap>
        {isLogin ? (
          <>
            <div>{userName}로그인 성공</div>
            <Button onClick={logout}>로그아웃</Button>
          </>
        ) : (
          <>
            {wrapState ? (
              <>
                <label>아이디 :</label>
                <LoginInput
                  ref={idInput}
                  onChange={(e) => {
                    idInput.value = e.target.value;
                  }}
                />
                <label>비밀번호 :</label>
                <LoginInput
                  ref={pwInput}
                  onChange={(e) => {
                    pwInput.value = e.target.value;
                  }}
                />
                <Button onClick={login}>로그인</Button>
                <Button onClick={setWrap}>회원가입 하러</Button>
              </>
            ) : (
              <>
                <label>아이디 :</label>
                <LoginInput
                  ref={idInput}
                  onChange={(e) => {
                    idInput.value = e.target.value;
                  }}
                />
                <label>비밀번호 :</label>
                <LoginInput
                  ref={pwInput}
                  onChange={(e) => {
                    pwInput.value = e.target.value;
                  }}
                />
                <Button onClick={signup}>회원가입</Button>
                <Button onClick={setWrap}>로그인 하러</Button>
              </>
            )}
          </>
        )}
      </LoginWrap>
    </HeaderWrap>
  );
};

export default Header;
