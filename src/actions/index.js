import { USER_LOGIN } from "../constants/action-types";
import { USER_LOGOUT } from "../constants/action-types";

export const login = user => ({
  type: USER_LOGIN,
  payload: user
});

export const logout = user =>({
  type: USER_LOGOUT,
  payload: ""
});
