import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./reduxStore";
import { PersistGate } from "redux-persist/integration/react";
import Loadable from "./components/Loadable";
// import LandingPage from "";
import Login from "./pages/login/Login";
import { lazy } from "react";

// import EmptyDashboard from "./pages/dashboard/learnspaceAdmin/learnspaceDashboard/mainBar/outlet/EmptyDashboard";
// import AddTrainee from "./pages/dashboard/admin/mainBar/outlet/Trainee";

// const Login = lazy(() => import('../pages/login/Login'));
import Otp from "./pages/Otp/Otp";
const DashboardDefault = Loadable(
  lazy(() => import("./pages/dashboard/DashboardDefault"))
);

function App() {
  return (
    <Suspense fallback={<div>{/* <Loader /> */}</div>}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router>
            <Routes>
              <Route>
                {/* <Route exact path="/">
                            <Redirect to="/login" />
                        </Route> */}
                {/* <Route exact path="/" element={<LandingPage />} /> */}
                <Route exact path="/landing-page" element={<Login />} />
                <Route exact path="/otp" element={<Otp />} />
                <Route exact path="/verification" element={<Otp />} />
                <Route exact path="/dashboard" element={<DashboardDefault />} />

                {/* <Route exact path="*" element={<Error404 />} /> */}
              </Route>
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

export default App;
