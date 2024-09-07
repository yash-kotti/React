import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  const handleDeletePost = (post) => {
    console.log(post);
    deletePost(post.id);
  };
  return (
    <div className="card postlist-container">
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-badge"
        onClick={() => {
          handleDeletePost(post);
        }}
      >
        <MdDelete />
      </span>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary custom-badge">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reaction-container" role="alert">
          This post has been reacted by {post.reactions} people
        </div>
      </div>
    </div>
  );
};
export default Post;
