import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";

import ALink from "../../components/common/ALink";
import Qty from "../../components/partials/product/qty";
import { actions as CartAction } from "../../store/cart";
import { getCartTotal } from "../../utils";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
// import {useQuery} from "@apollo/react-hooks"

import withApollo from "../../server/apollo";
import { toast } from "react-toastify";

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

const PUT_CART = gql`
  mutation UpdateCartQuantity($input: updateCartQuantityInput!) {
    updateCartQuantity(input: $input) {
      message
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

function Cart(props) {
  const router = useRouter();
  const [cartList, setCartList] = useState([]);
  const [cartCharges, setCartCharges] = useState({ grandTotal: 0, subTotal: 0, deliveryCharge: 0 });
  const [updateCartQuantity] = useMutation(PUT_CART);
  const [removeFromCart] = useMutation(REMOVE_CART);
  const token = localStorage.getItem("arabtoken");
  const [localCart, setLocalCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const {
    data: cartData,
    loading: cartLoading,
    error: cartError,
    refetch: cartRefetch,
  } = useQuery(GET_CART, { skip: !token });

  // For authenticated users
  useEffect(() => {
    if (token) {
      if (cartError) {
        console.error("Error fetching cart data:", cartError);
      } else if (cartData) {
        const cartProducts = cartData.getCart.products || [];
        setCartList(cartProducts);
        setCartCharges({
          grandTotal: cartData.getCart.grandTotal,
          subTotal: cartData.getCart.subTotal,
          deliveryCharge: cartData.getCart.deliveryCharge,
        });
      }
      cartRefetch();
    }
  }, [token, cartData, cartError, cartRefetch]);

  useEffect(() => {
    if (!token && localCart.length > 0) {
      setCartList(localCart);
      const subTotal = localCart.reduce((acc, item) => acc + item.sellingPrice * item.quantity, 0);
      setCartCharges((prevCharges) => ({
        ...prevCharges,
        subTotal: subTotal,
      }));
    }
  }, [token, localCart]);

  const removeCart = async (id) => {
    try {
      if (token) {
        const response = await removeFromCart({
          variables: {
            input: {
              productId: id,
            },
          },
        });

        cartRefetch();

        toast.success("Successfully removed product");
      }

      if (!token) {
        const storedCartItems = localStorage.getItem("cart");

        if (storedCartItems !== null) {
          const currentCartItems = JSON.parse(storedCartItems);
          const updatedCartItems = currentCartItems.filter((item) => item.productId !== id);

          localStorage.setItem("cart", JSON.stringify(updatedCartItems));

          const subTotal = updatedCartItems.reduce(
            (acc, item) => acc + item.sellingPrice * item.quantity,
            0
          );

          setCartList(updatedCartItems);
          setCartCharges((prevCharges) => ({ 
            ...prevCharges,
            subTotal: subTotal,
          }));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeQty = async (id, qty) => {
    if (token) {
      try {
        const response = await updateCartQuantity({
          variables: {
            input: {
              productId: id,
              quantity: qty,
            },
          },
        });

        if (response) {
          cartRefetch();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const storedCartItems = localStorage.getItem("cart");

      if (storedCartItems !== null) {
        const currentCartItems = JSON.parse(storedCartItems);
        const updatedCartItems = currentCartItems.map((item) => {
          if (item.productId === id) {
            return { ...item, quantity: qty };
          } else {
            return item;
          }
        });

        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        const subTotal = updatedCartItems.reduce(
          (acc, item) => acc + item.sellingPrice * item.quantity,
          0
        );
        setCartList(updatedCartItems);
        setCartCharges((prevCharges) => ({
          ...prevCharges,
          subTotal: subTotal,
        }));
      }
    }
  };

  return (
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">
                <IoMdHome style={{ fontSize: "16px" }} />
                {/* <i className="icon-home"></i> */}
              </ALink>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              <ALink className="activeitem" href="/pages/cart">
                Shoping cart
              </ALink>
            </li>
          </ol>
        </div>
      </nav>
      <div className=" d-flex flex-column align-items-center">
        {/* <h1>orders</h1>*/}

        <ul
          className="checkout-progress-bar d-flex justify-content-center flex-wrap"
          style={{ backgroundColor: "#F9F9F9", width: "100%" }}
        >
          <li className="active">
            <ALink href="/pages/cart">Shoping cart</ALink>
          </li>
          <li className="">
            <ALink href="/pages/checkout">checkout</ALink>
          </li>
          <li className="">
            <ALink href="/pages/checkout">Order Complete</ALink>
          </li>
        </ul>
      </div>
      <div className="container" style={{ marginTop: "70px" }}>
        {cartList?.length === 0 ? (
          <div className="cart-table-container">
            <div className="table table-cart">
              <div className="cart-empty-page text-center">
                <i className="icon-bag-2"></i>
                <p>No products added to the cart</p>
                <ALink
                  href="/shop"
                  className="btn btn-dark btn-add-cart product-type-simple btn-shop font1"
                >
                  return to shop
                </ALink>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-table-container">
                <table className="table table-cart">
                  <thead>
                    <tr>
                      <th className="thumbnail-col">Product</th>
                      <th className="product-col pl-0"></th>
                      {/* <th className="price-col"></th> */}
                      <th className="price-col">Price</th>
                      <th className="qty-col">Quantity</th>
                      <th className="text-right">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartList?.map((item, index) => (
                      <tr
                        key={"cart-item" + index}
                        className="product-row"
                        style={{ color: "black" }}
                      >
                        <td className="pl-0">
                          <figure className="product-image-container">
                            <ALink
                              href={`/product/default/${item.productId}`}
                              className="product-image"
                            >
                              <img src={item?.image} alt="product" />
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
                                // background: "white",
                                filter: "drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.11))",
                              }}
                              className="hoverinto"
                              onClick={(e) => {
                                e.preventDefault();
                                removeCart(item.productId, index);
                              }}
                            >
                              <AiOutlineClose style={{ fontSize: "10px" }} />
                            </div>
                            {/* <a href="#" className="btn-remove icon-cancel" title="Remove Product" onClick={ ( e ) => { e.preventDefault(); removeFromCart( item, index ); } }></a> */}
                          </figure>
                        </td>
                        <td className="product-col">
                          <h5 className="product-title">
                            <ALink href={`/product/default/${item?.productId}`}>{item.name}</ALink>
                          </h5>
                        </td>
                        <td>OMR {item.sellingPrice.toFixed(2)}</td>
                        <td>
                          <Qty
                            value={item?.quantity}
                            max={10}
                            onChangeQty={(qty) => onChangeQty(item?.productId, qty)}
                          />
                        </td>
                        <td className="text-right">
                          <span className="subtotal-price">
                            OMR {(parseInt(item.sellingPrice) * parseInt(item.quantity)).toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                  <tfoot>
                    {/* <tr>
                      <td colSpan="5" className="clearfix pl-0">
                        <div className="float-left">
                          <div className="cart-discount">
                            <form action="#">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  placeholder="Coupon Code"
                                  required
                                />
                                <div className="input-group-append">
                                  <button
                                    className="btn btn-sm"
                                    type="submit"
                                    style={{
                                      backgroundColor: "black",
                                      color: "white",
                                    }}
                                  >
                                    Apply Coupon
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>

                        <div className="float-right">
                                                        <button type="submit" className="btn btn-shop btn-update-cart" style={{border:"1px solid"}} onClick={ updateCart }>
                                                            Update Cart
                                                        </button>
                                                    </div>
                      </td>
                    </tr> */}
                  </tfoot>
                </table>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="cart-summary">
                <h3>Cart Totals</h3>

                <table className="table table-totals">
                  <tbody>
                    {token && (
                      <tr>
                        <td>Shipping Charge</td>
                        <td style={{ color: "black" }}>OMR {cartCharges.deliveryCharge}</td>
                      </tr>
                    )}
                    <tr>
                      <td>Subtotal</td>
                      <td style={{ color: "black" }}>OMR {cartCharges.subTotal?.toFixed(2)}</td>
                    </tr>

                    {/* 
                                            <tr>
                                                <td colSpan="2" className="text-left">
                                                    <h4>Shipping</h4>

                                                    <div className="form-group form-group-custom-control">
                                                        <div className="custom-control custom-radio">
                                                            <input type="radio" className="custom-control-input" name="radio"
                                                                defaultChecked />
                                                            <label className="custom-control-label">Local pickup</label>
                                                        </div>
                                                    </div>

                                                    <div className="form-group form-group-custom-control mb-0">
                                                        <div className="custom-control custom-radio mb-0">
                                                            <input type="radio" name="radio" className="custom-control-input" />
                                                            <label className="custom-control-label">Flat rate</label>
                                                        </div>
                                                    </div>

                                                    <form action="#">
                                                        <div className="form-group form-group-sm">
                                                            <label>Shipping to <strong>NY.</strong></label>
                                                            <div className="select-custom">
                                                                <select className="form-control form-control-sm">
                                                                    <option value="USA">United States (US)</option>
                                                                    <option value="Turkey">Turkey</option>
                                                                    <option value="China">China</option>
                                                                    <option value="Germany">Germany</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="form-group form-group-sm">
                                                            <div className="select-custom">
                                                                <select className="form-control form-control-sm">
                                                                    <option value="NY">New York</option>
                                                                    <option value="CA">California</option>
                                                                    <option value="TX">Texas</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="form-group form-group-sm">
                                                            <input type="text" className="form-control form-control-sm"
                                                                placeholder="Town / City" required />
                                                        </div>

                                                        <div className="form-group form-group-sm">
                                                            <input type="text" className="form-control form-control-sm"
                                                                placeholder="ZIP" required />
                                                        </div>

                                                        <button type="submit" className="btn btn-shop btn-update-total">
                                                            Update Totals
                                                    </button>
                                                    </form>
                                                </td>
                                            </tr> */}
                  </tbody>

                  <tfoot>
                    {token && (
                      <tr>
                        <td>Total</td>
                        <td>OMR {cartCharges.grandTotal}</td>
                      </tr>
                    )}
                  </tfoot>
                </table>

                <div className="checkout-methods">
                  <div
                    href="checkout"
                    className="btn btn-block btn-dark hoverbtn"
                    onClick={() => {
                      if (token) {
                        router.push("/pages/checkout");
                      } else {
                        router.push("/pages/login?origin=cart");
                      }
                    }}
                  >
                    Proceed to Checkout
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mb-6"></div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartlist.cart ? state.cartlist.cart : [],
  };
};

export default withApollo({ ssr: typeof window === "undefined" })(
  connect(mapStateToProps, { ...CartAction })(Cart)
);
