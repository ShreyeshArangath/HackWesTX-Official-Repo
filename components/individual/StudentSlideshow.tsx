import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Box, Card } from "@mui/material";
import Image from "next/image";
import photo1 from "../../public/pastphotos/1.jpg";
import photo2 from "../../public/pastphotos/2.jpg";
import photo3 from "../../public/pastphotos/3.jpg";
import photo4 from "../../public/pastphotos/4.jpg";
import photo5 from "../../public/pastphotos/5.jpg";
import photo6 from "../../public/pastphotos/6.jpg";
import photo7 from "../../public/pastphotos/7.jpg";
import photo8 from "../../public/pastphotos/8.jpg";
import photo11 from "../../public/pastphotos/11.jpg";
import photo12 from "../../public/pastphotos/12.jpg";
import photo13 from "../../public/pastphotos/13.jpg";
import photo15 from "../../public/pastphotos/15.jpg";
import photo16 from "../../public/pastphotos/16.jpg";
import photo17 from "../../public/pastphotos/17.jpg";
import photo18 from "../../public/pastphotos/18.jpg";

const StudentSlideshow = () => {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];
  return (
    <Flicking
      plugins={plugins}
      circular={true}
      align="prev"
    >
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo1} height={350} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo2} height={350} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo3} height={350} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo4} height={350} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo5} height={350} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo6} height={350} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo7} height={350} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo8} height={350} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo11} height={350} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo12} height={350} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo13} height={350} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo15} height={350} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo16} height={350} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo17} height={350} placeholder="blur" /></Box>
      <Box mr={3} my="auto" className="flicking-panel" component={Card} elevation={5} sx={{backgroundColor: "#A6C48A", "&:hover": {boxShadow: 10}}}><Image alt="Past hackathon pictures" src={photo18} height={350} placeholder="blur" /></Box>
    </Flicking>
  );
};

export default StudentSlideshow;
