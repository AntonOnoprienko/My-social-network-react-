import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import MyPosts from "./components/Profile/My posts/MyPosts";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        {/*<Profile />*/}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
