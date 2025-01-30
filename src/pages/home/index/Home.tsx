import { useGetRecentPosts } from "@/lib/react-query/QueriesAndMutations";
import { Models } from "appwrite";
import PostItem from "./PostItem";
import PostSkeleton from "./PostSkeleton";
import RightSidebar from "@/features/right-sidebar/RightSidebar";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
const LIMIT = 4;
function Home() {
  const { data, isPending: isLoadingPosts, isError } = useGetRecentPosts();
  const [posts, setPosts] = useState<Models.Document[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const handleLoadMore = () => {
    if (data?.documents) {
      const newPosts = data.documents.slice(posts.length, posts.length + LIMIT);
      if (newPosts.length > 0) {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setHasMore(posts.length + newPosts.length < data.documents.length);
      } else {
        setHasMore(false);
      }
    }
  };

  useEffect(() => {
    if (data?.documents) {
      setPosts(data.documents.slice(0, LIMIT));
      setHasMore(data.documents.length > LIMIT);
    }
  }, [data]);
  if (isError)
    return (
      <div className="justify-center w-full flex-center">
        Something went wrong 💥
      </div>
    );
  return (
    <>
      <div className="home-container flex-1">
        <div className="home-posts">
          <h2 className="w-full text-left h3-bold md:h2-bold ">Home</h2>
          {!isLoadingPosts ? (
            <>
              <ul className="flex flex-col flex-1 w-full gap-4">
                {posts &&
                  posts?.map((post: Models.Document) => (
                    <PostItem post={post} key={post.$id} />
                  ))}
              </ul>
              {hasMore && (
                <Button className="prim-btn" onClick={handleLoadMore}>
                  Load More
                </Button>
              )}
            </>
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
      <RightSidebar />
    </>
  );
}

export default Home;
