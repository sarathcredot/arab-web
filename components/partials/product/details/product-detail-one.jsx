import SlideToggle from "react-slide-toggle";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Import Actions
import { actions as WishlistAction } from "../../../../store/wishlist";
import { actions as CartAction } from "../../../../store/cart";

// Import Custom Component
import ProductNav from "../product-nav";
import Qty from "../qty";
import ALink from "../../../common/ALink";
import ProductCountdown from "../../../features/product-countdown";
// import{useLazyQuery, useQuery}from"@apollo/client"


import {gql} from "@apollo/client";
import {useQuery} from "@apollo/react-hooks"





function ProductDetailOne(props) {
  const router = useRouter();
  const {
    product,
    adClass = "col-lg-7 col-md-6",
    prev,
    next,
    isNav = true,
    parent = ".product-single-default",
    isSticky = false,
  } = props;
  const [attrs, setAttrs] = useState({});
  const [variant, setVariant] = useState(null);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [qty, setQty] = useState(1);
  const [selectedcolor, setSelectedColor] = useState();
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [variantData, setVariantData] = useState([])

  console.log(variant,"varianteeeeeeeees")
  const GET_VARIANT= gql `query Query($input: VariantsInput!) {
    getVariants(input: $input) {
      variants {
        productId
        attributeId
        attributeName
        attributeValueId
        attributeValue
        attributeDescription
        colorCode
      }
    }
  }`

  const { data:variData, loading: variantLoading, error: variantError } = useQuery(GET_VARIANT, {
    variables: { input: { _id: product?._id } }
  });
  
  // console.log("dfgfff",variData);


  const getUniqueVariants = (data) => {
    const uniqueVariants = [];
    const variantSet = new Set();
  
    data.forEach((variant) => {
      const key = `${variant.attributeName}_${variant.attributeValue}`;
  
      if (!variantSet.has(key)) {
        variantSet.add(key);
        uniqueVariants.push(variant);
      }
    });
    return uniqueVariants;
  };


  useEffect(() => {
    if (variantError) {
      console.error("Error fetching variant data:", variantError);
    } else {
      // setVariantData(variData?.getVariants.variants || []);
      const uniqueVariants = getUniqueVariants(variData?.getVariants.variants || []);
      setVariantData(uniqueVariants);
    }
  }, [ variData]);
  

  


 
  

    console.log( variantData)
 
  // useEffect(() => {
  //   if (product) {
  //     let attributes = variants?.reduce(
  //       (acc, cur) => {
  //         cur.size &&
  //           !acc.sizes.find((size) => size.size === cur.size.size) &&
  //           acc.sizes.push(cur.size);
  //         cur.color &&
  //           !acc.colors.find((color) => color.name === cur.color.name) &&
  //           acc.colors.push(cur.color);
  //         return acc;
  //       },
  //       { sizes: [], colors: [] }
  //     );
  //     setAttrs(attributes);
  //     initState();
  //   }
  // }, [product]);



  


  useEffect(() => {
    if (product && variantData) {
      let attributes = variantData.reduce(
        (acc, cur) => {
          const attributeType = cur?.attributeDescription.toLowerCase();
          const attributeName = cur?.attributeName;
          const attributeValue = cur?.attributeValue;
  
          if (!acc[attributeType]) {
            acc[attributeType] = [];
          }
  
          if (
            attributeValue &&
            !acc[attributeType].find((attr) => attr.value === attributeValue)
          ) {
            acc[attributeType].push({ name: attributeName, value: attributeValue });
          }
  
          return acc;
        },
        {} // Initialize an empty object
      );
  
      setAttrs(attributes);
      initState();
    }
  }, [variantData]);
  
  
  // console.log(attrs,"atrrrs")

  
  // useEffect(() => {
  //   if (product) {
  //     let priceToggle = document.querySelector(`${parent} .price-toggle`);
  //     let variationToggle = document.querySelector(
  //       `${parent} .variation-toggle`
  //     );

  //     if (
  //       (attrs?.sizes?.length && !size) ||
  //       (attrs?.colors?.length && !color)
  //     ) {
  //       document.querySelector(`${parent} .shopping-cart`) &&
  //         document
  //           .querySelector(`${parent} .shopping-cart`)
  //           .classList.add("disabled");
  //       document.querySelector(`${parent} .sticky-cart .add-cart`) &&
  //         document
  //           .querySelector(`${parent} .sticky-cart .add-cart`)
  //           .classList.add("disabled");
  //       priceToggle &&
  //         priceToggle.classList.contains("expanded") &&
  //         priceToggle.click();
  //     } else {
  //       document.querySelector(`${parent} .shopping-cart`) &&
  //         document
  //           .querySelector(`${parent} .shopping-cart`)
  //           .classList.remove("disabled");
  //       document.querySelector(`${parent} .sticky-cart .add-cart`) &&
  //         document
  //           .querySelector(`${parent} .sticky-cart .add-cart`)
  //           .classList.remove("disabled");
  //       let index = product?.variants?.findIndex((item) => {
  //         return (
  //           !(item.size && item.size.size !== size) &&
  //           !(item.color && item.color.name !== color)
  //         );
  //       });
  //       //TODO:when adding remove commented
  //       // setVariant({ ...product?.variants[index], id: index });
  //     }

  //     if (size !== null || color !== null) {
  //       variationToggle &&
  //         variationToggle.classList.contains("collapsed") &&
  //         variationToggle.click();
  //     } else {
  //       variationToggle &&
  //         variationToggle.classList.contains("expanded") &&
  //         variationToggle.click();
  //     }
  //   }
  // }, [size, color]);


  useEffect(() => {
    if (product && attrs) {
      let priceToggle = document.querySelector(`${parent} .price-toggle`);
      let variationToggle = document.querySelector(`${parent} .variation-toggle`);
  
      // Check if there are any attributes
      const hasAttributes = Object.keys(attrs).length > 0;
  
      // Check if any attribute is not selected
      const hasUnselectedAttribute = Object.values(attrs).some((attr) => !attr);
  
      if (hasAttributes && hasUnselectedAttribute) {
        document.querySelector(`${parent} .shopping-cart`) &&
          document
            .querySelector(`${parent} .shopping-cart`)
            .classList.add("disabled");
        document.querySelector(`${parent} .sticky-cart .add-cart`) &&
          document
            .querySelector(`${parent} .sticky-cart .add-cart`)
            .classList.add("disabled");
        priceToggle &&
          priceToggle.classList.contains("expanded") &&
          priceToggle.click();
      } else {
        document.querySelector(`${parent} .shopping-cart`) &&
          document
            .querySelector(`${parent} .shopping-cart`)
            .classList.remove("disabled");
        document.querySelector(`${parent} .sticky-cart .add-cart`) &&
          document
            .querySelector(`${parent} .sticky-cart .add-cart`)
            .classList.remove("disabled");
  
        let index = product?.variants?.findIndex((item) => {
          const hasAttributeMatches = Object.keys(attrs).every((key) => {
            const attributeValue = attrs[key];
            return !item[key] || (item[key] && item[key].name === attributeValue);
          });
  
          return hasAttributeMatches;
        });
  
        // TODO: when adding remove commented
        setVariant({ ...product?.attributes[index], id: index });
      }
  
      if (Object.values(attrs).some((attr) => attr !== null)) {
        variationToggle &&
          variationToggle.classList.contains("collapsed") &&
          variationToggle.click();
      } else {
        variationToggle &&
          variationToggle.classList.contains("expanded") &&
          variationToggle.click();
      }
    }
  }, [product]);
  

  useEffect(() => {
    if (variant && variant.id >= 0) {
      let priceToggle = document.querySelector(`${parent} .price-toggle`);
      priceToggle &&
        priceToggle.classList.contains("collapsed") &&
        priceToggle.click();
    }
  }, [product]);

  function isInWishlist() {
    return (
      product &&
      props.wishlist.findIndex((item) => item.slug === product.slug) > -1
    );
  }

  function onWishlistClick(e) {
    e.preventDefault();
    if (!isInWishlist()) {
      let target = e.currentTarget;
      target.classList.add("load-more-overlay");
      target.classList.add("loading");

      setTimeout(() => {
        target.classList.remove("load-more-overlay");
        target.classList.remove("loading");
        props.addToWishList(product);
      }, 1000);
    } else {
      router.push("/pages/wishlist");
    }
  }

  function onAddCartClick(e) {
    // e.preventDefault();

    if (product.stock > 0 && !e.currentTarget.classList.contains("disabled")) {
      if (product.variants.length === 0) {
        props.addToCart(product, qty, -1);
      } else {
        props.addToCart(product, qty, variant.id);
      }
    }
  }

  function changeQty(value) {
    setQty(value);
  }

  // function selectColor(name, e) {
  //   e?.preventDefault();
  //   setColor(color !== name ? name : null);
  // }

  // function selectSize(name, e) {
  //   e?.preventDefault();
  //   setSize(size !== name ? name : null);
  // }

  // function initState() {
  //   setSize(null);
  //   setColor(null);
  //   setQty(1);
  // }


  // function initState() {
  //   // Default values for each attribute type
  //   const defaultValues = {};
  
  //   // Iterate over variants to find unique attribute types and their default values
  //   variants.forEach((variant) => {
  //     const attributeType = variant.attributeDescription.toLowerCase();
  //     const defaultValue = variant.attributeValue;
  
  //     // Set default value for the attribute type if not set already
  //     if (!defaultValues[attributeType]) {
  //       defaultValues[attributeType] = defaultValue;
  //     }
  //   });
  
  //   // Set default values for each attribute type
  //   const defaultAttributes = {};
  //   Object.keys(defaultValues).forEach((attributeType) => {
  //     defaultAttributes[attributeType] = defaultValues[attributeType];
  //   });
  
  //   // Set default values and trigger selection functions
  //   Object.keys(defaultAttributes).forEach((attributeType) => {
  //     const attributeName = defaultAttributes[attributeType];
  //     // Trigger selection function based on attribute type
  //     if (attributeType === "size") {
  //       selectSize(attributeName, null);
  //     } else if (attributeType === "color") {
  //       selectColor(attributeName, null);
  //     }
  //     // Add similar logic for other attribute types if needed
  //   });
  
  //   // Set default values to state
  //   setAttrs(defaultAttributes);
  // }


 






  function initState() {
    // Default values for each attribute type
    const defaultValues = {};

    
    product.attributes.forEach((variant) => {
      const attributeType = variant.attributeDescription.toLowerCase();
      const defaultValue = variant.attributeValue;

      
      if (!defaultValues[attributeType]) {
        defaultValues[attributeType] = defaultValue;
      }
    });

    const defaultAttributes = {};
    Object.keys(defaultValues).forEach((attributeType) => {
      defaultAttributes[attributeType] = defaultValues[attributeType];
    });

    
    setSelectedAttributes(defaultAttributes);
  }

  // ... other code

  function selectAttribute(attributeType, e) {
    e.preventDefault();
    // setAttrs({})
    setSelectedAttributes({})
    console.log(attributeType)
    const productId = attributeType; // Replace with your dynamic value
    router.replace({
      pathname: '/product/default/[...slug]',
      query: { slug: [productId] },
    });
   
  }

  
  // ...
  
  useEffect(() => {
    if (product && variantData) {
      initState();
      // ... (rest of the useEffect logic)
    }
  }, [product,variData]);
  
  function clearVariation(e) {
    e.preventDefault();
    initState();
  }

  // function isDisabled(type, name) {
  //   if (type === "color" && size) {
  //     return !product?.variants?.find(
  //       (variant) => variant.size.size === size && variant.color.name === name
  //     );
  //   } else if (type === "size" && color) {
  //     return !product.variants.find(
  //       (variant) => variant.color.name === color && variant.size.size === name
  //     );
  //   }
  //   return false;
  // }





  function isDisabled(selectedAttributes) {
    if (!product) {
      return false;
    }
  
    const hasSelectedAttributes = Object.values(selectedAttributes).some(
      (value) => value !== null
    );
  
    if (hasSelectedAttributes) {
      return !product?.attributes?.find((variant) => {
        const attributeMatches = Object.keys(selectedAttributes).every((key) => {
          const selectedValue = selectedAttributes[key];
          return !variant[key] || (variant[key].name === selectedValue);
        });
  
        return attributeMatches;
      });
    }
  
    return false;
  }


  function updateSelectedAttributes(attributeType, value) {
    setSelectedAttributes((prev) => ({
      ...prev,
      [attributeType]: value,
    }));
  }
  


  


 console.log(product)
  

  console.log(variantData);

  console.log(selectedAttributes,"222222222222")
  return (
    <>
      <div className={`skel-pro skel-detail ${adClass}`}></div>
      {product && (
        <div className={`product-single-details ${adClass}`}>
          <p
            style={{
              color: "#E30613",
              fontWeight: "500",
              fontSize: "12px",
              lineHeight: "26px",
              textTransform: "uppercase",
              marginBottom: "0px",
            }}
          >
            {product?.productName}
          </p>
          <h1
            className="product-title"
            style={{
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "33.43px",
            }}
          >
            {product?.productName}
          </h1>

          {isNav ? <ProductNav prev={prev} next={next} /> : ""}

          <div className="ratings-container">
            <div className="product-ratings">
              <span
                className="ratings"
                style={{ width: `${20 * product.rating}%` }}
              ></span>
              <span className="tooltiptext tooltip-top">
                {product?.rating?.toFixed(2)}
              </span>
            </div>

            <ALink
              href="#"
              className="rating-link"
              style={{ fontSize: "1.1rem" }}
            >
              ({" "}
              {product.reviews > 0
                ? `${product.reviews} Reviews`
                : "There are no reviews yet."}{" "}
              )
            </ALink>
          </div>

          {/* <hr className="short-divider" /> */}

          <div className="price-box">
            {product?.price == product.price ? (
              <>
                <span
                  style={{
                    fontFamily: "Plus Jakarta Sans",
                    fontWeight: "600px",
                    fontSize: "12px",
                    lineHeight: "15px",
                    marginTop: "10px",
                    marginRight: "8px",
                    color: "#606060",
                  }}
                >
                  OMR
                </span>
                <span
                  className="product-price"
                  style={{
                    fontWeight: "600px",
                    fontSize: "18px",
                    lineHeight: "15px",
                    letterSpacing: "-0.1px",
                    color: "black",
                  }}
                >
                  {" "}
                  {product?.offerPrice?.toFixed(2)}
                </span>
                <span
                  className="old-price"
                  style={{
                    fontWeight: "600px",
                    fontSize: "16px",
                    lineHeight: "15px",
                    letterSpacing: "-0.1px",
                    marginLeft: "10px",
                    marginBottom: "3px",
                  }}
                >
                  {" "}
                  {product?.price?.toFixed(2)}
                </span>
              </>
            ) : product?.variants.length > 0 ? (
              <span
                className="product-price"
                style={{
                  fontSize: "12px",
                  fontFamily: "Plus Jakarta Sans",
                  color: "#606060",
                  fontWeight: "600",
                }}
              >
                OMR &nbsp;&nbsp;&nbsp;
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "black",
                  }}
                >
                  {product.price[0].toFixed(2)}
                  <span
                    style={{
                      fontSize: "16px",
                      fontFamily: "Plus Jakarta Sans",
                      color: "#606060",
                      fontWeight: "600",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;<strike>{product?.mrp?product?.mrp:product?.price}</strike>
                  </span>
                  {/* <span style={{fontSize:"12px",fontFamily: "Plus Jakarta Sans",color:"#606060",fontWeight:"600"}}> OMR </span> */}
                  {/* <span>{product.price[1].toFixed(2)}</span> */}
                </span>
              </span>
            ) : (
              <>
                <span
                  className="old-price"
                  style={{
                    fontSize: "12px",
                    fontFamily: "Plus Jakarta Sans",
                    color: "#606060",
                    fontWeight: "600",
                  }}
                >
                  OMR &nbsp;&nbsp;&nbsp;
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "black",
                    }}
                  >
                    {product.price.toFixed(2)}
                  </span>
                </span>
                <span className="new-price">
                  {"OMR" + product.price.toFixed(2)}
                </span>
              </>
            )}
          </div>

          {product?.until && product?.until !== null && (
            <ProductCountdown type="1" />
          )}

          <div
            className="product-desc"
            style={{
              fontFamily: "Poppins",
              fontWeight: "400px",
              fontSize: "14px",
              lineHeight: "26px",
            }}
          >
            <p style={{ fontWeight: "400" }}>{product?.shortDescription}</p>
          </div>
         

          {variantData?.length > 0 ? (
            <div className="product-filters-container">

{variantData?.some(
                  (value) =>
                    value?.attributeDescription?.toLowerCase() === "color"
                )?<>
                 <label>
                      Color:&nbsp;{""}
                      <span style={{ fontWeight: "500" }}>
                        {selectedAttributes &&
                          // selectedAttributes.charAt(0).toUpperCase() +
                          selectedAttributes.color}
                      </span>
                    </label>
                </>:null}
                <div className="product-single-filter  d-flex" style={{gap:"20px"}}>
              {variantData?.filter(
                  (value) =>
                    value?.attributeDescription?.toLowerCase() === "color"
                )
                .map((item,index) => (
                  <>
                    {/* <label>
                      Color:&nbsp;{""}
                      <span style={{ fontWeight: "500" }}>
                        {selectedcolor &&
                          selectedcolor.charAt(0).toUpperCase() +
                            selectedcolor.slice(1)}
                      </span>
                    </label> */}
                    
                      <ul
                        className="config-size-list config-color-list config-filter-list"
                        style={{ gap: "20px" }}
                      >
                       
                          <li
                            key={`filter-color-${index}`}
                            className={`${
                              item?.attributeValue === selectedAttributes.color
                                ? "active"
                                : ""
                            } ${
                              isDisabled("color", item.attributeValue)
                                ? "disabled"
                                : ""
                            }`}
                          >
                            {item?.thumb ? (
                              <a
                                href="#"
                                className="filter-thumb p-0"
                                onClick={(e) => selectColor(item?.thumb, e)}
                              >
                                <LazyLoadImage
                                  src={
                                    process.env.NEXT_PUBLIC_ASSET_URI +
                                    item?.thumb?.url
                                  }
                                  alt="product thumb"
                                  width={item?.thumb?.width}
                                  height={item?.thumb?.height}
                                />
                              </a>
                            ) : (
                              
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  width: "63px",
                                  height: "63px",
                                  backgroundColor: "#F8F8F8",
                                  borderRadius: "50%",
                                }}
                              >
                                <a
                                  href="#"
                                  className="filter-color border-0"
                                  style={{
                                    backgroundColor: item.colorCode,
                                    borderRadius: "50%",
                                    width: "3.8rem",
                                    height: "3.8rem",
                                    border: `1px solid ${item.colorCode}`,
                                  }}
                                  onClick={(e) => {
                                    selectColor(item.attributeValue, e);
                                    setSelectedColor(item.attributeValue);
                                  }}
                                ></a>
                              </div>
                            )}
                          </li>
                        
                      </ul>
                    
                  </>
                ))}
                </div>







              {variantData?.length > 0 ? (
                <div className="product-single-filter">
                   <label
                          style={{
                            // fontWeight: "600px",
                            // fontSize: "14px",
                            // lineHeight: "22px",
                            color: "#000",
                            fontWeight: "500"
                            
                          }}
                        >
                          Size &nbsp;{""}
                        </label>
                      <div className=" d-flex " style={{gap:"4px"}}>
                  {variantData?.filter(
                      (value) =>
                        value.attributeDescription.toLowerCase() === "size"
                    )
                  
                   
                    
                    .map((item, index) => (
                      <>
                        
                        <ul className="config-size-list mt-2 d-flex">
                          <li
                            key={`filter-size-${index}`}
                            className={`${
                              item?.attributeValue === selectedAttributes.size ? "active" : ""
                              
                            // attrs["size"]?.find((value) =>
                            //   product?.attributes?.some((attrValue) => attrValue?.attributeValue === value.value)
                            // )
                            //   ? "active"
                            //   : ""
                            

                             
                             
                            } ${
                              isDisabled("size", item?.attributeValue)
                                ? "disabled"
                                : ""
                            }`}
                          >
                            {item?.thumb ? (
                              <a
                                href="#"
                                className="filter-thumb p-0"
                                onClick={(e) =>{
                                  selectAttribute(item?.productId, e)
                                  updateSelectedAttributes(
                                    item?.attributeDescription.toLowerCase(),
                                    item?.attributeValue
                                  )
                                  
                                }}
                              >
                                <LazyLoadImage
                                  src={
                                    process.env.NEXT_PUBLIC_ASSET_URI +
                                    item?.thumb?.url
                                  }
                                  alt="product thumb"
                                  width={item.thumb.width}
                                  height={item.thumb.height}
                                />
                              </a>
                            ) : (
                              <a
                                href="#"
                                className="d-flex align-items-center justify-content-center"
                                onClick={(e) =>
                                  selectAttribute(item?.productId, e)
                                }
                                style={{
                                  fontWeight: "600",
                                  fontSize: "12px",
                                  lineHeight: "15px",
                                  color: "#292D32",
                                }}
                              >
                                {item?.attributeValue}
                              </a>
                            )}
                          </li>
                        </ul>
                      </>
                    ))}
                    </div>
                </div>
              ) : (
                ""
              )}
{variantData?.length > 0 ? (
  <div className="product-single-filter">
    {Array.from(new Set(variantData
      ?.filter(
        (value) =>
          value.attributeDescription.toLowerCase() !== "size" &&
          value.attributeDescription.toLowerCase() !== "color"
      )
      .map((item) => item.attributeDescription.toLowerCase())
    )).map((uniqueDescription, index) => (
      <div key={`attribute-group-${index}`}>
        <label
          style={{
            color: "#000",
                            fontWeight: "500"
          }}
        >
          {uniqueDescription} &nbsp;
        </label>
        <ul className="config-size-list mt-2" >
          {variantData
            ?.filter((item) =>
              item.attributeDescription.toLowerCase() === uniqueDescription
            )
            .map((item, subIndex) => (
              <li
                key={`filter-size-${subIndex}`}
                className={`${
                  Object.values(selectedAttributes).includes(item?.attributeValue) ? "active" : ""
                } ${
                  isDisabled(item.attributeDescription, item?.attributeValue)
                    ? "disabled"
                    : ""
                }`}
              >
                {item?.thumb ? (
                  <a
                    href="#"
                    className="filter-thumb p-0"
                    onClick={(e) =>
                      selectAttribute(item?.productId, e)
                    }
                  >
                    <LazyLoadImage
                      src={
                        process.env.NEXT_PUBLIC_ASSET_URI +
                        item?.thumb?.url
                      }
                      alt="product thumb"
                      width={item.thumb.width}
                      height={item.thumb.height}
                    />
                  </a>
                ) : (
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center"
                    onClick={(e) =>
                      selectAttribute(item?.productId, e)
                    }
                    style={{
                      fontWeight: "600",
                      fontSize: "12px",
                      lineHeight: "15px",
                      color: "#292D32",
                      marginRight: "5px",
                    }}
                  >
                    {item?.attributeValue}
                  </a>
                )}
              </li>
            ))}
        </ul>
      </div>
    ))}
  </div>
) : (
  ""
)}


              {
                // <SlideToggle collapsed={true}>
                //   {({ onToggle, setCollapsibleElement, toggleState }) => (
                //     <>
                //       <button
                //         className={`d-none variation-toggle ${toggleState?.toLowerCase()}`}
                //         onClick={onToggle}
                //       ></button>
                //       <div
                //         className="product-single-filter m-0"
                //         ref={setCollapsibleElement}
                //       >
                //         <label></label>
                //         <a
                //           className="font1 text-uppercase clear-btn"
                //           href="#"
                //           onClick={clearVariation}
                //         >
                //           Clear
                //         </a>
                //       </div>
                //     </>
                //   )}
                // </SlideToggle>
              }
            </div>
          ) : (
            ""
          )}
         

          {isSticky && (
            <div className="sticky-wrapper">
              <div className="sticky-header desktop-sticky sticky-cart d-none d-lg-block">
                <div className="container">
                  <div className="sticky-img mr-4 media-with-lazy">
                    <figure className="mb-0">
                      <LazyLoadImage
                        src={
                          process.env.NEXT_PUBLIC_ASSET_URI +
                          product.product.url
                        }
                        width="100%"
                        height="auto"
                        alt="Thumbnail"
                      />
                    </figure>
                  </div>
                  <div className="sticky-detail">
                    <div className="sticky-product-name">
                      <h2 className="product-title w-100 ls-0">
                        {product.productName}
                      </h2>
                    

                      
                    </div>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span
                          className="ratings"
                          style={{ width: `${20 * product.rating}%` }}
                        ></span>
                        <span className="tooltiptext tooltip-top">
                          {product?.rating?.toFixed(2)}
                        </span>
                      </div>

                      <ALink href="#" className="rating-link">
                        ({" "}
                        {product.reviews > 0
                          ? `${product.reviews} Reviews`
                          : "There are no reviews yet."}{" "}
                        )
                      </ALink>
                    </div>
                  </div>

                  <div className="product-action">
                    <Qty
                      max={product?.stock}
                      value={qty}
                      onChangeQty={changeQty}
                    />

                    <a
                      href="#"
                      className={`btn btn-dark add-cart mr-2 ${
                        attrs.sizes.length > 0 || attrs.colors.length > 0
                          ? "disabled"
                          : ""
                      }`}
                      title="Add To Cart"
                      onClick={onAddCartClick}
                    >
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="product-action">
            {product?.variantData?.length ? (
              <SlideToggle collapsed={true}>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <>
                    <button
                      className={`d-none price-toggle ${toggleState?.toLowerCase()}`}
                      onClick={onToggle}
                    ></button>
                    <div
                      className="price-box product-filtered-price m-0"
                      ref={setCollapsibleElement}
                    >
                      {variant &&
                        variant.id >= 0 &&
                        (variant.price ? (
                          variant.sale_price ? (
                            <>
                              <del className="old-price">
                                <span>${variant.price.toFixed(2)}</span>
                              </del>
                              <span className="product-price">
                                ${variant && variant.sale_price.toFixed(2)}
                              </span>
                            </>
                          ) : (
                            <span className="product-price">
                              ${variant && variant.price.toFixed(2)}
                            </span>
                          )
                        ) : (
                          <span className="product-stock pb-3 d-block">
                            {product.is_out_of_stock
                              ? "Out of Stock"
                              : `${product.stock} in stock`}
                          </span>
                        ))}
                    </div>
                  </>
                )}
              </SlideToggle>
            ) : (
              ""
            )}

            <Qty max={product.stock} value={qty} onChangeQty={changeQty} />

            <a
              href="#"
              className={`btn btn-dark add-cart shopping-cart mr-2 custom-detail-cart ${
                attrs?.sizes?.length > 0 || attrs?.colors?.length > 0
                  ? "disabled"
                  : ""
              }`}
              title="Add To Cart"
              onClick={onAddCartClick}
            >
              Add to Cart
            </a>
          </div>

          <hr className="divider mb-0 mt-0" />

          <div className="product-single-share mb-3">
            <label className="sr-only">Share:</label>

            {/* <div className="social-icons mr-2">
                            <ALink href="#" className="social-icon social-facebook icon-facebook"
                                title="Facebook"></ALink>
                            <ALink href="#" className="social-icon social-twitter icon-twitter"
                                title="Twitter"></ALink>
                            <ALink href="#" className="social-icon social-linkedin fab fa-linkedin-in"
                                title="Linkedin"></ALink>
                            <ALink href="#" className="social-icon social-mail icon-mail-alt"
                                title="Mail"></ALink>
                        </div> */}

            <a
              href="#"
              className={`btn-icon-wish add-wishlist ${
                isInWishlist() ? "added-wishlist" : ""
              }`}
              onClick={onWishlistClick}
              title={`${isInWishlist() ? "Go to Wishlist" : "Add to Wishlist"}`}
            >
              <i className="icon-wishlist-2"></i>
              <span
                style={{
                  marginLeft: "10px",
                  fontFamily: "Poppins",
                  fontWeight: "14px",
                  lineHeight: "34px",
                }}
              >
                {isInWishlist() ? "Go to Wishlist" : "Add to Wishlist"}
              </span>
            </a>

            <a
              href="#"
              className="btn-icon-wish add-wishlist"
              onClick={onWishlistClick}
              title={`${isInWishlist() ? "Go to Wishlist" : "Add to Wishlist"}`}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                  border: "1px solid #E7E7E7",
                }}
              >
                {/* <i className="fa fa-share"></i> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="black"
                  className="custom-sharing"
                >
                  <g clip-path="url(#clip0_70_15820)">
                    <path d="M12.25 7.875V4.375L18.375 10.5L12.25 16.625V13.0375C7.875 13.0375 4.8125 14.4375 2.625 17.5C3.5 13.125 6.125 8.75 12.25 7.875Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_70_15820">
                      <rect
                        width="21"
                        height="21"
                        fill="white"
                        transform="matrix(-1 0 0 1 21 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <span
                style={{
                  marginLeft: "10px",
                  fontFamily: "Poppins",
                  fontWeight: "14px",
                  lineHeight: "34px",
                }}
              >
                share this
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist.list ? state.wishlist.list : [],
  };
};

export default connect(mapStateToProps, { ...WishlistAction, ...CartAction })(
  ProductDetailOne
);
