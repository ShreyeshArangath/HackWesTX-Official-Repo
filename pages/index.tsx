import {
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Link from "next/link";

import sponsor_tacticalLabs from "../assets/sponsors/TacticalComputingLabs.png";

import sponsor_innovationHub from "../assets/sponsors/innovationHub.png";
import sponsor_acmChapter from "../assets/sponsors/acm-logo.png";
import sponsor_quext from "../assets/sponsors/Quext.png";
import sponsor_NexTier from "../assets/sponsors/NexTier_OFS.png";
import sponsor_TRUE from "../assets/sponsors/true.png";
import sponsor_codePath from "../assets/sponsors/codepath.png";
import sponsor_VRVizio from "../assets/sponsors/VRVizio.png";
import sponsor_Mathworks from "../assets/sponsors/mathworks.png";
import sponsor_Dell from "../assets/sponsors/Dell.png";


import FAQ from "../components/individual/FAQ";
import HWTCountdown from "../components/individual/HWTCountdown";
import Jumbotron from "../components/individual/Jumbotron";
import OurTeam from "../components/individual/OurTeam";
import Sponsorships from "../components/individual/Sponsorships";
import StudentSlideshow from "../components/individual/StudentSlideshow";
import { faq } from "../lib/constants/faq";
import styles from "../styles/Home.module.css";
import InstagramLogo from "../assets/icons/insta-512.png";
import DiscordLogo from "../assets/icons/discord-512.webp"

const HomePage = () => {
  const sxWidth = { xs: "50vw", sm: "50vw", amd: "45vw", lg: "30vw" };
  const sxHeight = "25vh";

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
                Join our community!
              </Typography>
              <Divider orientation="horizontal" sx={{ px: 3, m: 1 }} />

              <Link
                style={{ color: "#5865F2" }}
                href="https://discord.com/invite/Y9wUhS5cKp"
              >
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <img style={{ marginRight: "10px" }} src={DiscordLogo.src} width="32" />
                  <span className={styles.glitch} style={{ fontSize: "25px", display: "flex", flexDirection: "row", alignItems: "center" }} >JOIN OUR DISCORD</span>
                </div>
              </Link>
              <br/>
              <Link
                style={{ color: "black" }}
                href="https://instagram.com/hwtxofficial"
              >
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <img style={{ marginRight: "10px" }} src={InstagramLogo.src} width="32" />
                  <span style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >Instagram</span>
                </div>
              </Link>
            </CardContent>
          </Card>
        </Grid>
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
                HackWesTX IV is Texas Tech University&apos;s fourth student-run
                hackathon! This year, the hackathon will start Saturday,
                September 16th and end Sunday, September 17th. The hackathon will
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
        <Stack mx="auto">
          <Box
            sx={{
              width: sxWidth,
              backgroundImage: `url(${sponsor_tacticalLabs.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              backgroundSize: "contain",
              height: "40vh",
              mx: "auto",
              my: 5,
            }}
            component={Link}
            href="https://tactcomplabs.com/"
            rel="noopener"
            target="_blank"
          />
        </Stack>
        <Grid container mx="auto">
          <Box
            sx={{
              width: sxWidth,
              backgroundImage: `url(${sponsor_acmChapter.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              backgroundSize: "contain",
              height: sxHeight,
              mx: "auto",
              my: 5,
            }}
            component={Link}
            href="https://www.acm.org/"
            rel="noopener"
            target="_blank"
          />
          <Box
            sx={{
              width: sxWidth,
              backgroundImage: `url(${sponsor_NexTier.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              backgroundSize: "contain",
              height: sxHeight,
              mx: "auto",
              my: 5,
            }}
            component={Link}
            href="https://nextierofs.com/"
            rel="noopener"
            target="_blank"
          />
          <Box
            sx={{
              width: sxWidth,
              backgroundImage: `url(${sponsor_quext.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              backgroundSize: "contain",
              height: sxHeight,
              mx: "auto",
              my: 5,
            }}
            component={Link}
            href="https://onequext.com/"
            rel="noopener"
            target="_blank"
          />
          <Box
            sx={{
              width: sxWidth,
              backgroundImage: `url(${sponsor_TRUE.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              backgroundSize: "contain",
              height: sxHeight,
              mx: "auto",
              my: 5,
            }}
            component={Link}
            href="https://www.depts.ttu.edu/true/"
            rel="noopener"
            target="_blank"
          />
          <Box
            sx={{
              width: sxWidth,
              backgroundImage: `url(${sponsor_innovationHub.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              backgroundSize: "contain",
              height: sxHeight,
              mx: "auto",
              my: 5,
            }}
            component={Link}
            href="https://www.depts.ttu.edu/research/research-park/"
            rel="noopener"
            target="_blank"
          />
          <Box
            sx={{
              width: sxWidth,
              backgroundImage: `url(${sponsor_codePath.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              backgroundSize: "contain",
              height: sxHeight,
              mx: "auto",
              my: 5,
            }}
            component={Link}
            href="https://www.codepath.org/"
            rel="noopener"
            target="_blank"
          />
          <Box
            sx={{
              width: sxWidth,
              backgroundImage: `url(${sponsor_VRVizio.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              backgroundSize: "contain",
              height: sxHeight,
              mx: "auto",
              my: 5,
            }}
            component={Link}
            href="/"
            rel="noopener"
            target="_blank"
          />
          <Box
            sx={{
              width: sxWidth,
              backgroundImage: `url(${sponsor_Mathworks.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              backgroundSize: "contain",
              height: sxHeight,
              mx: "auto",
              my: 5,
            }}
            component={Link}
            href="https://www.mathworks.com/"
            rel="noopener"
            target="_blank"
          />
          <Box
            sx={{
              width: sxWidth,
              backgroundImage: `url(${sponsor_Dell.src})`,
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center",
              backgroundPositionY: "center",
              backgroundSize: "contain",
              height: sxHeight,
              mx: "auto",
              my: 5,
            }}
            component={Link}
            href="https://www.dell.com/en-us"
            rel="noopener"
            target="_blank"
          />
        </Grid>

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
          {faq.map((question) => (
            <FAQ heading={question.heading} body={question.body} key={question.heading} />
          ))}
        </Grid>
        <OurTeam />
      </Grid>
    </>
  );
};

//Test Comment 

export default HomePage;
