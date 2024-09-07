import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
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
  }

  return newPostList;
};
const DEFAULT_POSTLIST = [
  {
    id: 1,
    title: "Office Office",
    body: "Visiting Office after a long time",
    reactions: 5,
    userId: 1,
    tags: ["vacation", "mumbai"],
  },
  {
    id: 2,
    title: "Pass Pass Pass",
    body: "Graduation me pass ho gaye",
    reactions: 10,
    userId: 1,
    tags: ["graduation", "pass"],
  },
];

const PostListContextProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POSTLIST
  );
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
  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};
export default PostListContextProvider;
