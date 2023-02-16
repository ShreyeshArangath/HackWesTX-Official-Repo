/**
 * @fileoverview Navigation bar of the website
 */
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";

/**
 * @function Navbar
 * @remarks Setting type for pages with a layout
 */
const Navbar = () => {
  const router = useRouter(); // Router for switching pages in React

  const pages = ["Home"];
  const links = ["/"];

  //Media query to check if we're below md viewport width
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  // const dispatch = useAppDispatch(); // Sends actions to redux

  //Updates nav if we change page via a different link
  useEffect(() => {
    handleCloseNavMenu();
  }, [router.pathname]);

  //Menu anchors for smaller screens
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Handles supabase signouts
  const handleSignOut = () => {
    // dispatch(logout());
    handleCloseNavMenu();
    router.push("/signin");
  };

  return (
    <div>
      <Grid
        container
        sx={{
          position: matches ? "sticky" : undefined,
          top: matches ? 0 : undefined,
        }}
      >
        {matches ? (
          <Grid item xs={12} display="flex">
            <AppBar position="static" color="primary">
              <Container maxWidth="xl">
                <Toolbar>
                  <Box sx={{ flexGrow: 1, display: { sm: "flex" } }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon htmlColor="#fff" />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      {pages.map((page) => (
                        <MenuItem
                          key={page}
                          onClick={() => {
                            router.push(links[pages.indexOf(page)]);
                          }}
                        >
                          <Typography textAlign="center" component="a">
                            {page}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                  <Button
                    onClick={() => {
                      router.push("/");
                      handleCloseNavMenu();
                    }}
                    sx={{ my: 2, display: "block" }}
                  >
                    <Typography
                      variant="h6"
                      color="common.white"
                      fontFamily="Bungee"
                      className={styles.glitch}
                    >
                      HackWesTX
                    </Typography>
                  </Button>
                </Toolbar>
              </Container>
            </AppBar>
          </Grid>
        ) : (
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <AppBar position="static" color="primary" component="nav">
              <Toolbar sx={{ justifyContent: "space-between" }}>
                <IconButton
                  edge="start"
                  onClick={() => {
                    router.push("/");
                    handleCloseNavMenu();
                  }}
                  sx={{ my: 2 }}
                >
                  <Typography
                    variant="h6"
                    color="common.white"
                    fontFamily="Bungee"
                    component="div"
                    className={styles.glitch}
                  >
                    HackWesTX
                  </Typography>
                </IconButton>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page}
                      variant="outlined"
                      onClick={() => {
                        router.push(links[pages.indexOf(page)]);
                        handleCloseNavMenu();
                      }}
                      sx={{
                        my: 2,
                        color: "white",
                        "&.MuiButton-outlinedPrimary": {
                          borderColor:
                            router.pathname == links[pages.indexOf(page)]
                              ? theme.palette.secondary.main
                              : theme.palette.primary.main,
                        },
                      }}
                    >
                      {page}
                    </Button>
                  ))}
                  {router.pathname === "/hackers" ? (
                    <Button
                      onClick={handleSignOut}
                      sx={{ my: 2, color: "white" }}
                    >
                      Sign Out
                    </Button>
                  ) : undefined}
                </Box>
              </Toolbar>
            </AppBar>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
export default Navbar;
