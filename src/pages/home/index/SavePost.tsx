import { useUserContext } from "@/context/AuthContext";
import {
  useDeleteSavedPost,
  useGetCurrentUser,
  useSavePost,
} from "@/lib/react-query/QueriesAndMutations";
import Tooltip from "@/ui/Tooltip";
import { Models } from "appwrite";
import { useEffect, useState } from "react";

function SavePost({ post }: { post: Models.Document | undefined }) {
  const [delayClick, setDelayClick] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { mutate: savePost } = useSavePost();
  const { data: currentUser } = useGetCurrentUser();

  const { mutate: deleteSavedPost } = useDeleteSavedPost();
  const { user } = useUserContext();
  const savedPostRecord = currentUser?.save.find(
    (record: Models.Document) => record?.post?.$id === post?.$id
  );

  useEffect(() => {
    setIsSaved(savedPostRecord ? true : false);
  }, [currentUser, savedPostRecord]);
  function handleSavePost() {
    setDelayClick(true);
    setTimeout(() => {
      setDelayClick(false);
    }, 2000);
    if (isSaved) {
      setIsSaved(false);
      deleteSavedPost(savedPostRecord.$id);
    } else {
      setIsSaved(true);
      savePost({ postId: post?.$id, userId: user.id });
    }
  }

  return (
    <button onClick={handleSavePost} disabled={delayClick}>
      <Tooltip content="save post" position="top">
        <img
          src={`${isSaved ? "/save-sold.png" : "/save-outline.png"}`}
          alt="save post icon"
          className="w-[30px] h-[30px]"
        />
      </Tooltip>
    </button>
  );
}

export default SavePost;
