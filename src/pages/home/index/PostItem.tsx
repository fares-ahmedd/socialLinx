import { Models } from "appwrite";
import PostCreatorInfo from "./PostCreatorInfo";
import PostContent from "./PostContent";

type PostItemProps = {
  post: Models.Document;
};

function PostItem({ post }: PostItemProps) {
  return (
    <li>
      <div className="post-card">
        <PostCreatorInfo post={post as Models.Document} />
        <PostContent post={post} />
      </div>
    </li>
  );
}

export default PostItem;
