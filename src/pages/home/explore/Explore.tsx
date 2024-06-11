import {
  useGetPosts,
  useGetRecentPosts,
} from "@/lib/react-query/QueriesAndMutations";
import { useEffect, useRef, useState } from "react";

import GridPostItem from "./GridPostItem";
import LoadingSpinner from "@/ui/LoadingSpinner";
import FilterPosts from "./FilterPosts";
import HeaderContainer from "./HeaderContainer";
import { shuffleArray } from "@/utils/helper";
import LoadMoreButton from "./LoadMoreButton";

function Explore() {
  const [query, setQuery] = useState("");
  const [postsAmount, setPostsAmount] = useState(6);
  const scrollDownRef = useRef<HTMLDivElement>(null);

  const { data, isPending: isLoading } = useGetPosts(postsAmount);
  const { data: totalPosts } = useGetRecentPosts();

  const posts = shuffleArray(data?.documents);
  console.log(posts);

  let filteredPosts = posts;

  if (query) {
    filteredPosts = totalPosts?.documents?.filter(
      (person) => person.creator.name === query
    );
  }
  useEffect(() => {
    if (scrollDownRef.current && postsAmount > 6) {
      scrollDownRef.current.scrollIntoView({ behavior: "instant" });
    }
  }, [isLoading, postsAmount]);
  return (
    <div className="explore-container">
      {isLoading ? (
        <div className="flex-1 flex-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          {" "}
          <FilterPosts
            setQuery={setQuery}
            query={query}
            posts={totalPosts?.documents}
          />
          <HeaderContainer totalPosts={filteredPosts?.length} />
          {filteredPosts && (
            <ul className="grid-container">
              {filteredPosts.map((post, index) => (
                <GridPostItem key={`page-${index}`} post={post} />
              ))}
            </ul>
          )}
          {totalPosts &&
            totalPosts?.documents?.length >= postsAmount &&
            !query && <LoadMoreButton setPostsAmount={setPostsAmount} />}
        </>
      )}
      <span ref={scrollDownRef}></span>
    </div>
  );
}

export default Explore;
