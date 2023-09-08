import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Import Custom Component
import ALink from '../../common/ALink';
import ProductCountdown from '../../features/product-countdown';
import ProductOne from '../../features/products/product-one';
import ProductThree from '../../features/products/product-three';
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { fadeIn } from '../../../utils/data/keyframes'
import { productSlider } from '../../../utils/data/slider';

function GardenCollection ( props ) {
    const { latest, bestSelling, topRated, products } = props;
    const slideOption = { ...productSlider, nav: false, responsive: { ...productSlider.responsive, 1200: { items: 4 } } };

    return (
        <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
            <section className="garden-collection">
                <div className="bg-white">
                    <div className="row">
                        <div className="col-xl-9 col-xl-9cols pr-xl-0">
                            <div className="categories-container categories-container-three bg-white pb-0">
                                <div className="heading d-flex flex-lg-row flex-column align-items-lg-center">
                                    <h4 className="section-title text-transform-none mb-0">Home & Garden</h4>
                                    <ul className="shop-list d-flex flex-wrap align-items-center p-0 mt-0">
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'furniture-2' } } }>Furniture</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'garden-and-outdoors' } } }>Garden & Outdoors</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'home-accessories-1' } } }>Home Accessories</ALink></li>
                                        <li><ALink href={ { pathname: '/shop', query: { category: 'lighting-1' } } }>Lighting</ALink></li>
                                    </ul>
                                    <ALink className="view-all" href="/shop">View All<i className="fas fa-long-arrow-alt-right"></i></ALink>
                                </div>

                                <div className="banner banner6" data-md-order="8">
                                    <figure>
                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/home/banners/banner7.jpg"
                                            threshold={ 500 }
                                            effect="black and white"
                                            width="100%"
                                            height={ 301 }
                                        />
                                    </figure>
                                    <div className="banner-layer text-center content-left">
                                        <h4 className="heading-border">Amazing</h4>
                                        <h3 className="ls-0">Collection</h3>
                                        <hr className="mb-1 mt-0" />
                                        <h5>Check our discounts</h5>
                                    </div>

                                    <div className="banner-layer text-center content-right">
                                        <h5 className="coupon-sale-text">
                                            <span>STARTING AT</span>
                                            <b className="text-dark align-middle"><sup>$</sup><em
                                                className="align-text-top">199</em><sup>99</sup></b>
                                        </h5>
                                        <h6>* limited time only</h6>
                                    </div>
                                </div>

                            </div>

                            <div className="product-slider-tab appear-animate bg-white carousel-with-bg">
                                <Tabs selectedTabClassName="active" selectedTabPanelClassName="active show">
                                    <div className="heading shop-list d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
                                        <TabList className="nav ml-0 justify-content-center mb-0">
                                            <Tab className="nav-item">
                                                <ALink href="#" className="nav-link">Best Sellers</ALink>
                                            </Tab>

                                            <Tab className="nav-item">
                                                <ALink href="#" className="nav-link">New Arrivals</ALink>
                                            </Tab>

                                            <Tab className="nav-item">
                                                <ALink href="#" className="nav-link">Best Ratings</ALink>
                                            </Tab>
                                        </TabList>
                                    </div>

                                    <div className="tab-content">
                                        <TabPanel className="tab-pane fade">
                                            <OwlCarousel adClass="products-slider nav-circle nav-image-center pb-0" options={ slideOption }>
                                                {
                                                    bestSelling ?
                                                        bestSelling.slice( 0, 6 ).map( ( item, index ) => (
                                                            <ProductOne
                                                                adClass="inner-quickview inner-icon"
                                                                product={ item }
                                                                key={ "product-one" + index }
                                                            />
                                                        ) )
                                                        :
                                                        [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                                            <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                                        )
                                                }
                                            </OwlCarousel>
                                        </TabPanel>

                                        <TabPanel className="tab-pane fade">
                                            <OwlCarousel adClass="products-slider nav-circle nav-image-center pb-0" options={ slideOption }>
                                                {
                                                    latest ?
                                                        latest.slice( 0, 6 ).map( ( item, index ) => (
                                                            <ProductOne
                                                                adClass="inner-quickview inner-icon"
                                                                product={ item }
                                                                key={ "product-one" + index }
                                                            />
                                                        ) )
                                                        :
                                                        [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                                            <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                                        )
                                                }
                                            </OwlCarousel>
                                        </TabPanel>

                                        <TabPanel className="tab-pane fade">
                                            <OwlCarousel adClass="products-slider nav-circle nav-image-center pb-0" options={ slideOption }>
                                                {
                                                    topRated ?
                                                        topRated.slice( 0, 6 ).map( ( item, index ) => (
                                                            <ProductOne
                                                                adClass="inner-quickview inner-icon"
                                                                product={ item }
                                                                key={ "product-one" + index }
                                                            />
                                                        ) )
                                                        :
                                                        [ 0, 1, 2, 3 ].map( ( item, index ) =>
                                                            <div className="skel-pro skel-pro-grid" key={ "product-one" + index }></div>
                                                        )
                                                }
                                            </OwlCarousel>
                                        </TabPanel>
                                    </div>
                                </Tabs>
                            </div>
                        </div>

                        <div className="col-xl-3 col-xl-3cols">
                            <div className="products-widget-container bg-white">
                                <h2 className="section-title d-flex align-items-center text-transform-none"><i className="icon-percent-shape"></i>Special Offers</h2>

                                <ProductCountdown adClass="custom-product-countdown bg-white" />

                                <div className="row">
                                    {
                                        bestSelling ?
                                            bestSelling.slice( 0, 6 ).map( ( item, index ) => (
                                                <div className="col-xl-12 col-md-4 col-sm-6" key={ "All Products:" + index }>
                                                    <ProductThree
                                                        product={ item }
                                                    />
                                                </div>
                                            ) )
                                            :
                                            new Array( 6 ).fill( 1 ).map( ( item, index ) =>
                                                <div className="col-xl-12 col-md-4 col-sm-6 skel-product-col skel-pro mb-2" key={ "Skeleton:" + index }></div>
                                            )
                                    }
                                </div>

                                <ALink className="view-all" href={ { pathname: '/shop', query: { category: 'home-and-garden' } } }>View All<i className="fas fa-long-arrow-alt-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </Reveal >
    );
}

export default React.memo( GardenCollection );