import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Grid, IconButton, Paper, Typography, useTheme } from "@mui/material";
import { getStorage, ref as storageRef } from "firebase/storage";
import { useDownloadURL } from "react-firebase-hooks/storage";

import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import { fbase } from "../../lib/Firebase";
import styles from "../../styles/Home.module.css";

const storage = getStorage(fbase);

const OurTeam = () => {
  const [Shruti] = useDownloadURL(
    storageRef(storage, `public/staff/Shruti.jpg`)
  );
  const [Maysen] = useDownloadURL(
    storageRef(storage, `public/staff/Maysen.jpg`)
  );
  const [Emmanuel] = useDownloadURL(
    storageRef(storage, `public/staff/Emmanuel.jpg`)
  );
  const [Travis] = useDownloadURL(
    storageRef(storage, `public/staff/Travis.jpg`)
  );
  const theme = useTheme();

  return (
    <Grid
      container
      sx={{
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
        py: { xs: 5, md: 7, lg: 12 },
        mt: 10,
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
            component={Paper}
            elevation={5}
            sx={{
              "&:hover": { boxShadow: 20 },
              mx: "auto",
              my: 5,
              width: { xs: 175, sm: 215, md: 250, lg: 300 },
              height: { xs: 175, sm: 215, md: 250, lg: 300 },
              objectPosition: "center 15%",
              ".MuiAvatar-img": { objectPosition: "center 15%" },
              borderStyle: "solid",
              borderColor: "gainsboro",
              borderWidth: 3,
            }}
            src={Shruti}
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
            component={Paper}
            elevation={5}
            sx={{
              "&:hover": { boxShadow: 20 },
              mx: "auto",
              my: 5,
              width: { xs: 175, sm: 215, md: 250, lg: 300 },
              height: { xs: 175, sm: 215, md: 250, lg: 300 },
              objectPosition: "center 15%",
              ".MuiAvatar-img": { objectPosition: "center 15%" },
              borderStyle: "solid",
              borderColor: "gainsboro",
              borderWidth: 3,
            }}
            src={Maysen}
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
            component={Paper}
            elevation={5}
            sx={{
              "&:hover": { boxShadow: 20 },
              mx: "auto",
              my: 5,
              width: { xs: 175, sm: 215, md: 250, lg: 300 },
              height: { xs: 175, sm: 215, md: 250, lg: 300 },
              objectPosition: "center 15%",
              ".MuiAvatar-img": { objectPosition: "center 15%" },
              borderStyle: "solid",
              borderColor: "gainsboro",
              borderWidth: 3,
            }}
            src={Emmanuel}
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
        <Grid item xs={12} md={6} lg={4} mx="auto">
          <Avatar
            component={Paper}
            elevation={5}
            sx={{
              "&:hover": { boxShadow: 20 },
              mx: "auto",
              my: 5,
              width: { xs: 175, sm: 215, md: 250, lg: 300 },
              height: { xs: 175, sm: 215, md: 250, lg: 300 },
              objectPosition: "center 15%",
              ".MuiAvatar-img": { objectPosition: "center 15%" },
              borderStyle: "solid",
              borderColor: "gainsboro",
              borderWidth: 3,
            }}
            src={Travis}
            alt="Travis Libre"
          />
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h5" textAlign="center">
              Travis Libre
            </Typography>
            <IconButton
              aria-label="linkedin-link"
              href="https://www.linkedin.com/in/travis-libre-163328262/"
              target="_blank"
              color="info"
            >
              <OpenInNewIcon />
            </IconButton>
          </Box>
          <Typography variant="h6" textAlign="center">
            Logistics Lead
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default OurTeam;
