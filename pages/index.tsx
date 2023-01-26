import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Link from "next/link";
import flexRadio from "../assets/sponsors/flexradio.png";
import FAQ from "../components/individual/FAQ";
import HWTCountdown from "../components/individual/HWTCountdown";
import Jumbotron from "../components/individual/Jumbotron";
import OurTeam from "../components/individual/OurTeam";
import Sponsorships from "../components/individual/Sponsorships";
import StudentSlideshow from "../components/individual/StudentSlideshow";
import { faqs } from "../lib/constants";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home | HackWesTX</title>
        <meta name="description" content="Home of the HackWesTX Hackathon" />
      </Head>

      <Grid container overflow="clip">
        <Jumbotron />
        <Grid item xs={12} my={7}>
          <Card
            elevation={5}
            sx={{
              width: {
                xs: "75vw",
                sm: "70vw",
                md: "60vw",
                lg: "45vw",
                xl: "30vw",
              },
              mx: "auto",
            }}
          >
            <CardContent>
              <Typography fontStyle="oblique" variant="h5">
                Who are we?
              </Typography>
              <Divider orientation="horizontal" sx={{ px: 3, m: 1 }} />
              <Typography
                variant="body1"
                textAlign="left"
                sx={{
                  maxHeight: "22vh",
                  overflow: "auto",
                  overflowX: "none",
                }}
              >
                HackWesTX III is Texas Tech University&apos;s second student-run
                hackathon! This year, the hackathon will start Saturday,
                February 25th and end Sunday, February 26th. The hackathon will
                last 24 hours total!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} my={4}>
          <Card
            elevation={5}
            sx={{
              width: {
                xs: "75vw",
                sm: "70vw",
                md: "60vw",
                lg: "45vw",
                xl: "30vw",
              },
              mx: "auto",
            }}
          >
            <CardContent>
              <Typography fontStyle="oblique" variant="h5">
                But why tho?
              </Typography>
              <Divider orientation="horizontal" sx={{ px: 3, m: 1 }} />
              <Typography
                variant="body1"
                textAlign="left"
                sx={{
                  maxHeight: "22vh",
                  overflow: "auto",
                  overflowX: "none",
                }}
              >
                We are developers who encourage each other to do better.
                It&apos;s not just about writing code or programming hardware,
                it&apos;s about making a positive impact in our community. We
                want to empower the next generation of learners that will change
                our world and hackathons are a great opportunity to do just
                that!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} mt={10} px="auto">
          <HWTCountdown />
        </Grid>
        <Grid item xs={12} height="80vh" display="flex" alignContent="center">
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
            fontFamily="Bungee"
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
            my: 5,
          }}
          component={Link}
          href="https://www.flexradio.com/"
          rel="noopener"
          target="_blank"
        />
        <Sponsorships />
        <Grid
          item
          xs={12}
          height="5vh"
          display="flex"
          justifyContent="space-around"
        >
          <Typography
            variant="h4"
            textAlign="center"
            className={styles.glitch}
            my="auto"
          >
            Frequently Asked Questions
          </Typography>
        </Grid>
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          direction="row"
          rowSpacing={5}
          my={3}
        >
          {faqs.map((faq) => (
            <FAQ heading={faq.heading} body={faq.body} key={faq.heading} />
          ))}
        </Grid>
        <OurTeam />
      </Grid>
    </>
  );
};

export default HomePage;
