import { Models } from "appwrite";
import { useState } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

type Props = {
  user: Models.Document;
};

function UserItem({ user }: Props) {
  const [value, setValue] = useLocalStorage("followed", []);
  const [isFollow, setIsFollow] = useState(false);

  const filterFollow = value.includes(user.$id);

  function handleClick() {
    setIsFollow(true);
    const isInList = value.find((val: any) => val === user.$id);

    if (!isInList) {
      setValue((prev: any) => [...prev, user.$id]);
    }
  }

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
      <button
        className={`prim-btn mt-4 mx-auto p-2 ${
          isFollow || filterFollow ? "bg-dark-3 text-white hover:bg-dark-3" : ""
        }`}
        onClick={handleClick}
      >
        {isFollow || filterFollow ? "Followed" : "Follow"}
      </button>
    </li>
  );
}

export default UserItem;
