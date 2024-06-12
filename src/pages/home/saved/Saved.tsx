import { useGetCurrentUser } from "@/lib/react-query/QueriesAndMutations";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { Models } from "appwrite";
import { Link } from "react-router-dom";

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
  console.log(savePosts);

  if (isLoading)
    return (
      <div className="h-screen w-full flex-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="p-6">
      <div className="flex-center gap-4">
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
              <li key={post.$id} className="relative">
                <Link to={`/posts/${post.$id}`}>
                  <img src={post.imageUrl} alt="PostImg" />
                </Link>
                <div className="flex-center gap-4 absolute bottom-2 left-2">
                  <img
                    src={post.creator.imageUrl}
                    alt="creatorImg"
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="bg-black/80  p-2 rounded-lg">
                    {post.creator.name}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Saved;
