import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Explore() {
  const [query, setQuery] = useState("");

  const searchResults = query !== "";
  // const isShowPosts =
  //   !searchResults &&
  //   PostsDetails.pages.every((item) => item.documents.length === 0);
  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full">Search Posts</h2>
        <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4 relative">
          <FaSearch className="w-[24px] h-[24px] absolute right-4 top-3" />
          <Input
            type="text"
            placeholder="Search..."
            className="explore-search font-bold"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-between w-full max-w-5xl mt-16 mb-7">
        <h3 className="body-bold md:h3-bold text-gray-500">Popular Today</h3>
        <span className="block mt-1">Results: X Post matched "rewrew"</span>
      </div>
      <div className="flex flex-wrap gap-9 w-full max-w-5xl">
        {posts.pages.map((item, index) => (
          <GridPostList key={`page-${index}`} posts={item.documents} />
        ))}
      </div>
    </div>
  );
}

export default Explore;
