import { multiFormatDateString } from "@/utils/helper";
import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { FaEdit, FaSave } from "react-icons/fa";
import { useUserContext } from "@/context/AuthContext";
import Tooltip from "@/ui/Tooltip";

function PostCreatorInfo({ post }: { post: Models.Document }) {
  const { user } = useUserContext();

  if (!post.creator) return;
  return (
    <div className="flex-between">
      <div className="flex items-center gap-3">
        <Link to={`/profile/${post.creator.$id}`}>
          <img
            src={post?.creator?.imageUrl || "/no-post-image.jpg"}
            alt="Post Creator"
            className="w-12 rounded-full lg:h-12"
          />
        </Link>
        <div className="flex flex-col">
          <p className="text-white base-medium lg:body-bold">
            {post.creator.name}
          </p>
          <div className="gap-2 text-gray-500 flex-center">
            <p className="subtle-semibold lg:small-regular">
              {multiFormatDateString(post.$createdAt)}
            </p>
            -<p className="subtle-semibold lg:small-regular">{post.location}</p>
          </div>
        </div>
      </div>
      <Link
        to={`/update-post/${post.$id}`}
        className={`${user.id !== post.creator.$id && "hidden"}`}
      >
        <div className="gap-2 flex-center">
          <Tooltip content="Edit Post" position="top">
            <FaEdit className="icon-button" />
          </Tooltip>
          <Tooltip content="Save Post" position="top">
            <FaSave className="icon-button" />
          </Tooltip>
        </div>
      </Link>
    </div>
  );
}

export default PostCreatorInfo;
