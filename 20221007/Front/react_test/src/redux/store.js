import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../redux/reducer/";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  login: loginReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
