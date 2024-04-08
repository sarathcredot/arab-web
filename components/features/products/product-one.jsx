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
import { gql, useMutation } from "@apollo/client";

const POST_CART = gql`
  mutation AddToCart($input: addToCartInput!) {
    addToCart(input: $input) {
      message
    }
  }
`;

function ProductOne(props) {
  const router = useRouter();
  const { adClass = "", link = "default", product } = props;

  const [addToCart] = useMutation(POST_CART);


 

  function isSale() {
    return product.price[0] !== product.price[1] &&
      product.variants.length === 0
      ? "-" +
          (
            (100 * (product.price[1] - product.price[0])) /
            product.price[1]
          ).toFixed(0) +
          "%"
      : product?.variants?.find((variant) => variant?.sale_price)
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

  // function onAddCartClick(e) {
  //   e.preventDefault();
  //   props.addToCart(product);
  // }

  const onAddCartClick = async (e, value) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
  

    try {
      const response = await addToCart({
        variables: {
          input: {
            productId: value._id,
            quantity: 1,
          },
        },
      });

      if (response) {
        router.push("/pages/cart");
      }
    } catch (error) {
      //console.log(error);
    }
  };

  function onQuickViewClick(e) {
    e.preventDefault();
    props.showQuickView(product.slug);
  }

  return (
    <div className={`product-default media-with-lazy ${adClass}`}>
      <figure style={props.customStyle && { paddingTop: props.customStyle }}>
        <ALink href={`/product/default/${product?._id}`}>
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
              src={product?.images[0]?.fileURL}
              // "images/iphone.svg"
              style={{
                width: "130px",
                objectFit: "contain",
                marginTop: "30px",
              }}
            />
          </span>
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
      </figure>

      <div
        className="product-details"
        style={{
          alignItems: "left",
          justifyContent: "left",
          ...(props.customdetailStyle && {
            marginTop: props.customdetailStyle,
          }),
        }}
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
          <div
            className="category-list"
            style={{ width: "50%", fontWeight: 600 }}
          >
            {/* {product?.categoryNamePath
              ? product.categories.map((item, index) => (
                  <React.Fragment key={item.slug + "-" + index}> */}
            <ALink
              href="#"
              // href={{
              //   pathname: "/shop",
              //   query: { category: item.slug },
              // }}
              style={{
                color: "rgba(227, 6, 19, 1)",
                fontWeight: 600,
              }}
            >
              {product?.categoryNamePath}
            </ALink>
            {/* {index < product.categories.length - 1 ? ", " : ""} */}
            {/* </React.Fragment> */}
            {/* ))
              : ""} */}
          </div>

          {/* <div style={{width:"70px",height:"70px",display:"flex",borderRadius:"50%",border:"1px solid red"}}>tt</div> */}
          <div style={{ width: "50%", display: "flex", justifyContent: "end" }}>
            <div
              className="custom-addcart"
              onClick={(e) => onAddCartClick(e, product)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="black"
                stroke="black"
                className="plusbtn"
              >
                <path
                  d="M6.51025 12.0156H18.2022"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.356 17.8421V6.19043"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          
        </div>

        <h3 className="product-title">
          <ALink
            href={`/product/default/${product._id}`}
            style={{ fontWeight: "500px", fontSize: "14px" }}
          >
            {product.productName}
          </ALink>
        </h3>

       

        <div className="price-box">
          <span style={{ fontFamily: "Plus Jakarta Sans" }}>OMR</span>
          <span
            className="product-price"
            style={{
              fontFamily: "Poppins",
              fontWeight: "800px",
              fontSize: "16px",
              lineHeight: "15px",
              marginLeft: "14px",
            }}
          >
            {product?.sellingPrice.toFixed(2)}
          </span>
          <span
            className="old-price"
            style={{ marginLeft: "14px", color: "#777777" }}
          >
            {product?.mrp?.toFixed(2)}
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
