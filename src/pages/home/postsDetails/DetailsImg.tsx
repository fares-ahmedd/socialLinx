import { Models } from "appwrite";

interface Details {
  post: Models.Document | undefined;
}
function DetailsImg({ post }: Details) {
  return (
    <div className="max-w-[500px] max-h-[500px] w-[100%] h-[500px]   block m-auto rounded-md bg-dark-4  relative mb-4">
      <h1 className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 animate-pulse">
        Loading image...
      </h1>
      <img
        src={post?.imageUrl || "/no-post-image.jpg"}
        alt="no post"
        loading="lazy"
        className="absolute z-10 w-full h-full "
      />
    </div>
  );
}

export default DetailsImg;
