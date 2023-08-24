import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Grid, IconButton, Paper, Typography, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import { team2023FallACM, team2023FallHWT } from '../../lib/constants/team-2023-fall'
import styles from "../../styles/Home.module.css";

type TeamMemberProps = {
  name: string;
  role: string;
  websiteUrl: string | undefined;
  avatarSrc: any;
};

const TeamMember = (props: TeamMemberProps) => {
  return (
    <Grid item xs={6} md={4} lg={3} mx="auto">
      <Avatar
        component={Paper}
        elevation={5}
        sx={{
          "&:hover": { boxShadow: 20 },
          mx: "auto",
          my: 5,
          width: { xs: 175, sm: 175, md: 175, lg: 175 },
          height: { xs: 175, sm: 175, md: 175, lg: 175 },
          objectPosition: "center 15%",
          ".MuiAvatar-img": { objectPosition: "center 15%" },
          borderStyle: "solid",
          borderColor: "#dcdcdc",
          borderWidth: 3,
        }}
        src={props.avatarSrc?.src}
        alt={props.name}
      />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h5" textAlign="center">
          {props.name}
        </Typography>
        {props.websiteUrl &&
          <IconButton
            aria-label="linkedin-link"
            href={props.websiteUrl}
            target="_blank"
            color="info"
          >
            <OpenInNewIcon />
          </IconButton>
        }
      </Box>
      <Typography variant="h6" textAlign="center">
        {props.role}
      </Typography>
    </Grid>
  )
}

const OurTeam = () => {
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
          HackWesTX Team
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        rowSpacing={4}
        px={4}
      >
        {team2023FallHWT.map((member, index) => <TeamMember key={index} name={member.name} role={member.role} websiteUrl={member.websiteUrl} avatarSrc={member.avatarSrc} />)}
      </Grid>
      /**
      <Grid item xs={12} my={5}>
        <Typography textAlign="center" variant="h3" className={styles.glitch}>
          TTU ACM Chapter Officers
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        rowSpacing={4}
        px={4}
      >
        {team2023FallACM.map((member, index) => <TeamMember key={index} name={member.name} role={member.role} websiteUrl={member.websiteUrl} avatarSrc={member.avatarSrc} />)}
      </Grid>
      */
    </Grid>
  );
};
export default OurTeam;
