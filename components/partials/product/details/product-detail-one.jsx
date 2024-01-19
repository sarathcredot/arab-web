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
  const [attrs, setAttrs] = useState({ sizes: [], colors: [] });
  const [variant, setVariant] = useState(null);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [qty, setQty] = useState(1);
  const [selectedcolor, setSelectedColor] = useState();
  useEffect(() => {
    if (product) {
      let attributes = product.variants.reduce(
        (acc, cur) => {
          cur.size &&
            !acc.sizes.find((size) => size.size === cur.size.size) &&
            acc.sizes.push(cur.size);
          cur.color &&
            !acc.colors.find((color) => color.name === cur.color.name) &&
            acc.colors.push(cur.color);
          return acc;
        },
        { sizes: [], colors: [] }
      );
      setAttrs(attributes);
      initState();
    }
  }, [product]);

  useEffect(() => {
    if (product) {
      let priceToggle = document.querySelector(`${parent} .price-toggle`);
      let variationToggle = document.querySelector(
        `${parent} .variation-toggle`
      );

      if ((attrs.sizes.length && !size) || (attrs.colors.length && !color)) {
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
        let index = product.variants.findIndex((item) => {
          return (
            !(item.size && item.size.size !== size) &&
            !(item.color && item.color.name !== color)
          );
        });
        setVariant({ ...product.variants[index], id: index });
      }

      if (size !== null || color !== null) {
        variationToggle &&
          variationToggle.classList.contains("collapsed") &&
          variationToggle.click();
      } else {
        variationToggle &&
          variationToggle.classList.contains("expanded") &&
          variationToggle.click();
      }
    }
  }, [size, color]);

  useEffect(() => {
    if (variant && variant.id >= 0) {
      let priceToggle = document.querySelector(`${parent} .price-toggle`);
      priceToggle &&
        priceToggle.classList.contains("collapsed") &&
        priceToggle.click();
    }
  }, [variant]);

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
    e.preventDefault();

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

  function selectColor(name, e) {
    e.preventDefault();
    setColor(color !== name ? name : null);
  }

  function selectSize(name, e) {
    e.preventDefault();
    setSize(size !== name ? name : null);
  }

  function initState() {
    setSize(null);
    setColor(null);
    setQty(1);
  }

  function clearVariation(e) {
    e.preventDefault();
    initState();
  }

  function isDisabled(type, name) {
    if (type === "color" && size) {
      return !product.variants.find(
        (variant) => variant.size.size === size && variant.color.name === name
      );
    } else if (type === "size" && color) {
      return !product.variants.find(
        (variant) => variant.color.name === color && variant.size.size === name
      );
    }
    return false;
  }

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
            smart Phone
          </p>
          <h1
            className="product-title"
            style={{
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "33.43px",
            }}
          >
            {product.name}
          </h1>

          {isNav ? <ProductNav prev={prev} next={next} /> : ""}

          <div className="ratings-container">
            <div className="product-ratings">
              <span
                className="ratings"
                style={{ width: `${20 * product.ratings}%` }}
              ></span>
              <span className="tooltiptext tooltip-top">
                {product.ratings.toFixed(2)}
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
            {product.price[0] == product.price[1] ? (
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
                  {product.price[0].toFixed(2)}
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
                  {product.price[0].toFixed(2)}
                </span>
              </>
            ) : product.variants.length > 0 ? (
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
                    &nbsp;&nbsp;&nbsp;<strike>{product.price[1]}</strike>
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
                    {product.price[1].toFixed(2)}
                  </span>
                </span>
                <span className="new-price">
                  {"OMR" + product.price[0].toFixed(2)}
                </span>
              </>
            )}
          </div>

          {product.until && product.until !== null && (
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
            <p style={{ fontWeight: "400" }}>{product.short_description}</p>
          </div>
          {/* 
                    <ul className="single-info-list">
                        {
                            product.sku ?
                                <li>
                                    SKU: <strong>{product.sku}</strong>
                                </li>
                                : ''
                        }

                        <li>
                            CATEGORY: {product.categories.map((item, index) =>
                            (
                                <React.Fragment key={`single-cat-${index}`}>
                                    <strong>
                                        <ALink href={{ pathname: '/shop', query: { category: item.slug } }} className="category">{item.name}</ALink>
                                    </strong>
                                    {index < product.categories.length - 1 ? ', ' : ''}
                                </React.Fragment>
                            ))
                            }
                        </li>

                        {
                            !product.tags == null && product.tags.length > 0 ?
                                <li>
                                    TAGs: {product.tags.map((item, index) =>
                                    (
                                        <React.Fragment key={`single-cat-${index}`}>
                                            <strong>
                                                <ALink href={{ pathname: '/shop', query: { tag: item.slug } }} className="category">{item.name}</ALink>
                                            </strong>
                                            {index < product.tags.length - 1 ? ', ' : ''}
                                        </React.Fragment>
                                    ))
                                    }
                                </li>
                                : ''
                        }
                    </ul> */}

          {/* <div className='' style={{ width: "128px", height: "20px", display: "flex", borderBottom: "0", alignItems:"center"}}>
                        <h3 style={{ fontFamily: "Poppins", fontWeight: "500px", fontSize: "14px", lineHeight: "22px",marginBottom:"0",marginRight:"8px" }}>Color : </h3>
                        <p style={{ color: "black", fontFamily: "Poppins",marginBottom:"0" }}>Silver</p>
                    </div> */}

          {/* <div style={{ display: "flex", width: "300px", height: "63px", marginTop: "22px", marginBottom: "35px", justifyContent: "space-between" }}>
                        <ul style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "63px", height: "63px", backgroundColor: "#F8F8F8", borderRadius: "50%" }}>
                            <li style={{ backgroundColor: "#DE4E47", width: "38px", height: "38px", borderRadius: "50%", padding: "10px" }}></li>
                        </ul>
                        <ul style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "63px", height: "63px", backgroundColor: "#F8F8F8", borderRadius: "50%" }}>
                            <li style={{ backgroundColor: "#425B39", width: "38px", height: "38px", borderRadius: "50%", padding: "10px" }}></li>
                        </ul>
                        <ul style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "63px", height: "63px", backgroundColor: "#F8F8F8", borderRadius: "50%" }}>
                            <li style={{ backgroundColor: "black", width: "38px", height: "38px", borderRadius: "50%", padding: "10px" }}></li>
                        </ul>
                        <ul style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "63px", height: "63px", backgroundColor: "#F8F8F8", borderRadius: "50%" }}>
                            <li style={{ backgroundColor: "yellow", width: "38px", height: "38px", borderRadius: "50%", padding: "10px" }}></li>
                        </ul>

                    </div> */}

          {product.variants.length > 0 ? (
            <div className="product-filters-container">
              {attrs.colors.length > 0 ? (
                <>
                  <label>
                    Color:&nbsp;{" "}
                    <span style={{ fontWeight: "500" }}>
                      {selectedcolor &&
                        selectedcolor.charAt(0).toUpperCase() +
                          selectedcolor.slice(1)}
                    </span>
                  </label>
                  <div className="product-single-filter d-flex align-items-center">
                    <ul
                      className="config-size-list config-color-list config-filter-list d-flex"
                      style={{ gap: "20px" }}
                    >
                      {attrs.colors.map((item, index) => (
                        <li
                          key={`filter-color-${index}`}
                          className={`${item.name === color ? "active" : ""} ${
                            isDisabled("color", item.name) ? "disabled" : ""
                          }`}
                        >
                          {item.thumb ? (
                            <a
                              href="#"
                              className="filter-thumb p-0"
                              onClick={(e) => selectColor(item.name, e)}
                            >
                              <LazyLoadImage
                                src={
                                  process.env.NEXT_PUBLIC_ASSET_URI +
                                  item.thumb.url
                                }
                                alt="product thumb"
                                width={item.thumb.width}
                                height={item.thumb.height}
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
                                  backgroundColor: item.color,
                                  borderRadius: "50%",
                                  width: "3.8rem",
                                  height: "3.8rem",
                                  border: `1px solid ${item.color}`,
                                }}
                                onClick={(e) => {
                                  selectColor(item.name, e);
                                  setSelectedColor(item.name);
                                }}
                              ></a>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                ""
              )}

              {attrs.sizes.length > 0 ? (
                <div className="product-single-filter d-flex align-items-center">
                  <label>Size:</label>
                  <ul className="config-size-list d-inline-block">
                    {attrs.sizes.map((item, index) => (
                      <li
                        key={`filter-size-${index}`}
                        className={`${item.size === size ? "active" : ""} ${
                          isDisabled("size", item.size) ? "disabled" : ""
                        }`}
                      >
                        {item.thumb ? (
                          <a
                            href="#"
                            className="filter-thumb p-0"
                            onClick={(e) => selectSize(item.size, e)}
                          >
                            <LazyLoadImage
                              src={
                                process.env.NEXT_PUBLIC_ASSET_URI +
                                item.thumb.url
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
                            onClick={(e) => selectSize(item.size, e)}
                          >
                            {item.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}

              {
                <SlideToggle collapsed={true}>
                  {({ onToggle, setCollapsibleElement, toggleState }) => (
                    <>
                      <button
                        className={`d-none variation-toggle ${toggleState.toLowerCase()}`}
                        onClick={onToggle}
                      ></button>
                      <div
                        className="product-single-filter m-0"
                        ref={setCollapsibleElement}
                      >
                        <label></label>
                        <a
                          className="font1 text-uppercase clear-btn"
                          href="#"
                          onClick={clearVariation}
                        >
                          Clear
                        </a>
                      </div>
                    </>
                  )}
                </SlideToggle>
              }
            </div>
          ) : (
            ""
          )}
          <div style={{ marginBottom: "35px", marginTop: "10px" }}>
            <span
              style={{
                fontWeight: "600px",
                fontSize: "14px",
                lineHeight: "22px",
                color: "#000",
                fontFamily: "Plus Jakarta Sans",
              }}
            >
              Internal Memory
            </span>
            <div
              style={{
                display: "flex",
                width: "50%",
                height: "70px",
                gap: "10px",
              }}
            >
              <div
                className="btn"
                style={{
                  width: "84px",
                  height: "41px",
                  border: "1px solid",
                  borderColor: "#DCDCDC",
                  marginTop: "10px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    marginTop: "20px",
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#292D32",
                  }}
                >
                  RAM
                </p>
              </div>
              <div
                className="btn"
                style={{
                  width: "84px",
                  height: "41px",
                  border: "1px solid",
                  borderColor: "#DCDCDC",
                  marginTop: "10px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    marginTop: "20px",
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "15px",
                    color: "#292D32",
                  }}
                >
                  RAM
                </p>
              </div>
            </div>
          </div>

          {isSticky && (
            <div className="sticky-wrapper">
              <div className="sticky-header desktop-sticky sticky-cart d-none d-lg-block">
                <div className="container">
                  <div className="sticky-img mr-4 media-with-lazy">
                    <figure className="mb-0">
                      <LazyLoadImage
                        src={
                          process.env.NEXT_PUBLIC_ASSET_URI +
                          product.small_pictures[0].url
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
                        {product.name}
                      </h2>
                      {/* price change according to color */}

                      {/* <div className="price-box">
                                                {
                                                    variant && variant.id >= 0 ?
                                                        (variant.price ?
                                                            <span className="product-price">${variant && variant.price.toFixed(2)}</span>
                                                            : <span className="product-stock pt-3 d-block">{product.is_out_of_stock ? 'Out of Stock' : `${product.stock} in stock`}</span>
                                                        )
                                                        :

                                                        product.price[0] == product.price[1] ?
                                                            <span className="product-price">{'$' + product.price[0].toFixed(2)}</span>
                                                            : product.variants.length > 0 ?
                                                                <span className="product-price">{'$' + product.price[0].toFixed(2)} &ndash; {'$' + product.price[1].toFixed(2)}</span>
                                                                :
                                                                <>
                                                                    <span className="old-price">{'$' + product.price[1].toFixed(2)}</span>
                                                                    <span className="new-price">{'$' + product.price[0].toFixed(2)}</span>
                                                                </>
                                                }
                                            </div> */}
                    </div>
                    <div className="ratings-container">
                      <div className="product-ratings">
                        <span
                          className="ratings"
                          style={{ width: `${20 * product.ratings}%` }}
                        ></span>
                        <span className="tooltiptext tooltip-top">
                          {product.ratings.toFixed(2)}
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
                      max={product.stock}
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
            {product.variants.length ? (
              <SlideToggle collapsed={true}>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <>
                    <button
                      className={`d-none price-toggle ${toggleState.toLowerCase()}`}
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
