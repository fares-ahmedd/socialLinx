import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { SignupValidation } from "@/lib/validation";
import { z } from "zod";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { Link } from "react-router-dom";
function SignUpPage() {
  const isLoading = false;
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    // const newUser = await createUserAccount()
  }

  return (
    <Form {...form}>
      <div className="flex-col sm:w-[80%] flex-center mb-6 ">
        <div className="flex items-center">
          <img src={"/logo.png"} alt="Logo" className="w-[50px]" />
          <span className="logo-text">SocialLinx</span>
        </div>
        <h2 className="text-white h3-bold md:h2-bold">Create a new Account</h2>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-col w-[70%] md:max-w-[400px]  max-w-[300px] gap-3 mt-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name:</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username:</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input type="email" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password:</FormLabel>
              <FormControl>
                <Input type="password" className="shad-input" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="shad-button_primary"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <LoadingSpinner /> &nbsp; Loading...
            </>
          ) : (
            "Signup"
          )}
        </Button>
        <p className="mt-2 text-center text-small-regular text-light-2">
          Already have an account?{" "}
          <Link
            to={"/signin"}
            className="text-lg font-bold text-primary-500 hover:text-primary-300 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </Form>
  );
}

export default SignUpPage;
