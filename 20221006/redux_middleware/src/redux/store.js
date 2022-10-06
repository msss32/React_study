import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const weatherSlice = createSlice({
  name: "weather",
  initialState: { weatherData: {} },
  reducers: {
    getWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: {
    id: "",
    pw: "",
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload;
      state.pw = action.payload;
      state.isLogin = true;
    },
    logout: (state, action) => {
      state.id = action.payload;
      state.pw = action.payload;
      state.isLogin = false;
    },
  },
});

// redux에서 지원해주는 함수
// 리듀서 함수를 하나로 합쳐줌
// combineReducers() 함수에 객체로 전달
// 객체로 전달하면 합쳐줌
const rootReducer = combineReducers({
  weather: weatherSlice.reducer,
  login: loginSlice.reducer,
});

// composeWithDevTools로 미들웨어를 매개변수로 전달해주면
// 개발자 툴로 action이 일어났을 때 변화한 state를 바로바로 확인 가능

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export const weatherAction = weatherSlice.actions;
export const loginAction = loginSlice.actions;

export default store;
