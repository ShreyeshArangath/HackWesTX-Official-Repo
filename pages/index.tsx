import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import Countdown from "react-countdown";
import flexRadio from "../assets/sponsors/flexradio.png";
import HWTCountdown from "../components/individual/HWTCountdown";
import Jumbotron from "../components/individual/Jumbotron";
import StudentSlideshow from "../components/individual/StudentSlideshow";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <Grid container>
      <Jumbotron />
      <Grid item xs={12} my={4}>
        <Box width={{ xs: "75vw", md: "50vw" }} mx="auto">
          <Typography variant="h3" textAlign="center">
            Who are we?
          </Typography>
          <Typography variant="body1" textAlign="center">
            HackWesTX III is Texas Tech University&apos;s second student-run
            hackathon! This year, the hackathon will start Saturday, February
            25th and end Sunday, February 26th. The hackathon will last 24 hours
            total!
          </Typography>
          <Typography variant="h3" textAlign="center" mt={3}>
            Why do this?
          </Typography>
          <Typography variant="body1" textAlign="center">
            We are developers who encourage each other to do better. It&apos;s
            not just about writing code or programming hardware, it&apos;s about
            making a positive impact in our community. We want to empower the
            next generation of learners that will change our world and
            hackathons are a great opportunity to do just that!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} px="auto">
        <Countdown
          date={new Date("February 25, 2023 08:00:00")}
          className={styles.glitch}
          renderer={HWTCountdown}
        />
      </Grid>
      <Grid item xs={12} height="90vh" display="flex" alignContent="center">
        <StudentSlideshow />
      </Grid>
      <Grid
        item
        xs={12}
        height="20vh"
        display="flex"
        alignContent="center"
        justifyContent="space-around"
      >
        <Typography
          textAlign="center"
          variant="h3"
          my="auto"
          className={styles.glitch}
        >
          Sponsored By
        </Typography>
      </Grid>
      <Box
        sx={{
          width: { xs: "90vw", sm: "60vw", md: "45vw", lg: "40vw" },
          backgroundImage: `url(${flexRadio.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
          backgroundSize: "contain",
          height: "20vh",
          mx: "auto",
          my: 5
        }}
        component={Link}
        href="https://www.flexradio.com/"
        rel="noopener"
        target="_blank"
      />
    </Grid>
  );
};

export default HomePage;
