import ForumIcon from "@mui/icons-material/Forum";
import MailIcon from "@mui/icons-material/Mail";
import SchoolIcon from "@mui/icons-material/School";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Grid, Stack, Typography, useTheme } from "@mui/material";
import IconLink from "./individual/IconLink";

/**
 * @fileoverview Social plugs and goodbyes w peace and love
 * @function Footer
 * @remarks Slightly improved on the footer from https://bosedeadetunji.com
 */
const Footer = () => {
  const theme = useTheme();
  const contrastColor = theme.palette.getContrastText(
    theme.palette.primary.light
  );

  return (
    <Grid
      container
      component="footer"
      justifyContent="center"
      py={10}
      sx={{
        backgroundColor: theme.palette.primary.dark,
        color: contrastColor,
        boxShadow:
          "rgba(50, 50, 93, 0.1) 0px 3px 30px -12px inset, rgba(0, 0, 0, 0.3) 0px 9px 18px -9px inset",
      }}
    >
      <Grid item xs={5} my={{ md: "auto", xs: 1 }}>
        <Typography variant="h5" textAlign="center" fontFamily="Bungee">
          Let&apos;s Chat!
        </Typography>
        <Typography
          my={2}
          display="flex"
          justifyContent="space-evenly"
          textAlign={{ xs: "center", md: undefined }}
        >
          Made with ❤ by HackWesTX Staff
        </Typography>
        <Stack
          justifyContent="space-between"
          direction="row"
          spacing={0}
          mt={2}
        >
          <IconLink
            href="https://discord.gg/FRXYhR5EBD"
            child={<ForumIcon />}
            color={contrastColor}
          />
          <IconLink
            href="https://twitter.com/HWTXOfficial"
            child={<TwitterIcon />}
            color={contrastColor}
          />
          <IconLink
            href="https://www.depts.ttu.edu/cs/"
            child={<SchoolIcon />}
            color={contrastColor}
          />
          <IconLink
            href={`mailto:contact@hackwestx.tech?subject=Quick%20HackWesTX%20Question`}
            child={<MailIcon />}
            color={contrastColor}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Footer;
