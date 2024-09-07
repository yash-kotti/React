import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const title = useRef("");
  const body = useRef("");
  const reactions = useRef(0);
  const userId = useRef("");
  const tags = useRef("");
  const handleAddPost = () => {
    const post = {
      title: title.current.value,
      body: body.current.value,
      reactions: reactions.current.value,
      tags: tags.current.value.split(" "),
      userId: userId.current.value,
    };
    title.current.value = "";
    body.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";
    userId.current.value = "";
    addPost(post);
  };
  return (
    <form
      className="create-post-container"
      onSubmit={(event) => {
        event.preventDefault();
        handleAddPost();
      }}
    >
      <h1 className="create-post-h1">Create Post</h1>
      <div className="mb-3">
        <label className="form-label">User Id</label>
        <input type="text" className="form-control" ref={userId} />
      </div>
      <div className="mb-3">
        <label className="form-label">Post Title</label>
        <input
          type="text"
          rows={4}
          className="form-control"
          ref={title}
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3 ">
        <label className="form-label">Post Body</label>
        <textarea
          type="text"
          className="form-control"
          ref={body}
          placeholder="Tell me more about it"
          rows={4}
        />
      </div>
      <div className="mb-3 ">
        <label className="form-label">Number of reactions</label>
        <input
          type="number"
          className="form-control"
          placeholder="How many people reacted to your post"
          ref={reactions}
        />
      </div>
      <div className="mb-3 ">
        <label className="form-label">Enter your hashtags here</label>
        <input
          type="text"
          className="form-control"
          placeholder="Please enter your hashtags using space"
          ref={tags}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
