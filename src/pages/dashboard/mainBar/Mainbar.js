import React, { useState, useRef, useEffect, useContext } from "react";
import { links, social } from "./MainbarLinks";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Modal } from "@mui/material";
import ToggleButton from "../../../assets/ToggleButton.svg";
import ToggleRight from "../../../assets/ToggleRight.svg";
import notificationBell from "../../../assets/Notification-bell.svg";
import { FaBars, FaRegSun } from "react-icons/fa";
import "./traineeDashboard.css";
// import "./mainbar.css";
import { Outlet } from "react-router-dom";
import { DashboardContext } from "../Dashboard";
import { display } from "@mui/system";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CloseIcon from "@mui/icons-material/Close";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function Mainbar() {
  // const [anchorEl, setAnchorEl] = useState(null);
  // const openPop = Boolean(anchorEl);
  // const handlePopClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  // };
  // const handlePopClose = () => {
  //     setAnchorEl(null);
  // };
  const navigate = useNavigate();
  const logMeOut = () => {
    sessionStorage.clear();
    navigate("/login", { replace: true });
  };
  const {
    open,
    setOpen,
    setWidth,
    width,
    closeWidth,
    handleLogoutModal,
    LogOutModal,
  } = useContext(DashboardContext);
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const [alignment, setAlignment] = React.useState("web");
  useEffect(() => {
    setWidth(open ? "200px" : closeWidth);
  }, [open]);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [status, setStatus] = useState("completeProfile");
  const [sideTab, setSideTab] = useState("profile");
  const handleToggle = () => {
    setStatus(status);
  };
  const handleSideTab = () => {
    setSideTab(sideTab);
  };

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  //   const { userDetails: select } = useSelector((state) => state.learnSpace);
  //   console.log(select, "select");
  //   const firstName = select?.details?.profile?.data[0]?.firstName;
  //   const lastName = select?.details?.profile?.data[0]?.surname;
  //   const role = select?.details?.profile?.data[0]?.role;
  //   const instituteName = select.details.profile.data[1].instituteName;
  //   const institutionPhoneNumber = select.details.profile.data[0].phoneNumber;
  //   console.log(institutionPhoneNumber, "phoneNumber");

  //   const completedProfile = select.details.profile.data[1].profileComplete;
  //   const address = select.details.profile.data;
  const [opened, setOpened] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(
    "i wase•••••••••lect.details.profile.data[1].instituteLocations.buildingNumbers here first"
    // String(role.split("_").join(" "))
  );
  return (
    <section className="dashboard-section" style={{ marginLeft: width }}>
      <nav style={{ backgroundColor: "green" }}>
        <div className="nav-center">
          <div className="nav-header">
            <div className="nav-original">
              <button
                style={{
                  width: "100px",
                  height: "70px",
                  top: "50px",
                  right: "40px",
                  background: "green",
                  border: "none",
                  position: "relative",
                  cursor: "pointer",
                }}
                onClick={handleClick}
              >
                {open ? (
                  <img
                    src={ToggleButton}
                    alt=""
                    style={{
                      width: "50px",
                    }}
                  />
                ) : (
                  <img
                    src={ToggleRight}
                    alt=""
                    style={{
                      width: "50px",
                    }}
                  />
                )}
              </button>

              <div className="profile">
                <div className="notification">
                  <img
                    src={notificationBell}
                    style={{
                      height: "30px",
                      marginTop: "15px",
                      color: "white",
                    }}
                    alt=""
                  />
                  {/* <Racheal/> */}
                </div>
                <div>
                  <Button onClick={toggleLinks}>
                    <div
                      style={{
                        display: "flex",
                        cursor: "pointer",
                        width: "300px",
                        height: "50px",
                        // backgroundColor: "red",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ marginRight: "20px" }}>
                        <div
                          className="admin-initial"
                          style={{ marginLeft: "10px", marginTop: "5px" }}
                        >
                          <div style={{ marginTop: "6px" }}>{"aDE"}</div>
                        </div>
                      </div>

                      <div className="admin-name" style={{ marginTop: "7px" }}>
                        <h3
                          style={{
                            fontFamily: "IBM Plex Sans",
                            color: "black",
                            textTransform: "capitalize",
                            fontSize: "16px",
                            textAlign: "start",
                            color: "white",
                          }}
                        >
                          {"Adekunle Adebona"}
                        </h3>
                        <h6 style={{ color: "white", fontSize: "12px" }}>
                          {"Adekunle.adebona@creditwaveng.com"}
                        </h6>
                      </div>
                    </div>
                  </Button>

                  {showLinks && (
                    <div style={{}}>
                      <div
                        className="navbar-profile-dropdown"
                        style={{
                          marginTop: "10px",
                          position: "relative",
                          left: "-120px",
                          zIndex: "999px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "-30px",
                            cursor: "pointer",
                          }}
                          onClick={toggleLinks}
                        >
                          <CloseIcon />
                        </div>

                        <div style={{ width: "85%", margin: "0 auto" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              textAlign: "center",
                              marginBottom: "20px",
                            }}
                          >
                            <div style={{ marginRight: "20px" }}>
                              <div
                                className="admin-initial-profile"
                                style={{ marginRight: "20px" }}
                              >
                                <div style={{ marginTop: "16px" }}>{"aDE"}</div>
                              </div>
                            </div>
                            <div className="admin-name">
                              <h3
                                style={{
                                  marginTop: "-5px",
                                  fontFamily: "IBM Plex Sans",
                                  color: "black",
                                  textTransform: "capitalize",
                                  marginBottom: "-10px",
                                  fontSize: "18px",
                                  textAlign: "start",
                                }}
                              >
                                {"aDE "}
                              </h3>
                              <p
                                style={{
                                  color: "black",
                                  marginLeft: "-5px",
                                  textTransform: "capitalize",
                                  fontWeight: "700",
                                }}
                              >
                                <h3
                                  className="profile-detail-name"
                                  style={{
                                    marginBottom: "1px",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    marginLeft: "3px",
                                  }}
                                >
                                  {"instituteName" + " " + "Admin"}
                                </h3>
                              </p>
                            </div>
                          </div>

                          <button className="navbar-dropdown-settings">
                            <div
                              style={{
                                display: "flex",
                                columnGap: "8px",
                                textDecoration: "none",
                              }}
                            >
                              <span
                                style={{ position: "relative", top: "17px" }}
                              >
                                <LocalPhoneOutlinedIcon
                                  style={{ color: "#5F646F" }}
                                />
                              </span>

                              <p>{"institutionPhoneNumber"}</p>
                            </div>
                          </button>

                          <button
                            className="navbar-dropdown-settings"
                            style={{}}
                          >
                            <div
                              style={{
                                display: "flex",
                                columnGap: "8px",
                                textDecoration: "none",
                              }}
                            >
                              <span
                                style={{ position: "relative", top: "17px" }}
                              >
                                <FmdGoodOutlinedIcon
                                  style={{ color: "#5F646F" }}
                                />
                              </span>
                              <div>
                                {/* {completedProfile ? <p>HELLO</p> : ""} */}
                              </div>
                            </div>
                          </button>

                          <button
                            onClick={() => {
                              navigate("/admin/Institute_Profile");
                            }}
                            className="navbar-dropdown-settings"
                          >
                            <div style={{ display: "flex", columnGap: "8px" }}>
                              <span
                                style={{ position: "relative", top: "17px" }}
                              >
                                <FaRegSun />
                              </span>
                              <p>Settings</p>
                            </div>
                          </button>

                          <button
                            onClick={toggleLinks}
                            style={{
                              width: "80%",
                              margin: "0 auto",
                              textAlign: "center",
                            }}
                            className="navbar-dropdown-signout"
                          >
                            <p>Sign out</p>
                          </button>
                        </div>
                      </div>
                      ) : (
                      <div
                        className="navbar-profile-dropdown"
                        style={{
                          marginTop: "10px",
                          position: "relative",
                          left: "-50px",
                        }}
                        onClick={toggleLinks}
                      >
                        <div style={{ width: "85%", margin: "0 auto" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                              textAlign: "center",
                              marginBottom: "20px",
                            }}
                          >
                            <div style={{ marginRight: "20px" }}>
                              <div
                                className="admin-initial-profile"
                                style={{ marginRight: "20px" }}
                              >
                                <div style={{ marginTop: "16px" }}>{"aDE"}</div>
                              </div>
                            </div>
                            <div className="admin-name">
                              <h3
                                style={{
                                  marginTop: "-5px",
                                  fontFamily: "IBM Plex Sans",
                                  color: "black",
                                  textTransform: "capitalize",
                                  marginBottom: "-10px",
                                  fontSize: "18px",
                                }}
                              >
                                {"firstName" +
                                  " " +
                                  " . " +
                                  "lastName[0]" +
                                  " . "}
                              </h3>
                              <p
                                style={{
                                  color: "black",
                                  marginLeft: "-5px",
                                  textTransform: "capitalize",
                                  fontWeight: "700",
                                }}
                              >
                                <h3
                                  className="profile-detail-name"
                                  style={{
                                    marginBottom: "1px",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    marginLeft: "3px",
                                  }}
                                >
                                  {"instituteName" + " " + "Admin"}
                                </h3>
                              </p>
                            </div>
                          </div>

                          <button
                            onClick={""}
                            className="navbar-dropdown-b-update"
                          >
                            <div style={{ display: "flex", columnGap: "8px" }}>
                              Update profile
                            </div>
                          </button>

                          <button
                            onClick={toggleLinks}
                            style={{
                              width: "80%",
                              margin: "0 auto",
                              textAlign: "center",
                            }}
                            className="navbar-dropdown-signout"
                          >
                            <p>Sign out</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="nav-toggle"
                onClick={toggleLinks}
              >
                <FaBars />
              </button>
            </div>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
      {LogOutModal && (
        <div
          style={{
            position: "absolute",
            top: "0px",
            width: "90%",
            height: "1100px",
            background: "rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(2.5px)",
            zIndex: "10",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "331px",
              height: "242px",
              top: "30%",
              left: "40%",
              backgroundColor: "#FFF",
              border: "4px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              borderRadius: "3px",
              borderColor: "3px solid #0D9B48",
              position: "fixed",
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p style={{ color: "#0d9b48", fontSize: "16px" }}>
                Log out from learnspace
              </p>
              <p style={{ fontSize: "16px" }}>
                Are you sure you want to leave now ?
              </p>
              <button
                onClick={logMeOut}
                style={{
                  width: "300px",
                  height: "43px",
                  background: "white",
                  color: " #0D9B48",
                  fontFamily: "IBM Plex Sans",
                  borderColor: "#0D9B48",
                  fontSize: "16px",
                  outline: "none",
                  marginBottom: "15px",
                  cursor: "ponter",
                  borderRadius: "4px",
                }}
              >
                {"Logout"}
              </button>
              <button
                onClick={() => handleLogoutModal(false)}
                style={{
                  width: "300px",
                  height: "43px",
                  background: "#0D9B48",
                  color: " #FFF",
                  fontFamily: "IBM Plex Sans",
                  fontSize: "16px",
                  border: "#0D9B48",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                {" "}
                {"cancel"}
              </button>
            </Box>
          </div>
          {/* </Modal> */}
        </div>
      )}
    </section>
  );
}

export default Mainbar;
