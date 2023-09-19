import React from 'react'

function Addresses() {
    return (
        <div>
            <div className="container checkout-container">


                <div className="row">
                    <div className="col-lg-12">
                        <ul className="checkout-steps">
                            <li>
                                <div
                                    className="container"
                                    style={{
                                        marginTop: "6rem",
                                        // borderBottom:"1px solid",
                                        // borderColor:""

                                        padding: "2px"
                                    }}
                                >
                                    <h4 className="step-title" >Billing address</h4>
                                </div>


                                <form action="#" id="checkout-form" style={{ marginTop: "40px" }}>
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


                                    </div>



                                    <div className="form-group">
                                        <label
                                            style={{
                                                fontFamily: "Poppins",
                                                fontWeight: "400px",
                                                lineHeight: "20px",
                                            }}
                                        >
                                            Country / Region {" "}
                                            <ab className="required" title="required">
                                                *
                                            </ab>
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            required
                                            style={{ marginTop: "10px" }}

                                        />
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
                                            style={{ marginTop: "10px" }}
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
                                            Twon/City <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Abu Dhabi"
                                            required
                                            style={{ marginTop: "10px" }}
                                        />

                                    </div>

                                    <div className="form-group">
                                        <label>
                                            Pincode/Zip <span className="required">*</span>
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="6730016"
                                            required
                                            style={{ marginTop: "10px" }}
                                        />

                                    </div>

                                    <div className="form-group">
                                        <label>
                                            Phone<span className="required">*</span>
                                        </label>
                                        <div className="input-group" style={{ marginTop: "10px" }}>
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" style={{ padding: "10px" }}>
                                                    <img src="images\brands\flag1.svg" alt="Flag" width="24" height="16" />
                                                    +971
                                                </span>
                                            </div>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Enter your phone number"
                                                required
                                            />
                                        </div>
                                    </div>



                                    <div className="form-group">
                                        <label>
                                            Email<span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            // placeholder="United Arab Emirates"
                                            value="credot@gmail.com"
                                            required
                                            style={{ marginTop: "10px" }}
                                        />

                                    </div>



                                    <div
                                        className="container"
                                        style={{ display: "flex", justifyContent: "flex-end" }}
                                    >
                                        <div className="mt-3">  <button type="submit" className="btn btn-dark mr-0">
                                            Save changes
                                        </button></div>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Addresses