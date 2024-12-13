import { Link, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useSignOutAccount } from "@/lib/react-query/QueriesAndMutations";
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";
import Logo from "@/ui/Logo";
import LoadingSpinner from "@/ui/LoadingSpinner";

function TopSidebar() {
  const {
    mutate: signOut,
    isSuccess,
    isPending: isLoading,
  } = useSignOutAccount();
  const { user, setIsAuth } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      setIsAuth(false);

      navigate("/login");
    }
  }, [isSuccess, navigate, setIsAuth]);

  return (
    <section className="topbar">
      <div className="px-3 py-2 flex-between">
        <Logo />

        <div className="gap-3 flex-center">
          <Link to={`/profile/${user.id}`}>
            <img
              src={user.imageUrl || "/unknown.webp"}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
          </Link>
          <button
            onClick={() => signOut()}
            className="icon-button disabled:bg-stone-600 disabled:border-none disabled:cursor-wait disabled:p-2 "
            disabled={isLoading}
          >
            {isLoading ? <LoadingSpinner /> : <CiLogout />}
          </button>
        </div>
      </div>
    </section>
  );
}

export default TopSidebar;
