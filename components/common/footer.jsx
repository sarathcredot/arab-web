import React from "react";

import ALink from "./ALink";

function Footer() {
  return (
    <footer className="footer font2">
      <div className="container">
        {/* <div className="widget-newsletter d-flex align-items-center align-items-sm-start flex-column flex-lg-row  justify-content-lg-between">
                    <div className="widget-newsletter-info text-center text-sm-left d-flex flex-column flex-sm-row align-items-center mb-1 mb-xl-0">
                        <i className="icon-envolope"></i>
                        <div className="widget-info-content">
                            <h5 className="widget-newsletter-title mb-0">
                                Subscribe To Our Newsletter</h5>
                            <p className="widget-newsletter-content mb-0">Get all the latest information
                            on Events, Sales and Offers.
                            </p>
                        </div>
                    </div>

                    <form action="#" className="mb-0 w-lg-max mt-2 mt-md-0">
                        <div className="footer-submit-wrapper d-flex align-items-center">
                            <input type="email" className="form-control mb-0" placeholder="Your E-mail Address" size="40"
                                required />
                            <button type="submit" className="btn btn-primary btn-sm">Subscribe
                                Now!</button>
                        </div>
                    </form>
                </div> */}

        <div className="footer-top">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="widget">
                <h3 className="widget-title">Customer Service</h3>
                <div className="widget-content">
                  <ul>
                    <li>
                      <ALink href="#">Help & FAQs</ALink>
                    </li>
                    <li>
                      <ALink href="#">Order Tracking</ALink>
                    </li>
                    <li>
                      <ALink href="#">Shipping & Delivery</ALink>
                    </li>
                    <li>
                      <ALink href="#">Orders History</ALink>
                    </li>
                    <li>
                      <ALink href="#">Advanced Search</ALink>
                    </li>
                    <li>
                      <ALink href="/pages/login">Login</ALink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="widget">
                <h3 className="widget-title">About Us</h3>
                <div className="widget-content">
                  <ul>
                    <li>
                      <ALink href="/pages/about-us">About Us</ALink>
                    </li>
                    <li>
                      <ALink href="#">Careers</ALink>
                    </li>
                    <li>
                      <ALink href="#">Our Stores</ALink>
                    </li>
                    <li>
                      <ALink href="#">Corporate Sales</ALink>
                    </li>
                    <li>
                      <ALink href="#">Careers</ALink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="widget">
                <h3 className="widget-title">More Information</h3>
                <div className="widget-content">
                  <ul>
                    <li>
                      <ALink href="#">Affiliates</ALink>
                    </li>
                    <li>
                      <ALink href="#">Refer a Friend</ALink>
                    </li>
                    <li>
                      <ALink href="#">Student Beans Offers</ALink>
                    </li>
                    <li>
                      <ALink href="#">Gift Vouchers</ALink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="widget">
                <h3 className="widget-title">Social Media</h3>
                <div className="widget-content">
                  <div className="social-icons">
                    <ALink
                      href="#"
                      className="social-icon social-facebook icon-facebook"
                      title="Facebook"
                    ></ALink>
                    <ALink
                      href="#"
                      className="social-icon social-twitter icon-twitter"
                      title="Twitter"
                    ></ALink>
                    <ALink
                      href="#"
                      className="social-icon social-instagram icon-instagram"
                      title="Instagram"
                    ></ALink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="row">
            <div className="col-md-12 col-lg-8 mb-3 mb-lg-0">
              <ul className="footer-category-list mb-0">
                <li>
                  <h4 className="d-inline-block">Fashion:</h4>{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "tops-and-blouses" },
                    }}
                  >
                    Tops &amp; Blouses
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "accessories" },
                    }}
                  >
                    Accessories{" "}
                  </ALink>
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "dresses-and-skirts" },
                    }}
                  >
                    Dresses &amp; Skirts
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "shoes-and-boots" },
                    }}
                  >
                    Shoes &amp; Boots
                  </ALink>{" "}
                  |{" "}
                  <ALink className="view-all" href={{ pathname: "/shop" }}>
                    View All<i className="fas fa-long-arrow-alt-right ml-1"></i>
                  </ALink>
                </li>
                <li>
                  <h4 className="d-inline-block">Electronics:</h4>{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "cables-and-adapters" },
                    }}
                  >
                    Cables &amp; Adapters
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "electronic-and-cigarettes" },
                    }}
                  >
                    Electronic Cigarettes
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "batteries" },
                    }}
                  >
                    Batteries{" "}
                  </ALink>
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "chargers" },
                    }}
                  >
                    Chargers{" "}
                  </ALink>
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "home-and-electronic" },
                    }}
                  >
                    Home Electronic
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "bags-and-cases" },
                    }}
                  >
                    Bags &amp; Cases
                  </ALink>{" "}
                  |{" "}
                  <ALink className="view-all" href={{ pathname: "/shop" }}>
                    View All<i className="fas fa-long-arrow-alt-right ml-1"></i>
                  </ALink>
                </li>
                <li>
                  <h4 className="d-inline-block">Gifts:</h4>{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "gifts-for-boyfriend" },
                    }}
                  >
                    Gifts for Boyfriend
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "gifts-for-husband" },
                    }}
                  >
                    Gifts for Husband
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "gifts-for-dad" },
                    }}
                  >
                    Gifts for Dad
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "gifts-for-grandpa" },
                    }}
                  >
                    Gifts for Grandpa
                  </ALink>{" "}
                  |{" "}
                  <ALink className="view-all" href={{ pathname: "/shop" }}>
                    View All<i className="fas fa-long-arrow-alt-right ml-1"></i>
                  </ALink>
                </li>
                <li>
                  <h4 className="d-inline-block">Home &amp; Garden:</h4>{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "sofas-and-couches" },
                    }}
                  >
                    Sofas &amp; Couches
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "armchairs" },
                    }}
                  >
                    Armchairs
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "bed-frames" },
                    }}
                  >
                    Bed Frames
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "bedside-tables" },
                    }}
                  >
                    Bedside Tables
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "dressing-tables" },
                    }}
                  >
                    Dressing Tables
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "chest-of-drawers" },
                    }}
                  >
                    Chest of Drawers
                  </ALink>{" "}
                  |{" "}
                  <ALink className="view-all" href={{ pathname: "/shop" }}>
                    View All<i className="fas fa-long-arrow-alt-right ml-1"></i>
                  </ALink>
                </li>
                <li>
                  <h4 className="d-inline-block">Music:</h4>{" "}
                  <ALink
                    href={{ pathname: "/shop", query: { category: "guitar" } }}
                  >
                    Guitar
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "drums-sets" },
                    }}
                  >
                    Drums Sets
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "percussions" },
                    }}
                  >
                    Percussions
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "pedals-and-effects" },
                    }}
                  >
                    Pedals &amp; Effects{" "}
                  </ALink>
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "sound-cards" },
                    }}
                  >
                    Sound Cards
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "studio-equipments" },
                    }}
                  >
                    Studio Equipments
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "piano-keyboards" },
                    }}
                  >
                    Piano &amp; Keyboards
                  </ALink>{" "}
                  |{" "}
                  <ALink href="/shop" className="view-all">
                    View All<i className="fas fa-long-arrow-alt-right ml-1"></i>
                  </ALink>
                </li>
                <li>
                  <h4 className="d-inline-block">Sports:</h4>{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "sports-and-fitness" },
                    }}
                  >
                    Sports &amp; Fitness
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "boating-and-Sailing" },
                    }}
                  >
                    Boating &amp; Sailing
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "clothing" },
                    }}
                  >
                    Clothing
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "exercise-and-fitness" },
                    }}
                  >
                    Exercise &amp; Fitness
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{ pathname: "/shop", query: { category: "golf" } }}
                  >
                    Golf
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "hunting-and-fishing" },
                    }}
                  >
                    Hunting &amp; Fishing
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{
                      pathname: "/shop",
                      query: { category: "leisure-sports" },
                    }}
                  >
                    Leisure Sports
                  </ALink>{" "}
                  |{" "}
                  <ALink
                    href={{ pathname: "/shop", query: { category: "running" } }}
                  >
                    Running{" "}
                  </ALink>{" "}
                  |&nbsp;
                  <ALink className="view-all" href={{ pathname: "/shop" }}>
                    View All<i className="fas fa-long-arrow-alt-right ml-1"></i>
                  </ALink>
                </li>
              </ul>
            </div>

            <div className="col-md-12 offset-lg-1 col-lg-3">
              <div className="widget widget-payment">
                <h3 className="widget-title ls-0">PAYMENT METHODS</h3>

                <div className="widget-content">
                  <div className="payment-icons mr-0">
                    <span
                      className="payment-icon visa"
                      style={{
                        backgroundImage:
                          "url(images/payments/payment-visa.svg)",
                      }}
                    ></span>
                    <span
                      className="payment-icon paypal"
                      style={{
                        backgroundImage:
                          "url(images/payments/payment-paypal.svg)",
                      }}
                    ></span>
                    <span
                      className="payment-icon stripe"
                      style={{
                        backgroundImage:
                          "url(images/payments/payment-stripe.png)",
                      }}
                    ></span>
                    <span
                      className="payment-icon verisign"
                      style={{
                        backgroundImage:
                          "url(images/payments/payment-verisign.svg)",
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom d-sm-flex align-items-center justify-content-center">
          <span className="footer-copyright">
            Porto eCommerce. © 2021. All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
