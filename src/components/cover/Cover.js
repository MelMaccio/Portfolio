import React from "react";
import "./Cover.css"
import coverVideo from "../../media/videocover.mp4"

function Cover() {
    return ( 
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>Melina Maccio</h1>
            <p>Full Stack Web Developer | Designer</p>
        </div>
     );
}

export default Cover;