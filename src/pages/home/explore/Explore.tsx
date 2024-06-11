import { Input } from "@/components/ui/input";
import {
  useGetPosts,
  useSearchPosts,
} from "@/lib/react-query/QueriesAndMutations";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useDebounce from "./useDebounce";
import GridPostList from "./GridPostList";
import LoadingSpinner from "@/ui/LoadingSpinner";

function Explore() {
  const [query, setQuery] = useState("");
  // const debouncedQuery = useDebounce(query, 500);
  // const { data: searchedPosts, isFetching: isSearchFetching } =
  //   useSearchPosts(query);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isPending: isLoading,
  } = useGetPosts();
  const posts = data?.pages[0];

  const Creators = posts?.documents
    .filter(
      (person, index, arr) =>
        arr.findIndex((obj) => obj.creator.name === person.creator.name) ===
        index
    )
    .map((creator) => creator.creator.name);

  if (isLoading)
    return (
      <div className="h-screen w-full flex-center">
        {" "}
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="explore-container">
      <div className="explore-inner_container ">
        <h2 className="h3-bold md:h2-bold w-full">Filter Users</h2>
        <select
          value={query}
          className="w-full bg-dark-3 py-2 px-4 rounded-md"
          onChange={(e) => setQuery(e.target.value)}
        >
          <option value="" disabled>
            Filter Posts by users names
          </option>
          {Creators?.map((creator) => (
            <option value={creator} key={creator}>
              {creator}
            </option>
          ))}
        </select>
      </div>
      <div className="flex-between w-full max-w-5xl mt-16 mb-7 flex-wrap gap-2">
        <h3 className="body-bold md:h3-bold text-gray-500">Popular Today</h3>
        <span className="block mt-1">Total Posts: {posts?.total}</span>
      </div>

      <div className="flex flex-wrap gap-9 w-full max-w-5xl">
        <ul className="grid-container">
          {posts &&
            posts.documents.map((post, index) => (
              <GridPostList key={`page-${index}`} post={post} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Explore;
