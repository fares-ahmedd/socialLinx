import { Models } from "appwrite";
import { useState } from "react";
import { Link } from "react-router-dom";
import LikePost from "./LikePost";

function PostContent({ post }: { post: Models.Document }) {
  const [isCollapse, setIsCollapse] = useState(true);
  const displayText = post.caption
    .split(" ")
    .slice(0, 20)
    .join(" ")
    .concat("... ");
  function handleClick() {
    setIsCollapse(false);
  }
  const wordsCount = post.caption.split(" ").length;

  return (
    <>
      <div className="py-5 small-medium lg:base-medium">
        <p className="text-white ">
          {isCollapse && wordsCount > 15 ? (
            <>
              {displayText}
              <button
                className="text-primary-500 hover:underline"
                onClick={handleClick}
              >
                see more
              </button>
            </>
          ) : (
            <>{post.caption}</>
          )}
        </p>
        <ul className="flex gap-1 mt-2">
          {post.tags.map((tag: string) => (
            <li key={tag} className="text-[15px] text-gray-500">
              #{tag}
            </li>
          ))}
        </ul>
      </div>
      <Link to={`/posts/${post.$id}`}>
        <div className="max-w-[500px] max-h-[500px] w-[100%] h-[500px]   block m-auto rounded-md bg-dark-4  relative">
          <h1 className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-pulse">
            Loading image...
          </h1>
          <img
            src={post.imageUrl || "/no-post-image.jpg"}
            alt="no post"
            loading="lazy"
            className="absolute z-10 w-full h-full "
          />
        </div>
      </Link>
      <LikePost post={post} />
    </>
  );
}

export default PostContent;
