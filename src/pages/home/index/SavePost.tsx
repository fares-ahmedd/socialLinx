import { useToast } from "@/components/ui/use-toast";
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
  const { toast } = useToast();
  const { mutate: savePost } = useSavePost();
  const { data: currentUser, isPending } = useGetCurrentUser();
  const { mutate: deleteSavedPost } = useDeleteSavedPost();

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
      toast({
        title: "Unsaved Post ",
        description: "post has been removed from your saved post list",
      });
      deleteSavedPost(savedPostRecord.$id);
    } else {
      setIsSaved(true);
      toast({
        title: "Saved Post ",
        description: "post has been saved successfully",
      });
      savePost({ postId: post?.$id, userId: currentUser?.$id as string });
    }
  }

  if (isPending)
    return (
      <div className="w-[30px] h-[30px] bg-dark-4 rounded-md animate-pulse" />
    );
  return (
    <button onClick={handleSavePost} disabled={delayClick}>
      <Tooltip content="Save" position="top" className="w-[30px] h-[30px]">
        <img
          src={`${isSaved ? "/save-sold.webp" : "/save-outline.webp"}`}
          alt="save post icon"
          className="w-full h-full object-cover"
        />
      </Tooltip>
    </button>
  );
}

export default SavePost;
