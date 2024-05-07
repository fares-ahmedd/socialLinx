import { Link, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useSignOutAccount } from "@/lib/react-query/QueriesAndMutations";
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";

function TopSidebar() {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const { user } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess, navigate]);
  return (
    <section className="topbar">
      <div className="px-3 py-2 flex-between">
        <Link to={"/"} className="flex items-center gap-3">
          <div className="flex items-center">
            <img src={"/logo.png"} alt="Logo" className="w-[50px]" />
            <span className="logo-text">SocialLinx</span>
          </div>{" "}
        </Link>

        <div className="gap-3 flex-center">
          <Link to={`/profile/${user.id}`}>
            <img
              src={user.imageUrl || "/unknown.png"}
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
          </Link>
          <CiLogout className="icon-button" onClick={() => signOut()} />
        </div>
      </div>
    </section>
  );
}

export default TopSidebar;
