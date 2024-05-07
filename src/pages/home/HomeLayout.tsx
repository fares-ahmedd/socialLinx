import { Outlet } from "react-router-dom";
import LeftSidebar from "../../features/LeftSidebar";
import TopSidebar from "@/features/TopSidebar";
function AppLayout() {
  return (
    <main className="w-full md:flex">
      <TopSidebar />
      <LeftSidebar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      {/* <RightSidebar /> */}
    </main>
  );
}

export default AppLayout;
