import Tooltip from "@/ui/Tooltip";
import { multiFormatDateString } from "@/utils/helper";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import SavePost from "../index/SavePost";
import { Models } from "appwrite";
import { IUser } from "@/types";
import DeletePost from "@/ui/DeletePost";

interface Details {
  post: Models.Document | undefined;
  user: IUser;
}

function DetailsInfo({ post, user }: Details) {
  return (
    <div className="flex flex-wrap-reverse items-center justify-around w-full border-y py-4 border-y-stone-500  gap-5 mb-4">
      <div className="flex items-center gap-3">
        <Link to={`/profile/${post?.creator.$id}`}>
          <img
            src={post?.creator?.imageUrl || "/no-post-image.webp"}
            alt="Post Creator"
            className="w-12 rounded-full lg:h-12"
          />
        </Link>
        <div className="flex flex-col">
          <p className="text-white base-medium lg:body-bold">
            {post?.creator.name}
          </p>
          <div className="gap-2 text-gray-500 flex-center">
            <p className="subtle-semibold lg:small-regular">
              {multiFormatDateString(post?.$createdAt)}
            </p>
            -
            <p className="subtle-semibold lg:small-regular">{post?.location}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <Link
          to={`/update-post/${post?.$id}`}
          className={`${user.id !== post?.creator.$id && "hidden"}`}
        >
          <Tooltip content="edit post" position="top">
            <FaEdit className="icon-button" />
          </Tooltip>
        </Link>
        <SavePost post={post} />
        <DeletePost post={post} user={user} isDetails />
      </div>
    </div>
  );
}

export default DetailsInfo;
