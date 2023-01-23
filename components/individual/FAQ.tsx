import { Card, CardContent, Grid, Typography } from "@mui/material";
import Link from "next/link";

type FAQ = { heading: string; body: string; guidelines?: boolean };

const FAQ = (props: FAQ) => {
  return (
    <Grid item xs={12} md={6} lg={4} my={3}>
      <Card
        elevation={4}
        sx={{
          width: {
            xs: "70%",
            md: "60%",
            lg: "75%",
            xl: "70%",
          },
          mx: "auto",
        }}
      >
        <CardContent>
          <Typography variant="subtitle1">{props.heading}</Typography>
          <Typography variant="subtitle1">{props.body}</Typography>
          {props.guidelines ? (
            <Link href="http://mlh.io/code-of-conduct">
              MLH Code of Conduct.
            </Link>
          ) : undefined}
        </CardContent>
      </Card>
    </Grid>
  );
};
export default FAQ;
