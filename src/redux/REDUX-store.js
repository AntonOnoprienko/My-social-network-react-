import { combineReducers, createStore } from "redux";
import profileReduser from "./profilePageReduser";
import chatReduser from "./chatPageReduser";

let reducers = combineReducers({
  profileReduser: profileReduser,
  chatReduser: chatReduser,
});

let store = createStore(reducers);

export default store;
