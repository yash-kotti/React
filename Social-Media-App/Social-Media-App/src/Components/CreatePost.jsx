import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const navigate = useNavigate();
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
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title.current.value,
        body: body.current.value,
        reactions: { likes: reactions.current.value, dislikes: 0 },
        tags: tags.current.value.split(" "),
        userId: userId.current.value,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });
    title.current.value = "";
    body.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";
    userId.current.value = "";
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
