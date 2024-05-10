import { useUserContext } from "@/context/AuthContext";
import { useLikePost } from "@/lib/react-query/QueriesAndMutations";
import Tooltip from "@/ui/Tooltip";
import { checkIsLiked } from "@/utils/helper";
import { Models } from "appwrite";
import { useState } from "react";

function LikePost({ post }: { post: Models.Document }) {
  const likesList = post.likes.map((userLike: Models.Document) => userLike.$id);
  const [likes, setLikes] = useState(likesList);
  const { user } = useUserContext();
  const { mutate: likePost } = useLikePost();

  function handleLikePost() {
    let newLikes = [...likes];
    const hasLiked = newLikes.includes(user.id);
    if (hasLiked) {
      newLikes = newLikes.filter((id) => id !== user.id);
    } else {
      newLikes.push(user.id);
    }
    setLikes(newLikes);
    likePost({ postId: post.$id, likesArray: newLikes });
  }
  return (
    <button onClick={handleLikePost}>
      <Tooltip
        content="Love"
        position="top"
        className="flex items-center gap-2 mt-4 w-fit"
      >
        <img
          src={`${
            checkIsLiked(likes, user.id)
              ? "/heart-sold.png"
              : "/heart-outline.png"
          } `}
          alt="heart icon"
          width={25}
          height={25}
          className={`cursor-pointer`}
        />
        <span className="text-white select-none">{likes.length}</span>
      </Tooltip>
    </button>
  );
}

export default LikePost;
