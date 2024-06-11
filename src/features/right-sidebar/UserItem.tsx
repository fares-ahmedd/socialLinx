import { Models } from "appwrite";
import { Link } from "react-router-dom";

type Props = {
  user: Models.Document;
};

function UserItem({ user }: Props) {
  return (
    <li className="border border-gray-700 p-6 rounded-lg">
      <Link to={`/profile/${user.$id}`}>
        <img
          src={user.imageUrl}
          alt="Logo"
          className="w-20 h-20 rounded-full m-auto"
        />
        <p className="text-3xl my-2 text-center ">{user.name}</p>
        <p className="text-gray-400 text-center">{user.username}</p>
      </Link>
      <button className="prim-btn mt-4 mx-auto p-2">Follow</button>
    </li>
  );
}

export default UserItem;
