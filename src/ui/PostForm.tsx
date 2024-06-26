import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import FileUploader from "./FileUploader";
import { PostValidation } from "@/lib/validation";
import { Models } from "appwrite";
import {
  useCreatePost,
  useUpdatePost,
} from "@/lib/react-query/QueriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import { toast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { COUNTRIES, TAGS } from "@/utils/constants";

type PostFormPorps = {
  post?: Models.Document;
  action: "create" | "update";
};

function PostForm({ post, action }: PostFormPorps) {
  const { user } = useUserContext();
  const { mutateAsync: createPost, isPending: isLoading } = useCreatePost();
  const { mutateAsync: updatePost, isPending: isUpdating } = useUpdatePost();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      caption: post ? post?.caption : "",
      file: [],
      location: post ? post?.location : "",
      tags: post ? post?.tags.join(",") : "",
    },
  });

  async function onSubmit(values: z.infer<typeof PostValidation>) {
    console.log(values);

    if (post && action === "update") {
      const updatedPost = await updatePost({
        ...values,
        postId: post.$id,
        imageId: post?.imageId,
        imageUrl: post?.imageUrl,
      });

      if (!updatedPost) {
        toast({ title: "Update failed, Please Try again!" });
      }
      return navigate(`/posts/${post.$id}`);
    }

    const newPost = await createPost({
      ...values,
      userId: user.id,
    });
    if (!newPost) {
      toast({
        title:
          "invalid Post , please try again and make sure you enter the correct values",
      });
      return;
    }
    navigate("/");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col w-full max-w-3xl gap-4"
      >
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Caption</FormLabel>
              <FormControl>
                <Textarea
                  className="shad-textarea custom-scrollbar"
                  placeholder="Post caption..."
                  {...field}
                  disabled={isLoading || isUpdating}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add file</FormLabel>
              <FormControl>
                <FileUploader
                  fieldChange={field.onChange}
                  mediaUrl={post?.imageUrl}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add Location</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="w-full bg-dark-3 py-2 px-4 rounded-md"
                  disabled={isLoading || isUpdating}
                >
                  <option value="" disabled>
                    Please Select your country
                  </option>
                  {COUNTRIES.map((value) => (
                    <option value={value} key={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add Tag</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="w-full bg-dark-3 py-2 px-4 rounded-md"
                  disabled={isLoading || isUpdating}
                >
                  <option value="" disabled>
                    Please Select a Tag
                  </option>
                  {TAGS.map((value) => (
                    <option value={value.tag} key={value.tag}>
                      {value.tag} {value.emoji}
                    </option>
                  ))}
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end gap-4">
          <Link to={".."}>
            <Button
              type="button"
              className="shad-button_dark_4"
              disabled={isLoading || isUpdating}
            >
              Cancel
            </Button>
          </Link>
          <Button
            type="submit"
            className="h-12 bg-primary-500 hover:bg-primary-300 md:w-[150px] flex-center gap-2 "
            disabled={isLoading || isUpdating}
          >
            {isLoading || isUpdating ? (
              <>
                <LoadingSpinner /> Confirm...
              </>
            ) : (
              "Confirm"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default PostForm;
