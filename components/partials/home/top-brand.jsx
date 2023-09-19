import React from "react";
import Reveal from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Import Custom Component
import ALink from "../../common/ALink";
import ProductOne from "../../features/products/product-one";
import OwlCarousel from "../../features/owl-carousel";

// Import Settigns
import { fadeIn } from "../../../utils/data/keyframes";
import { productSlider } from "../../../utils/data/slider";

function TopBrand(props) {
  const options = {
    items: 7, // Number of items to show
    margin: 10, // Space between items
    loop: true, // Enable loop
    autoplay: false, // Autoplay the slider
    autoplayTimeout: 3000, // Autoplay interval (3 seconds in this example)
    responsive: {
      0: {
        items: 3, // Number of items to show on small screens
      },
      768: {
        items: 5, // Number of items to show on medium screens
      },
      992: {
        items: 7, // Number of items to show on large screens
      },
    },
    nav: true,
    navText: [
      "<div >Next</div>", // You can use icons or text here
      "<div style={{marginBottom:-38px}}>Prev</div>", // Customize as needed
    ],
  };

  const brands = [
    // Add your brand images here
    "images/apple.svg",
    "images/realme.svg",
    "images/sony.svg",
    "images/mi.svg",
    "images/samsung.svg",
    "images/lg.svg",
    "images/dell.svg",
  ];

  return (
    <>
      <div>
        <h4 className="mb-4">Top Brands</h4>
      </div>
      <div>
        <OwlCarousel options={options} adClass="w-full ">
          {brands.map((brand, index) => (
            <div key={index} className="item mb-4">
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                style={{ width: "128px", height: "128px" }}
              />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
}

export default React.memo(TopBrand);
