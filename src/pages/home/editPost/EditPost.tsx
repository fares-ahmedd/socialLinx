import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetPostById } from "@/lib/react-query/QueriesAndMutations";
import LoadingSpinner from "@/ui/LoadingSpinner";
import PostForm from "@/ui/PostForm";

function EditPost() {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || "");

  if (isPending)
    return (
      <div className="flex-center h-screen w-full">
        {" "}
        <LoadingSpinner />
      </div>
    );
  return (
    <div className="flex flex-1 edit">
      <div className="common-container">
        <div className="w-full max-w-5xl gap-3 flex-start">
          <FaEdit className="text-3xl" />
          <h2 className="w-full text-left h3-bold md:h2-bold">Edit Post</h2>
        </div>
        <PostForm action="update" post={post} />
      </div>
    </div>
  );
}

export default EditPost;
