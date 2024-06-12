import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  username: string;
  id: string | undefined;
};

function ProfileInfo({ name, username, id }: Props) {
  return (
    <section className="my-4 flex-between items-center">
      <article>
        <p className="text-3xl ">{name}</p>
        <p className=" text-gray-500">@{username}</p>
      </article>

      <Link to={`/update-profile/${id}`} className="prim-btn ">
        <FaEdit className="text-3xl" /> Edit Profile
      </Link>
    </section>
  );
}

export default ProfileInfo;
