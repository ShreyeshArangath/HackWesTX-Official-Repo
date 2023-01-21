import { Box, Stack, Typography } from "@mui/material";
import styles from "../../styles/Home.module.css";

const HWTCountdown = (props: any) => {
  const days = props.days;
  const hours = props.hours;
  const minutes = props.minutes;
  const seconds = props.seconds;

  return (
    <Stack
      direction="row"
      spacing={[2, 3, 4, 5, 6]}
      alignItems="center"
      justifyContent="center"
      color="#055215"
      my={4}
    >
      <Box>
        <Typography variant="h2" textAlign="center" className={styles.glitch}>
          {days}
        </Typography>
        <Typography variant="h6" textAlign="center" color="#6acd75">
          DAYS
        </Typography>
      </Box>
      <Box>
        <Typography variant="h2" textAlign="center" className={styles.glitch}>
          {hours}
        </Typography>
        <Typography variant="h6" textAlign="center" color="#6acd75">
          HOURS
        </Typography>
      </Box>
      <Box>
        <Typography variant="h2" textAlign="center" className={styles.glitch}>
          {minutes}
        </Typography>
        <Typography variant="h6" textAlign="center" color="#6acd75">
          MINTUES
        </Typography>
      </Box>
      <Box>
        <Typography variant="h2" textAlign="center" className={styles.glitch}>
          {seconds}
        </Typography>
        <Typography variant="h6" textAlign="center" color="#6acd75">
          SECONDS
        </Typography>
      </Box>
    </Stack>
  );
};
export default HWTCountdown;
