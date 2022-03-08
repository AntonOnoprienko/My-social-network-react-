import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import profileReduсer from "./profilePageReduсer";
import chatReduсer from "./chatPageReduсer";
import usersReducer from "./usersReducer";
import friendsReducer from "./friendsReducer";
import authReduсer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReduсer from "./appReducer";

let reducers = combineReducers({
  profilePage: profileReduсer,
  chatPage: chatReduсer,
  usersPage: usersReducer,
  friendsPage: friendsReducer,
  auth: authReduсer,
  form: formReducer,
  app: appReduсer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
