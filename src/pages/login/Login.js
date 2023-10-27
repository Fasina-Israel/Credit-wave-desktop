import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "../../components/content/Styles.css";
import ContentImage from "../../assets/image/ContentImage.svg";
import FormHeader from "../../components/content/FormHeader";
import { Formik, Field } from "formik";
import validator from "validator";
import { TailSpin } from "react-loader-spinner";
import EyeOpen from "../../assets/icon/eye-open.svg";
import EyeSlash from "../../assets/icon/eye-slash.svg";
import { Typography, Box } from "@mui/material";
import AdroitLogo from "../../assets/Group.png";

const Login = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setVisible(!visible);
  };
  const [loading, setLoading] = useState(false);
  return (
    <>
      {/* <Navbar/> */}
      <section className="contentBackground-container">
        <div className="contentBackground-container1">
          <div className="contentBackgroundImage">
            <div className="content-header">
              <div>
                <h1>Adroit</h1>
              </div>
              <Box sx={{ width: "487px", height: "168px" }}>
                <Typography sx={{ fontSize: "20px", color: "white" }}>
                  We evaluate and monitor the non-performing loan accounts and
                  implement a recovery action plan to achieve timely and maximum
                  recovery at a minimal cost and appropriate turn-around time
                  through acceptable common practices aligned with legal
                  framework and standards.
                </Typography>
              </Box>
            </div>
          </div>
        </div>
        <div className="contentBackground-container2">
          <div className="header">
            <img
              src={AdroitLogo}
              alt=""
              style={{ backgroundColor: "white", width: "50%" }}
            />
          </div>
          <div className="form">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Email cannot be empty !";
                } else if (!validator.isEmail(values.email)) {
                  errors.email = "Please enter a valid email !";
                }
                if (!values.password) {
                  errors.password = "Password cannot be empty !";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                // submit(values);
                setSubmitting(false);
              }}
            >
              {({
                isValid,
                values,
                errors,
                dirty,
                touched,
                handleSubmit,
                handleBlur,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <div>
                      <div className="input-container">
                        <div className="input-header">
                          <h4 className="input-header-text">Login</h4>
                        </div>
                        <div className="input-section">
                          <Field
                            className="input"
                            id="name"
                            type="text"
                            name="name"
                            value={values.name}
                            onBlur={handleBlur}
                            placeholder="Username"
                          />

                          <div className="error-message">
                            {touched.email && errors.email ? (
                              <div>{errors.email}</div>
                            ) : null}
                          </div>
                        </div>
                        <div className="input-section">
                          <Field
                            className="input"
                            id="password"
                            type={visible ? "text" : "password"}
                            name="password"
                            value={values.password}
                            onBlur={handleBlur}
                            placeholder="Password"
                          />
                          <div
                            className="eye-icon"
                            onClick={togglePasswordVisibility}
                            onKeyDown={togglePasswordVisibility}
                            role="button"
                            tabIndex={0}
                          >
                            <img
                              className="eye-icon"
                              src={visible ? EyeOpen : EyeSlash}
                              alt=""
                            />
                          </div>

                          <div>
                            {touched.password && errors.password ? (
                              <div>{errors.password}</div>
                            ) : null}
                          </div>
                        </div>
                        {/* <div>
                          <h5
                            className="forgot-password"
                            onClick={() => {
                              navigate("/forgot-password");
                            }}
                          >
                            Forgot Password ?
                          </h5>
                        </div> */}
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <button
                            className="form-button"
                            type="submit"
                            variant="contained"
                            disabled={!isValid || !dirty}
                          >
                            {loading && (
                              <TailSpin color="#FFF" height={20} width={20} />
                            )}
                            Logins
                          </button>
                        </Box>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
