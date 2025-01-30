import Logo from "@/ui/Logo";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";
import Logout from "./Logout";

function LeftSidebar() {
  return (
    <aside className="leftsidebar">
      <nav className="flex flex-col gap-6">
        <Logo />
        <UserInfo />
        <NavLinks />
      </nav>
      <Logout />
    </aside>
  );
}

export default LeftSidebar;
