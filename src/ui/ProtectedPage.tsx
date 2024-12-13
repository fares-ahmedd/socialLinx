import { useUserContext } from "@/context/AuthContext";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

interface ProtectedPageProps {
  children: ReactNode;
}
function ProtectedPage({ children }: ProtectedPageProps) {
  const { isAuth, isLoading } = useUserContext();
  if (isLoading)
    return (
      <div className="h-screen w-full flex-center">
        <LoadingSpinner />
      </div>
    );
  return isAuth ? children : <Navigate to="/login" />;
}

export default ProtectedPage;
