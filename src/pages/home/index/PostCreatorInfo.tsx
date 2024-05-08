import { getTime } from "@/utils/helper";
import { Models } from "appwrite";
import { Link } from "react-router-dom";

function PostCreatorInfo({ post }: Models.Document) {
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
              {getTime(post.$createdAt)}
            </p>
            -<p className="subtle-semibold lg:small-regular">{post.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCreatorInfo;
