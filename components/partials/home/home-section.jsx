import React from "react";
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Custom Component
import ALink from "../../common/ALink";
import OwlCarousel from "../../features/owl-carousel";

// Import Settings 
import { HomeSlider } from "../../../utils/data/slider";
import MainMenu from "../../../components/common/partials/main-menu";
// Import Keyframes
import { fadeInUpShorter } from "../../../utils/data/keyframes";

function HomeSection({ offer, data }) {
  console.log(data);
  const options = {
    items: 1, // Number of items to show
    // margin: 50, // Space between items
    loop: true, // Enable loop
    autoplay: false, // Autoplay the slider
    // autoplayTimeout: 3000,
    // Autoplay interval (3 seconds in this example)
    // dots: true,
    nav: true
  };
  return (
    <div className="skeleton-body skel-shop-products">
      {/* <MainMenu/> */}
      {!offer ? <OwlCarousel adClass="home-slider nav-circle mb-2 " options={options}>
        {
          data?.images?.map((item, imgIndex) => {
            console.log(item);
            return (
              (
                <div key={imgIndex}>
                  <img src={item.fileURL} alt="Image" style={{ height: "100%", height: "550px", objectFit: "fill" }} />
                </div>
              )
            );
          })
        }

      </OwlCarousel> :
        <OwlCarousel adClass="home-slider nav-circle mb-2 " options={options}>
          <div>
            <img src={offer?.fileURL} alt="Image" style={{ height: "350px" }} />
          </div>
        </OwlCarousel>
      }
    </div>
  );
}

export default React.memo(HomeSection);
