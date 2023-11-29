
import React, { useState } from "react";
import ALink from "../../components/common/ALink";
import OTPInput from "react-otp-input";

function Login() {
  const [isOtp, SetIsOtp] = useState(false);
  const [otp, setOtp] = useState("");

  const handleOtpChange = () => {
    SetIsOtp(true);
  };

  return (
    <main className="main">
      {/* <div className="page-header">
                <div className="container d-flex flex-column align-items-center">
                    <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                                <li className="breadcrumb-item"><ALink href="/shop">Shop</ALink></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    My Account
                            </li>
                            </ol>
                        </div>
                    </nav>

                    <h1>My Account</h1>
                </div>
            </div> */}

      <div className=" login-container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            {isOtp ? (
              <div className="row" style={{ marginLeft: "115px" }}>
                <div className="col-md-6">
                  <div className="heading mb-1" style={{ marginTop: "200px" }}>
                    <h2 className="title">Verify Phone Number</h2>
                    <div className="">
                      <p
                        className=""
                        style={{
                          marginTop: "20px",
                          paddingBottom: "20px",
                          fontSize: "12px",
                          color: "#777777",fontWeight:"400"
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur. Sapien ut libero
                        sed lacinia egestas placerat ut sagittionec.
                      </p>
                    </div>
                  </div>

                  <form action="#" style={{ marginTop: "70px" }}>
                    <div className="mt-3">
                      <OTPInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        containerStyle={{
                          textAlign: "center",
                          width: "60px",
                          height: "60px",
                          gap: "24px",
                        }}
                        renderInput={(props) => (
                          <input
                            {...props}
                            style={{
                              width: "60px",
                              height: "60px",
                              textAlign: "center",
                              fontSize: "18px ",
                            borderColor:"#ECECEC",
                            // textDecoration:"none",
                            outline:"none",
                            border:"1px solid #ECECEC",
                            // outlineColor:"#ECECEC"
                        
                            //   border:"1px"
                            }}
                          />
                        )}
                      />
                      <button
                        type="submit"
                        className="btn btn-dark btn-md "
                        style={{ marginTop: "48px",fontWeight:"600" }}
                        // onClick={handleVerifyOTP}
                      >
                        Verify OTP
                      </button>

                      <div
                        className="resend-action"
                        style={{ marginTop: "33px" }}
                      >
                        <p
                          style={{
                            fontWeight: "400",
                            fontSize: "12px",
                            color: "#000000",
                          }}
                        >
                          Don't have OTP ?
                          <span
                            style={{ paddingLeft: "5px", color: "#399E0A" ,fontWeight:"500"}}
                            className="btn-text"
                          >
                            Resent
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* <div className="form-footer">
                  <div className="custom-control custom-checkbox mb-0">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="lost-password"
                    />
                    <label
                      className="custom-control-label mb-0"
                      htmlFor="lost-password"
                    >
                      Remember me
                    </label>
                  </div>

                  <ALink
                    href="/pages/forgot-password"
                    className="forget-password text-dark form-footer-right"
                  >
                    Forgot Password?
                  </ALink>
                </div> */}
                  </form>
                </div>
                <div className="col-md-6">
                  {/* <div className="heading mb-1">
                <h2 className="title">Register</h2>
              </div> */}

                  {/* <form action="#">
                <label htmlFor="register-email">
                  Email address <span className="required">*</span>
                </label>
                <input
                  type="email"
                  className="form-input form-wide"
                  id="register-email"
                  required
                />

                <label htmlFor="register-password">
                  Password <span className="required">*</span>
                </label>
                <input
                  type="password"
                  className="form-input form-wide"
                  id="register-password"
                  required
                />

                <div className="form-footer mb-2">
                  <button
                    type="submit"
                    className="btn btn-dark btn-md w-100 mr-0"
                  >
                    Register
                  </button>
                </div>
              </form> */}
                  <div>
                    <img
                      class="google-icon"
                      src="images\brands\loginBanner.svg"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="row" style={{ marginLeft: "115px" }}>
                <div className="col-md-6 left-login-section">
                  <div className="heading mb-1">
                    <h2 className="title">Login/ Register to your account</h2>
                    <div className="">
                      <p
                        className=""
                        style={{
                          marginTop: "20px",
                          paddingBottom: "20px",
                          fontSize: "12px",
                          color: "#777777",fontWeight:"400"
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur. Sapien ut libero
                        sed lacinia egestas placerat ut sagittionec.
                      </p>
                    </div>
                  </div>

                  <div></div>

                  <form action="#" style={{ marginTop: "70px" }}>
                    {/* <label htmlFor="login-email">
                                        Enter Mobile number <span className="required">*</span>
                                    </label> */}
                    <input
                      type="number"
                      className="form-input form-wide"
                      id="login-email"
                      //   required
                      placeholder="Enter Mobile Number"
                      style={{ width: "538px", height: "60px" }}
                    />

                    <div
                      className=""
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "538px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#F8F8F8",
                          borderRadius: "50%",
                          width: "46px",
                          height: "46px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "14px",
                        }}
                      >
                        <div style={{  fontSize: "14px",fontWeight:"500" }}>
                          <p style={{ fontFamily: "Poppins",marginBottom:"0" }}>OR</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div
                        class="google-btn   "
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "60px",
                          width: "538px",
                          border:"1px solid #CDCDCD"
                        }}
                      >
                        <div class="google-icon-wrapper ">
                          <img
                            class="google-icon"
                            src="images\brands\googel.svg"
                          />
                        </div>
                        <p
                          class="btn-text mt-3 "
                          style={{ paddingLeft: "20px" }}
                        >
                          <p style={{ fontSize: "12px", fontWeight: "600",color:"#000000" }}>
                            Login in with google
                          </p>
                        </p>
                      </div>
                      <div
                        class="google-btn   "
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginTop: "20px",
                          height: "60px",
                          width: "538px",
                          border:"1px solid #CDCDCD"
                        }}
                      >
                        <div class="google-icon-wrapper">
                          <img
                            class="google-icon"
                            src="images\brands\apple.svg"
                          />
                        </div>
                        <p
                          class="btn-text mt-3"
                          style={{ paddingLeft: "20px" }}
                        >
                          <p style={{ fontSize: "12px", fontWeight: "600",color:"#000000" }}>
                            Sign in wIth Apple
                          </p>
                        </p>
                      </div>
                    </div>

                    {/* <div className="form-footer">
                    <div className="custom-control custom-checkbox mb-0">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="lost-password"
                      />
                      <label
                        className="custom-control-label mb-0"
                        htmlFor="lost-password"
                      >
                        Remember me
                      </label>
                    </div>

                    <ALink
                      href="/pages/forgot-password"
                      className="forget-password text-dark form-footer-right"
                    >
                      Forgot Password?
                    </ALink>
                  </div> */}

                    <button
                      type="submit"
                      className="btn btn-dark btn-md "
                      style={{ marginTop: "48px",fontWeight:"600" }}
                      onClick={handleOtpChange}
                    >
                      GET OTP
                    </button>
                  </form>
                </div>
                <div className="col-md-6">
                  {/* <div className="heading mb-1">
                  <h2 className="title">Register</h2>
                </div> */}

                  {/* <form action="#">
                  <label htmlFor="register-email">
                    Email address <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-input form-wide"
                    id="register-email"
                    required
                  />

                  <label htmlFor="register-password">
                    Password <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-input form-wide"
                    id="register-password"
                    required
                  />

                  <div className="form-footer mb-2">
                    <button
                      type="submit"
                      className="btn btn-dark btn-md w-100 mr-0"
                    >
                      Register
                    </button>
                  </div>
                </form> */}
                  <div>
                    <img
                      class="google-icon"
                      src="images\brands\loginBanner.svg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default React.memo(Login);
