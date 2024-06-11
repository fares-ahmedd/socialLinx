import { Models } from "appwrite";

type Props = {
  posts: Models.Document[] | undefined;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  query: string;
};

function FilterPosts({ setQuery, query, posts }: Props) {
  const Creators = posts
    ?.filter(
      (person, index, arr) =>
        arr.findIndex((obj) => obj.creator.name === person.creator.name) ===
        index
    )
    .map((creator) => creator.creator.name);
  return (
    <div className="explore-inner_container  ">
      <h2 className="h3-bold md:h2-bold w-full">Filter Users</h2>
      <select
        value={query}
        className="w-full bg-dark-3 py-4 px-6 rounded-md max-w-[350px]"
        onChange={(e) => setQuery(e.target.value)}
      >
        <option value="" disabled>
          Filter Posts by users names
        </option>
        <option value="">All Users</option>
        {Creators?.map((creator) => (
          <option value={creator} key={creator}>
            {creator}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterPosts;
