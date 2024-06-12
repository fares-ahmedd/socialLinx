import { useGetUsers } from "@/lib/react-query/QueriesAndMutations";
import LoadingSpinner from "@/ui/LoadingSpinner";
import UserItem from "./UserItem";
import { Input } from "@/components/ui/input";
import { useState } from "react";
type Props = {
  isPage: boolean;
};
function RightSidebar({ isPage = false }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError: isErrorCreators } = useGetUsers();
  const allUsers = data?.documents;

  const filteredUsers = allUsers?.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log("Right sidebar run");

  if (isLoading)
    return (
      <div
        className={`h-screen w-full ${!isPage ? "max-w-52" : ""} flex-center`}
      >
        <LoadingSpinner />
      </div>
    );
  return (
    <div
      className={`overflow-auto px-6 custom-scrollbar ${
        !isPage ? "max-lg:hidden" : ""
      }  ${isPage ? "w-full" : ""}`}
    >
      <h3 className="my-4 text-center text-3xl">Users</h3>
      <Input
        className="shad-input my-3 block  font-bold"
        placeholder="Search User"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {isErrorCreators && <span>Something went wrong !</span>}
      {filteredUsers && (
        <ul
          className={`${!isPage ? "space-y-4" : ""} ${
            isPage ? "gridLayout" : ""
          }`}
        >
          {filteredUsers.map((user) => (
            <UserItem user={user} key={user.$id} />
          ))}
        </ul>
      )}
      {filteredUsers?.length === 0 && <p>No Users Matched: "{searchQuery}"</p>}
    </div>
  );
}

export default RightSidebar;
