export const useClient = true;
import { Box, Grid } from "@mui/material";
import Logo from "../assets/screen.svg";

import Image from "next/image";

/**
 * @fileoverview Navigation bar of the website
 * @function Navbar
 * @remarks Setting type for pages with a layout
 */

const Navbar = () => {
  return (
    <Grid item xs={12} sx={{ px: "auto", py: 3 }}>
      <Box
        sx={{
          px: "auto",
          width: { xs: "65vw", sm: "45vw", md: "30vw", lg: "25vw" },
          mx: "auto",
        }}
      >
        <Image src={Logo} alt="Cactus" />
      </Box>
    </Grid>
  );
};
export default Navbar;
