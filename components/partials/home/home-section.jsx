import React from "react";
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Custom Component
import ALink from "../../common/ALink";
import OwlCarousel from "../../features/owl-carousel";

// Import Settings
import { HomeSlider } from "../../../utils/data/slider";

// Import Keyframes
import { fadeInUpShorter } from "../../../utils/data/keyframes";

function HomeSection() {
  return (
    <OwlCarousel adClass="home-slider nav-circle mb-2" options={HomeSlider}>
      <div className="home-slide home-slide1 banner">
        <figure className="mb-0">
          <LazyLoadImage
            alt="Home Slide"
            src="images/home/slider/home1.svg"
            threshold={500}
            effect="black and white"
            width="100%"
            height={350}
          />
        </figure>

        <div className="container d-flex align-items-sm-center justify-content-sm-between justify-content-center flex-column flex-sm-row">
          <div className="banner-content content-left text-sm-right mb-sm-0 mb-2">
            {/* <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000}>
              <h2 className="text-shadow text-white font1 mb-0">TRENDY</h2>
            </Reveal> */}

            {/* <Reveal keyframes={fadeInUpShorter} delay={400} duration={1000}>
              <h1 className="text-dark">GAMING</h1>
            </Reveal> */}

            {/* <Reveal keyframes={fadeInUpShorter} delay={600} duration={1000}>
              <h3 className="text-dark mb-0">CHAIRS</h3>
            </Reveal> */}

            {/* <Reveal keyframes={fadeInUpShorter} delay={800} duration={1000}>
              <h2 className="text-shadow text-white font1 mr-0 mb-0">DEALS</h2>
            </Reveal> */}
          </div>

          <div className="banner-content content-right">
            {/* <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000}>
              <>
                <h4 className="text-transform-none">Porto Game Chair</h4>
                <h5 className="text-price text-transform-none mb-0">
                  from <span>$299.99</span>
                </h5>
                <h5 className="coupon-sale-text">
                  <span>to</span>
                  <b className="text-white align-middle">
                    <sup>$</sup>
                    <em className="align-text-top">199</em>
                    <sup>99</sup>
                  </b>
                </h5>
                <ALink href="/shop" className="btn btn-dark btn-lg">
                  Shop Now
                </ALink>
              </>
            </Reveal> */}
          </div>
        </div>
      </div>

      <div className="home-slide home-slide2 banner banner-md-vw">
        <figure className="mb-0">
          <LazyLoadImage
            alt="Home Slide"
            src="images/home/slider/home1.svg"
            threshold={500}
            effect="black and white"
            width="100%"
            height={350}
          />
        </figure>

        <div className="container d-flex align-items-sm-center justify-content-center justify-content-sm-between flex-column-reverse flex-sm-row">
          <div className="banner-content content-left mt-2 mt-sm-0">
            {/* <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000}>
              <>
                <h4 className="text-transform-none">Best Gadtets Deals</h4>
                <h5 className="coupon-sale-text">
                  <span>from</span>
                  <b className="text-white align-middle">
                    <sup>$</sup>
                    <em className="align-text-top">1</em>
                    <sup>99</sup>
                  </b>
                </h5>
                <ALink href="/shop" className="btn btn-dark btn-lg">
                  Shop Now
                </ALink>
              </>
            </Reveal> */}
          </div>

          <div className="banner-content content-right text-sm-right">
            {/* <Reveal keyframes={fadeInUpShorter} delay={100} duration={1000}>
              <h2 className="text-shadow text-white font1 mb-0">NEW</h2>
            </Reveal>

            <Reveal keyframes={fadeInUpShorter} delay={400} duration={1000}>
              <h1 className="text-dark">SELECTED</h1>
            </Reveal>

            <Reveal keyframes={fadeInUpShorter} delay={600} duration={1000}>
              <h3 className="text-dark mb-0">DEALS</h3>
            </Reveal>

            <Reveal keyframes={fadeInUpShorter} delay={800} duration={1000}>
              <h2 className="text-shadow text-white font1 mr-0 mb-0">
                RELEASES
              </h2>
            </Reveal> */}
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
}

export default React.memo(HomeSection);
