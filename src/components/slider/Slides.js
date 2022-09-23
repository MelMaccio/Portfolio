import React from "react";
import "./Slider.css";
import pm from "../../media/pm.png";
import pri from "../../media/PRI.jpg";

const slidesInfo = [
  {
    src: pm,
    alt: "Prode Master",
    desc: "Prode Master",
    url: "https://prodemaster.netlify.app/",
  },
  {
    src: pri,
    alt: "Countries App",
    desc: "Countries App",
    url: "https://github.com/MelMaccio/PI-Countries",
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Project 3",
    desc: "Project 3",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <a href={slide.url} target="_blank" rel="noreferrer">
      <img src={slide.src} alt={slide.alt} />
      <div className="slide-desc">
        <span>{slide.desc}</span>
      </div>
    </a>
  </div>
));

export default slides;
