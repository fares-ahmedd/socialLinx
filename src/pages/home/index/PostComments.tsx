import { useGetUsersByIds } from "@/lib/react-query/QueriesAndMutations";
import CollapseText from "@/ui/CollapseText";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { formatDateString } from "@/utils/helper";
import { Models } from "appwrite";

function PostComments({ post }: { post: Models.Document }) {
  const comments = post?.comments?.map((comment: string) =>
    JSON.parse(comment)
  );

  const usersIds = comments.map((comment: any) => comment.userId);

  const { data: users, isPending: isLoading } = useGetUsersByIds(usersIds);

  if (comments.length < 1) return;

  if (isLoading)
    return (
      <div className="my-6 flex-center">
        <LoadingSpinner />
      </div>
    );

  return (
    <>
      <h3 className="my-2">Comments</h3>

      <section className=" bg-dark-1 rounded-md p-3 space-y-2">
        {comments.map((comment: any, index: number) => (
          <article className="flex-between border-b  pb-3 gap-2" key={index}>
            <div>
              <div className="h-11 w-11 rounded-full">
                <img
                  src={(users && users[index].imageUrl) ?? "/unknown.png"}
                  alt="user Comment"
                  className="rounded-full h-full w-full"
                />
              </div>
              <div>
                <h6 className="font-bold text-lg text-gray-400">
                  {users && users[index].name}
                </h6>

                <CollapseText content={comment.content} />
              </div>
            </div>

            <span>{formatDateString(comment.createdAt)}</span>
          </article>
        ))}
      </section>
    </>
  );
}

export default PostComments;
