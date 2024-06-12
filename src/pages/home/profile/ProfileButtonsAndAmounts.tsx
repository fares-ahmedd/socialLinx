import { Models } from "appwrite";

type Props = {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  currentUser: Models.Document | undefined;
};

function ProfileButtonsAndAmounts({
  currentIndex,
  setCurrentIndex,
  currentUser,
}: Props) {
  return (
    <div className="flex-between ">
      <div className="flex uppercase">
        <button
          className={`link-btn ${
            currentIndex === 0 ? "border-r  bg-sky-800 underline" : ""
          }  `}
          onClick={() => setCurrentIndex(0)}
        >
          Posts
        </button>
        <button
          className={`link-btn ${
            currentIndex === 1 ? "border-r  bg-sky-800 underline" : ""
          }`}
          onClick={() => setCurrentIndex(1)}
        >
          Saved Posts
        </button>
      </div>
      <div>
        <span className="block">Total Posts: {currentUser?.posts.length}</span>
        <span>Total Saved Posts: {currentUser?.save.length}</span>
      </div>
    </div>
  );
}

export default ProfileButtonsAndAmounts;
