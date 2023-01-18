import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import Jumbotron from "../components/individual/Jumbotron";

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
    </Grid>
  );
};

export default HomePage;
