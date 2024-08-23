import { Models } from "appwrite";
import { Link } from "react-router-dom";
import SavePost from "../index/SavePost";
import LikePost from "../index/LikePost";

type GridPostItemProps = {
  post: Models.Document | undefined;
};

function GridPostItem({ post }: GridPostItemProps) {
  if (!post) return null;
  return (
    <li className="relative">
      <Link to={`/posts/${post.$id} `}>
        <span className=" min-h-[200px] min-w-[200px]  block m-auto rounded-md bg-dark-4   ">
          <span className="absolute transform block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-pulse">
            Loading image...
          </span>
          <img
            src={post.imageUrl}
            alt="PostImage "
            className="relative w-full h-full"
          />
        </span>
      </Link>

      <div className="absolute top-4 right-2">
        <SavePost post={post} />
      </div>

      <div className="absolute right-2 bottom-2">
        <LikePost post={post} />
      </div>

      <div className="absolute bottom-3 left-3 flex-center gap-3 bg-black/80 text-white p-2 rounded-md ">
        <img
          src={post.creator.imageUrl}
          alt="Post Creator"
          className="w-8 h-8 rounded-full "
        />
        <p>{post.creator.name}</p>
      </div>
      <div className="absolute bg-black/80 text-white p-4 rounded-md top-2 left-2  opacity-70 text-sm uppercase">
        #{post.tags}
      </div>
    </li>
  );
}

export default GridPostItem;
