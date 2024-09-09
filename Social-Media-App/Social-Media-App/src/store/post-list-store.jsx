import { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
  postList: [],
  isLoading: false,
  addPost: () => {},
  deletePost: () => {},
  addPosts: () => {},
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id != action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    console.log(`Add post `, action.payload);
    newPostList = [action.payload, ...newPostList];
  } else if (action.type === "ADD_INTIAL_POSTS") {
    console.log(action.payload.posts);
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [isLoading, setIsLoading] = useState(false);
  const addPost = (post) => {
    post["id"] = Date.now();
    const action = {
      type: "ADD_POST",
      payload: post,
    };
    dispatchPostList(action);
  };
  const deletePost = (postId) => {
    const action = {
      type: "DELETE_POST",
      payload: {
        postId,
      },
    };
    dispatchPostList(action);
  };
  const addPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INTIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  // useEffect(() => {
  //   setIsLoading(true);
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   fetch("https://dummyjson.com/posts", { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addPosts(data.posts);
  //       setIsLoading(false);
  //     });
  //   return () => {
  //     console.log("Cleaning the UseEffect");
  //     controller.abort();
  //   };
  // }, []);
  return (
    <PostListContext.Provider
      value={{ postList, addPost, isLoading, deletePost, addPosts }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListContextProvider;
