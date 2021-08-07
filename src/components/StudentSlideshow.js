import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import photo1 from "../assets/pastphotos/1.JPG";
import photo2 from "../assets/pastphotos/2.JPG";
import photo3 from "../assets/pastphotos/3.JPG";
import photo4 from "../assets/pastphotos/4.JPG";
import photo5 from "../assets/pastphotos/5.JPG";
import photo6 from "../assets/pastphotos/6.JPG";
import photo7 from "../assets/pastphotos/7.JPG";
import photo8 from "../assets/pastphotos/8.JPG";
import photo11 from "../assets/pastphotos/11.JPG";
import photo12 from "../assets/pastphotos/12.JPG";
import photo13 from "../assets/pastphotos/13.JPG";
import photo15 from "../assets/pastphotos/15.JPG";
import photo16 from "../assets/pastphotos/16.JPG";
import photo17 from "../assets/pastphotos/17.JPG";
import photo18 from "../assets/pastphotos/18.JPG";

export class StudentSlideshow extends Component {
  render() {
    return (
      <Carousel
        autoPlay
        emulateTouch
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img key="1" alt="Past hackathon pictures" src={photo1} />
        </div>
        <div>
          <img key="2" alt="Past hackathon pictures" src={photo2} />
        </div>
        <div>
          <img key="3" alt="Past hackathon pictures" src={photo3} />
        </div>
        <div>
          <img key="4" alt="Past hackathon pictures" src={photo4} />
        </div>
        <div>
          <img key="5" alt="Past hackathon pictures" src={photo5} />
        </div>
        <div>
          <img key="6" alt="Past hackathon pictures" src={photo6} />
        </div>
        <div>
          <img key="7" alt="Past hackathon pictures" src={photo7} />
        </div>
        <div>
          <img key="8" alt="Past hackathon pictures" src={photo8} />
        </div>
        <div>
          <img key="11" alt="Past hackathon pictures" src={photo11} />
        </div>
        <div>
          <img key="12" alt="Past hackathon pictures" src={photo12} />
        </div>
        <div>
          <img key="13" alt="Past hackathon pictures" src={photo13} />
        </div>
        <div>
          <img key="15" alt="Past hackathon pictures" src={photo15} />
        </div>
        <div>
          <img key="16" alt="Past hackathon pictures" src={photo16} />
        </div>
        <div>
          <img key="17" alt="Past hackathon pictures" src={photo17} />
        </div>
        <div>
          <img key="18" alt="Past hackathon pictures" src={photo18} />
        </div>
      </Carousel>
    );
  }
}
