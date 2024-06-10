import { Models } from "appwrite";
import { useState } from "react";
type Props = {
  post: Models.Document | undefined;
};
function PostContent({ post }: Props) {
  const [isCollapse, setIsCollapse] = useState(true);

  const displayText = post?.caption
    .split(" ")
    .slice(0, 20)
    .join(" ")
    .concat("... ");
  function handleClick() {
    setIsCollapse(false);
  }
  const wordsCount = post?.caption.split(" ").length;

  return (
    <div className="w-full ms-10 py-5 small-medium lg:base-medium">
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
          <>{post?.caption}</>
        )}
      </p>
      <ul className="flex gap-1 mt-2">
        {post?.tags.map((tag: string) => (
          <li key={tag} className="text-[15px] text-gray-500">
            #{tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostContent;
