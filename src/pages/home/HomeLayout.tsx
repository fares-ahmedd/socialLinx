import { Outlet } from "react-router-dom";
import LeftSidebar from "../../features/left-sidebar";
import TopSidebar from "@/features/top-sidebar/TopSidebar";
import BottomSidebar from "@/features/bottom-sidebar/BottomSidebar";
function AppLayout() {
  return (
    <main className="w-full md:flex">
      <TopSidebar />
      <LeftSidebar />
      <section className="flex flex-1 h-calc md:h-full">
        <Outlet />
      </section>
      {/* <RightSidebar /> */}
      <BottomSidebar />
    </main>
  );
}

export default AppLayout;
