import { Models } from "appwrite";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  return (
    <>
      <div className="py-5 small-medium lg:base-medium">
        <p className="text-white ">
          {isCollapse ? (
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
        <img
          src={post.imageUrl || "/no-post-image.jpg"}
          alt="no post"
          loading="lazy"
          className="w-full h-full max-w-[400px] max-h-[400px] md:max-w-[500px] md:max-h-[500px] block m-auto rounded-md"
        />
      </Link>
    </>
  );
}

export default PostContent;
