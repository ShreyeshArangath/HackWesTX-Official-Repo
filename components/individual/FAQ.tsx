import { Card, CardContent, Grid, Typography } from "@mui/material";
import Link from "next/link";

type FAQ = { heading: string; body: string; guidelines?: boolean };

const FAQ = (props: FAQ) => {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card
        elevation={4}
        sx={{
          width: {
            xs: "70%",
            md: "75%",
            xl: "70%",
          },
          mx: "auto",
        }}
      >
        <CardContent>
          <Typography variant="h6" textAlign="center" mb={2}>
            {props.heading}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              overflowWrap: "break-word",
              wordWrap: "break-word",
              wordBreak: "break-word",
              hyphens: "auto",
            }}
          >
            {props.body}{" "}
            {props.heading === "Guidelines" ? (
              <Link href="http://mlh.io/code-of-conduct">
                MLH Code of Conduct.
              </Link>
            ) : undefined}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default FAQ;
