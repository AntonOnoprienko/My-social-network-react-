import { combineReducers, createStore } from "redux";
import profileReduсer from "./profilePageReduсer";
import chatReduсer from "./chatPageReduсer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage: profileReduсer,
  chatPage: chatReduсer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
