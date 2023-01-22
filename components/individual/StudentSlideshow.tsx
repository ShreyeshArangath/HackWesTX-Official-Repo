import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Box } from "@mui/material";
import Image from "next/image";
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

const StudentSlideshow = () => {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];
  return (
    <Flicking
      plugins={plugins}
      circular={true}
      align="prev"
      onMoveEnd={(e) => {
        console.log(e);
      }}
    >
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo1} height={500} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo2} height={500} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo3} height={500} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo4} height={500} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo5} height={500} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo6} height={500} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo7} height={500} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo8} height={500} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo11} height={500} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo12} height={500} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo13} height={500} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo15} height={500} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo16} height={500} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo17} height={500} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel"><Image alt="Past hackathon pictures" src={photo18} height={500} placeholder="blur" /></Box>
    </Flicking>
  );
};

export default StudentSlideshow;
