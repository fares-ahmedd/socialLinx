import { useUserContext } from "@/context/AuthContext";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedPageProps {
  children: ReactNode;
}
function ProtectedPage({ children }: ProtectedPageProps) {
  const { isAuth, isLoading } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth && !isLoading) {
      navigate("/login");
    }
  }, [isAuth, isLoading, navigate]);
  if (isAuth) return children;
}

export default ProtectedPage;
