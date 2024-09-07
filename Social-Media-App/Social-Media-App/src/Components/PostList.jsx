import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  return (
    <>
      {postList.map((postData) => (
        <Post key={postData.id} post={postData}></Post>
      ))}
    </>
  );
};
export default PostList;
