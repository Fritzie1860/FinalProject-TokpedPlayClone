import React, { useRef, useEffect } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";
import "./player.css";

const Videoplayer = ({ link_video }) => {
  const videoRef = useRef(null);

  // useEffect(() => {
  //   const player = new Plyr(videoRef.current);
  //   return () => {
  //     player.destroy();
  //   };
  // }, []);

  return (
    <div className="player" data-plyr-provider="youtube" data-plyr-embed-id="yoBibrIPWJQ">
      <div className="embed-responsive embed-responsive-16by9 rounded">
        <iframe
          ref={videoRef}
          className="embed-responsive-item"
          src = {`https://www.youtube.com/embed/${link_video}`}
          title="YouTube Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Videoplayer;
