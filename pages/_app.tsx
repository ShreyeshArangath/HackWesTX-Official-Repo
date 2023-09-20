import { CssBaseline } from "@mui/material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from "react";
import Layout from "../components/Layout";
/**
 * @remarks Setting type for pages with a layout
 * @remarks Type for properties of a page with a layout
 * Setup for layout use in this app
 * @remarks Setting type for pages with a layout
 * @type
 */
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

/**
 * Project Theme
 * @remark Theme generator courtesy of bareynol
 * @link https://bareynol.github.io/mui-theme-creator/#Typography
 * @remark Premade components courtesy of MUI
 * @link https://mui.com/
 */

const customeTheme = {
  palette: {
    primary: {
      main: "#055215",
    },
    primarylight: {
      main: "#09BC8A",
    },
    secondarylight: {
      main: "#055215",
    },
    secondary: {
      main: "#F0DCCA",
    },
    darker: {
      main: "#004346",
    },
    lightaccent: {
      main: "#4BC7BF",
    },
    darkaccent: {
      main: "#172A3A",
    },
  },
  typography: {
    fontFamily: "Sofia Sans",
    h1: {
      fontFamily: "Bungee",
    },
    h2: {
      fontFamily: "Bungee",
    },
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
};
let theme = createTheme(customeTheme);
// theme = responsiveFontSizes(theme);

/**
 * @function MyApp
 * @fileoverview Entry point of the application
 */
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default MyApp;
