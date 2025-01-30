import { Outlet } from "react-router-dom";
import LeftSidebar from "../../features/left-sidebar";
import TopSidebar from "@/features/top-sidebar/TopSidebar";
import BottomSidebar from "@/features/bottom-sidebar/BottomSidebar";
function AppLayout() {
  return (
    <div className="w-full md:flex">
      <TopSidebar />
      <LeftSidebar />
      <section className="flex flex-1 h-calc md:h-full max-w-screen-2xl mx-auto">
        <Outlet />
      </section>

      <BottomSidebar />
    </div>
  );
}

export default AppLayout;
