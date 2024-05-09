function PostSkeleton() {
  return (
    <li>
      <div className="post-card animate-pulse">
        <div className="flex-between">
          <div className="flex items-center gap-3 ">
            <div className="w-[70px] h-[70px] rounded-full bg-dark-4"></div>
            <div className="flex flex-col">
              <p className="w-[120px] h-6 rounded-md bg-dark-4"></p>
              <div className="gap-2 mt-2 grow flex-center">
                <p className="w-[100px] h-4 rounded-md bg-dark-4"></p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-2 ">
          <p className="w-full h-4 rounded-md bg-dark-4"></p>
          <p className="w-full h-4 rounded-md bg-dark-4"></p>
          <p className="w-[80px] h-4 rounded-md bg-dark-4"></p>
        </div>
        <div className="w-full h-[300px] bg-dark-4 rounded-md"></div>
      </div>
    </li>
  );
}

export default PostSkeleton;
