import {
  Box,
  // CircularProgress,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const Component = () => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState();

  let navigate = useNavigate();
  const { t } = useTranslation();

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = () => {
    console.log(searchInput);
    if (searchInput) {
      navigate(`/tracking-shipment/${searchInput}`);
    }
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <Box className={classes.boxWrapper}>
        <Typography className={classes.header}>
          {t("tracking_search.header")}
        </Typography>
        <Typography className={classes.description}>
          {t("tracking_search.description")}
        </Typography>
        <Grid container>
          <TextField
            onChange={handleChange}
            placeholder={t("tracking_search.placeholder")}
          />
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.searchIcon}
            onClick={handleSearch}
          >
            <SearchIcon />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
export default Component;
const useStyles = makeStyles((theme) => ({
  root: {
    height: "70vh",
  },
  boxWrapper: {
    padding: theme.spacing(32),
    boxShadow: "0px 4px 8px #dedede",
  },
  header: {
    ...theme.typography.subtitle1,
  },
  description: {
    ...theme.typography.body1,
    marginBottom: theme.spacing(16),
  },
  searchIcon: {
    width: theme.spacing(50),
    height: theme.spacing(50),
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    cursor: "pointer",
    marginLeft: theme.spacing(20),
  },
  circularProgress: {
    color: theme.palette.common.white,
  },
}));
