import { lazy } from "react";

// project import
import Loadable from "../components/Loadable";
import MinimalLayout from "../layout/MinimalLayout";

// render - login
const AuthLogin = Loadable(lazy(() => import("../pages/login/Login")));
const AuthRegister = Loadable(lazy(() => import("../pages/Otp/Otp")));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "login",
      element: <AuthLogin />,
    },
    {
      path: "otp",
      element: <AuthRegister />,
    },
  ],
};

export default LoginRoutes;