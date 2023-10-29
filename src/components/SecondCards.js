import PropTypes from "prop-types";

// material-ui
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// project import
import MainCard from "./MainCard";

// assets
import { RiseOutlined, FallOutlined } from "@ant-design/icons";

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const SecondCards = ({ color, title, count, percentage, isLoss, extra }) => (
  <MainCard
    contentSX={{
      p: 2.25,
      backgroundColor: "#FFF",
      height: "60vh",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Grid>
      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          display: "flex",
          width: "55vw",
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
          Application
        </Typography>
        <Typography sx={{ color: "#00C796", fontWeight: "700" }}>
          See more
        </Typography>
      </Box>
    </Grid>
    <Grid
      SX={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2rem",
        width: "50vw",
      }}
    >
      <Box sx={{ backgroundColor: "#DDFFF7", padding: "3rem" }}>
        <Typography>Recovery </Typography>
      </Box>
      <Box sx={{ backgroundColor: "#DDFFF7", width: "10rem", padding: "3rem" }}>
        <Typography>Single SignOn</Typography>
      </Box>
    </Grid>
  </MainCard>
);

SecondCards.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

SecondCards.defaultProps = {
  color: "primary",
};

export default SecondCards;
