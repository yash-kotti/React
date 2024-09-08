import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Spinner from "./Spinner";

const PostList = () => {
  const { postList, isLoading } = useContext(PostListContext);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && postList.length === 0 && <WelcomeMessage />}
      {!isLoading &&
        postList.map((postData) => (
          <Post key={postData.id} post={postData}></Post>
        ))}
    </>
  );
};
export default PostList;
