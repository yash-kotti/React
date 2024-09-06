import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import PostList from "./Components/PostList";
import { useState } from "react";
import CreatePost from "./Components/CreatePost";
function App() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}></Sidebar>
      <div className="content">
        <Header></Header>
        {activeTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
