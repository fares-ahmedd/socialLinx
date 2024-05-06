import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import Home from "./pages/home/Home";
import AuthLayout from "./pages/auth/AuthLayout";
import AppLayout from "./pages/home/AppLayout";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "./context/AuthContext";
import { QueryProvider } from "./lib/react-query/QueryProvider";

const App = () => {
  return (
    <BrowserRouter>
      <QueryProvider>
        <AuthProvider>
          <main className="flex h-screen">
            <Routes>
              <Route element={<AuthLayout />}>
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
              </Route>

              <Route element={<AppLayout />}>
                <Route index element={<Home />} />
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
