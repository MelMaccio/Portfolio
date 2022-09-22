import React from "react";
import "./About.css";
import photo from "../../media/yo.jpg";

function About() {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>
          I am a Full Stack Web Developer and designer, with a Front-End
          orientation. I am a highly creative person. I love generating
          attractive experiences, not only visually but also functionally.
          Another quality that characterizes me is curiosity. I am always
          learning new things and I am a fan of studying. I ventured into the
          world of medicine, design, and finally managed to combine the latter,
          with my other passion, programming!
        </p>
      </div>
      <div className="about-img">
        <img src={photo} alt="" />
      </div>
    </div>
  );
}

export default About;
