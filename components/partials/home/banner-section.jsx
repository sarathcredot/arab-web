import React from "react";
import Reveal from "react-awesome-reveal";

// Import Settigns
import { fadeInUpShorter } from "../../../utils/data/keyframes";

function BannerSection() {
  return (
    // <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
    <div className="banner-section">
      <div className="row pb-4">
        <div className="col-md-8 ">
          <img
            src="images/home/banners/homeimage2.svg"
            style={{ width: "100%", height: "470px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-4">
          <img
            src="images/home/banners/homeimage3.svg"
            style={{ width: "100%", height: "470px", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-md-12 ">
          <img
            src="images/home/banners/homeimage4.svg"
            style={{ width: "100%", height: "272px", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
    // </Reveal>
  );
}

export default React.memo(BannerSection);
