import { loginAction } from "../redux/store";

function login(id, pw) {
  return (dispatch, getState) => {
    dispatch(loginAction.login(id, pw));
  };
}

function logout(id, pw) {
  return (dispatch, getState) => {
    dispatch(loginAction.login(id, pw));
  };
}

export const logins = { login, logout };
