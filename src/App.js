import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, Routes } from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/friends" element={<FriendsContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
