import { Models } from "appwrite";
import { Link } from "react-router-dom";
import LikePost from "./LikePost";
import CollapseText from "@/ui/CollapseText";
import AddCommentForm from "./AddCommentForm";
import PostComments from "./PostComments";

function PostContent({ post }: { post: Models.Document }) {
  return (
    <>
      <div className="py-5 small-medium lg:base-medium">
        <CollapseText content={post.caption as string} />
        <ul className="flex gap-1 mt-2">
          {post.tags.map((tag: string) => (
            <li key={tag} className="text-[15px] text-gray-500">
              #{tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="max-w-[500px] max-h-[500px] w-[100%] h-[500px]   block m-auto rounded-md bg-dark-4  relative">
        <h1 className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-pulse">
          Loading image...
        </h1>
        <Link to={`/posts/${post.$id}`}>
          <img
            src={post.imageUrl || "/no-post-image.webp"}
            alt="no post"
            loading="lazy"
            className="absolute z-10 w-full h-full "
          />
        </Link>
      </div>

      <PostComments post={post} />

      <AddCommentForm post={post} />
      <div className="flex justify-end">
        <LikePost post={post} />
      </div>
    </>
  );
}

export default PostContent;
