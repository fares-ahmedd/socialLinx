import { Models } from "appwrite";
import PostCreatorInfo from "./PostCreatorInfo";

type PostItemProps = {
  post: Models.Document;
};

function PostItem({ post }: PostItemProps) {
  return (
    <li>
      <div className="post-card">
        <PostCreatorInfo post={post} />
      </div>
    </li>
  );
}

export default PostItem;
