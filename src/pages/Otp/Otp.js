import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "../../components/content/Styles.css";
import ContentImage from "../../assets/image/ContentImage.svg";
import { MuiOtpInput } from "mui-one-time-password-input";
import { Box, Input, Typography } from "@mui/material";
import { Button } from "../../components/button/index";
import AdroitLogo from "../../assets/Group.png";
import Lock from "../../assets/lock.png";

const Otp = () => {
  // const navigate = useNavigate();
  const [otp, setOtp] = React.useState("");
  // const [loading, setLoading] = useState(false);

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  return (
    <>
      <section className="contentBackground-container-otp">
        {/* <div className="contentBackground-container1">
                    <div className="contentBackgroundImage">
                        <img src={ContentImage} alt="" style={{ height: '33rem' }} />
                    </div>
                </div> */}

        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              height: "20%",
              marginBottom: "5%",
            }}
          >
            <img src={AdroitLogo} alt="" />
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              padding: "2rem",
              width: "60%",
              boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
            }}
          >
            <Box>
              <img src={Lock} alt="" />
            </Box>
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ fontWeight: "600", fontSize: "28px", color:'#135D54' }}>
                Verification Login
              </Typography>
              <Box sx={{ width: "80%" }}>
                <Typography
                  sx={{
                    fontSize: "16px",
                    textAlign: "center",
                    fontWeight: "400",
                  }}
                >
                  Enter the six (6) digit verification code sent to
                  +234913*****4** and A******na@creditwaveng.com to continue
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                width: "240px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Input
                sx={{ borderColor: "black", width: "100%" }}
                placeholder="Verification code"
              />
              {/* <Button children={"Submit"} /> */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#00C795",
                }}
              >
                <button
                  className="form-button"
                  type="submit"
                  variant="contained"
                  //   disabled={!isValid || !dirty}
                >
                  {/* {loading && <TailSpin color="#FFF" height={20} width={20} />} */}
                  Submit
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default Otp;
