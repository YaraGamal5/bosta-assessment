import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import logo from "assets/images/bostalogo.png";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { NavLink, useLocation } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { Grid } from "@material-ui/core";

const language = {
  en: {
    code: "en",
    name: "ENG",
    country_code: "gb",
  },
  ar: {
    code: "ar",
    name: "عربي",
    dir: "rtl",
    country_code: "ar-eg",
  },
};
const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  // language
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = language[currentLanguageCode];
  let { pathname } = useLocation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    if (pathname === "/") {
      document.title = t("title.home");
    } else if (pathname.includes("tracking-shipment")) {
      document.title = t(`title.tracking-shipment`);
    } else {
      document.title = t(`title.${pathname.substring(1)}`);
    }
    setAnchorEl(null);
  }, [currentLanguage, t, pathname]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuItems = [
    {
      menuTitle: "tracking-shipment",
      pageURL: "/tracking-shipment",
      id: "1",
    },
    {
      menuTitle: "pricing",
      pageURL: "/pricing",
      id: "2",
    },
    {
      menuTitle: "contact-sales",
      pageURL: "/contact-sales",
      id: "3",
    },
    {
      menuTitle: "sign-in",
      pageURL: "/sign-in",
      id: "4",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbarWrapper} elevation={0}>
        <Toolbar>
          <NavLink to="/" className={classes.title}>
            <Grid container alignItems="center">
              <img src={logo} alt="bosta logo" />
              <Typography className={classes.companyName}>
                {t("companyName")}
              </Typography>
            </Grid>
          </NavLink>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon color="primary" fontSize="large" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem key={menuItem.id}>
                      <NavLink
                        exact="true"
                        to={pageURL}
                        style={({ isActive }) => {
                          return {
                            color: isActive
                              ? theme.palette.primary.main
                              : theme.palette.common.black,
                            textDecoration: "none",
                          };
                        }}
                      >
                        {t(`title.${menuTitle}`)}
                      </NavLink>
                    </MenuItem>
                  );
                })}
                <MenuItem>
                  {currentLanguage?.code === language?.en?.code ? (
                    <span
                      style={{
                        color: theme.palette.primary.main,
                      }}
                      onClick={() => {
                        i18next.changeLanguage(language?.ar?.code);
                      }}
                    >
                      {language?.ar?.name}
                    </span>
                  ) : (
                    <span
                      style={{
                        color: theme.palette.primary.main,
                      }}
                      onClick={() => {
                        i18next.changeLanguage(language?.en?.code);
                      }}
                    >
                      {language?.en?.name}
                    </span>
                  )}
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <NavLink
                exact="true"
                to="/"
                style={({ isActive }) => {
                  return {
                    color: isActive
                      ? theme.palette.primary.main
                      : theme.palette.common.black,
                    textDecoration: "none",
                  };
                }}
              >
                {t("title.home")}
              </NavLink>
              <NavLink
                to="/pricing"
                style={({ isActive }) => {
                  return {
                    color: isActive
                      ? theme.palette.primary.main
                      : theme.palette.common.black,
                    textDecoration: "none",
                  };
                }}
              >
                {t("title.pricing")}
              </NavLink>
              <NavLink
                to="/contact-sales"
                style={({ isActive }) => {
                  return {
                    color: isActive
                      ? theme.palette.primary.main
                      : theme.palette.common.black,
                    textDecoration: "none",
                  };
                }}
              >
                {t("title.contact-sales")}
              </NavLink>
              <NavLink
                to="/tracking-shipment"
                style={({ isActive }) => {
                  return {
                    color: isActive
                      ? theme.palette.primary.main
                      : theme.palette.common.black,
                    textDecoration: "none",
                  };
                }}
              >
                {t("title.tracking-shipment")}
              </NavLink>
              <NavLink
                to="/sign-in"
                style={({ isActive }) => {
                  return {
                    color: isActive
                      ? theme.palette.primary.main
                      : theme.palette.common.black,
                    textDecoration: "none",
                  };
                }}
              >
                {t("title.sign-in")}
              </NavLink>
              {currentLanguage?.code === language?.en?.code ? (
                <span
                  style={{
                    color: theme.palette.primary.main,
                  }}
                  onClick={() => {
                    i18next.changeLanguage(language?.ar?.code);
                  }}
                >
                  {language?.ar?.name}
                </span>
              ) : (
                <span
                  style={{
                    color: theme.palette.primary.main,
                  }}
                  onClick={() => {
                    i18next.changeLanguage(language?.en?.code);
                  }}
                >
                  {language?.en?.name}
                </span>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    ...theme.typography.subtitle1,
  },
  appbarWrapper: {
    backgroundColor: theme.palette.common.white,
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1rem",
    },
    paddingLeft: "10rem",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  companyName: {
    ...theme.typography.h4,
    paddingLeft: "1rem",
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
}));
