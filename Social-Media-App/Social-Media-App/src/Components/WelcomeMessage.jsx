import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const WelcomeMessage = ({ onFetchData }) => {
  return (
    <center>
      <h1 className="welcome-message">There are no posts</h1>
    </center>
  );
};
export default WelcomeMessage;
