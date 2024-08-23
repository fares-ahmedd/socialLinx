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
    <section className="p-6 w-full">
      <div className="flex items-center gap-4 pb-4 border-b ">
        <div className="w-14 h-14">
          <img
            src="/save-sold.png"
            alt="Save Post"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl">Saved Posts </h1>
      </div>
      {savePosts?.length === 0 ? (
        <h5 className="m-6 text-xl">
          No posts have been added to your saved collection yet 🖨️
        </h5>
      ) : (
        <ul className="grid-container mt-3  ">
          {savePosts &&
            savePosts.map((post: any) => (
              <SavePostItem post={post} profile={false} />
            ))}
        </ul>
      )}
    </section>
  );
}

export default Saved;
