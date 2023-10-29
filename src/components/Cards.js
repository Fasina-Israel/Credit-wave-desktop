import PropTypes from "prop-types";

// material-ui
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// project import
import MainCard from "./MainCard";
import Pana from "../assets/pana.png";

// assets
import { RiseOutlined, FallOutlined } from "@ant-design/icons";

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({
  color,
  title,
  count,
  percentage,
  isLoss,
  extra,
}) => (
  <MainCard
    contentSX={{
      p: 2.25,
      backgroundColor: "#00C795",
      height: "30vh",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
    }}
  >
    {/* <Stack spacing={0.5}>
      <Typography variant="h6" color="textSecondary">
        {title}
      </Typography>
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="h4" color="inherit">
            {count}
          </Typography>
        </Grid>
        {percentage && (
          <Grid item>
            <Chip
              variant="combined"
              color={color}
              icon={
                <>
                  {!isLoss && (
                    <RiseOutlined
                      style={{ fontSize: "0.75rem", color: "inherit" }}
                    />
                  )}
                  {isLoss && (
                    <FallOutlined
                      style={{ fontSize: "0.75rem", color: "inherit" }}
                    />
                  )}
                </>
              }
              label={`${percentage}%`}
              sx={{ ml: 1.25, pl: 1 }}
              size="small"
            />
          </Grid>
        )}
      </Grid>
    </Stack> */}
    {/* <Box sx={{ pt: 2.25 }}> */}
    {/* <Typography variant="caption" color="textSecondary">
        You made an extra{" "}
        <Typography
          component="span"
          variant="caption"
          sx={{ color: `${color || "primary"}.main` }}
        >
          {extra}
        </Typography>{" "}
        this year
      </Typography> */}
    {/* </Box> */}
    <Grid
      sx={{
        height: "100",
        display: "flex",
        flexDirection: "row",
        gap: "3rem",
        padding: "20px",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "40px", color: "white" }}>
          Welcome back Kenny !
        </Typography>
        <Typography sx={{ fontSize: "16px", color: "white" }}>
          Your last login was 12:00pm 09 Jul, 2023
        </Typography>
      </Box>
      <Box>
        <img src={Pana} alt="" />
      </Box>
    </Grid>
  </MainCard>
);

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

AnalyticEcommerce.defaultProps = {
  color: "primary",
};

export default AnalyticEcommerce;
