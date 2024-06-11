import { useGetPosts } from "@/lib/react-query/QueriesAndMutations";
import { useEffect, useRef, useState } from "react";

import GridPostItem from "./GridPostItem";
import LoadingSpinner from "@/ui/LoadingSpinner";
import FilterPosts from "./FilterPosts";
import HeaderContainer from "./HeaderContainer";

function Explore() {
  const [query, setQuery] = useState("");
  const [postsAmount, setPostsAmount] = useState(6);
  const scrollDownRef = useRef<HTMLDivElement>(null);
  console.log(scrollDownRef.current);

  const { data, isPending: isLoading } = useGetPosts(postsAmount);
  const posts = data?.documents;
  let filteredPosts = posts;

  if (query) {
    filteredPosts = posts?.filter((person) => person.creator.name === query);
  }
  useEffect(() => {
    if (scrollDownRef.current) {
      scrollDownRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLoading]);
  return (
    <div className="explore-container">
      {isLoading ? (
        <div className="flex-1 flex-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {" "}
          <FilterPosts setQuery={setQuery} query={query} posts={posts} />
          <HeaderContainer totalPosts={filteredPosts?.length} />
          {filteredPosts && (
            <ul className="grid-container">
              {filteredPosts.map((post, index) => (
                <GridPostItem key={`page-${index}`} post={post} />
              ))}
            </ul>
          )}
          <button onClick={() => setPostsAmount((prev) => prev + 3)}>
            load more posts
          </button>
        </>
      )}
      <span ref={scrollDownRef}></span>
    </div>
  );
}

export default Explore;
