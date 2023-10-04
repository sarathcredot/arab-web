import React from "react";
import Reveal from "react-awesome-reveal";
import { fadeInUpShorter } from "../../../utils/data/keyframes";
import { useRouter } from "next/router";

function BannerSection({ offer }) {
  return (
    // <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
    <div className="banner-section">
      {offer ? (
        <>
          <div className="row pt-4">
            <div className="col-md-12 ">
              <img
                className="home_banner3"
                src="images/home/banners/homeimage4.svg"
                style={{ width: "100%", height: "272px", objectFit: "cover" }}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row pb-4">
            <div className="col-md-8">
              <img
                src="images/home/banners/homeimage2.svg"
                className="bannerimg"
                style={{ width: "100%", height: "470px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-4">
              <img
                src="images/home/banners/homeimage3.svg"
                className="bannerimg"
                style={{ width: "100%", height: "470px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-md-12">
              <img
                className="home_banner3"
                src="images/home/banners/homeimage4.svg"
                style={{ width: "100%", height: "272px", objectFit: "cover" }}
              />
            </div>
          </div>
        </>
      )}
    </div>
    // </Reveal>
  );
}

export default React.memo(BannerSection);
