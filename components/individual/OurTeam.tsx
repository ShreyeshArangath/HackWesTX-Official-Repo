import { Grid, IconButton, Typography, useTheme } from "@mui/material";
import { getStorage, ref as storageRef } from "firebase/storage";
import { useDownloadURL } from "react-firebase-hooks/storage";
import Emmanuel from "../../assets/staff/Emmanuel.jpg";
import Maysen from "../../assets/staff/Maysen.jpg";
import Shruti from "../../assets/staff/Shruti.jpg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import Avatar from "@mui/material/Avatar";
import { fbase } from "../../lib/Firebase";
import styles from "../../styles/Home.module.css";
import { Box } from "@mui/system";

const storage = getStorage(fbase);

const OurTeam = () => {
  const [value] = useDownloadURL(
    storageRef(storage, `public/HWT_Sponsorship_Packet.pdf`)
  );
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        backgroundColor: "black",
        color: theme.palette.primary.contrastText,
        py: { xs: 5, md: 7, lg: 12 },
        my: 10,
      }}
    >
      <Grid item xs={12} my={5}>
        <Typography textAlign="center" variant="h3" className={styles.glitch}>
          Our Team
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        rowSpacing={4}
        px={4}
      >
        <Grid item xs={12} md={6} lg={4} mx="auto">
          <Avatar
            sx={{
              mx: "auto",
              my: 5,
              width: { xs: 175, sm: 215, md: 250 },
              height: { xs: 175, sm: 215, md: 250 },
              objectPosition: "center 15%",
              ".MuiAvatar-img": { objectPosition: "center 15%" },
              borderStyle: "solid",
              borderColor: "gainsboro",
              borderWidth: 3,
            }}
            src={Shruti.src}
            alt="Shruti Nagawekar"
          />
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h5" textAlign="center">
              Shruti Nagawekar
            </Typography>
            <IconButton
              aria-label="linkedin-link"
              href="https://www.linkedin.com/in/shruti-nagawekar/"
              target="_blank"
              color="info"
            >
              <OpenInNewIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" textAlign="center">
            HackwesTX Lead
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4} mx="auto">
          <Avatar
            sx={{
              mx: "auto",
              my: 5,
              width: { xs: 175, sm: 215, md: 250 },
              height: { xs: 175, sm: 215, md: 250 },
              objectPosition: "center 15%",
              ".MuiAvatar-img": { objectPosition: "center 15%" },
              borderStyle: "solid",
              borderColor: "gainsboro",
              borderWidth: 3,
            }}
            src={Maysen.src}
            alt="Maysen Brown"
          />
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h5" textAlign="center">
              Maysen Brown
            </Typography>
            <IconButton
              aria-label="linkedin-link"
              href="https://www.linkedin.com/in/maysen-brown-083494181/"
              target="_blank"
              color="info"
            >
              <OpenInNewIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" textAlign="center">
            Sponsorship Lead
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={4} mx="auto">
          <Avatar
            sx={{
              mx: "auto",
              my: 5,
              width: { xs: 175, sm: 215, md: 250 },
              height: { xs: 175, sm: 215, md: 250 },
              objectPosition: "center 15%",
              ".MuiAvatar-img": { objectPosition: "center 15%" },
              borderStyle: "solid",
              borderColor: "gainsboro",
              borderWidth: 3,
            }}
            src={Emmanuel.src}
            alt="Emmanuel Camacho"
          />
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h5" textAlign="center">
              Emmanuel Camacho
            </Typography>
            <IconButton
              aria-label="linkedin-link"
              href="https://www.linkedin.com/in/emmanuel-camacho-/"
              target="_blank"
              color="info"
            >
              <OpenInNewIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" textAlign="center">
            Marketing Lead
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default OurTeam;
