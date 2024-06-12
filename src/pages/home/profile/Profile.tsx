import { useUserContext } from "@/context/AuthContext";
import { useGetUserById } from "@/lib/react-query/QueriesAndMutations";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { FaEdit } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import ProfileStatus from "./ProfileStatus";

function Profile() {
  const { id } = useParams();
  const { user } = useUserContext();
  const { pathname } = useLocation();

  const { data: currentUser, isLoading } = useGetUserById(id || "");
  console.log(currentUser);

  if (!currentUser || isLoading)
    return (
      <div className="flex-center w-full h-screen">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="p-8 w-full">
      <img
        src={currentUser.imageUrl}
        alt="Profile Img"
        className="h-32 w-32 rounded-full"
      />
      <section className="my-4 flex-between items-center">
        <article>
          <p className="text-3xl ">{currentUser.name}</p>
          <p className=" text-gray-500">@{currentUser.username}</p>
        </article>

        <Link to={`/profile/${id}`} className="prim-btn ">
          <FaEdit className="text-3xl" /> Edit Profile
        </Link>
      </section>

      <ProfileStatus postAmount={currentUser.posts.length} />
    </div>
  );
}

export default Profile;
