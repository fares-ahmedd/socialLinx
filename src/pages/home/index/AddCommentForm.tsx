import { useToast } from "@/components/ui/use-toast";
import { useUserContext } from "@/context/AuthContext";
import { useAddComment } from "@/lib/react-query/QueriesAndMutations";
import { Models } from "appwrite";
import { useState } from "react";
import { IoSend } from "react-icons/io5";

function AddCommentForm({ post }: { post: Models.Document }) {
  const [query, setQuery] = useState("");
  const { mutate: addCommentToPost, isPending: isLoading } = useAddComment();
  const { user } = useUserContext();
  const { toast } = useToast();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!query.trim()) return;

    addCommentToPost({
      content: query,
      postId: post.$id,

      userId: user.id,
    });
    setQuery("");
    toast({ description: "Your comment has been added to the post" });
  };
  return (
    <form className="flex items-center gap-2  my-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a comment..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="shad-input rounded-lg px-3 w-full "
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={!query.trim() || isLoading}
        className=" disabled:text-slate-700"
      >
        <IoSend className="text-3xl " />
      </button>
    </form>
  );
}

export default AddCommentForm;
