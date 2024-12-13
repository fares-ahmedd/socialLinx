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

const AuthContext = createContext<IContextType | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser>(InitialUser);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("cookieFallback") === "[]" ||
      !localStorage.getItem("cookieFallback")
    ) {
      setIsAuth(false);
      navigate("/login");
    } else {
      checkAuthUser();
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setIsAuth]);

  async function checkAuthUser(): Promise<boolean | undefined> {
    setIsLoading(true);

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
