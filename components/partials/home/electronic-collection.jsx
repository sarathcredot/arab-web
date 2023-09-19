import React from "react";
import Reveal from "react-awesome-reveal";

// Import Custom Component
import ALink from "../../common/ALink";
import ProductOne from "../../features/products/product-one";
import OwlCarousel from "../../features/owl-carousel";

// Import Settigns
import { fadeIn } from "../../../utils/data/keyframes";
import { productSlider } from "../../../utils/data/slider";
import GardenCollection from "./garden-collection";
import { useQuery } from "@apollo/react-hooks";
import { GET_HOME_DATA } from "../../../server/queries";
function ElectronicCollection({ products }) {
  const { data, loading, error } = useQuery(GET_HOME_DATA, {
    variables: { productsCount: 15 },
  });
  const giftAndGadgets = data && data.giftAndGadgets.data;
  const latest = data && data.specialProducts.latest;
  const topRated = data && data.specialProducts.topRated;
  const bestSelling = data && data.specialProducts.bestSelling;
  const electronic = data && data.electronic.data;
  return (
    <Reveal keyframes={fadeIn} delay={100} duration={1000} triggerOnce>
      <section
        className="electronic-section"
        // style={{ paddingTop: "80px", paddingBottom: "30px" }}
      >
        <div className="categories-container bg-white">
          <div className="container">
            <h4 className="section-title text-transform-none">
              Apple Products
            </h4>

            <div className="row">
              <div className="col-md-12 col-sm-12 mb-2 mb-md-0">
                <div
                  className="banner banner4 bg-image"
                  style={{
                    backgroundImage: "url(images/home/banners/applebanner.svg)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="applesection-container mb-4">
          <div className="container">
            <GardenCollection
              latest={latest}
              bestSelling={bestSelling}
              topRated={topRated}
              loading={loading}
            />
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default React.memo(ElectronicCollection);
