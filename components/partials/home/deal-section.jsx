import React from "react";
import Reveal from "react-awesome-reveal";

//Import Custom Component
import ProductOne from "../../features/products/product-one";
import ProductFour from "../../features/products/product-four";

// Import Settigns
import { fadeInUpShorter } from "../../../utils/data/keyframes";

function DealSection({ products }) {
  return (
    <section className="deal-products-section">
      <h2 className="section-title d-flex align-items-center text-transform-none">
        Deals of the day
      </h2>

      <Reveal
        keyframes={fadeInUpShorter}
        delay={100}
        duration={1000}
        triggerOnce
      >
        <div className="row">
          <div className="col-lg-4 col-md-5 mb-2 mb-md-0">
            {products
              ? products
                  .slice(0, 15)
                  .filter((item) => item.until && item.until !== null)
                  .slice(0, 1)
                  .map((item, index) => (
                    <ProductFour
                      adClass="deal-product"
                      product={item}
                      key={"All Products:" + index}
                    />
                  ))
              : [0].map((item, index) => (
                  <div
                    className="skel-pro skel-pro-grid"
                    key={"Skeleton:" + index}
                  ></div>
                ))}
          </div>

          <div className="col-lg-8 col-md-7">
            <div className="products-with-divide">
              <div className="row row-joined">
                {products
                  ? products
                      .filter((item) => item.until === null)
                      .slice(0, 8)
                      .map((item, index) => (
                        <div
                          className="col-xl-3 col-sm-4 col-6"
                          key={"All Products:" + index}
                        >
                          <ProductOne
                            adClass="inner-quickview inner-icon"
                            product={item}
                          />
                        </div>
                      ))
                  : new Array(8).fill(1).map((item, index) => (
                      <div
                        className="col-xl-3 col-sm-4 col-6"
                        key={"All Products:" + index}
                      >
                        <div
                          className="skel-pro skel-pro-grid"
                          key={"Skeleton:" + index}
                        ></div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default React.memo(DealSection);
