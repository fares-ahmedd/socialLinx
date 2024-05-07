import Logo from "@/ui/Logo";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";
import Logout from "./Logout";

function LeftSidebar() {
  return (
    <nav className="leftsidebar">
      <aside className="flex flex-col gap-6">
        <Logo />
        <UserInfo />
        <NavLinks />
      </aside>
      <Logout />
    </nav>
  );
}

export default LeftSidebar;
