import React from 'react';
import Reveal from 'react-awesome-reveal';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductOne from '../../features/products/product-one';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { fadeIn } from '../../../utils/data/keyframes'
import { productSlider } from '../../../utils/data/slider';

function ElectronicCollection ( { products } ) {
    return (
        <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
            <section className="electronic-section">
                <div className="categories-container bg-white">
                    <h4 className="section-title text-transform-none">Electronics</h4>

                    <div className="row">
                        <div className="col-md-6 mb-2 mb-md-0">
                            <div className="banner banner4 bg-image" style={ { backgroundImage: 'url(images/home/banners/banner4.jpg)' } }>
                                <div className="banner-layer d-flex align-items-center flex-column flex-sm-row justify-content-end">
                                    <div className="content-left">
                                        <div className="coupon-sale-content">
                                            <h4 className="custom-coupon-sale-text text-white bg-dark d-block ext-transform-none mr-0 ls-0">
                                                Exclusive COUPON</h4>
                                            <h5 className="custom-coupon-sale-text text-dark  ls-0 p-0"><i
                                                className="ls-0">UP TO</i><b className="text-white bg-dark">$100</b><sub>OFF</sub></h5>
                                        </div>
                                    </div>
                                    <div className="content-right">
                                        <h3 className="text-dark mb-0 text-sm-right text-left">DRONE & CAMERAS</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="banner banner5 bg-image" style={ { backgroundImage: 'url(images/home/banners/banner5.jpg)' } }>
                                <div className="banner-layer d-flex align-items-center flex-column flex-sm-row justify-content-end">
                                    <div className="content-left">
                                        <h3 className="text-white text-center mb-0">ELECTRONIC DEALS</h3>
                                    </div>

                                    <div className="content-right">
                                        <div className="coupon-sale-content pt-1">
                                            <h4 className="custom-coupon-sale-text text-dark bg-white d-block ext-transform-none mr-0 ls-0">
                                                Exclusive COUPON</h4>
                                            <h5 className="custom-coupon-sale-text text-white mb-0 ls-0 p-0"><i
                                                className="ls-0">UP TO</i><b className="text-white bg-secondary">$100</b><sub>OFF</sub>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-sm-6">
                            <div className="shop-list p-0">
                                <ALink href={ { pathname: '/shop', query: { category: 'accessories' } } } className="sub-title">Accessories</ALink>
                                <ul className="d-flex flex-wrap">
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'bags-and-cases' } } }>Bags & Cases</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'batteries' } } }>Batteries</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'cables-and-adapters' } } }>Cables & Adapters</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'chargers' } } }>Chargers</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'electronic-cigarettes' } } }>Electronic Cigarettes</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'home-electronic' } } }>Home Electronic</ALink></li>
                                </ul>

                                <ALink className="view-all" href={ { pathname: '/shop' } }>View All<i className="fas fa-long-arrow-alt-right"></i></ALink>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="shop-list p-0">
                                <ALink href={ { pathname: '/shop', query: { category: 'audio-and-video' } } } className="sub-title">Audio & Video</ALink>
                                <ul className="d-flex flex-wrap">
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'audio-and-amplifier' } } }>Audio Amplifier</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'hdmi-projectors' } } }>HDMI Projectors</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'projectors' } } }>Projectors</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'televisions' } } }>Televisions</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tv-receivers' } } }>TV Receivers</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tv-sticks' } } }>TV Sticks</ALink></li>
                                </ul>

                                <ALink className="view-all" href={ { pathname: '/shop' } }>View All<i className="fas fa-long-arrow-alt-right"></i></ALink>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="shop-list p-0">
                                <ALink href={ { pathname: '/shop', query: { category: 'accessories' } } } className="sub-title">Camera & Photo</ALink>
                                <ul className="d-flex flex-wrap">
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'action-and-cameras' } } }>Action Cameras</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'camcorders' } } }>Camcorders</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'camera-and-Photo' } } }>Camera & Photo</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'camera-drones' } } }>Camera Drones</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'digital-cameras' } } }>Digital Cameras</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'photo-supplies' } } }>Photo Supplies</ALink></li>
                                </ul>

                                <ALink className="view-all" href={ { pathname: '/shop' } }>View All<i className="fas fa-long-arrow-alt-right"></i></ALink>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="shop-list p-0">
                                <ALink href={ { pathname: '/shop', query: { category: 'laptops' } } } className="sub-title">Laptops</ALink>
                                <ul className="d-flex flex-wrap">
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'gaming-laptops' } } }>Gaming Laptops</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'laptop-accessories' } } }>Laptop Accessories</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'laptop-bags-and-cases' } } }>Laptop Bags & Cases</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tablet-accessories' } } }>Tablet Accessories</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'tablets' } } }>Tablets</ALink></li>
                                    <li><ALink href={ { pathname: '/shop', query: { category: 'ultraslim-laptops' } } }>Ultraslim Laptops</ALink></li>
                                </ul>

                                <ALink className="view-all" href={ { pathname: '/shop' } }>View All<i className="fas fa-long-arrow-alt-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                </div>

                <OwlCarousel adClass="products-slider nav-outer carousel-with-bg nav-circle show-nav-hover nav-image-center" options={ productSlider }>
                    {
                        products ?
                            products.map( ( item, index ) => (
                                <ProductOne
                                    adClass="inner-quickview inner-icon"
                                    product={ item }
                                    key={ "product-one" + index }
                                />
                            ) )
                            :
                            [ 0, 1, 2, 3, 4, 5 ].map( ( item, index ) =>
                                <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                            )
                    }
                </OwlCarousel>
            </section>
        </Reveal>
    );
}

export default React.memo( ElectronicCollection );