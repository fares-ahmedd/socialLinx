// import { Models } from "appwrite";
// import { FaSearch } from "react-icons/fa";
// import GridPostList from "./GridPostList";

// type Props = {
//   isSearchFetching: boolean;
//   searchedPosts: Models.Document[] | undefined;
// };

// function SearchResults({ isSearchFetching, searchedPosts }: Props) {
//   if (isSearchFetching)
//     return (
//       <h6>
//         Searching... <FaSearch />
//       </h6>
//     );
//   function SearchResults({ isSearchFetching, searchedPosts }: Props) {
//     if (searchedPosts && searchedPosts.documents.length > 0)
//       return <GridPostList posts={searchedPosts.documents} />;
//     return (
//       <p className="text-light-4 mt-10 text-center w-full">No Results Found</p>
//     );
//   }
// }
// export default SearchResults;
