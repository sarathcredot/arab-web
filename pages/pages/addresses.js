import { connect } from "react-redux";

import ALink from "../../components/common/ALink";
import Addresses from "../../components/features/adresses/Addresses";
import Shipping from "../../components/features/adresses/Shippingaddress"
import { useState } from "react";
import withApollo from "../../server/apollo"
 import { useQuery, gql } from "@apollo/react-hooks";
// import { gql, useMutation,useLazyQuery } from "@apollo/client";
export const GET_SHIPPING_ADDRESS= gql`query GetUserShippingAddress($input: GetUserShippingAddressInput!) {
  getUserShippingAddress(input: $input) {
    _id
    apartment
    city
    companyName
    country
    email
    firstname
    houseNumber
    mobile
    postCode
    streetName
    suite
    unit
    vatNumber
  }
}`
function addresses() {


  // const [catLevel2, { loading:level2loading, error:level2error, data:level2Data }] = useLazyQuery(GET_SHIPPING_ADDRESS);
  const [isAddress, setIsAddress] = useState(false);
  const [isShipping,setIsshipping]=useState(false)
  const { data, loading, error } = useQuery(GET_SHIPPING_ADDRESS, {
    variables: { input:{_id:"65c2776ea63407e0c16e4bd5"}},
  });
  console.log(data);
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
        style={{ backgroundColor: "#F9F9F9", marginTop:"10px" }}
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

      ) :isShipping ? (<><Shipping/></>): (
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
{/* shipping */}
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
                  Shipping Addresses
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
                    setIsshipping(true);
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

export default withApollo( { ssr: typeof window === 'undefined' } )(addresses);
