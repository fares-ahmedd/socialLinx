import { useUserContext } from "@/context/AuthContext";
import { Link } from "react-router-dom";
import UserInfoSkeleton from "./UserInfoSkeleton";

function UserInfo() {
  const { user, isLoading } = useUserContext();

  if (isLoading) return <UserInfoSkeleton />;
  return (
    <article className="flex items-center gap-3">
      <Link to={`/profile/${user.id}`}>
        <img
          src={user.imageUrl || "/unknown.webp"}
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </Link>
      <div className="flex flex-col">
        <p className="body-bold">{user.name}</p>
        <p className="text-gray-500 small-regular">@{user.username}</p>
      </div>
    </article>
  );
}

export default UserInfo;
