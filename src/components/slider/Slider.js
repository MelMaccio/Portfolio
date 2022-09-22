import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";

function Slider() {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My Projects</h2>
      </div>
      <Carousel
        plugins={["arrows"]}
        slidesPerPage={3}
        animationSpeed={200}
        offset={50}
        itemWidth={350}
        slides={Slides}
      />
    </div>
  );
}

export default Slider;
