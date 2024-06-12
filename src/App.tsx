import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login/Login";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import Home from "./pages/home/index/Home";
import AuthLayout from "./pages/auth/AuthLayout";
import AppLayout from "./pages/home/HomeLayout";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "./context/AuthContext";
import { QueryProvider } from "./lib/react-query/QueryProvider";
import Explore from "./pages/home/explore/Explore";
import Saved from "./pages/home/saved/Saved";
import AllUsers from "./pages/home/allUsers/AllUsers";
import CreatePost from "./pages/home/createpost/CreatePost";
import EditPost from "./pages/home/editPost/EditPost";
import Profile from "./pages/home/profile/Profile";
import UpdateProfile from "./pages/home/updateProfile/UpdateProfile";
import PostsDetails from "./pages/home/postsDetails/PostsDetails";
import ProtectedRoute from "./ui/ProtectedPage";

const App = () => {
  return (
    <BrowserRouter>
      <QueryProvider>
        <AuthProvider>
          <main className=" flex h-screen ">
            <Routes>
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
              </Route>

              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/saved" element={<Saved />} />
                <Route path="/all-users" element={<AllUsers />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/update-post/:id" element={<EditPost />} />
                <Route path="/profile/:id/*" element={<Profile />} />
                <Route path="/posts/:id" element={<PostsDetails />} />
                <Route path="/update-profile/:id" element={<UpdateProfile />} />
              </Route>
            </Routes>
            <Toaster />
          </main>
        </AuthProvider>
      </QueryProvider>
    </BrowserRouter>
  );
};

export default App;
