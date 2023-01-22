import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Logo from "../../assets/screen.svg";
import styles from "../../styles/Home.module.css";

const Jumbotron = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        backgroundColor: "black",
        p: 3,
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          justifyContent: "space-around",
          display: "flex",
          alignItems: "center",
          py: 5,
        }}
      >
        <Image src={Logo} alt="Cactus" />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          justifyContent: "space-around",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            textAlign="center"
            variant="h2"
            className={styles.glitch}
            fontSize="3rem"
            color="whitesmoke"
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
                width: "50%",
                borderRadius: 10,
              }}
              href="https://my.forms.app/hackwestxforms/hackwestx-registration-spring23"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Register Now!
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Jumbotron;
