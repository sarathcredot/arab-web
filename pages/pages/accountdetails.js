import { connect } from "react-redux";

import ALink from "../../components/common/ALink";

function accountdetails() {
  return (
    <main className="main main-test">
      <div
        className=" d-flex flex-column align-items-center"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
          <li>
            <ALink href="/pages/account">My Account</ALink>
          </li>
          <li className="active">
            <ALink href="/pages/accountdetails">Account Details</ALink>
          </li>
          {/* <li className="disabled">
            <ALink href="#">Order Complete</ALink>
          </li> */}
        </ul>
      </div>
      <div className="container checkout-container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="checkout-steps">
              <li>
                <div
                  className="container"
                  style={{
                    marginTop: "3rem",
                    borderBottom: "1px solid",
                    borderColor: "#E2E2E2",
                    padding: "2px",
                  }}
                >
                  <h2 className="step-title">Account Details</h2>
                </div>

                <form action="#" id="checkout-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: "400px",
                            lineHeight: "20px",
                          }}
                        >
                          First name{" "}
                          <ab className="required" title="required">
                            *
                          </ab>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          style={{ marginTop: "10px" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: "400px",
                            lineHeight: "20px",
                          }}
                        >
                          Last name{" "}
                          <ab className="required" title="required">
                            *
                          </ab>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          style={{ marginTop: "10px" }}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: "400px",
                            lineHeight: "20px",
                          }}
                        >
                          Disply name{" "}
                          <ab className="required" title="required">
                            *
                          </ab>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          style={{ marginTop: "10px" }}
                          value="Disply name"
                        />
                      </div>
                    </div>
                  </div>

                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "400px",
                      fontSize: "12px",
                      lineHeight: "26px",
                    }}
                  >
                    This will be how your name will be displayed in the account
                    section and in reviews
                  </p>

                  <div className="form-group">
                    <label
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: "400px",
                        lineHeight: "20px",
                      }}
                    >
                      Email address{" "}
                      <ab className="required" title="required">
                        *
                      </ab>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      required
                      style={{ marginTop: "10px" }}
                      value="credot@gmail.com"
                    />
                  </div>

                  <div
                    className="container"
                    style={{
                      border: "2px solid ",
                      borderColor: "#CACACA",
                      marginTop: "4rem",
                      height: "503px",
                    }}
                  >
                    <div className="container" style={{ padding: "51px" }}>
                      <h1
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: "600px",
                          fontSize: "16px",
                          lineHeight: "15px",
                          letterSpacing: "0.75px",
                        }}
                      >
                        {"Password Change".toUpperCase()}
                      </h1>

                      <div className="form-group" style={{ marginTop: "50px" }}>
                        <label
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: "400px",
                            lineHeight: "20px",
                          }}
                        >
                          Current Password (leave blank to leave unchanged)
                          <ab className="required" title="required">
                            *
                          </ab>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          required
                          style={{ marginTop: "10px" }}
                          value="12352"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: "400px",
                            lineHeight: "20px",
                          }}
                        >
                          New Password (leave blank to leave unchanged)
                          <ab className="required" title="required">
                            *
                          </ab>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          required
                          style={{ marginTop: "10px" }}
                        />
                      </div>

                      <div className="form-group">
                        <label
                          style={{
                            fontFamily: "Poppins",
                            fontWeight: "400px",
                            lineHeight: "20px",
                          }}
                        >
                          Confirm New Password
                          <ab className="required" title="required">
                            *
                          </ab>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          required
                          style={{ marginTop: "10px" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="container"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <div className="mt-3">
                      {" "}
                      <button type="submit" className="btn btn-dark mr-0">
                        Save changes
                      </button>
                    </div>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    cartList: state.cartlist.cart ? state.cartlist.cart : [],
  };
};

export default connect(mapStateToProps)(accountdetails);
