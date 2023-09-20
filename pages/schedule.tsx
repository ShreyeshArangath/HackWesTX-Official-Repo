import { Box, Container, Grid, Theme, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import ScheduleDay1 from "../assets/HWTScheduleDay1.png";
import ScheduleDay2 from "../assets/HWTScheduleDay2.png";

const Schedule = () => {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  /* render one image per row on mobile/small screens */
  if (matches)
  {
    return (
      <>
        <Grid item xs={12} sx={{ px: "auto", py: 5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "120vh",
              flexDirection: "row"
            }}
          >
            <Container
              component={Image}
              src={ScheduleDay1}
              blurDataURL={ScheduleDay1.blurDataURL}
              style={{ objectFit: "contain" }}
              sx={{ height: "120vh" }}
              quality={100}
              alt="HWT Schedule Day 1"
            />
          </Box>
          <br/>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "120vh",
              flexDirection: "row"
            }}
          >
            <Container
              component={Image}
              src={ScheduleDay2}
              blurDataURL={ScheduleDay2.blurDataURL}
              style={{ objectFit: "contain" }}
              sx={{ height: "120vh" }}
              quality={100}
              alt="HWT Schedule Day 2"
            />
          </Box>
        </Grid>
      </>
    );
  }

  /* fit on two pages */
  return (
    <>
      <Grid item xs={12} sx={{ px: "auto", py: 5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "75vh",
            flexDirection: "row"
          }}
        >
          <Container
            component={Image}
            src={ScheduleDay1}
            blurDataURL={ScheduleDay1.blurDataURL}
            style={{ objectFit: "contain", paddingLeft: 200, margin: 0 }}
            sx={{ width: "50vw", height: "75vh" }}
            quality={100}
            alt="HWT Schedule Day 1"
          />
          <Container
            component={Image}
            src={ScheduleDay2}
            blurDataURL={ScheduleDay2.blurDataURL}
            style={{ objectFit: "contain", paddingRight: 200, margin: 0 }}
            sx={{ width: "50vw", height: "75vh" }}
            quality={100}
            alt="HWT Schedule Day 2"
          />
        </Box>
      </Grid>
    </>
  );
};

export default Schedule;
