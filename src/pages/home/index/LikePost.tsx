import { useUserContext } from "@/context/AuthContext";
import Tooltip from "@/ui/Tooltip";
import { Models } from "appwrite";

function LikePost({ post }: { post: Models.Document }) {
  const { user } = useUserContext();
  return (
    <button>
      <Tooltip
        content="Love"
        position="top"
        className="flex items-center gap-2 mt-4 w-fit"
      >
        <img
          src="/heart-outline.png"
          alt="heart icon"
          width={30}
          height={30}
          className="cursor-pointer"
        />
        <span className="text-white select-none">0</span>
      </Tooltip>
    </button>
  );
}

export default LikePost;
