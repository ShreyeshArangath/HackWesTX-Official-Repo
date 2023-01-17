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
let theme = createTheme({
  palette: {
    primary: {
      main: "#055215",
    },
    secondary: {
      main: "#A63D93",
    },
    background: {
      paper: "#f7f4f0",
    },
  },
  typography: {
    fontFamily: "Sofia Sans",
    subtitle2: {
      fontFamily: "Press Start 2P",
    },
  },
});
theme = responsiveFontSizes(theme);

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
