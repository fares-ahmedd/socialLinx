import { FaTrash } from "react-icons/fa";
import Tooltip from "./Tooltip";
import { Models } from "appwrite";
import { IUser } from "@/types";
import { useDeletePost } from "@/lib/react-query/QueriesAndMutations";
import { useNavigate } from "react-router-dom";
type DeletePostProps = {
  user: IUser;
  post: Models.Document | undefined;
};

function DeletePost({ user, post }: DeletePostProps) {
  const { mutateAsync: deletePost, isPending: isDeleting } = useDeletePost();
  const navigate = useNavigate();
  console.log(deletePost);
  console.log(isDeleting);

  function handleDelete() {
    const isConfirm = window.confirm(
      "Are you sure you want to delete this post ?"
    );
    if (isConfirm) {
      deletePost(post?.$id);
      navigate("/");
    }
  }
  return (
    <button
      className={`${user.id !== post?.creator.$id && "hidden"}`}
      onClick={handleDelete}
      disabled={isDeleting}
    >
      <Tooltip content="Delete Post" position="top">
        <FaTrash className="text-rose-800 text-3xl duration-300 hover:scale-90" />
      </Tooltip>
    </button>
  );
}

export default DeletePost;
