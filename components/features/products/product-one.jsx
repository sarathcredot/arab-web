import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GoPlus } from "react-icons/go";
import { AiOutlinePlus } from "react-icons/ai";
// Import Actions
import { actions as WishlistAction } from "../../../store/wishlist";
import cart, { actions as CartAction } from "../../../store/cart";
import { actions as ModalAction } from "../../../store/modal";

// Import Custom Component
import ALink from "../../common/ALink";
import ProductCountdown from "../product-countdown";

function ProductOne(props) {
  const router = useRouter();
  const { adClass = "", link = "default", product } = props;

  function isSale() {
    return product.price[0] !== product.price[1] &&
      product.variants.length === 0
      ? "-" +
          (
            (100 * (product.price[1] - product.price[0])) /
            product.price[1]
          ).toFixed(0) +
          "%"
      : product.variants.find((variant) => variant.sale_price)
      ? "Sale"
      : false;
  }

  function isInWishlist() {
    return (
      product &&
      props.wishlist.findIndex((item) => item.slug === product.slug) > -1
    );
  }

  function isInCart() {
    return (
      product && props.cart.findIndex((item) => item.slug === cart.slug) > -1
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
    props.addToCart(product);
  }

  function onQuickViewClick(e) {
    e.preventDefault();
    props.showQuickView(product.slug);
  }

  return (
    <div className={`product-default media-with-lazy ${adClass}`}>
      <figure>
        <ALink href={`/product/${link}/${product.slug}`}>
          <div className="lazy-overlay"></div>
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              // width: "130px",
              // height: "180px",
            }}
          >
            <img
              src="images/iphone.svg"
              style={{
                width: "130px",
                objectFit: "contain",
                marginTop: "30px",
              }}
            />
          </span>
          {/* <LazyLoadImage
            alt="product"
            // src={process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[0].url}
            src="images/iphone.svg"
            threshold={500}
            effect="black and white"
            width="130px"
            height="auto"
            objectFit="contain"
          /> */}
          {/* {product.pictures.length >= 2 ? (
            <LazyLoadImage
              alt="product"
              src={process.env.NEXT_PUBLIC_ASSET_URI + product.pictures[1].url}
              threshold={500}
              effect="black and white"
              wrapperClassName="product-image-hover"
            />
          ) : (
            ""
          )} */}
        </ALink>

        <div className="label-group">
          {product.is_hot ? (
            <div className="product-label label-hot">HOT</div>
          ) : (
            ""
          )}

          {isSale() ? (
            <div className="product-label label-sale">{isSale()}</div>
          ) : (
            ""
          )}
        </div>

        {/* <div className="btn-icon-group">
          {product.variants.length > 0 ? (
            <ALink
              href={`/product/default/${product.slug}`}
              className="btn-icon btn-add-cart"
            >
              <i className="fa fa-arrow-right"></i>
            </ALink>
          ) : (
            <a
              href="#"
              className="btn-icon btn-add-cart product-type-simple"
              title="Add To Cart"
              onClick={onAddCartClick}
            >
              <i className="icon-shopping-cart"></i>
            </a>
          )}
        </div> */}

        {/* {product.until && product.until !== null && <ProductCountdown />} */}

        {/* <a
          href="#"
          className="btn-quickview"
          title="Quick View"
          onClick={onQuickViewClick}
        >
          Quick View
        </a> */}
      </figure>

      <div
        className="product-details"
        style={{ alignItems: "left", justifyContent: "left" }}
      >
        <div
          className="category-wrap"
          style={{
            display: "flex",
            marginTop: "0",
            alignItems: "end",
            justifyContent: "center",
          }}
        >
          <div className="category-list" style={{ width: "50%" }}>
            {product.categories
              ? product.categories.map((item, index) => (
                  <React.Fragment key={item.slug + "-" + index}>
                    <ALink
                      href={{
                        pathname: "/shop",
                        query: { category: item.slug },
                      }}
                      style={{
                        color: "rgba(227, 6, 19, 1)",
                        fontWeight: "700",
                      }}
                    >
                      {item.name}
                    </ALink>
                    {index < product.categories.length - 1 ? ", " : ""}
                  </React.Fragment>
                ))
              : ""}
          </div>

          {/* <div style={{width:"70px",height:"70px",display:"flex",borderRadius:"50%",border:"1px solid red"}}>tt</div> */}
          <div style={{ width: "50%", display: "flex", justifyContent: "end" }}>
            <div
              className="custom-addcart"
             
            >
              {/* <GoPlus style={{color:"#000000",fontSize:"20px",fontWeight:700}} /> */}
              <AiOutlinePlus
                style={{ color: "#000000", fontSize: "20px", fontWeight: 500 }}
              />
            </div>
          </div>
          {/* <a
            href="#"
            className={`btn ${(e) => (onAddCartClick(e) ? "" : "")}`}
            onClick={(e) => onAddCartClick(e)}
            title={`${(e) =>
              isInCart(e) === true ? "Go cart" : "Add to Cart"}`}
            style={{ width: "70px", height: "70px", marginLeft: "20px" }}
          >
            <i
              class="icon-plus"
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "200px",
                display: "inline-block",
                padding: "11px",
                backgroundColor: isInWishlist() == true ? "#E30613" : "",
                borderColor: "#DDDDDD",
                border: isInWishlist() == true ? "" : "1px solid ",
              }}
            ></i>
          </a> */}
        </div>

        <h3 className="product-title">
          <ALink
            href={`/product/default/${product.slug}`}
            style={{ fontWight: "500px", fontSize: "14px" }}
          >
            {product.name}
          </ALink>
        </h3>

        {/* <div className="ratings-container">
          <div className="product-ratings">
            <span
              className="ratings"
              style={{ width: 20 * product.ratings + "%" }}
            ></span>
            <span className="tooltiptext tooltip-top">
              {product.ratings.toFixed(2)}
            </span>
          </div>
        </div> */}

        <div className="price-box">
          <span style={{fontFamily:"Plus Jakarta Sans"}}>OMR</span>
          <span
            className="product-price"
            style={{
              fontFamily: "Poppins",
              fontWeight: "800px",
              fontSize: "16px",
              lineHeight: "15px",
              marginLeft: "25px",
            }}
          >
            {product.price[0].toFixed(2)}
          </span>
          <span
            className="old-price"
            style={{ marginLeft: "25px", color: "#777777" }}
          >
            {+product.price[1].toFixed(2)}
          </span>
        </div>

        {/* <div className="price-box">
          {product.price[0] == product.price[1] ? (
            <span className="product-price">
              <span style={{ fontWeight: "400", paddingRight: "10px" }}>
                OMR
              </span>{" "}
              {product.price[0].toFixed(2)}{" "}
              <span
                style={{
                  fontWeight: "400",
                  paddingLeft: "10px",
                  textDecorationLine: "line-through",
                }}
              >
                {product.price[0] + 200}
              </span>
            </span>
          ) : product.variants.length > 0 ? (
            <span className="product-price">
              {"OMR" + product.price[0].toFixed(2)} &ndash;{" "}
              {"OMR" + product.price[1].toFixed(2)}
            </span>
          ) : (
            <>
            <span className="product-price" >
                {"OMR"  + product.price[0].toFixed(2)}
              </span>
              <span className="old-price" style={{marginLeft:"20px"}}>
                {"OMR" + product.price[1].toFixed(2)}
              </span>
              
            </>
          )}
        </div> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist.list ? state.wishlist.list : [],
  };
};

export default connect(mapStateToProps, {
  ...WishlistAction,
  ...CartAction,
  ...ModalAction,
})(ProductOne);
