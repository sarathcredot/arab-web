import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { BsFillHandbagFill } from "react-icons/bs";
// Import Actions
import { actions as CartAction } from "../../../store/cart";
import styles from "../../common/header.module.css";
// Import Custom Component
import ALink from "../ALink";
import { AiOutlineClose } from "react-icons/ai";
// Import Utils
import { getCartTotal } from "../../../utils";
import withApollo from "../../../server/apollo";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { EventEmitter } from "fbemitter";
// import eventEmmitter from "../../../server/eventEmmitter";
const GET_CART = gql`
  query GetCart {
  getCart {
    products {
      _id
      productId
      quantity
      name
      shortDescription
      stock
      color
      size
      price
      image
      sellingPrice
      mrp
    }
    grandTotal
    subTotal
    deliveryCharge
  }
}
`;

const REMOVE_CART = gql`
  mutation RemoveFromCart($input: removeFromCartInput!) {
    removeFromCart(input: $input) {
      message
    }
  }
`;

function CartMenu(props) {
  // const { cartItems } = props;
  const [cartItems, setCartItems] = useState();
  const router = useRouter();

  const isLocalCart = localStorage.getItem("cart");

  useEffect(() => {
    router.events.on("routeChangeStart", cartClose);

    return () => {
      router.events.off("routeChangeStart", cartClose);
    };
  }, []);



  function toggleCart(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("cart-opened");
  }

  function cartClose() {
    document.querySelector("body").classList.contains("cart-opened") &&
      document.querySelector("body").classList.remove("cart-opened");
  }

  function getQtyTotal(items) {
    let total = 0;
    if (items) {
      for (let i = 0; i < items.length; i++) {
        total += parseInt(items[i].quantity, 10);
      }
    }
    return total;
  }

  // function removeFromCart(e, cart) {
  //   e.preventDefault();
  //   props.removeFromCart(cart);
  // }

  const [removeFromCart] = useMutation(REMOVE_CART);
  const token = localStorage.getItem("arabtoken");
  const removeCart = async (id) => {
    try {
      // props.removeFromCart(item);
      const response = await removeFromCart({
        variables: {
          input: {
            productId: id,
          },
        },
      });

      cartRefetch();

      toast.success("successfully removed product");

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };


  const {
    data: cartData,
    loading: cartLoading,
    error: cartError,
    refetch: cartRefetch,
  } = useQuery(GET_CART, {
    skip: !token,
  });





  // const added = eventEmmitter.addListener("productAdded",)

  useEffect(() => {
    if (token) {
      if (cartError) {
        console.error("Error fetching cart data:", cartError);
      } else if (cartData) {
        setCartItems(cartData.getCart.products || []);
      }
      cartRefetch();
    } else {
      const localCart = JSON.parse(localStorage.getItem("cart"));
      if (localCart && localCart.length > 0) {
        setCartItems(localCart);
      }
    }
  }, [cartData, token, isLocalCart]);

  return (
    <div className="dropdown cart-dropdown">
      <a
        href="#"
        title="Cart"
        className="dropdown-toggle dropdown-arrow cart-toggle"
        onClick={toggleCart}
      >
        <div className={styles.circle}>
          <BsFillHandbagFill style={{ fontSize: "20px" }} />
        </div>
        {/* <i className="icon-cart-thick"></i> */}
        <span className="cart-count badge-circle">
          {cartItems && cartItems?.length}
        </span>
      </a>

      <div className="cart-overlay" onClick={cartClose}></div>

      <div className="dropdown-menu mobile-cart">
        <a
          href="#"
          title="Close (Esc)"
          className="btn-close"
          onClick={(e) => {
            cartClose();
            e.preventDefault();
          }}
        >
          ×
        </a>

        <div className="dropdownmenu-wrapper">
          <div style={{ display: "flex" }}>
            <div className="dropdown-cart-header">Shopping Cart</div>
            <a
              href="#"
              title="Close (Esc)"
              className="btn-close"
              onClick={(e) => {
                cartClose();
                e.preventDefault();
              }}
            >
              ×
            </a>
          </div>

          {cartItems?.length > 0 ? (
            <>
              <div className="dropdown-cart-products">
                {cartItems?.map((cart, index) => (
                  <div className="product" key={"cartItems" + index}>
                    <div className="product-details">
                      <h2 className="product-title">
                        {cart.index > -1 ? (
                          !cart.variants[cart.index].color ? (
                            <ALink href={`/product/default/${cart.slug}`}>
                              {cart.name +
                                " - " +
                                cart.variants[cart.index].size.name}
                            </ALink>
                          ) : !cart.variants[cart.index].size ? (
                            <ALink href={`/product/default/${cart.slug}`}>
                              {cart.name +
                                " - " +
                                cart.variants[cart.index].color.name}
                            </ALink>
                          ) : (
                            <ALink href={`/product/default/${cart.slug}`}>
                              {cart.name +
                                " - " +
                                cart.variants[cart.index].color.name +
                                ", " +
                                cart.variants[cart.index].size.name}
                            </ALink>
                          )
                        ) : (
                          <ALink href={`/product/default/${cart._id}`}>
                            {cart.name}
                          </ALink>
                        )}
                      </h2>

                      <span className="cart-product-info">
                        <span className="cart-product-qty">{cart.quantity}</span> ×
                        OMR {cart.price.toFixed(2)}
                      </span>
                    </div>

                    <figure className="product-image-container">
                      <ALink
                        href={`/product/default/${cart.slug}`}
                        className="product-image"
                      >
                        <img
                          src={cart?.image}
                          width="78"
                          height="78"
                          alt="product"
                        />
                      </ALink>
                      <div
                        title="Remove Product"
                        style={{
                          width: "20px",
                          height: "20px",
                          position: "absolute",
                          top: "-7px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          right: "-5px",
                          borderRadius: "50%",
                          // background: "black",
                          filter:
                            "drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.11))",
                        }}
                        className="hoverinto"
                        onClick={(e) => {
                          e.preventDefault();
                          removeCart(cart.productId, index);
                        }}
                      >
                        <AiOutlineClose style={{ fontSize: "10px" }} />
                      </div>
                      {/* <a
                        href="#"
                        className="btn-remove icon-cancel"
                        title="Remove Product"
                        onClick={(e) => {
                          removeFromCart(e, cart);
                        }}
                      ></a> */}
                    </figure>
                  </div>
                ))}
              </div>

              <div className="dropdown-cart-total">
                <span>SUBTOTAL:</span>

                <span className="cart-total-price float-right">
                  OMR {getCartTotal(cartItems).toFixed(2)}
                </span>
              </div>

              <div className="dropdown-cart-action">
                <ALink
                  href="/pages/cart"
                  className="btn btn-block view-cart hoverbtn"
                  style={{ border: "1px solid #000", background: "white" }}
                >
                  View Cart
                </ALink>
                <ALink
                  href="/pages/checkout"
                  className="btn btn-dark btn-block text-white hoverbtn"
                >
                  Checkout
                </ALink>
              </div>
            </>
          ) : (
            <p className="pt-3 mt-2">No products in the cart.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartlist.cart ? state.cartlist.cart : [],
  };
}

export default withApollo({ ssr: typeof window === "undefined" })(
  connect(mapStateToProps, CartAction)(CartMenu)
);
