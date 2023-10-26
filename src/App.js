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
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/verification" element={<Otp />} />
                {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
                <Route exact path="/admin" element={<MainBoard />}>
                  <Route exact path="/admin/complete" element={<Complete />} />
                  <Route
                    exact
                    path="/admin/update_profile"
                    // element={<UpdateProfile />}
                  />
                  <Route
                    exact
                    path="/admin/empty_dashboard"
                    // element={<EmptyDashboard />}
                  />
                  <Route
                    exact
                    path="/admin/empty_dashboard-addProgram"
                    // element={<EmptyDashboardAddProgram />}
                  />
                  <Route
                    exact
                    path="programme"
                    // element={<ProgramActiveComponents />}
                  />
                  <Route
                    exact
                    path="programme/:programId/cohort/:programName"
                    // element={<TrainingInstituteCohort />}
                  />
                  <Route
                    exact
                    path="/admin/settings"
                    // element={<UpdateInstituteProfile />}
                  />
                  <Route
                    exact
                    path="/admin/settings/editprofile"
                    // element={<UpdateEdit />}
                  />
                  {/* <Route exact path="programme" element={<ProgramActiveComponents />} /> */}
                  {/* <Route exact path="programme/:programId/cohort/:programName" element={<TrainingInstituteCohort />} /> */}
                  <Route
                    exact
                    path="/admin/Institute_Profile"
                    // element={<NavProfile />}
                  />
                  <Route
                    exact
                    path="programme/:programId/cohort/:programName/:cohortId/trainee"
                    // element={<AddTrainee />}
                  />
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
