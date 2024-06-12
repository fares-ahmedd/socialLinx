import { memo } from "react";

type Props = {
  postAmount?: number;
};
const ProfileStatus = memo(function ProfileStatus({ postAmount }: Props) {
  const randomFollowers = Math.ceil(Math.random() * 20);
  const randomFollowing = Math.ceil(Math.random() * 20);

  return (
    <div className="flex gap-6 divide-gray-500 mt-6">
      <p>
        <span className="text-xl font-black text-primary-300">
          {postAmount}{" "}
        </span>
        <span className="font-bold text-lg">Posts</span>
      </p>{" "}
      <p className="border-x-2 px-4">
        <span className="text-xl font-black text-primary-300 ">
          {randomFollowers}{" "}
        </span>
        <span className="font-bold text-lg">Followers</span>
      </p>{" "}
      <p>
        <span className="text-xl font-black text-primary-300">
          {randomFollowing}{" "}
        </span>
        <span className="font-bold text-lg">Following</span>
      </p>
    </div>
  );
});

export default ProfileStatus;
