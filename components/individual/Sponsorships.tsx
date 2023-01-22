import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import Packet from "../../assets/HWT_Sponsorship_Packet_22.pdf";
import styles from "../../styles/Home.module.css";

const Sponsorships = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        backgroundColor: "black",
        color: theme.palette.primary.contrastText,
      }}
    >
      <Grid item xs={12} my={5}>
        <Typography textAlign="center" variant="h3" className={styles.glitch}>
          Sponsor Us!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            maxWidth: { xs: "70vw", md: "50vw", lg: "40vw" },
            my: 3,
            mx: "auto",
          }}
        >
          <Typography variant="body1" textAlign="center">
            Sponsoring a hackathon is a really good way to get in touch with
            best and brightest students there are within a college community and
            do so in a casual and convenient environment.
          </Typography>
        </Box>
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
              borderRadius: 10,
            }}
            href={Packet}
            type="submit"
            target="_blank"
            download="HWT_Sponsorship_Packet_22.pdf"
            referrerPolicy="no-referrer"
          >
            Sponsor Packet ✨
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Sponsorships;
