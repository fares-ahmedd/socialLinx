import { useSignOutAccount } from "@/lib/react-query/QueriesAndMutations";
import { useEffect } from "react";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess, navigate]);

  return (
    <div
      onClick={() => signOut()}
      className="flex items-center gap-4 p-2 text-xl duration-300 rounded-md cursor-pointer text-rose-700 hover:bg-rose-700 hover:text-white"
    >
      <CiLogout />
      <span>Logout</span>
    </div>
  );
}
