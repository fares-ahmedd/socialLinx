import { useGetRecentPosts } from "@/lib/react-query/QueriesAndMutations";
import { Models } from "appwrite";
import PostItem from "./PostItem";
import PostSkeleton from "./PostSkeleton";

function Home() {
  const {
    data: posts,
    isPending: isLoadingPosts,
    isError,
  } = useGetRecentPosts();

  if (isError)
    return (
      <div className="justify-center w-full flex-center">
        Something went wrong 💥
      </div>
    );
  return (
    <main className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="w-full text-left h3-bold md:h2-bold ">Home</h2>
          {!isLoadingPosts ? (
            <ul className="flex flex-col flex-1 w-full gap-4">
              {posts &&
                posts?.documents.map((post: Models.Document) => (
                  <PostItem post={post} key={post.$id} />
                ))}
            </ul>
          ) : (
            <ul className="flex flex-col flex-1 w-full gap-4">
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}

export default Home;
