import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite";
import { Link } from "react-router-dom";
import SavePost from "../index/SavePost";
import LikePost from "../index/LikePost";

type GridPostListProps = {
  post: Models.Document | undefined;
  showUser?: boolean;
  showStates?: boolean;
};

function GridPostList({
  post,
  showUser = true,
  showStates = true,
}: GridPostListProps) {
  const { user } = useUserContext();
  if (!post) return null;
  return (
    <li className="relative">
      <Link to={`/posts/${post.$id} `}>
        <div className=" min-h-[300px] min-w-[300px]  block m-auto rounded-md bg-dark-4  ">
          <h1 className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-pulse">
            Loading image...
          </h1>
          <img
            src={post.imageUrl}
            alt="PostImage "
            className="relative w-full h-full"
          />
        </div>
      </Link>
      {showStates && (
        <div className="absolute top-4 right-2">
          <SavePost post={post} />
        </div>
      )}
      {showStates && (
        <div className="absolute right-2 bottom-2">
          <LikePost post={post} />
        </div>
      )}
      <div className="absolute bottom-3 left-3 flex-center gap-3">
        <img
          src={post.creator.imageUrl}
          alt="Post Creator"
          className="w-8 h-8 rounded-full "
        />
        <p>{post.creator.name}</p>
      </div>
      <div className="absolute bg-black/80 text-white p-4 top-2 left-2 rounded-md opacity-70 text-sm uppercase">
        #{post.tags}
      </div>
    </li>
  );
}

export default GridPostList;
