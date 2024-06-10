import { useUserContext } from "@/context/AuthContext";
import { ReactNode, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";

interface ProtectedPageProps {
  children: ReactNode;
}
function ProtectedPage({ children }: ProtectedPageProps) {
  const { isAuth, isLoading } = useUserContext();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuth && !isLoading) {
        localStorage.setItem("cookieFallback", JSON.stringify([]));
        console.log("happen");

        navigate("/login");
      }
    },
    [isAuth, isLoading, navigate]
  );
  if (isLoading) {
    return (
      <div className="h-screen w-full flex-center">
        <LoadingSpinner />
      </div>
    );
  }
  if (isAuth) return children;
}

export default ProtectedPage;
