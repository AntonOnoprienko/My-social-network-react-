import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReduсer from "./profilePageReduсer";
import chatReduсer from "./chatPageReduсer";
import usersReducer from "./usersReducer";
import friendsReducer from "./friendsReducer";
import authReduсer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReduсer,
  chatPage: chatReduсer,
  usersPage: usersReducer,
  friendsPage: friendsReducer,
  auth: authReduсer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
