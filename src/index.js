import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.state}
        addPost={store.addPost}
        addMessage={store.addMessage}
        updateNewPostText={store.updateNewPostText}
        updateNewMessageText={store.updateNewMessageText}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
subscribe(rerenderEntireTree);
reportWebVitals();
