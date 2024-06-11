type Props = {
  setPostsAmount: React.Dispatch<React.SetStateAction<number>>;
};

function LoadMoreButton({ setPostsAmount }: Props) {
  return (
    <button
      onClick={() => setPostsAmount((prev) => prev + 6)}
      className="mt-4 p-4 rounded-lg bg-primary-300 text-xl duration-300 hover:bg-orange-900 flex-center gap-2"
    >
      load more posts <span className="text-2xl font-bold"> +</span>
    </button>
  );
}

export default LoadMoreButton;
