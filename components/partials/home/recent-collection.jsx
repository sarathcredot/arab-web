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

function RecentCollection(props) {
  const { bestSelling } = props;

  

  return (
    <>
      <section className="recent-products-section" style={{ marginTop: "10px" }}>
        <Reveal
          keyframes={fadeIn}
          delay={100}
          duration={1000}
          triggerOnce
          style={{ marginTop: "30px" }}
        >
          <div  
            className="heading shop-list d-flex align-items-center flex-wrap  mb-0 pl-0 pr-0"
            style={{ borderBottom: "1px solid ", borderColor: "#EEEEEE" }}
          >
            <h4 className="section-title text-transform-none mb-0 mr-0">
             50% Off
            </h4>
            <ALink className="view-all ml-auto" href='/shop?discount=10%'>
              View All Products
            </ALink>
          </div>

          <OwlCarousel
            adClass="products-slider carousel-with-bg nav-blackcircle pb-0"
            options={{
              ...productSlider,
              responsive: {
                ...productSlider.responsive,
                0: {
                  items: 2,
                  nav: true
              },
              576: {
                  items: 2,
                  nav: true
              },
              768: {
                  items: 3,
                  nav: true
              },
              992: {
                  items: 4,
                  nav: true
              },
              1200: {
                  items: 5,
                  nav: true
              }
              },
            }}
          >
            {bestSelling
              ? bestSelling
                 
                  .map((item, index) => (
                    <ProductOne
                      adClass="inner-quickview inner-icon"
                      product={item}
                      key={"product-one" + index}
                      customStyle="20%"
                    />
                  ))
              : [0, 1].map((item, index) => (
                  <div
                    className="skel-pro skel-pro-grid"
                    key={"product-one" + index}
                  ></div>
                ))}
          </OwlCarousel>
        </Reveal>
      </section>
      <section className="recent-products-section">
        <Reveal
          keyframes={fadeIn}
          delay={100}
          duration={1000}
          triggerOnce
          style={{ marginTop: "30px" }}
        >
          <div
            className="heading shop-list d-flex align-items-center flex-wrap mb-0 pl-0 pr-0"
            style={{ borderBottom: "1px solid ", borderColor: "#EEEEEE" }}
          >
            <h4 className="section-title text-transform-none mb-0 mr-0">
            30%off
            </h4>
            <ALink className="view-all ml-auto" href="/shop?discount=30%">
              View All Products
            </ALink>
          </div>

          <OwlCarousel
            adClass="products-slider carousel-with-bg nav-blackcircle pb-0"
            // options={productSlider}
            options={{
              ...productSlider,
              responsive: {
                ...productSlider.responsive,
                0: {
                  items: 2,
                  nav: true
              },
              576: {
                  items: 2,
                  nav: true
              },
              768: {
                  items: 3,
                  nav: true
              },
              992: {
                  items: 4,
                  nav: true
              },
              1200: {
                  items: 5,
                  nav: true
              }
              },
            }}
          >
            {bestSelling?
               bestSelling.map((item, index) => (
                    <ProductOne
                      adClass="inner-quickview inner-icon"
                      product={item}
                      key={"product-one" + index}
                      customStyle="20%"
                    />
                  ))
              : [0, 1].map((item, index) => (
                  <div
                    className="skel-pro skel-pro-grid"
                    key={"product-one" + index}
                  ></div>
                ))}
          </OwlCarousel>
        </Reveal>
      </section>
      <section className="recent-products-section">
        <Reveal
          keyframes={fadeIn}
          delay={100}
          duration={1000}
          triggerOnce
          style={{ marginTop: "30px" }}
        >
          <div
            className="heading shop-list d-flex align-items-center flex-wrap mb-0 pl-0 pr-0"
            style={{ borderBottom: "1px solid ", borderColor: "#EEEEEE" }}
          >
            <h4 className="section-title text-transform-none mb-0 mr-0">
              10% Off
            </h4>
            <ALink className="view-all ml-auto" href='/shop?discount=10%'>
              View All Products
            </ALink>
          </div>

          <OwlCarousel
            adClass="products-slider carousel-with-bg nav-blackcircle pb-0"
            // options={productSlider}
             options={{
              ...productSlider,
              responsive: {
                ...productSlider.responsive,
                0: {
                  items: 2,
                  nav: true
              },
              576: {
                  items: 2,
                  nav: true
              },
              768: {
                  items: 3,
                  nav: true
              },
              992: {
                  items: 4,
                  nav: true
              },
              1200: {
                  items: 5,
                  nav: true
              }
              },
            }}
          >
            {
              bestSelling?.map((item, index) => (
                    <ProductOne
                      adClass="inner-quickview inner-icon"
                      product={item}
                      key={"product-one" + index}
                      customStyle="20%"
                    />
                  ))
             }
          </OwlCarousel>
        </Reveal>
      </section>
    </>
  );
}

export default React.memo(RecentCollection);
