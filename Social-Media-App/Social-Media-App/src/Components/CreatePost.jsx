import { Form, redirect, useNavigate } from "react-router-dom";
const CreatePost = () => {
  return (
    <Form className="create-post-container" method="POST">
      <h1 className="create-post-h1">Create Post</h1>
      <div className="mb-3">
        <label className="form-label">User Id</label>
        <input type="text" className="form-control" name="userId" />
      </div>
      <div className="mb-3">
        <label className="form-label">Post Title</label>
        <input
          type="text"
          rows={4}
          className="form-control"
          name="title"
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3 ">
        <label className="form-label">Post Body</label>
        <textarea
          type="text"
          className="form-control"
          name="body"
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
          name="reactions"
        />
      </div>
      <div className="mb-3 ">
        <label className="form-label">Enter your hashtags here</label>
        <input
          type="text"
          className="form-control"
          placeholder="Please enter your hashtags using space"
          name="tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};
export default CreatePost;

export const createPostAction = async (data) => {
  // const { addPost } = useContext(PostListContext);
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);
  postData.tags = postData.tags.split(" ");
  const bodyObj = postData;
  bodyObj.reactions = { likes: postData.reactions, dislikes: 0 };

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyObj),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(object)(post);
    });
  return redirect("/");
};
