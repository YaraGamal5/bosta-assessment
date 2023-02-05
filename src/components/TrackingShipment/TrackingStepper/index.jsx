import React from "react";
import TrackingCurrentState from "./TrackingCurrentState";

import { Divider, makeStyles, Paper } from "@material-ui/core";
import ShipmentStepper from "./ShipmentStepper";

// eslint-disable-next-line react/prop-types
const TrackingStepper = ({ trackingInfo }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.container} elevation={0}>
      <TrackingCurrentState trackingInfo={trackingInfo} />
      <Divider />
      <ShipmentStepper trackingInfo={trackingInfo} />
    </Paper>
  );
};
export default TrackingStepper;
const useStyles = makeStyles((theme) => ({
  container: {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.borderRadius10px,
  },
}));
