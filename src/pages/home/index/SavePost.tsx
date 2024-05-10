import { useUserContext } from "@/context/AuthContext";
import { deleteSavedPost } from "@/lib/appwrite/api";
import {
  useGetCurrentUser,
  useSavePost,
} from "@/lib/react-query/QueriesAndMutations";
import Tooltip from "@/ui/Tooltip";
import { Models } from "appwrite";
import { useState } from "react";

function SavePost({ post }: { post: Models.Document }) {
  const [isSaved, setIsSaved] = useState(false);
  const { mutate: savePost } = useSavePost();
  const { data: currentUser } = useGetCurrentUser();
  const { user } = useUserContext();

  function handleSavePost() {
    const savedPostRecord = currentUser?.save.find(
      (record: Models.Document) => record.$id === post.$id
    );
    if (savedPostRecord) {
      setIsSaved(false);
      deleteSavedPost(savedPostRecord.$id);
    } else {
      savePost({ postId: post.$id, userId: user.id });
      setIsSaved(true);
    }
  }

  return (
    <button onClick={handleSavePost}>
      <Tooltip content="save post" position="top">
        <img
          src={`${isSaved ? "/save-sold.png" : "/save-outline.png"}`}
          alt="save post icon"
          width={30}
          height={30}
        />
      </Tooltip>
    </button>
  );
}

export default SavePost;
