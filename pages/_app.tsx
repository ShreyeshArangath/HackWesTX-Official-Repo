import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import Head from "next/head";
import * as React from "react";
import theme from "../lib/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <CssBaseline />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  );
}
