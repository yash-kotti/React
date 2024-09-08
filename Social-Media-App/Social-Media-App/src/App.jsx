import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import PostList from "./Components/PostList";
import { useState } from "react";
import CreatePost from "./Components/CreatePost";
import PostListContextProvider from "./store/post-list-store";
import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <PostListContextProvider>
      <div className="app-container">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListContextProvider>
  );
}

export default App;
