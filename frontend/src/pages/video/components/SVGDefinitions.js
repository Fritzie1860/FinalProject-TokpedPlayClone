import React from "react";
import { Helmet } from "react-helmet-async";

const SVGDefinitions = () => {
  return (
    <Helmet>
      <div style={{ display: "none" }}>
        {/* Plyr SVG Definitions */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            position: "absolute",
            width: 0,
            height: 0,
            visibility: "hidden",
          }}
        >
          <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" id="plyr-play">
            <path d="M14.68,9.2a1.15,1.15,0,0,0-.71-.2,1.12,1.12,0,0,0-.7.2L7.34,12.6a1.14,1.14,0,0,0-.58.97,1.18,1.18,0,0,0,.58.96,1.05,1.05,0,0,0,.7.21,1.17,1.17,0,0,0,.7-.21L14,10.18A1.07,1.07,0,0,0,14.68,9.2Z"></path>
          </symbol>
          {/* Add more Plyr symbols if needed */}
        </svg>
      </div>
    </Helmet>
  );
};

export default SVGDefinitions;
