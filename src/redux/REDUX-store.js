import { combineReducers, createStore } from "redux";
import profileReduser from "./profilePageReduser";
import chatReduser from "./chatPageReduser";

let reducers = combineReducers({
  profilePage: profileReduser,
  chatPage: chatReduser,
});

let store = createStore(reducers);

export default store;
