import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { SigninValidation } from "@/lib/validation";
import { z } from "zod";
import LoadingSpinner from "../../ui/LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";
import { useSignInAccount } from "@/lib/react-query/QueriesAndMutations";
import { useUserContext } from "@/context/AuthContext";

function LoginPage() {
  const { mutateAsync: signInAccount, isPending: isLogging } =
    useSignInAccount();
  const { toast } = useToast();
  const { checkAuthUser } = useUserContext();
  const navigate = useNavigate();
  // 1. Define your form.
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(user: z.infer<typeof SigninValidation>) {
    const session = await signInAccount(user);
    console.log(session);

    if (!session) {
      toast({
        title: "Sign in Failed. please try again.",
      });
      return;
    }
    const isLoggedIn = await checkAuthUser();
    console.log(isLoggedIn);

    if (isLoggedIn) {
      form.reset();
      navigate("/");
    } else {
      toast({
        title: "Login Failed. please try again.",
      });
      return;
    }
  }

  return (
    <Form {...form}>
      <div className="flex-col sm:w-[80%] flex-center mb-6 ">
        <div className="flex items-center">
          <img src={"/logo.png"} alt="Logo" className="w-[50px]" />
          <span className="logo-text">SocialLinx</span>
        </div>
        <h2 className="text-white h3-bold md:h2-bold">Login To Your Account</h2>
      </div>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-col w-[70%] md:max-w-[400px]  max-w-[300px] gap-3 mt-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="shad-input"
                  {...field}
                  disabled={isLogging}
                />
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
                <Input
                  type="password"
                  className="shad-input"
                  {...field}
                  disabled={isLogging}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="shad-button_primary"
          disabled={isLogging}
        >
          {isLogging ? (
            <>
              <LoadingSpinner /> &nbsp; Loading...
            </>
          ) : (
            "Login"
          )}
        </Button>
        <p className="mt-2 text-center text-small-regular text-light-2">
          don't have an Account?{" "}
          <Link
            to={"/signup"}
            className="text-lg font-bold text-primary-500 hover:text-primary-300 hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </Form>
  );
}

export default LoginPage;
