import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import '../assets/pastphotos';

export class StudentSlideshow extends Component {
  state = {
    piclist: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24,
    ],
  };

  render() {
    return (
      <Carousel>
        {this.state.piclist.map((current) => (
          <div>
            <img key={{ current }} alt="Past hackathon pictures" src="assets/{{current}}.jpeg" />
            <p className="legend">Legend</p>
          </div>
        ))}
      </Carousel>
    );
  }
}
