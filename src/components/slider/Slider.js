import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
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
        plugins={[
          "infinite",
          "centered",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
        ]}
        animationSpeed={200}
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960: {
            itemWidth: 250,
            plugins: [
              "infinite",
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default Slider;
