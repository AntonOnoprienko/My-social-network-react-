import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />

        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs"
              element={<Dialogs state={props.state.chatPage} />}
            />
            <Route
              path="/profile"
              element={<Profile state={props.state.profilePage} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
