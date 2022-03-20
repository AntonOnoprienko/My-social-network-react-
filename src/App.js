import "./App.css";
import Nav from "./components/Navbar/Navbar";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/Settings/Settings";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { initializeApp } from "./redux/appReducer";
import { connect, Provider } from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/REDUX-store";
import React, { Component } from "react";
import { withSuspense } from "./hoc/withSuspense";

const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={withSuspense(DialogsContainer)} />
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />

            <Route path="/users" element={withSuspense(UsersContainer)} />

            <Route path="/friends" element={<FriendsContainer />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SamuraiJSApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SamuraiJSApp;
