import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { weather, logins } from "./middleware";
// import axios from "axios";
// Get 요청방식
// axios({url:""})
function App() {
  const dispatch = useDispatch();
  // async function getWeather() {
  //   const data = await axios({
  //     url: "https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=7b58ee90096f03ebc179c7e781151b17",
  //   });
  //   console.log(data);
  //   dispatch();
  // }
  // getWeather();
  const [name, setName] = useState("");

  const getWeather = (name) => {
    dispatch(weather.getWeather(name));
  };

  const weatherData = useSelector((state) => state.weather.weatherData);

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const isLogin = useSelector((state) => state.login.isLogin);
  const userName = useSelector((state) => state.login.id);

  const login = () => {
    dispatch(logins.login(id, pw));
  };
  const logout = () => {
    dispatch(logins.logout());
  };

  return (
    <div className="App">
      <label>도시 이름</label>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          getWeather(name);
        }}
      >
        날씨 검색
      </button>
      {/* weatherData랑 weatherData.data의 키 값까지 있으면 */}
      {/* 리액트를 사용하다보면 이런 연산자 처리를 많이 해준다! */}
      {/* 콘솔에 들어오는 객체안의 날씨의 키 값을 확인하고 접근자로 다 적어준다 */}
      <div>
        지금 {weatherData && weatherData.data?.name}의 날씨는{" "}
        {weatherData && weatherData.data?.weather[0]?.main}
      </div>
      <br />
      <label>아이디</label>
      <br />
      <input
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <label>비밀번호</label>
      <br />
      <input
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <br />
      <button onClick={login}>로그인</button>
      <div>로그인 됨?</div>
      {isLogin ? (
        <div>
          {userName} 유저 로그인 됨 <button onClick={logout}>로그아웃</button>
        </div>
      ) : (
        <div>로그인 안됨</div>
      )}
    </div>
  );
}

export default App;
