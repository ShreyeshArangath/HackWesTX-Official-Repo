import { Box } from "@mui/material";
import React from "react";
import bg from "../assets/WhiteBg.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

/**
 * @type {LayoutProps} - Pages that will be wrapped by the Navbar and Footer
 * @remarks The purpose of having layouts in this case is that React doesn't
 * need to rebuild the reuised components when switching pages
 */
type LayoutProps = {
  children: React.ReactNode;
};

/**
 * @param children - ReactNode
 * @returns A page with a Navbar and Footer
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>
        <Box
          sx={{
            background: `url(${bg.src})`,
            backgroundRepeat: "repeat",
          }}
        >
          {children}
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
