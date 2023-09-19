import ALink from "../../components/common/ALink";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import StickyBox from "react-sticky-box";
import Link from "next/link";

export default function Account() {
  function controlDisplay() {
    document.querySelector(".show-content").classList.remove("show");
    document.querySelector(".hide-content").classList.add("show");
  }

  function addressHandler(e) {
    if (e.currentTarget.closest(".nav-item").classList.contains("active")) {
      document.querySelector(".show-content").classList.add("show");
      document.querySelector(".hide-content").classList.remove("show");
    }
  }

  return (
    <main className="main">
      {/* <div className="page-header">
                <div className="container d-flex flex-column align-items-center">
                    <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                                <li className="breadcrumb-item"><ALink href="/shop">Shop</ALink></li>
                                <li className="breadcrumb-item active" aria-current="page">My Account</li>
                            </ol>
                        </div>
                    </nav>

                    <h1>My Account</h1>
                </div>
            </div> */}
      <div className="page-header">
        <div className="container d-flex flex-column align-items-center">
          {/* <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Wishlist
                                </li>
                            </ol>
                        </div>
                    </nav> */}

          {/* <h1>orders</h1>
           */}

          <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
            <li className="">
              <ALink href="/pages/myaccount">My Account</ALink>
            </li>
            <li className="active">
              <ALink href="/pages/account">Dashboard</ALink>
            </li>
          </ul>
        </div>
      </div>

      <div className="container account-container custom-account-container">
        <Tabs
          selectedTabClassName="active"
          selectedTabPanelClassName="active show"
          defaultIndex={0}
          className="tab"
        >
          <div className="row">
            <div className="sidebar widget widget-dashboard col-lg-12 order-0">
              {/* <StickyBox className="sticky-wrapper" offsetTop={70}>
                                <h2 className="text-uppercase">My Account</h2>
                                
                                <TabList className="nav nav-tabs list flex-column mb-0" role="tablist">
                                    <Tab className="nav-item">
                                        <span className="nav-link">Dashboard</span>
                                    </Tab>

                                    <Tab className="nav-item">
                                        <span className="nav-link" id="link-order">Orders</span>
                                    </Tab>

                                    <Tab className="nav-item">
                                        <span className="nav-link" id="link-download">Downloads</span>
                                    </Tab>

                                    <Tab className="nav-item">
                                        <span className="nav-link" id="link-address" onClick={addressHandler}>Addresses</span>
                                    </Tab>

                                    <Tab className="nav-item">
                                        <span className="nav-link" id="link-account">Account details</span>
                                    </Tab>

                                    <li className="nav-item">
                                        <ALink className="nav-link" href="/pages/wishlist">Wishlist</ALink>
                                    </li>
                                    <li className="nav-item mb-3">
                                        <ALink className="nav-link" href="/pages/login">Logout</ALink>
                                    </li>
                                </TabList>
                            </StickyBox> */}
            </div>
            <div className="col-lg-12 order-lg-last order-1 tab-content">
              <TabPanel className="tab-pane fade" id="dashboard">
                <div className="dashboard-content">
                  <p
                    style={{
                      fontWeight: "400px",
                      fontSize: "20px",
                      lineHeight: "20px",
                      fontFamily: "Poppins",
                    }}
                  >
                    Hello
                    <strong
                      className="text-dark"
                      style={{
                        fontSize: "26px",
                        lineHeight: "20px",
                        fontFamily: "Poppins",
                      }}
                    >
                      UserName
                    </strong>
                  </p>

                  <p
                    style={{
                      fontWeight: "400px",
                      size: "14px",
                      lineHeight: "26px",
                      fontFamily: "Poppins",
                    }}
                  >
                    From your account dashboard you can view your recent orders
                    manage your shipping and billing addresses, and edit your
                    account details
                    {/* <span className="btn btn-link link-to-tab" onClick={() => document.getElementById('link-address').click()}> shipping and billing addresses</span>, and <span className="btn btn-link link-to-tab" onClick={() => document.getElementById('link-account').click()}>edit your password and account
                                                details.</span> */}
                  </p>

                  <div className="mb-4"></div>

                  <div className="container">
                    <div
                      className="container"
                      style={{
                        width: "1048.75px",
                        height: "597px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="row row-lg">
                        <div className="col-6 col-md-4">
                          <div
                            className="feature-box text-center justify-content-center pb-4 content-box"
                            style={{ width: "321.46px", height: "276.71px" }}
                          >
                            <ALink href="/pages/orders">
                              {/* <span className="link-to-tab">
                                <i className="sicon-social-dropbox"></i>
                              </span> */}
                              <div
                                style={{
                                  width: "321.46px",
                                  height: "276.71p",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                {" "}
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
                                  <div
                                    style={{
                                      width: "41.65px",
                                      height: "41.65px",
                                    }}
                                  >
                                    <img
                                      src="images\icon\vuesax\bold\box.svg"
                                      style={{ backgroundSize: "cover" }}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div
                                className="feature-box-content"
                                style={{ marginTop: "20px" }}
                              >
                                <h3>ORDERS</h3>
                              </div>
                            </ALink>
                          </div>
                        </div>

                        <div className="col-6 col-md-4">
                          <div
                            className="feature-box text-center pb-4 content-box"
                           
                            style={{ width: "321.46px", height: "276.71px" }}
                          >
                            {/* <span className="link-to-tab">
                              <i className="sicon-cloud-download"></i>
                            </span> */}
                             <ALink href="/pages/wishlist">
                            <div
                              style={{
                                width: "321.46px",
                                height: "276.71p",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              {" "}
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
                                <div
                                  style={{
                                    width: "41.65px",
                                    height: "41.65px",
                                  }}
                                >
                                  <img
                                    src="images\icon\vuesax\bold\vuesax\bold\heart.svg"
                                    style={{ backgroundSize: "cover" }}
                                  />
                                </div>
                              </div>
                            </div>
                            </ALink>
                            <div className=" feature-box-content">
                              <h3  style={{ marginTop: "20px" }}>Wishlist</h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-6 col-md-4">
                          <div
                            className="feature-box text-center pb-4 content-box"
                            // onClick={() =>
                            //   document.getElementById("link-address").click()
                            // }
                            style={{ width: "321.46px", height: "276.71px" }}
                          >
                            {/* <span className="link-to-tab">
                              <i className="sicon-location-pin"></i>
                            </span> */}
                             <ALink href="/pages/affliation">
                            <div
                              style={{
                                width: "321.46px",
                                height: "276.71p",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              {" "}
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
                                <div
                                  style={{
                                    width: "41.65px",
                                    height: "41.65px",
                                  }}
                                >
                                  <img
                                    src="images\icon\vuesax\bold\people.svg"
                                    style={{ backgroundSize: "cover" }}
                                  />
                                </div>
                              </div>
                            </div>
                            </ALink>

                            <div className="feature-box-content">
                              <h3   style={{ marginTop: "20px" }}>AFFILIATION</h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-6 col-md-4">
                        
                          <div
                            className="feature-box text-center pb-4 content-box"
                            // onClick={() =>
                            //   document.getElementById("link-account").click()
                            // }
                            style={{ width: "321.46px", height: "276.71px" }}
                          >
                            {/* <span className="link-to-tab">
                              <i className="icon-user-2"></i>
                            </span> */}

                         <ALink href="/pages/addresses">
                            <div
                              style={{
                                width: "321.46px",
                                height: "276.71p",
                                display: "flex",
                                justifyContent: "center",
                              }}
                            >
                              {" "}
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
                                <div
                                  style={{
                                    width: "41.65px",
                                    height: "41.65px",
                                  }}
                                >
                                  <img
                                    src="images\icon\vuesax\bold\vuesax\bold\map.svg"
                                    style={{ backgroundSize: "cover" }}
                                  />
                                </div>
                              </div>
                            </div>
                            </ALink>
                            <div className="feature-box-content p-0">
                              <h3    style={{ marginTop: "20px" }}>ADDRESSES</h3>
                            </div>
                          </div>
                        
                        </div>

                        <div className="col-6 col-md-4">
                          <div
                            className="feature-box text-center pb-4 content-box"
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
                                {" "}
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
                                  <div 
                                    style={{
                                      width: "41.65px",
                                      height: "41.65px",
                                    }}
                                  >
                                    <img className="image-container"
                                      src="images\icon\vuesax\bold\frame.svg"
                                      style={{ backgroundSize: "cover" }}
                                    />
                                  </div>
                                </div>
                              </div>
                              {/* <i className="sicon-heart"></i> */}
                            </ALink>

                            <div className="feature-box-content">
                              <h3   style={{ marginTop: "20px" }}>ACCOUNT DETAILS</h3>
                            </div>
                          </div>
                        </div>

                        <div className="col-6 col-md-4">
                          <div
                            className="feature-box text-center pb-4 content-box"
                            style={{ width: "321.46px", height: "276.71px" }}
                          >
                            <ALink href="/pages/login">
                              <div
                                style={{
                                  width: "321.46px",
                                  height: "276.71p",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                {" "}
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
                                  <div
                                    style={{
                                      width: "41.65px",
                                      height: "41.65px",
                                    }}
                                  
                                  >
                                    <img
                                      src="images\icon\vuesax\bold\key.svg"
                                      
                                      className="hover-image"
                                    />
                                  </div>
                                </div>
                              </div>
                            </ALink>
                            <div className="feature-box-content">
                              <h3   style={{ marginTop: "20px" }}>LOGOUT</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* <TabPanel className="tab-pane fade" id="order">
                <div className="order-content">
                  <h3 className="account-sub-title d-none d-md-block">
                    <i className="sicon-social-dropbox align-middle mr-3"></i>
                    Orders
                  </h3>
                  <div className="order-table-container text-center">
                    <table className="table table-order text-left">
                      <thead>
                        <tr>
                          <th className="order-id">ORDER</th>
                          <th className="order-date">DATE</th>
                          <th className="order-status">STATUS</th>
                          <th className="order-price">TOTAL</th>
                          <th className="order-action">ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center p-0" colSpan="5">
                            <p className="mb-5 mt-5">
                              No Order has been made yet.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <hr className="mt-0 mb-3 pb-2" />

                    <ALink href="/shop" className="btn btn-dark">
                      Go Shop
                    </ALink>
                  </div>
                </div>
              </TabPanel> */}

              {/* <TabPanel className="tab-pane fade" id="download">
                <div className="download-content">
                  <h3 className="account-sub-title d-md-block">
                    <i className="sicon-cloud-download align-middle mr-3"></i>
                    Downloads
                  </h3>
                  <div className="download-table-container">
                    <p>No downloads available yet.</p>{" "}
                    <ALink
                      href="/shop"
                      className="btn btn-primary text-transform-none mb-2"
                    >
                      GO SHOP
                    </ALink>
                  </div>
                </div>
              </TabPanel> */}

              <TabPanel className="tab-pane fade" id="address-panel">
                <div className="show-content fade show">
                  <h3 className="account-sub-title d-none d-md-block mb-1">
                    <i className="sicon-location-pin align-middle mr-3"></i>
                    Addresses
                  </h3>
                  <div className="addresses-content">
                    <p className="mb-4">
                      The following addresses will be used on the checkout page
                      by default.
                    </p>
                    <div className="row">
                      <div className="address col-md-6">
                        <div className="heading d-flex">
                          <h4 className="text-dark mb-0">Billing address</h4>
                        </div>

                        <div className="address-box">
                          You have not set up this type of address yet.
                        </div>
                        <span
                          className="btn btn-default address-action link-to-tab"
                          onClick={() => controlDisplay()}
                        >
                          Add Address
                        </span>
                      </div>

                      <div className="address col-md-6 mt-5 mt-md-0">
                        <div className="heading d-flex">
                          <h4 className="text-dark mb-0">Shipping address</h4>
                        </div>

                        <div className="address-box">
                          You have not set up this type of address yet.
                        </div>
                        <span
                          className="btn btn-default address-action link-to-tab"
                          onClick={() => controlDisplay()}
                        >
                          Add Address
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="address account-content hide-content fade mt-0 pt-2">
                  <h4 className="title">Billing address</h4>

                  <form className="mb-2" action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            First name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Last name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Company </label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="select-custom">
                      <label>
                        Country / Region <span className="required">*</span>
                      </label>
                      <select name="orderby" className="form-control">
                        <option value="" defaultValue="selected">
                          British Indian Ocean Territory
                        </option>
                        <option value="1">Brunei</option>
                        <option value="2">Bulgaria</option>
                        <option value="3">Burkina Faso</option>
                        <option value="4">Burundi</option>
                        <option value="5">Cameroon</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>
                        Street address <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="House number and street name"
                        required
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>
                        Town / City <span className="required">*</span>
                      </label>
                      <input type="text" className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label>
                        State / Country <span className="required">*</span>
                      </label>
                      <input type="text" className="form-control" required />
                    </div>

                    <div className="form-group">
                      <label>
                        Postcode / ZIP <span className="required">*</span>
                      </label>
                      <input type="text" className="form-control" required />
                    </div>

                    <div className="form-group mb-3">
                      <label>
                        Phone <span className="required">*</span>
                      </label>
                      <input type="number" className="form-control" required />
                    </div>

                    <div className="form-group mb-3">
                      <label>
                        Email address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="editor@gmail.com"
                        required
                      />
                    </div>

                    <div className="form-footer mb-0">
                      <div className="form-footer-right">
                        <button type="submit" className="btn btn-dark py-4">
                          Save Address
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </TabPanel>

              <TabPanel className="tab-pane fade" id="edit">
                <h3 className="account-sub-title d-none d-md-block mt-0 pt-1 ml-1">
                  <i className="icon-user-2 align-middle mr-3 pr-1"></i>Account
                  Details
                </h3>
                <div className="account-content">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="acc-name">
                            First name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Editor"
                            id="acc-name"
                            name="acc-name"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="acc-lastname">
                            Last name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="acc-lastname"
                            name="acc-lastname"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group mb-2">
                      <label htmlFor="acc-text">
                        Display name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="acc-text"
                        name="acc-text"
                        placeholder="Editor"
                        required
                      />
                      <p>
                        This will be how your name will be displayed in the
                        account section and in reviews
                      </p>
                    </div>

                    <div className="form-group mb-4">
                      <label htmlFor="acc-email">
                        Email address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="acc-email"
                        name="acc-email"
                        placeholder="editor@gmail.com"
                        required
                      />
                    </div>

                    <div className="change-password">
                      <h3 className="text-uppercase mb-2">Password Change</h3>

                      <div className="form-group">
                        <label htmlFor="acc-password">
                          Current Password (leave blank to leave unchanged)
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="acc-password"
                          name="acc-password"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="acc-password">
                          New Password (leave blank to leave unchanged)
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="acc-new-password"
                          name="acc-new-password"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="acc-password">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="acc-confirm-password"
                          name="acc-confirm-password"
                        />
                      </div>
                    </div>

                    <div className="form-footer mt-3 mb-0">
                      <button type="submit" className="btn btn-dark mr-0">
                        Save changes
                      </button>
                    </div>
                  </form>
                </div>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>

      <div className="mb-5"></div>
    </main>
  );
}
