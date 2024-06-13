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
import LoadingSpinner from "../../../ui/LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";
import {
  useSignInAccount,
  useSignOutAccount,
} from "@/lib/react-query/QueriesAndMutations";
import { useUserContext } from "@/context/AuthContext";
import LoginHeader from "./LoginHeader";
import PasswordInput from "../../../ui/PasswordInput";
import { useEffect } from "react";

function LoginPage() {
  const { mutateAsync: signInAccount, isPending: isLogging } =
    useSignInAccount();
  const { toast } = useToast();
  const { checkAuthUser } = useUserContext();
  const { mutate: signOut } = useSignOutAccount();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(user: z.infer<typeof SigninValidation>) {
    signOut();
    const session = await signInAccount(user);

    if (!session) {
      return toast({
        title: "Login in Failed",
        description:
          "Please make sure you enter the email and password correctly",
      });
    }
    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      form.reset();
      navigate("/");
    } else {
      toast({
        title: "Login Failed. please try again.",
      });
    }
  }

  useEffect(() => {
    const cookieFallback = localStorage.getItem("cookieFallback");
    let hasToken;

    if (cookieFallback) {
      try {
        hasToken = JSON.parse(cookieFallback);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        hasToken = null;
      }
    } else {
      hasToken = null;
    }

    if (!hasToken || hasToken.length === 0) {
      signOut();
    }
  }, [signOut]);
  return (
    <Form {...form}>
      <LoginHeader />
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
                  autoComplete="new-email"
                  autoFocus
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
                <PasswordInput field={field} isLogging={isLogging} />
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
