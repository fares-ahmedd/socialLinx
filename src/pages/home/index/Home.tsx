import { useGetRecentPosts } from "@/lib/react-query/QueriesAndMutations";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { Models } from "appwrite";
import PostItem from "./PostItem";

function Home() {
  const { data: posts, isPending: isLoading, isError } = useGetRecentPosts();

  if (isLoading || isError)
    return (
      <main className="justify-center w-full flex-center">
        {isError ? "Something went wrong 💥" : <LoadingSpinner />}
      </main>
    );
  return (
    <main className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="w-full text-left h3-bold md:h2-bold">Home</h2>
          {posts ? (
            <ul className="flex flex-col flex-1 w-full gap-4">
              {posts?.documents.map((post: Models.Document) => (
                <PostItem post={post} key={post.$id} />
              ))}
            </ul>
          ) : (
            <h1>There no any posts yet</h1>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
