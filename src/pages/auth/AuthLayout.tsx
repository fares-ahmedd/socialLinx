import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <section className="flex flex-col items-center justify-center flex-1 py-10">
        <Outlet />
      </section>
      <div className="hidden md:block w-1/2 h-full">
        <img
          src="/auth-preview.webp"
          alt="App Poster"
          className="aspect-video object-cover w-full h-full "
        />
      </div>
    </>
  );
}

export default AuthLayout;
