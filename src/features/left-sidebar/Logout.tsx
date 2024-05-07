import { useSignOutAccount } from "@/lib/react-query/QueriesAndMutations";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { useEffect } from "react";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const {
    mutate: signOut,
    isSuccess,
    isPending: isLoading,
  } = useSignOutAccount();
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess, navigate]);

  return (
    <button
      onClick={() => signOut()}
      className={`flex items-center gap-4 p-2 text-xl duration-300 rounded-md cursor-pointer text-rose-700 hover:bg-rose-700 hover:text-white ${
        isLoading ? "cursor-default opacity-70" : ""
      }`}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <LoadingSpinner /> &nbsp; Loading...
        </>
      ) : (
        <>
          {" "}
          <CiLogout />
          <span>Logout</span>
        </>
      )}
    </button>
  );
}
