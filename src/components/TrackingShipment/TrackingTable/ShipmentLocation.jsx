/* eslint-disable react/prop-types */
import React from "react";
import {
  Paper,
  Box,
  makeStyles,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import reportProblemImg from "assets/images/reportProblemImg.png";
import { useTranslation } from "react-i18next";

const ShipmentLocation = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Paper elevation={0}>
      <Box className={classes.locationWrapper}>
        <Typography className={classes.locationText}>
          {t("dummyLocationLong")}
        </Typography>
      </Box>
      <Box className={classes.reportProblemWrapper}>
        <Grid container alignItems="center">
          <Grid item xs={4} sm={3} md={4} xl={3}>
            <img src={reportProblemImg} alt={t("reportProblem.question")} />
          </Grid>
          <Grid item xs={7}>
            <Typography className={classes.reportQuestion}>
              {t("reportProblem.question")}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.reportBtn}
            >
              {t("reportProblem.button")}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};
export default ShipmentLocation;
const useStyles = makeStyles((theme) => ({
  locationWrapper: {
    backgroundColor: theme.palette.grey[100],
    border: `1px solid ${theme.palette.grey[200]}`,
    borderRadius: theme.borderRadius.borderRadius8px,
    padding: theme.spacing(16),
  },
  locationText: {
    ...theme.typography.body2,
    color: theme.palette.grey[600],
  },
  reportProblemWrapper: {
    marginTop: theme.spacing(16),
    border: `1px solid ${theme.palette.grey[200]}`,
    borderRadius: theme.borderRadius.borderRadius8px,
    padding: theme.spacing(16),
  },
  reportBtn: {
    ...theme.typography.subtitle2,
  },
  reportQuestion: {
    ...theme.typography.subtitle2,
    marginBottom: theme.spacing(16),
  },
}));
