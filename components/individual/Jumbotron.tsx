import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Logo from "../../assets/screen.svg";
import styles from "../../styles/Home.module.css";

const Jumbotron = () => {
  const theme = useTheme();

  return (
    <Grid
      item
      height="90vh"
      xs={12}
      sx={{
        backgroundColor: "black",
        justifyContent: "space-around",
        alignItems: "center",
        display: "flex",
        px: 4,
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          justifyContent: "space-around",
          display: "flex",
        }}
      >
        <Image src={Logo} alt="Cactus" />
      </Grid>
      <Grid item xs={6}>
        <Typography
          textAlign="center"
          className={styles.glitch}
          fontSize="4rem"
        >
          HACKWES<span className={styles.tx}>TX</span>
        </Typography>
        <Typography variant="h5" textAlign="center" className={styles.glitch}>
          February 25th - February 26th
        </Typography>
        <Typography variant="h5" textAlign="center" className={styles.glitch}>
          <span className={styles.tx}>Innovation Hub, Lubbock</span>
        </Typography>
        <Box
          sx={{
            justifyContent: "space-around",
            display: "flex",
          }}
        >
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{
              color: theme.palette.success.contrastText,
              my: 4,
              mx: "auto",
              width: "30%",
            }}
            href="https://my.forms.app/hackwestxforms/hackwestx-registration-spring23"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Register Now!
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Jumbotron;
