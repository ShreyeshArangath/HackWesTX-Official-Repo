import '../styles/globals.css'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import customTheme from "../lib/theme";

function MyApp({ Component, pageProps }) {
  <ChakraProvider theme={customTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
