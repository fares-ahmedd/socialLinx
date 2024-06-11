type Props = {
  totalPosts: number | undefined;
};
function HeaderContainer({ totalPosts }: Props) {
  return (
    <div className="flex-between w-full max-w-5xl mt-16 mb-7 flex-wrap gap-2">
      <h3 className="body-bold md:h3-bold text-gray-500">Popular Today</h3>
      <span className="block mt-1">Total Posts: {totalPosts}</span>
    </div>
  );
}

export default HeaderContainer;
