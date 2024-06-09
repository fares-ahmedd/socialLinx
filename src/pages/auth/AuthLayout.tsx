import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <section className="flex flex-col items-center justify-center flex-1 py-10">
        <Outlet />
      </section>
      <img
        src="https://assets.mobileworldlive.com/wp-content/uploads/2019/05/16121325/social-media-apps-2-shutterstock-650-e1576686057538.jpg"
        alt="App Poster"
        className="hidden w-1/2 md:block "
      />
    </>
  );
}

export default AuthLayout;
