import { FaTrash } from "react-icons/fa";
import Tooltip from "./Tooltip";
import { Models } from "appwrite";
import { IUser } from "@/types";
import { useDeletePost } from "@/lib/react-query/QueriesAndMutations";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
type DeletePostProps = {
  user: IUser;
  isDetails?: boolean;
  post: Models.Document | undefined;
};

function DeletePost({ user, post, isDetails = false }: DeletePostProps) {
  const { mutateAsync: deletePost, isPending: isDeleting } = useDeletePost();
  const { toast } = useToast();
  const navigate = useNavigate();
  function handleDelete() {
    const isConfirm = window.confirm(
      "Are you sure you want to delete this post ?"
    );
    if (isConfirm) {
      deletePost(post?.$id);
      toast({ title: "Post removed", description: "Post has been removed" });

      if (isDetails) {
        navigate("/");
      } else {
        window.scrollTo({ top: 0 });
      }
    }
  }
  return (
    <button
      className={`${user.id !== post?.creator.$id && "hidden"}`}
      onClick={handleDelete}
      disabled={isDeleting}
    >
      <Tooltip content="Delete" position="top">
        <FaTrash className="text-rose-800 text-3xl duration-300 hover:scale-90" />
      </Tooltip>
    </button>
  );
}

export default DeletePost;
