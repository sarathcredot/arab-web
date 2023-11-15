import React from 'react';
import ALink from '../../components/common/ALink';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

function Account() {
  return (
    <div>
      <main className="main main-test">
        {/* ... Breadcrumb and Checkout Progress Bar ... */}
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
            <li className="breadcrumb-item" >
              <ALink href="/">
                <i className="icon-home"></i>
              </ALink>
            </li>
             
              <li className="breadcrumb-item active" aria-current="page">
              <ALink className="activeitem" href="/pages/account">Dashboard</ALink>
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
              <ALink href="/pages/account">DashBord</ALink>
            </li>
          </ul>
        </div>
       


      </main>

      <div className="container account-container custom-account-container">
        <Tabs selectedTabClassName="active" selectedTabPanelClassName="active show" defaultIndex={0} className="tab">
          <div className="row">
            <div className="col-12 order-0">
              {/* StickyBox and Tab navigation code */}
              {/* Uncomment and use this code if needed */}
            </div>

            <div className="col-12 container order-1 tab-content">
              <TabPanel className="tab-pane fade" id="dashboard">
                <div className="dashboard-content">
                  {/* Dashboard content */}
                  <p style={{ fontWeight: '400', fontSize: '20px', lineHeight: '20px', fontFamily: 'Poppins' }}>
                    Hello
                    <strong className="text-dark" style={{ fontSize: '26px', lineHeight: '20px', fontFamily: 'Poppins',paddingLeft: "10px" }}>
                      UserName
                    </strong>
                  </p>
                  <p style={{ fontWeight: '400', fontSize: '14px', lineHeight: '26px', fontFamily: 'Poppins' }}>
                    From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and
                    edit your account details.
                  </p>
                  <div className="container p-5">
                  
                    <div className="row">

                      <div className="col-12 col-md-4 mb-4">
                        <div
                          className="feature-box text-center justify-content-center pb-4 content-box"
                          style={{ width: "321.46px", height: "276.71px" }}
                        >
                          <ALink href="/pages/orders">
                            <div
                               style={{
                                width: "321.46px",
                                height: "276.71p",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <div
                                style={{
                                  width: "103.59px",
                                  height: "103.59px",
                                  backgroundColor: "red",
                                  borderRadius: "50%",
                                  backgroundColor: "#FAFAFA",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img src="images\icon\vuesax\bold\box.svg" alt="Orders" style={{ maxWidth: '100%' }} />
                              </div>
                            </div>

                            <div className="feature-box-content" style={{ marginTop: '20px' }}>
                              <h3>ORDERS</h3>
                            </div>
                          </ALink>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mb-4">
                        <div
                          className="feature-box text-center justify-content-center pb-4 content-box"
                          style={{ width: "321.46px", height: "276.71px" }}
                        >
                          <ALink href="/pages/wishlist">
                            <div
                               style={{
                                width: "321.46px",
                                height: "276.71p",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <div
                                style={{
                                  width: "103.59px",
                                  height: "103.59px",
                                  backgroundColor: "red",
                                  borderRadius: "50%",
                                  backgroundColor: "#FAFAFA",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img src="images\icon\vuesax\bold\vuesax\bold\heart.svg" alt="wishlist" style={{ maxWidth: '100%' }} />
                              </div>
                            </div>

                            <div className="feature-box-content" style={{ marginTop: '20px' }}>
                              <h3>Wishlist</h3>
                            </div>
                          </ALink>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mb-4">
                        <div
                          className="feature-box text-center justify-content-center pb-4 content-box"
                          style={{ width: "321.46px", height: "276.71px" }}
                        >
                          <ALink href="/pages/affliation">
                            <div
                               style={{
                                width: "321.46px",
                                height: "276.71p",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <div
                                style={{
                                  width: "103.59px",
                                  height: "103.59px",
                                  backgroundColor: "red",
                                  borderRadius: "50%",
                                  backgroundColor: "#FAFAFA",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                               <img
                                  src="images\icon\vuesax\bold\people.svg"
                                  alt="affliation"
                                  style={{maxWidth:"100"}}
                                />
                              </div>
                            </div>

                            <div className="feature-box-content" style={{ marginTop: '20px' }}>
                              <h3>Affliation</h3>
                            </div>
                          </ALink>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mb-4">
                        <div
                          className="feature-box text-center justify-content-center pb-4 content-box"
                          style={{ width: "321.46px", height: "276.71px" }}
                        >
                          <ALink href="/pages/addresses">
                            <div
                               style={{
                                width: "321.46px",
                                height: "276.71p",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <div
                                style={{
                                  width: "103.59px",
                                  height: "103.59px",
                                  backgroundColor: "red",
                                  borderRadius: "50%",
                                  backgroundColor: "#FAFAFA",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img src="images\icon\vuesax\bold\vuesax\bold\map.svg" alt="Address" style={{ maxWidth: '100%' }} />
                              </div>
                            </div>

                            <div className="feature-box-content" style={{ marginTop: '20px' }}>
                              <h3>Address</h3>
                            </div>
                          </ALink>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mb-4">
                        <div
                          className="feature-box text-center justify-content-center pb-4 content-box"
                          style={{ width: "321.46px", height: "276.71px" }}
                        >
                          <ALink href="/pages/accountdetails">
                            <div
                               style={{
                                width: "321.46px",
                                height: "276.71p",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <div
                                style={{
                                  width: "103.59px",
                                  height: "103.59px",
                                  backgroundColor: "red",
                                  borderRadius: "50%",
                                  backgroundColor: "#FAFAFA",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img src="images\icon\vuesax\bold\frame.svg" alt="Account Details" style={{ maxWidth: '100%' }} />
                              </div>
                            </div>

                            <div className="feature-box-content" style={{ marginTop: '20px' }}>
                              <h3>Accunt Details</h3>
                            </div>
                          </ALink>
                        </div>
                      </div>
                      <div className="col-12 col-md-4 mb-4">
                        <div
                          className="feature-box text-center justify-content-center pb-4 content-box"
                          style={{ width: "321.46px", height: "276.71px" }}
                        >
                          <ALink href="/pages">
                            <div
                               style={{
                                width: "321.46px",
                                height: "276.71p",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              <div
                                style={{
                                  width: "103.59px",
                                  height: "103.59px",
                                  backgroundColor: "red",
                                  borderRadius: "50%",
                                  backgroundColor: "#FAFAFA",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img src="images\icon\vuesax\bold\key.svg" alt="Logout" style={{ maxWidth: '100%' }} />
                              </div>
                            </div>

                            <div className="feature-box-content" style={{ marginTop: '20px' }}>
                              <h3>Logout</h3>
                            </div>
                          </ALink>
                        </div>
                      </div>

                     
                      
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default Account;


