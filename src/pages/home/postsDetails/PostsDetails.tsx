import { useGetPostById } from "@/lib/react-query/QueriesAndMutations";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { useParams } from "react-router-dom";
import { useUserContext } from "@/context/AuthContext";
import DetailsInfo from "./DetailsInfo";
import DetailsImg from "./DetailsImg";
import PostContent from "./PostContent";

function PostsDetails() {
  const { id } = useParams();
  const { data: post, isPending: isLoading } = useGetPostById(id || "");
  const { user } = useUserContext();

  if (isLoading)
    return (
      <div className="h-screen w-full flex-center">
        <LoadingSpinner />
      </div>
    );
  return (
    <div className="post_details-container ">
      <div className="p-5 post_details-card">
        <DetailsImg post={post} />
        <DetailsInfo post={post} user={user} />
        <PostContent post={post} />
      </div>
    </div>
  );
}

export default PostsDetails;
