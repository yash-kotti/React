import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Spinner from "./Spinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList, isLoading } = useContext(PostListContext);
  const postList = useLoaderData();
  return (
    <>
      {/* {isLoading && <Spinner />} */}
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((postData) => (
        <Post key={postData.id} post={postData}></Post>
      ))}
    </>
  );
};
export default PostList;
export const postListLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};
