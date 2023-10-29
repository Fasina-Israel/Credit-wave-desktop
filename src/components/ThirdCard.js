import PropTypes from "prop-types";

// material-ui
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// project import
import MainCard from "./MainCard";

// assets
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
// import { avatar } from "../assets/Avatar.png";
import BoxAvatar from "../assets/BoxAvatar.png";

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const ThirdCard = ({
  color,
  title,
  count,
  percentage,
  isLoss,
  extra,
  avatar,
}) => (
  <MainCard
    contentSX={{
      p: 2.25,
      backgroundColor: "#FFF",
      height: "30vh",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Box sx={{ width: "9rem", height: "100%", display: "flex" }}>
      <img src={avatar} alt="" />
    </Box>
    <Box></Box>
  </MainCard>
);

ThirdCard.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

ThirdCard.defaultProps = {
  color: "primary",
};

export default ThirdCard;
