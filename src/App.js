import React from "react";

import RoutePages from "./routes";
import Navbar from "./components/Navbar/Component";
import "./index.css";
import { makeStyles, Paper } from "@material-ui/core";
import withRoot from "./withRoot";

function App() {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.AppContainer}>
      <Navbar />
      <RoutePages />
    </Paper>
  );
}

export default withRoot(App);
const useStyles = makeStyles((theme) => ({
  AppContainer: {
    [theme.breakpoints.down("sm")]: {
      margin: `${theme.spacing(300)} ${theme.spacing(50)}`,
    },
    [theme.breakpoints.down("md")]: {
      margin: `${theme.spacing(130)} ${theme.spacing(50)}`,
    },
    margin: `${theme.spacing(100)} ${theme.spacing(100)} ${theme.spacing(10)}`,
  },
}));
