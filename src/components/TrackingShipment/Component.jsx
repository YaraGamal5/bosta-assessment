import React, { useEffect } from "react";
import { Paper, Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useParams } from "react-router-dom";
import TrackingStepper from "./TrackingStepper";
import TrackingTable from "./TrackingTable";

// eslint-disable-next-line react/prop-types
const Component = ({ getTrackingShipmen, trackingInfo, loading, error }) => {
  const { num } = useParams();
  useEffect(() => {
    getTrackingShipmen(num);
  }, []);

  return (
    <Paper elevation={0}>
      {loading ? (
        <>
          <Skeleton width="100%" height="100%" animation="pulse" />
          <Skeleton width="100%" height="100%" animation="pulse" />
          <Skeleton width="100%" height="100%" animation="pulse" />
          <Skeleton width="100%" height="100%" animation="pulse" />
          <Skeleton width="100%" height="100%" animation="pulse" />
        </>
      ) : error ? (
        <Typography>{error}</Typography>
      ) : (
        <Paper elevation={0}>
          <TrackingStepper trackingInfo={trackingInfo} />
          <TrackingTable trackingInfo={trackingInfo} />
        </Paper>
      )}
    </Paper>
  );
};
export default Component;
