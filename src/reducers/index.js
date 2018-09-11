import {USER_LOGIN} from '../constants/action-types';
import { USER_LOGOUT } from "../constants/action-types";

const initialState = {
  user: {
    token: "",
    first_name: "",
    last_name: "",
    full_name: "",
    email: "",
    imageUrl: "",
    googleId: ""
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        user: {
          token: action.payload.token,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          full_name: action.payload.full_name,
          email: action.payload.email,
          imageUrl: action.payload.imageUrl,
          googleId: action.payload.googleId
        }
    };
    case USER_LOGOUT:
      return {
        user: {
          token: action.payload.token,
          first_name: action.payload.first_name,
          last_name: action.payload.last_name,
          full_name: action.payload.full_name,
          email: action.payload.email,
          imageUrl: action.payload.imageUrl,
          googleId: action.payload.googleId
        }
      };
    default:
      return state;
  }
};

export default rootReducer;
