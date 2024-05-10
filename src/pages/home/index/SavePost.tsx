import { useUserContext } from "@/context/AuthContext";
import {
  useDeleteSavedPost,
  useGetCurrentUser,
  useSavePost,
} from "@/lib/react-query/QueriesAndMutations";
import Tooltip from "@/ui/Tooltip";
import { Models } from "appwrite";
import { useEffect, useState } from "react";

function SavePost({ post }: { post: Models.Document }) {
  const [isSaved, setIsSaved] = useState(false);
  const { mutate: savePost } = useSavePost();
  const { data: currentUser, isLoading } = useGetCurrentUser();
  const { mutate: deleteSavedPost, isPending: isDeleting } =
    useDeleteSavedPost();
  const { user } = useUserContext();
  const savedPostRecord = currentUser?.save.find(
    (record: Models.Document) => record.post.$id === post.$id
  );

  useEffect(() => {
    setIsSaved(savedPostRecord ? true : false);
  }, [currentUser, savedPostRecord]);
  function handleSavePost() {
    if (savedPostRecord) {
      setIsSaved(false);
      return deleteSavedPost(savedPostRecord.$id);
    }
    savePost({ postId: post.$id, userId: user.id });
    setIsSaved(true);
  }

  if (isLoading)
    return (
      <div className="w-[30px] h-[30px] rounded-lg bg-dark-4 animate-pulse"></div>
    );
  return (
    <button onClick={handleSavePost} disabled={isDeleting}>
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
