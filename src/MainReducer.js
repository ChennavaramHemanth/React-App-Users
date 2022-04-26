import { combineReducers } from "redux";
import UserReducer from "./usersData";

const mainReducer = combineReducers({
  user: UserReducer,
});

export default mainReducer;
