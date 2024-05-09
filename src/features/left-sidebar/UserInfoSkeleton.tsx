function UserInfoSkeleton() {
  return (
    <section className="flex items-center gap-3 animate-pulse">
      <div className="w-10 h-10 rounded-full bg-dark-4"></div>
      <div className="flex flex-col gap-2">
        <p className="h-3 w-[150px] rounded-lg bg-dark-4 "></p>
        <p className="h-3 w-[70px] rounded-lg bg-dark-4 "></p>
      </div>
    </section>
  );
}

export default UserInfoSkeleton;
