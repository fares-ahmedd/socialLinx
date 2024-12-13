import { Link } from "react-router-dom";
import SavePost from "../index/SavePost";

type Props = {
  post: any;
  profile: boolean;
};

function SavePostItem({ post, profile = false }: Props) {
  if (!post) return;
  return (
    <li key={post.$id} className="relative">
      <Link to={`/posts/${post.$id}`}>
        <img
          src={
            profile
              ? post?.post?.imageUrl || "/no-post-image.webp"
              : post.imageUrl || "/no-post-image.webp"
          }
          className="rounded-sm"
          alt="PostImg"
        />
      </Link>
      <div className="flex-center gap-4 absolute bottom-2 left-2">
        {!profile && (
          <>
            <img
              src={post.creator.imageUrl}
              alt="creatorImg"
              className="w-10 h-10 rounded-full"
            />
            <p className="bg-black/80  p-2 rounded-lg">{post.creator.name}</p>
          </>
        )}
      </div>
      <div className="absolute top-3 right-3 overflow-hidden">
        <SavePost post={profile ? post.post : post} />
      </div>
    </li>
  );
}

export default SavePostItem;
