import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./reduxStore";
import { PersistGate } from "redux-persist/integration/react";
// import LandingPage from "";
import Login from "./pages/login/Login";
import Complete from "./pages/dashboard/mainBar/outlet/Complete";
import MainBoard from "./pages/dashboard/index";

// import EmptyDashboard from "./pages/dashboard/learnspaceAdmin/learnspaceDashboard/mainBar/outlet/EmptyDashboard";
// import AddTrainee from "./pages/dashboard/admin/mainBar/outlet/Trainee";

// const Login = lazy(() => import('../pages/login/Login'));
import Otp from "./pages/Otp/Otp";

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
                {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
                <Route exact path="/dashboard" element={<MainBoard />}>
                  <Route exact path="/dashboard/complete" element={<Complete />} />
                  
                </Route>
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
