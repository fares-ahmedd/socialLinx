import { useUserContext } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import UserInfoSkeleton from "./UserInfoSkeleton";

function UserInfo() {
  const { user, isLoading } = useUserContext();

  if (isLoading) return <UserInfoSkeleton />;
  return (
    <Link to={`/profile/${user.id}`} className="flex items-center gap-3">
      <img
        src={user.imageUrl || "/unknown.png"}
        alt="profile"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col">
        <p className="body-bold">{user.name}</p>
        <p className="text-gray-500 small-regular">@{user.username}</p>
      </div>
    </Link>
  );
}

export default UserInfo;
