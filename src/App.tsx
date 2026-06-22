import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import AppLayout from "@/layouts/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import { useAuth } from "@/hooks/useAuth";
import LoadingScreen from "@/components/ui/loading/LoadingScreen";
import GuestRoute from "@/routes/GuestRoute";
import ProtectedRoute from "@/routes/ProtectedRoute";
import Menu from "@/pages/Menu";
import RoleRoute from "@/routes/RoleRoute";
import Forbidden from "@/pages/ErrorPage/Forbidden";
import NotFound from "./pages/ErrorPage/NotFound";
import User from "./pages/Users/User";

function App() {
  const { user, authLoading } = useAuth();

  if (authLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* User Login */}
          <Route element={<ProtectedRoute />}>
            <Route index path="/403" element={<Forbidden />} />

            <Route element={<AppLayout />}>
              <Route index path="/" element={<Dashboard />} />

              <Route
                path="/users"
                element={
                  <RoleRoute roles={["super-admin", "admin"]}>
                    <User />
                  </RoleRoute>
                }
              />

              <Route
                path="/menu"
                element={
                  <RoleRoute roles={["admin"]}>
                    <Menu />
                  </RoleRoute>
                }
              />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Guest */}
          <Route element={<GuestRoute />}>
            <Route
              path="/login"
              element={user ? <Navigate to="/" replace /> : <Login />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
