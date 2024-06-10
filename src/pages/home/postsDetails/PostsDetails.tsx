import { useGetPostById } from "@/lib/react-query/QueriesAndMutations";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { Link, useParams } from "react-router-dom";
import { useUserContext } from "@/context/AuthContext";
import DetailsInfo from "./DetailsInfo";
import DetailsImg from "./DetailsImg";
import PostContent from "./PostContent";
import { FaArrowLeft } from "react-icons/fa";
import LikePost from "../index/LikePost";

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
      <div className="flex-between w-full">
        <h2 className="text-3xl">Post Details</h2>
        <Link to={".."}>
          <FaArrowLeft className="text-2xl" />
        </Link>
      </div>
      <div className="p-5 post_details-card">
        <DetailsImg post={post} />
        <DetailsInfo post={post} user={user} />
        <PostContent post={post} />
        {post && <LikePost post={post} />}
      </div>
    </div>
  );
}

export default PostsDetails;
