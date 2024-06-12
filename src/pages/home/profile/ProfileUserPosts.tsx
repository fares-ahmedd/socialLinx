import { Link } from "react-router-dom";

type Props = {
  post: any;
  userImage: string;
  username: string;
};

function ProfileUserPosts({ post, userImage, username }: Props) {
  return (
    <li key={post.$id} className="relative">
      <Link to={`/posts/${post.$id}`}>
        <img src={post.imageUrl} alt="PostImg" />
      </Link>
      <div className="flex-center gap-4 absolute bottom-2 left-2">
        <img
          src={userImage}
          alt="creatorImg"
          className="w-10 h-10 rounded-full"
        />
        <p className="bg-black/80  p-2 rounded-lg">{username}</p>
      </div>
    </li>
  );
}

export default ProfileUserPosts;
