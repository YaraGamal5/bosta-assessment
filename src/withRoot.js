import React from "react";
import { create } from "jss";
import rtl from "jss-rtl";

import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { ThemeProvider, createTheme } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function withRoot(Component) {
  function WithRoot(props) {
    const { i18n } = useTranslation();
    const theme = createTheme({
      spacing: (factor) => `${factor / 16}rem`,
      direction: i18n.dir(),

      palette: {
        type: "light",
        common: {
          black: "#000",
          white: "#fff",
        },
        primary: {
          main: "#FF0000",
          light: "#B77DFF",

          dark: "#1565c0",
          avatarBorder: "#752D98",
          contrastText: "#fff",
        },
        secondary: {
          main: "#909090",

          light: "#D5D5D5",
          lighter: "#3D3D3D",
          dark: "#7b1fa2",
          contrastText: "#fff",
        },
        error: {
          main: "#CA000D",

          light: "#ef5350",
          dark: "#c62828",
          contrastText: "#fff",
        },
        warning: {
          main: "#ed6c02",
          light: "#ff9800",
          dark: "#e65100",
          contrastText: "#fff",
        },
        info: {
          main: "#0288d1",
          light: "#03a9f4",
          dark: "#01579b",
          contrastText: "#fff",
        },
        success: {
          main: "#2e7d32",
          light: "#4caf50",
          dark: "#1b5e20",
          contrastText: "#fff",
        },
        grey: {
          50: "#fafafa",
          100: "#f5f5f5",
          150: "#F9F9F9",
          200: "#eeeeee",
          250: "#EFEFEF",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          550: "#707070",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          A100: "#f5f5f5",
          A200: "#eeeeee",
          A400: "#bdbdbd",
          A800: "#B0B0B0",
          A500: "#A5A5A5",
          A600: "#959595",
        },
        text: {
          primary: "rgba(0, 0, 0, 0.87)",
          secondary: "rgba(0, 0, 0, 0.6)",
          disabled: "rgba(0, 0, 0, 0.38)",
          divider: "rgba(0, 0, 0, 0.12)",
          success: "#027206",
          error: "red",
          conversationName: "#5E5E5E",
        },
        neutral: {
          main: "#5C6AC4",
        },
        background: {
          disabled: "#CCCCCC",
          paper: "#fff",
          default: "#fafafa",
          success: "#ddffdf",
          error: "rgb(255, 221, 209)",
        },
      },
      borderRadius: {
        borderRadius4px: " 0.25rem",
        borderRadius5px: "0.3125rem",
        borderRadius8px: "0.5rem",
        borderRadius10px: "0.625rem",
        borderRadius12px: ".75rem",
        borderRadius20px: "1.25rem",
        borderRadius27px: "1.6875rem",
        borderRadius46px: "2.875rem",
      },
      typography: {
        fontFamily: "Cairo",
        fontWeightLight: 300,
        fontWeightNormal: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
          fontWeight: 300,
          fontSize: "6rem",
        },
        h2: {
          fontWeight: 900,
          fontSize: "3rem",
          textTransform: "capitalize",
        },
        h3: {
          fontWeight: 400,
          fontSize: "3rem",
          textTransform: "capitalize",
        },
        h4: {
          fontWeight: 700,
          fontSize: "1.8rem",
          textTransform: "capitalize",
        },
        h5: {
          fontWeight: 400,
          fontSize: "1.5rem",
          textTransform: "capitalize",
        },
        h6: {
          fontWeight: 500,
          fontSize: "1.25rem",
          textTransform: "capitalize",
        },
        h7: {
          fontWeight: 600,
          fontSize: "1.25rem",
          textTransform: "capitalize",
        },
        h8: {
          fontWeight: 400,
          fontSize: "1.125rem",
          textTransform: "capitalize",
        },
        subtitle1: {
          fontWeight: 600,
          fontSize: "1.375rem",
          textTransform: "capitalize",
        },
        subtitle1_2: {
          fontWeight: 500,
          fontSize: "1.25rem",
          textTransform: "capitalize",
        },
        subtitle2: {
          fontWeight: 600,
          fontSize: "1rem",
          textTransform: "capitalize",
        },
        subtitle2_1: {
          fontWeight: 600,
          fontSize: "1.25rem",
          textTransform: "capitalize",
        },
        subtitle4: {
          fontWeight: 600,
          fontSize: "0.8rem",
          textTransform: "capitalize",
        },
        subtitle3: {
          fontWeight: 400,
          fontSize: "1rem",
          textTransform: "capitalize",
        },
        subtitle5: {
          fontWeight: 300,
          fontSize: "0.85rem",
          // fontSize: '1rem',
        },
        body0: {
          fontWeight: 500,
          fontSize: "1.1875rem",
        },
        body1: {
          fontSize: "1.125rem",
          fontWeight: 300,
        },
        body2: {
          fontWeight: 500,
          fontSize: "1rem",
        },
        button: {
          fontSize: "0.875rem",
          fontWeight: 500,
          textTransform: "capitalize",
        },
        buttonLight: {
          fontSize: "1.1rem",
          fontWeight: 400,
          textTransform: "capitalize",
        },
        buttonLink: {
          fontSize: ".9rem",
          fontWeight: 600,
          textTransform: "capitalize",
        },
        textInput: {
          fontWeight: 500,
          fontSize: "1rem",
        },
        caption: {
          fontSize: "0.75rem",
          fontWeight: 400,
        },
      },
    });
    // JssProvider allows customizing the JSS styling solution.
    return (
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <Component {...props} />
        </ThemeProvider>
      </StylesProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
