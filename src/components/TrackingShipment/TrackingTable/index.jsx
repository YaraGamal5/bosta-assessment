import React from "react";
import { useTranslation } from "react-i18next";
import ShipmentTable from "./ShipmentTable";

import { Box, Grid, Typography, makeStyles, Paper } from "@material-ui/core";
import ShipmentLocation from "./ShipmentLocation";

// eslint-disable-next-line react/prop-types
const TrackingTable = ({ trackingInfo }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Paper className={classes.container} elevation={0}>
      <Grid container justifyContent="space-between" alignItems="flex-start">
        <Grid item xs={12} md={8}>
          <Typography className={classes.sectionHeader}>
            {t("trackingTable.header")}
          </Typography>
          <ShipmentTable trackingInfo={trackingInfo} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={classes.shipmentLocationWrapper}>
            <Typography className={classes.sectionHeader}>
              {t("reportProblem.header")}
            </Typography>
            <ShipmentLocation trackingInfo={trackingInfo} />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default TrackingTable;
const useStyles = makeStyles((theme) => ({
  container: {},
  shipmentLocationWrapper: {
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(50),
    },
    flexGrow: 1,
  },
  sectionHeader: {
    ...theme.typography.subtitle2,
    marginBottom: theme.spacing(20),
    marginTop: theme.spacing(35),
  },
}));
