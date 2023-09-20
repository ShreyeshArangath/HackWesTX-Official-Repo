import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import styles from "../../styles/Home.module.css";

const HWTCountdown = () => {
  const renderer = (date: CountdownRenderProps) => {
    return (
      <Stack
        direction="row"
        spacing={[2, 3, 4, 5, 6]}
        alignItems="center"
        justifyContent="center"
        className={styles.glitch}
        color="#055215"
        my={4}
      >
        <Box>
          <Typography variant="h2" textAlign="center">
            {date.formatted.days}
          </Typography>
          <Typography variant="h6" textAlign="center" color="#32a93f">
            DAYS
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" textAlign="center">
            {date.formatted.hours}
          </Typography>
          <Typography variant="h6" textAlign="center" color="#32a93f">
            HOURS
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" textAlign="center">
            {date.formatted.minutes}
          </Typography>
          <Typography variant="h6" textAlign="center" color="#32a93f">
            MINUTES
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h2"
            textAlign="center"
            suppressHydrationWarning={true}
          >
            {date.formatted.seconds}
          </Typography>
          <Typography variant="h6" textAlign="center" color="#32a93f">
            SECONDS
          </Typography>
        </Box>
      </Stack>
    );
  };

  return (
    <Countdown
      date={new Date("September 16, 2023 08:00:00")}
      renderer={renderer}
    />
  );
};
export default HWTCountdown;
