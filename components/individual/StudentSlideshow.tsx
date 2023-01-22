import { Box, Grid } from "@mui/material";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import photo1 from "../../assets/pastphotos/1.jpg";
import photo11 from "../../assets/pastphotos/11.jpg";
import photo12 from "../../assets/pastphotos/12.jpg";
import photo13 from "../../assets/pastphotos/13.jpg";
import photo15 from "../../assets/pastphotos/15.jpg";
import photo16 from "../../assets/pastphotos/16.jpg";
import photo17 from "../../assets/pastphotos/17.jpg";
import photo18 from "../../assets/pastphotos/18.jpg";
import photo2 from "../../assets/pastphotos/2.jpg";
import photo3 from "../../assets/pastphotos/3.jpg";
import photo4 from "../../assets/pastphotos/4.jpg";
import photo5 from "../../assets/pastphotos/5.jpg";
import photo6 from "../../assets/pastphotos/6.jpg";
import photo7 from "../../assets/pastphotos/7.jpg";
import photo8 from "../../assets/pastphotos/8.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const StudentSlideshow = () => {
  return (
    <Carousel
      swipeable
      draggable={false}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      <Box>
        <Image
          key="1"
          alt="Past hackathon pictures"
          src={photo1}
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Grid item xs={12}>
        <Image
          key="2"
          alt="Past hackathon pictures"
          src={photo2}
          style={{ objectFit: "contain" }}
          fill
        />
      </Grid>
      <Grid item xs={12}>
        <Image
          key="3"
          alt="Past hackathon pictures"
          src={photo3}
          style={{ objectFit: "contain" }}
          fill
        />
      </Grid>
      <Grid item xs={12}>
        <Image
          key="4"
          alt="Past hackathon pictures"
          src={photo4}
          style={{ objectFit: "contain" }}
          fill
        />
      </Grid>
      <Grid item xs={12}>
        <Image
          key="5"
          alt="Past hackathon pictures"
          src={photo5}
          style={{ objectFit: "contain" }}
          fill
        />
      </Grid>
      <Grid item xs={12}>
        <Image
          key="6"
          alt="Past hackathon pictures"
          src={photo6}
          style={{ objectFit: "contain" }}
          fill
        />
      </Grid>
      <Grid item xs={12}>
        <Image
          key="7"
          alt="Past hackathon pictures"
          src={photo7}
          style={{ objectFit: "contain" }}
          fill
        />
      </Grid>
      <Grid item xs={12}>
        <Image
          key="8"
          alt="Past hackathon pictures"
          src={photo8}
          style={{ objectFit: "contain" }}
          fill
        />
      </Grid>
      <Grid item xs={12}>
        <Image
          key="11"
          alt="Past hackathon pictures"
          src={photo11}
          style={{ objectFit: "contain" }}
          fill
        />
      </Grid>
      <Grid item xs={12}>
        <Image
          key="12"
          alt="Past hackathon pictures"
          src={photo12}
          style={{ objectFit: "contain" }}
          fill
        />
      </Grid>
      <Grid item xs={12}>
        <Image
          key="13"
          alt="Past hackathon pictures"
          src={photo13}
          style={{ objectFit: "contain" }}
          fill
        />
      </Grid>
      <Grid item xs={12}>
        <Image
          key="15"
          alt="Past hackathon pictures"
          src={photo15}
          style={{ objectFit: "contain" }}
          fill
        />
      </Grid>
      <Grid item xs={12}>
        <Image
          key="16"
          alt="Past hackathon pictures"
          src={photo16}
          style={{ objectFit: "contain" }}
          fill
        />
      </Grid>
      <Grid item xs={12}>
        <Image
          key="17"
          alt="Past hackathon pictures"
          src={photo17}
          style={{ objectFit: "contain" }}
          fill
        />
      </Grid>
      <Grid item xs={12}>
        <Image
          key="18"
          alt="Past hackathon pictures"
          src={photo18}
          style={{ objectFit: "contain" }}
          fill
        />
      </Grid>
    </Carousel>
  );
};

export default StudentSlideshow;
