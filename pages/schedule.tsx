import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import Agenda from "../assets/HWTAgenda.png";

const Schedule = () => {
  return (
    <>
      <Grid item xs={12} sx={{ px: "auto", py: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            height: "75vh",
          }}
        >
          <Container
            component={Image}
            src={Agenda}
            style={{ objectFit: "contain" }}
            sx={{ width: "75vw", height: "50vh" }}
            quality={100}
            alt="HWT Schedule"
          />
        </Box>
      </Grid>
    </>
  );
};

export default Schedule;
