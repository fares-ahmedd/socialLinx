import { useUserContext } from "@/context/AuthContext";
import { useGetUserById } from "@/lib/react-query/QueriesAndMutations";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { useParams } from "react-router-dom";
import ProfileStatus from "./ProfileStatus";
import ProfileBio from "./ProfileBio";
import ProfileInfo from "./ProfileInfo";
import { useState } from "react";
import SavePostItem from "../saved/SavePostItem";
import ProfileUserPosts from "./ProfileUserPosts";
import ProfileButtonsAndAmounts from "./ProfileButtonsAndAmounts";

function Profile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();
  const { user } = useUserContext();

  const { data: currentUser, isLoading } = useGetUserById(id || "");

  if (!currentUser || isLoading)
    return (
      <div className="flex-center w-full h-screen">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="p-8 w-full overflow-auto custom-scrollbar ">
      <img
        src={currentUser.imageUrl}
        alt="Profile Img"
        className="h-32 w-32 rounded-full"
      />
      <ProfileInfo
        name={currentUser.name}
        username={currentUser.username}
        id={id}
      />
      <ProfileStatus postAmount={currentUser.posts.length} />
      {currentUser.bio && <ProfileBio bio={currentUser.bio} />}
      {currentUser.$id === user.id && (
        <ProfileButtonsAndAmounts
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          currentUser={currentUser}
        />
      )}
      {currentIndex === 0 && (
        <>
          <h6 className="mt-6 pb-4 border-b">{currentUser.name}'s Posts</h6>
          <ul className="gridLayout my-6 overflow-auto">
            {currentUser.posts.map((post: any) => (
              <ProfileUserPosts
                post={post}
                userImage={currentUser.imageUrl}
                username={currentUser.name}
              />
            ))}
          </ul>
        </>
      )}
      {currentIndex === 1 && (
        <ul className="gridLayout my-6 overflow-auto">
          {currentUser.save.length > 1 ? (
            currentUser.save.map((post: any) => (
              <SavePostItem post={post} profile={true} key={post.$id} />
            ))
          ) : (
            <p className="text-lg"> You have't save any posts yet</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default Profile;
