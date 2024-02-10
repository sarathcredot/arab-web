import { connect } from "react-redux";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ALink from "../../components/common/ALink";

import { actions as WishlistAction } from "../../store/wishlist";
import { actions as CartAction } from "../../store/cart";
import { actions as ModalAction } from "../../store/modal";
import { IoMdHome } from "react-icons/io";
import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import withApollo from "../../server/apollo";

const GET_ORDERS= gql `query GetUserOrderProducts($input: GetUserOrderProductsInput!) {
  getUserOrderProducts(input: $input) {
    maxRecords
    records {
      _id
      productId
      vendorId
      orderId
      itemId
      productName
      shortDescription
      skuId
      image {
        fileType
        fileURL
        mimeType
        originalName
      }
      returnPeriod
      mrp
      sellingPrice
      shippingCharge
      paymentMode
      paymentStatus
      orderDate
      shippingStatus
      shippedDate
      deliveryDate
      returnStatus
      returnDate
      returnRequestDate
      returnRejectedDate
      returnUserReason
      refundStatus
      refundAmount
      refundDate
      cancelledDate
      cancelUserReason
      courierId
      invoiceNumber
      invoice {
        fileType
        fileURL
        mimeType
        originalName
      }
    }
  }
}`;


function Orders(props) {
  const { wishlist, addToCart, removeFromWishlist, showQuickView } = props;
  const [flag, setFlag] = useState(0);

  const onMoveFromToWishlit = (e, item) => {
    setFlag(2);
    e.preventDefault();
    addToCart(item);
    removeFromWishlist(item);
  };

  const removeProduct = (e, item) => {
    setFlag(1);
    e.preventDefault();
    removeFromWishlist(item);
  };

  const onQuickViewClick = (e, product) => {
    e.preventDefault();
    showQuickView(product.slug);
  };



  const {
    data: orderData,
    loading: orderLoading,
    error: orderError,
    refetch: orderRefetch
  } = useQuery(GET_ORDERS);


  

  return (
    <main className="main">
      <div className="container">

      <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
            <li className="breadcrumb-item" >
              <ALink href="/">
                <IoMdHome style={{fontSize:"16px"}}/>
                {/* <i className="icon-home" ></i> */}
              </ALink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <ALink href="/pages/account">My account</ALink>
              </li>
             
              <li className="breadcrumb-item active" aria-current="page">
              <ALink className="activeitem" href="/pages/orders">Orders</ALink>
              </li>
            </ol>
          </div>
        </nav>
      </div>
      <div className="page-header">
        
        <div className="container d-flex flex-column align-items-center">
          {/* <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Orders
                                </li>
                            </ol>
                        </div>
                    </nav> */}

          {/* <h1>orders</h1>
           */}

          <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
          <li className="">
              <ALink href="/pages/account">My Account</ALink>
            </li>
            <li className="active">
              <ALink href="/pages/orders">Orders</ALink>
            </li>
           
          </ul>
        </div>
      </div>

      <div
        className="container"
        style={{
          marginTop: "3rem",
          borderBottom: "1px solid",
          borderColor: "#E2E2E2",
        }}
      >
        <h4>Orders</h4>
      </div>
      <div className="container" style={{ marginTop: "20px" }}>
        <div className="success-alert">
          {flag === 1 ? <p>Product successfully removed.</p> : ""}
          {flag === 2 ? <p>Product added to cart successfully.</p> : ""}
        </div>
        {/* <div className="wishlist-title">
                    <h2>My wishlist on Porto Shop 36</h2>
                </div> */}
        {wishlist.length === 0 ? (
          <div className="wishlist-table-container">
            <div className="table table-wishlist mb-0">
              <div className="wishlist-empty-page text-center">
              <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                <p>No products Ordered</p>
                <ALink
                  href="/shop"
                  className="btn btn-dark btn-add-cart product-type-simple btn-shop font1 w-auto"
                >
                  go shop{" "}
                </ALink>
              </div>
            </div>
          </div>
        ) : (
          <div className="wishlist-table-container">
            <table className="table table-wishlist mb-0">
              <thead>
                <tr>
                  <th className="thumbnail-col"></th>
                  <th className="product-col">Product</th>
                  <th className="status-col">Date</th>
                  <th className="status-col">Status</th>
                  <th className="price-col">Total Price</th>
                  <th className="action-col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((item, index) => (
                  <tr key={"wishlist-item" + index} className="product-row">
                    <td className="media-with-lazy">
                      <figure className="product-image-container">
                        <ALink
                          href={`/product/default/${item.slug}`}
                          className="product-image"
                        >
                          <LazyLoadImage
                            alt="product"
                            src={
                              process.env.NEXT_PUBLIC_ASSET_URI +
                              item.pictures[0].url
                            }
                            threshold={500}
                            width="80"
                            height="80"
                          />
                        </ALink>
                        <a
                          href="#"
                          className="btn-remove icon-cancel"
                          title="Remove Product"
                          onClick={(e) => removeProduct(e, item)}
                        ></a>
                      </figure>
                    </td>
                    <td>
                      <h5 className="product-title">
                        <ALink href={`/product/default/${item.slug}`}>
                          {item.name}
                        </ALink>
                      </h5>
                    </td>

                    <td style={{ color: "black" }}>12/9/2023</td>
                    <td style={{ color: "#44961D" }}>Shiped </td>
                    <td style={{ color: "black" }}>
                      <div className="price-box">
                        {item.price[0] == item.price[1] ? (
                          <span className="product-price">
                            {"OMR " + item.price[0].toFixed(2)}
                          </span>
                        ) : item.variants.length > 0 ? (
                          <span className="product-price">
                            {"OMR " + item.price[0].toFixed(2)} &ndash;{" "}
                            {"$" + item.price[1].toFixed(2)}
                          </span>
                        ) : (
                          <>
                            {/* <span className="old-price">{'OMR ' + item.price[ 1 ].toFixed( 2 ) }</span> */}
                            <span className="product-price">
                              {"OMR " + item.price[0].toFixed(2)}
                            </span>
                          </>
                        )}
                      </div>
                    </td>

                    <td className="action">
                      <a
                        href="#"
                        className="btn btn-quickview mt-1 mt-md-0"
                        title="Quick View"
                        
                        style={{ border: "1px solid" }}
                      >
                        Cancel
                      </a>
                      {/* {item.variants.length > 0 ? (
                        <ALink
                          className="btn btn-dark btn-add-cart product-type-simple btn-shop"
                          href={`/product/default/${item.slug}`}
                        >
                          select options
                        </ALink>
                      ) : (
                        <button
                          className="btn btn-dark btn-add-cart product-type-simple btn-shop"
                          onClick={(e) => {
                            onMoveFromToWishlit(e, item);
                          }}
                        >
                          ADD TO CART
                        </button>
                      )} */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist.list ? state.wishlist.list : [],
  };
};

export default withApollo({ ssr: typeof window === "undefined" })( connect(mapStateToProps, {
  ...WishlistAction,
  ...CartAction,
  ...ModalAction,
})(Orders));
