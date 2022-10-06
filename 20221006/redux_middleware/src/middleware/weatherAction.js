import { weatherAction } from "../redux/store";
import axios from "axios";
// axios
// axios는 브라우저
// 자바스크립트에 fetch가 있는데 프레임워크에선 ajax를 구현할 때 axios를 쓰는편.
// 속성은 url 필수 나머지는 옵션
// method는 지정안하면 기본이 디폴트가 Get방식

// axios 설치 명령어
// npm i axios

function getWeather(name) {
  // thunk가 해주는 일이 Action Creator라는 함수를 만들어주는 것
  // Action Creators함수는 함수를 반환
  // thunk는 dispatch를 딜레이 시켜주는 역할

  // Action함수는 함수를 반환
  // disptch랑 getState 둘다 함수}
  return async (dispatch) => {
    const data = await axios({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=7b58ee90096f03ebc179c7e781151b17`,
    });
    dispatch(weatherAction.getWeatherData(data));
  };
}
export const weather = { getWeather };
