import { connect } from "react-redux";

import ALink from "../../components/common/ALink";
import Addresses from "../../components/features/adresses/Addresses";
import { useState } from "react";

function addresses() {
  const [isAddress, setIsAddress] = useState(false);
  return (
    <main className="main main-test">
      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <ALink href="/">Home</ALink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              addresses
            </li>
          </ol>
        </div>
      </nav>
      <div
        className=" d-flex flex-column align-items-center"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        {/* <h1>orders</h1>*/}

        <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
          <li className="">
            <ALink href="/pages/account">My Account</ALink>
          </li>
          <li className="active">
            <ALink href="/pages/orders">Addresses</ALink>
          </li>
        </ul>
      </div>

      <div
        className="container"
        style={{
          marginTop: "3rem",
          borderBottom: "1px solid",
          borderColor: "#E2E2E2",
          padding: "2px",
        }}
      >
        <h2 className="step-title">Address</h2>
      </div>

      {isAddress ? (
        <>
          <Addresses />
        </>
      ) : (
        <>
          <div
            className="container d-flex justify-content-between"
            style={{ gap: "5rem", marginBottom: "20px" }}
          >
            <div
              className=""
              style={{
                width: "653.45px",
                height: "234px",
                border: "1px solid ",
                marginTop: "40px",
                borderColor: "#CDCDCD",
              }}
            >
              <div className="p-5">
                <h4
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "600px",
                    fontSize: "24px",
                    lineHeight: "20px",
                  }}
                >
                  Addresses
                </h4>
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "400px",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  You have not set up this type of address yet.
                </p>

                <button
                  type="submit"
                  className="btn  mr-0"
                  style={{
                    border: "1px solid ",
                    marginTop: "20px",
                    width: "152px",
                    height: "43px",
                    padding: "10px",
                  }}
                  onClick={() => {
                    setIsAddress(true);
                  }}
                >
                  ADD ADDRESSES
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    cartList: state.cartlist.cart ? state.cartlist.cart : [],
  };
};

export default connect(mapStateToProps)(addresses);
