import { multiFormatDateString } from "@/utils/helper";
import { Models } from "appwrite";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useUserContext } from "@/context/AuthContext";
import Tooltip from "@/ui/Tooltip";
import SavePost from "./SavePost";
import DeletePost from "@/ui/DeletePost";

function PostCreatorInfo({ post }: { post: Models.Document }) {
  const { user } = useUserContext();

  if (!post.creator) return;
  return (
    <div className="flex-wrap-reverse gap-2 flex-between">
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
      <div className="flex gap-2 max-md:w-full max-md:justify-end">
        <Link
          to={`/update-post/${post.$id}`}
          className={`${user.id !== post.creator.$id && "hidden"}`}
        >
          <Tooltip content="Edit" position="top">
            <FaEdit className="icon-button" />
          </Tooltip>
        </Link>
        <SavePost post={post} />

        <DeletePost post={post} user={user} />
      </div>
    </div>
  );
}

export default PostCreatorInfo;
