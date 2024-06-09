import { getCurrentUser } from "@/lib/appwrite/api";
import { IContextType, IUser } from "@/types";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const InitialUser = {
  id: "",
  name: "",
  username: "",
  email: "",
  imageUrl: "",
  bio: "",
};

const InitialState = {
  user: InitialUser,
  isLoading: false,
  isAuth: false,
  setUser: () => {},
  setIsAuth: () => {},
  checkAuthUser: async () => false as boolean,
};

const AuthContext = createContext<IContextType>(InitialState);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser>(InitialUser);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setIsMounted(true);

    if (!isMounted) {
      if (
        localStorage.getItem("cookieFallback") === "[]" ||
        !localStorage.getItem("cookieFallback")
      ) {
        navigate("/login");
      } else {
        checkAuthUser();
      }
    }
  }, [isMounted, navigate]);

  async function checkAuthUser(): Promise<boolean | undefined> {
    try {
      const currentAccount = await getCurrentUser();
      if (currentAccount) {
        setUser({
          id: currentAccount.$id,
          name: currentAccount.name,
          username: currentAccount.username,
          email: currentAccount.email,
          imageUrl: currentAccount.imageUrl,
          bio: currentAccount.bio,
        });
        setIsAuth(true);
        return true;
      }
    } catch (error) {
      console.log(error);
      setUser(InitialUser);
      setIsAuth(false);
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  const value = {
    user,
    setUser,
    isLoading,
    isAuth,
    setIsAuth,
    checkAuthUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export function useUserContext() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("UserContext was used outside the user provider");

  return context;
}
