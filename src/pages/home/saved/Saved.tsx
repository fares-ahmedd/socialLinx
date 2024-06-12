import { useGetCurrentUser } from "@/lib/react-query/QueriesAndMutations";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { Models } from "appwrite";
import SavePostItem from "./SavePostItem";

function Saved() {
  const { data: currentUser, isLoading } = useGetCurrentUser();
  const savePosts = currentUser?.save
    .map((savePost: Models.Document) => ({
      ...savePost.post,
      creator: {
        imageUrl: currentUser.imageUrl,
        name: currentUser.name,
      },
    }))
    .reverse();

  if (isLoading)
    return (
      <div className="h-screen w-full flex-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="p-6">
      <div className="flex-center gap-4 pb-4 border-b ">
        <img src="/save-sold.png" alt="Save Post" className="w-14 h-14" />

        <h1 className="text-3xl">Saved Posts </h1>
      </div>
      {savePosts?.length === 0 ? (
        <h5 className="m-6 text-xl">
          No posts have been added to your saved collection yet 🖨️
        </h5>
      ) : (
        <ul className="gridLayout p-6">
          {savePosts &&
            savePosts.map((post: any) => (
              <SavePostItem post={post} profile={false} />
            ))}
        </ul>
      )}
    </div>
  );
}

export default Saved;
