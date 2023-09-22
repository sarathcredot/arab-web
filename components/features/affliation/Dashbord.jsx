import React from 'react'
import ALink from '../../common/ALink';

function Dashbord() {
    return (
        <div className='container'>
            <div className="db-container container">
                <div className="card gradient-1">
                    <div className="card-content" style={{ padding: "20px" }}>
                        <h4>Affiliate Earnings</h4>
                        <div className="content-with-image" >
                            <p className='' style={{ marginTop: "20px" }}><span className="number">420</span>AD Points</p>
                            <img src="images\icon\coins 1.svg" alt="" />

                        </div>

                    </div>
                    <button type="submit" className="btn " style={{ marginTop: "auto", backgroundColor: "#E30613", color: "white" }}>redeem points</button>
                </div>

                <div className="card gradient-2">
                    <div className="card-content" style={{ padding: "20px" }}>
                        <h4>Link Clicks</h4>
                        <div className="content-with-image" >
                            <p className='' style={{ marginTop: "20px" }}><span className="number">84</span>Clicks</p>
                            <img src="images\icon\hand-tap 1.svg" alt="" />

                        </div>

                    </div>
                    <p style={{ padding: "10px", color: "black" }}>Share Product links for more Referals</p>
                </div>

                <div className="card gradient-3">
                    <div className="card-content" style={{ padding: "20px" }}>
                        <h4>Successful Purchase</h4>
                        <div className="content-with-image" >
                            <p className='' style={{ marginTop: "20px" }}><span className="number">27</span>Buys</p>
                            <img src="images\icon\packet 1.svg" alt="" />

                        </div>

                    </div>
                    <p style={{ padding: "20px", color: "black" }}>Congrats keep going!</p>
                </div>

            </div>
<h6>Purchase History</h6>

            <div className="col-lg-12">
                <div className="cart-table-container">
                    <table className="table table-cart">
                        <thead>
                            <tr>
                                <th className="thumbnail-col">item</th>
                                <th className="product-col"></th>
                                <th className="price-col">PURCHASE DATE</th>
                                <th className="qty-col">USER PURCHASED</th>
                                <th className="qty-col">POINTS EARNED</th>
                            </tr>
                        </thead>
                        <tbody>


                            <tr key={"cart-item"} className="product-row" style={{ color: "black" }}>
                                <td>
                                    <figure className="product-image-container" style={{ width: "6rem" }}>
                                        <ALink href="/home" className="product-image">
                                            <img
                                                src="images\icon\product.svg"
                                                alt="product"
                                                style={{ maxWidth: "100%", maxHeight: "100%", display: "block" }}
                                            />
                                        </ALink>

                                        <a href="#" className="btn-remove icon-cancel" title="Remove Product" onClick={(e) => { e.preventDefault(); removeFromCart(item, index); }}></a>
                                    </figure>
                                </td>
                                <td className="product-col">
                                    <h5 className="product-title">
                                        <ALink href={`/product/default`}>iPhone 14 Pro max 256GB - Deep Purple..</ALink>
                                    </h5>
                                </td>
                                <td>
                                    21/07/2023
                                </td>
                                <td>
                                    995023715
                                </td>
                                <td>
                                    ADP 120.00
                                </td>

                            </tr>

                        </tbody>


                        <tfoot>
                            <tr>
                                <td colSpan="5" className="clearfix">
                                    <div className="float-left">
                                        {/* <div className="cart-discount">
                                            <form action="#">
                                                <div className="input-group">
                                                    <input type="text" className="form-control form-control-sm"
                                                        placeholder="Coupon Code" required />
                                                    <div className="input-group-append" >
                                                        <button className="btn btn-sm" type="submit" style={{ backgroundColor: "black", color: "white" }}>Apply Coupon</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div> */}
                                    </div>

                                    <div className="float-right">
                                        <button type="submit" className="btn btn-shop btn-update-cart" style={{ border: "1px solid" }} >
                                        Raise a dispute
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>




        </div>
    )
}

export default Dashbord