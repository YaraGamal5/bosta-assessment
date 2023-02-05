import { Grid, makeStyles, Typography, Zoom } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
// import comingSoonImg from "assets/images/coming-soon.jpg";

// eslint-disable-next-line react/prop-types
const ComingSoon = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.boxWrapper}
    >
      <Zoom in={true} timeout={1000}>
        <Typography className={classes.comingSoonMessage}>
          {t("comingSoon")} ...
        </Typography>
      </Zoom>
    </Grid>
  );
};
export default ComingSoon;
const useStyles = makeStyles((theme) => ({
  boxWrapper: {
    height: "85vh",
  },
  comingSoonMessage: {
    color: theme.palette.primary.main,
    ...theme.typography.h2,
  },
}));
