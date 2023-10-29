import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "../../components/content/Styles.css";
import ContentImage from "../../assets/image/ContentImage.svg";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box, Input, Typography } from "@mui/material";
import { Button } from "../../components/button/index";
import AdroitLogo from "../../assets/Group.png";
import Lock from "../../assets/lock.png";
import { Formik, Field } from "formik";
import validator from "validator";
import { TailSpin } from "react-loader-spinner";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = React.useState("");
  const [loading, setLoading] = useState(false);
  const next = () => {
    console.log("next");
    navigate("/dashboard");
  };
  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  const [counter, setCounter] = useState("59");
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <section className="contentBackground-container-otp">
        <div className="otp-container">
          <div className="otp-header-image">
            <img src={AdroitLogo} alt="" />
          </div>
          <div className="lockImage-container">
            <div className="lock-jpeg">
              <img src={Lock} alt="" className="jpg" />
            </div>
            <div className="verification-container">
              <Typography
                sx={{ fontWeight: "600", fontSize: "28px", color: "#135D54" }}
              >
                Verification Login
              </Typography>
              <div className="subtext">
                <Typography
                  sx={{
                    fontSize: "16px",
                    textAlign: "center",
                    fontWeight: "400",
                  }}
                >
                  Enter these six (6) digit verification code sent to
                  +234913*****4** and A******na@creditwaveng.com to continue
                </Typography>
              </div>
            </div>

            <Box
              sx={{
                width: "300px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* <div className="form"></div> */}
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Input field cannot be empty !";
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
                              className="otp-input"
                              id="name"
                              type="text"
                              name="name"
                              value={values.name}
                              onBlur={handleBlur}
                              placeholder="Verification code"
                            />
                            <div className="counter">{"00:" + counter}</div>
                            <div className="error-message"></div>
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
                              className="otp-form-button"
                              // type="submit"
                              variant="contained"
                              // disabled={!isValid || !dirty}
                              // onClick={next}
                            >
                              {loading && (
                                <TailSpin color="#FFF" height={20} width={20} />
                              )}
                              Submit
                            </button>
                          </Box>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </Formik>
              {/* <Button children={"Submit"} /> */}
            </Box>
          </div>
        </div>
      </section>
    </>
  );
};

export default Otp;
