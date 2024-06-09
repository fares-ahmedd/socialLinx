import { useGetPostById } from "@/lib/react-query/QueriesAndMutations";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { useParams } from "react-router-dom";
import { useUserContext } from "@/context/AuthContext";
import DetailsInfo from "./DetailsInfo";
import DetailsImg from "./DetailsImg";

function PostsDetails() {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || "");
  const { user } = useUserContext();
  return (
    <div className="post_details-container">
      {isPending ? (
        <LoadingSpinner />
      ) : (
        <div className="p-5 post_details-card">
          <DetailsImg post={post} />
          <DetailsInfo post={post} user={user} />
        </div>
      )}
    </div>
  );
}

export default PostsDetails;
