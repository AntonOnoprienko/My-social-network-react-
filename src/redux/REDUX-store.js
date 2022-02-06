import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReduсer from "./profilePageReduсer";
import chatReduсer from "./chatPageReduсer";
import usersReducer from "./usersReducer";
import friendsReducer from "./friendsReducer";
import authReduсer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profilePage: profileReduсer,
  chatPage: chatReduсer,
  usersPage: usersReducer,
  friendsPage: friendsReducer,
  auth: authReduсer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
