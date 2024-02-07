import React from "react";
import Reveal from "react-awesome-reveal";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Import Custom Component
import ALink from "../../common/ALink";
import ProductOne from "../../features/products/product-one";
import OwlCarousel from "react-owl-carousel2";

// Import Settigns
import { fadeIn } from "../../../utils/data/keyframes";
import { productSlider } from "../../../utils/data/slider";
import { useQuery } from "@apollo/react-hooks";
import { gql, useMutation,useLazyQuery } from "@apollo/client";


export const TOP_BRANDS=gql`query GetAllTopBrandRecords($input: BrandRecordsFilter) {
  getAllTopBrandRecords(input: $input) {
    maxRecords
    message
    records {
      _id
      brandName
      logo {
        fileType
        originalName
        fileURL
      }
    }
  }
}`

function TopBrand(props) {
  const { data, loading, error } = useQuery(TOP_BRANDS)
  console.log(data);
  const options = {
    items: 8, // Number of items to show
    margin: 60, // Space between items
    loop: true, // Enable loop
    autoplay: true, // Autoplay the slider
    autoplayTimeout: 3000,
    // Autoplay interval (3 seconds in this example)
    dots: false,
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
    nav: false,
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
    "images/sony.svg",
  ];

  return (
    <>
      <div className="container">
        <div>
          <h4 className="mb-4"style={{borderBottom:"1px solid #EEE",paddingBottom:"20px"}}>Top Brands</h4>
        </div>
        <div>
          <OwlCarousel options={options} autoplay>
            {data && data?.getAllTopBrandRecords?.records.map((brand, index) => (
              <div key={index} className=" item mb-4" >
                {brand.logo && (<img
                  src={brand.logo.fileURL}
                  alt={`Brand ${index + 1}`}
                  style={{ width: "128px", height: "128px"}}
                />)}
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
      <div className="custom-topbrand-img">
        <img src="images/banners/bannermiddle.svg" />
      </div>
    </>
  );
}

export default React.memo(TopBrand);
