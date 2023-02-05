/* eslint-disable react/prop-types */
import { makeStyles, Box, Grid, Typography, useTheme } from "@material-ui/core";

import React from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const TrackingCurrentState = ({ trackingInfo }) => {
  // eslint-disable-next-line react/prop-types
  const { TrackingNumber, CurrentStatus, PromisedDate } = trackingInfo;
  const theme = useTheme();
  const statusColor = theme.palette.success.main;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.stepperHeaderWrapper}>
      <Grid container spacing={9}>
        {/* tracking nember */}
        <Grid item xs={6} md={3}>
          <Typography className={classes.statusHeaderText}>
            {t("trackingStatus.TrackingNumber")} : {TrackingNumber}
          </Typography>
          {CurrentStatus?.state && (
            <Typography
              className={classes.statusInfoText}
              style={{ color: statusColor }}
            >
              {t(`tracking.${CurrentStatus?.state}`)}
            </Typography>
          )}
          <div className={classes.dividerInSmallScreen} />
        </Grid>
        {/* last update */}
        <Grid item xs={6} md={3}>
          <Typography className={classes.statusHeaderText}>
            {t("trackingStatus.LastUpdated")}
          </Typography>
          {CurrentStatus?.timestamp && (
            <Typography className={classes.statusInfoText}>
              {t("dateLong", {
                val: new Date(CurrentStatus?.timestamp),
              })}
            </Typography>
          )}
          <div className={classes.dividerInSmallScreen} />
        </Grid>
        {/* mechant name */}
        <Grid item xs={6} md={3}>
          <Typography className={classes.statusHeaderText}>
            {t("trackingStatus.MerchantName")}
          </Typography>
          {CurrentStatus?.hub && (
            <Typography className={classes.statusInfoText}>
              {t(`tracking.${CurrentStatus?.hub}`)}
            </Typography>
          )}
        </Grid>
        {/* delivery time */}
        <Grid item xs={6} md={3}>
          <Typography className={classes.statusHeaderText}>
            {t("trackingStatus.DeliveryTimeWithin")}
          </Typography>
          {PromisedDate && (
            <Typography className={classes.statusInfoText}>
              {t("dateLong2", {
                val: new Date(PromisedDate),
              })}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default TrackingCurrentState;
const useStyles = makeStyles((theme) => ({
  stepperHeaderWrapper: {
    padding: `${theme.spacing(32)} ${theme.spacing(32)}`,
  },
  statusInfoText: {
    ...theme.typography.subtitle1,
  },
  statusHeaderText: {
    ...theme.typography.buttonLight,
    color: theme.palette.grey[500],
  },
  dividerInSmallScreen: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    margin: `${theme.spacing(32)} ${theme.spacing(0)}`,
  },
}));
