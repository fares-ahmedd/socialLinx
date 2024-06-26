import PostForm from "@/ui/PostForm";
import { FcAddImage } from "react-icons/fc";

function CreatePost() {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="w-full max-w-5xl gap-3 flex-start">
          <FcAddImage className="text-3xl" />
          <h2 className="w-full text-left h3-bold md:h2-bold">Create a Post</h2>
        </div>
        <PostForm action="create" />
      </div>
    </div>
  );
}

export default CreatePost;
