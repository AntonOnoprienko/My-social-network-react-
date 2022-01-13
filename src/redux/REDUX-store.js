import { combineReducers, createStore } from "redux";
import profileReduсer from "./profilePageReduсer";
import chatReduсer from "./chatPageReduсer";

let reducers = combineReducers({
  profilePage: profileReduсer,
  chatPage: chatReduсer,
});

let store = createStore(reducers);

export default store;
