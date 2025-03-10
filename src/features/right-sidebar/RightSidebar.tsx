import { useGetUsers } from "@/lib/react-query/QueriesAndMutations";
import LoadingSpinner from "@/ui/LoadingSpinner";
import UserItem from "./UserItem";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
import { useUserContext } from "@/context/AuthContext";
import { shuffleArray } from "@/utils/helper";
type Props = {
  isPage?: boolean;
};
function RightSidebar({ isPage = false }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useUserContext();
  const { data, isLoading, isError: isErrorCreators } = useGetUsers();
  const allUsers = useMemo(
    () => shuffleArray(data?.documents),
    [data?.documents]
  );

  const filterCurrentUser = allUsers?.filter((usr) => usr.$id !== user.id);

  const filteredUsers = filterCurrentUser?.filter((usr) =>
    usr.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading)
    return (
      <div
        className={`h-screen w-full ${
          !isPage ? "max-w-52" : ""
        } flex-center max-lg:hidden `}
      >
        <LoadingSpinner />
      </div>
    );
  return (
    <aside
      className={`overflow-auto max-lg:max-w-[280px] px-2 custom-scrollbar ${
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
    </aside>
  );
}

export default RightSidebar;
