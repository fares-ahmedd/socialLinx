import { Navigate, Outlet } from "react-router-dom";

function AuthLayout() {
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <Navigate to={"/"} />
      ) : (
        <>
          <section className="flex flex-col items-center justify-center flex-1 py-10">
            <Outlet />
          </section>
          <img
            src="https://assets.mobileworldlive.com/wp-content/uploads/2019/05/16121325/social-media-apps-2-shutterstock-650-e1576686057538.jpg"
            alt="App Poster"
            className="hidden object-cover w-1/2 h-screen bg-no-repeat md:block "
          />
        </>
      )}
    </>
  );
}

export default AuthLayout;
