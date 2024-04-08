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
import BestSelling from "./recent-collection"
import { useQuery, gql } from "@apollo/react-hooks";
import { GET_HOME_DATA } from "../../../server/queries";
const GET_PRODUCTS = gql`
query GetProducts($input: ProductFilters) {
  getProducts(input: $input) {
    maxRecords
    records {
      _id
      vendorId
      brandId
      brandName
      productName
      shortDescription
      skuId
      description
      productInfo
      productShortInfo
      images {
        fileType
        fileURL
        mimeType
        originalName
      }
      rating
      sellingPrice
      price
      mrp
      tags
      productCode
      categoryId
      categoryNamePath
      categoryIdPath
      isBlocked
      stock
      status
      offerPrice
      attributes {
        attributeId
        attributeName
        attributeValueId
        attributeValue
        attributeDescription
      }
      productDetailImages {
        fileType
        fileURL
        mimeType
        originalName
      }
      warehouseSkuId
    }
  }
}`

function ElectronicCollection() {
  const { data, loading, error } = useQuery(GET_PRODUCTS, { variables: { input: { bestSeller: true } } })
  const products = data?.getProducts?.records
  //   const { data, loading, error } = useQuery(GET_HOME_DATA, {
  //     variables: { productsCount: 15 },
  //   });
  // const giftAndGadgets = data && data?.giftAndGadgets?.data;
  // const latest = data && data?.specialProducts?.latest;
  // const topRated = data && data?.specialProducts?.topRated;
  // const bestSelling = data && data?.specialProducts?.bestSelling;
  // const electronic = data && data?.electronic?.data;
  return (
    <div className="container" style={{ paddingBottom: "60px" }}>
      <section className="recent-products-section" >
        <Reveal
          keyframes={fadeIn}
          delay={100}
          duration={1000}
          triggerOnce
        >
          <div
            className="heading shop-list d-flex align-items-center justify-content-between flex-wrap  mb-0 pl-0 pr-0 pt-5"
            style={{ borderBottom: "1px solid ", borderColor: "#EEEEEE" }}
          >
            <h4 className="section-title text-transform-none mb-0 mr-0 pt-5 pb-5 mt-5">
              Best Selling
            </h4>
            <ALink href="/shop?bestSeller=true" className="pt-5 pb-5 mt-4" style={{ color: "black", fontWeight: "600" }}>
              View All Products
            </ALink>
          </div>

          <OwlCarousel
            adClass="products-slider best-selling-slider nav-blackcircle pb-0"
            options={{
              ...productSlider,
              responsive: {

                ...productSlider.responsive,
                0: {
                  items: 2,
                  nav: true,
                  loop: true
                },
                576: {
                  items: 2,
                  nav: true,
                  loop: true,
                },
                768: {
                  items: 3,
                  nav: true,
                  loop: true
                },
                992: {
                  items: 4,
                  nav: true
                },
                1200: {
                  items: 5,
                  nav: true,
                  loop: true
                }
              },
            }}
          >
            {products
              && products
                // .slice(0, 7)
                .map((item, index) => (
                  <ProductOne
                    adClass="inner-quickview inner-icon"
                    product={item}
                    key={"product-one" + index}
                  // customStyle="20%"
                  />
                ))
              // : [0, 1, 2, 3].map((item, index) => (
              //     <div
              //       className="skel-pro skel-pro-grid"
              //       key={"product-one" + index}
              //     ></div>
              //   )
              //   )
            }
          </OwlCarousel>
        </Reveal>
      </section>
      {/* <Reveal keyframes={fadeIn} delay={100} duration={1000} triggerOnce>
      <section
        className="electronic-section"
        // style={{ paddingTop: "80px", paddingBottom: "30px" }}
      >
        <div className="categories-container bg-white">
          <div className="container">
            <div className="apple-product-head">
            <h4 className="section-title text-transform-none" >
              Best Selling Products
            </h4>
            <p style={{color:"rgba(0, 0, 0, 1)",fontWeight:"500",marginBottom:7}}>View All Products</p>
            </div>
            <OwlCarousel
        adClass="products-slider carousel-with-bg nav-blackcircle pb-0"
        options={{
          ...productSlider,
          responsive: {
            ...productSlider.responsive,
            1200: {
              items: 5,
              nav: true,
            },
          },
        }}
      >
        {products
          ? products
              .slice(0, 7)
              .map((item, index) => (
                <ProductOne
                  adClass="inner-quickview inner-icon"
                  product={item}
                  key={"product-one" + index}
                  customStyle="20%"
                />
              ))
          : [0, 1, 2, 3].map((item, index) => (
              <div
                className="skel-pro skel-pro-grid"
                key={"product-one" + index}
              ></div>
            ))}
      </OwlCarousel>
            
         
          </div>

        </div>
       

       
      </section>
    </Reveal> */}
    </div>
  );
}

export default React.memo(ElectronicCollection);
