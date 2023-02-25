import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";

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
            src="https://cdn.discordapp.com/attachments/964289397568720907/1078072124285141072/HWTAgenda.png"
            width={250}
            height={300}
            style={{ objectFit: "contain" }}
            sx={{ width: "75vw", height: "50vh" }}
            alt="HWT Schedule"
          />
        </Box>
      </Grid>
    </>
  );
};

export default Schedule;
