import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Cusom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { brandSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes'

function BrandSection () {
    return (
        <div className="brands-section mt-2 mb-3">
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 500 } triggerOnce>
                <div className="headding">
                    <h4 className="section-title text-transform-none">Featured Brands</h4>
                </div>

                <OwlCarousel adClass="brands-slider bg-white nav-circle images-center" options={ brandSlider }>
                    <figure>
                        <LazyLoadImage
                            alt="brand"
                            src="images/brands/small/brand1.png"
                            width="100%"
                            height={ 50 }
                            threshold={ 500 }
                            effect="black and white"
                        />
                    </figure>

                    <figure>
                        <LazyLoadImage
                            alt="brand"
                            src="images/brands/small/brand2.png"
                            width="100%"
                            height={ 50 }
                            threshold={ 500 }
                            effect="black and white"
                        />
                    </figure>

                    <figure>
                        <LazyLoadImage
                            alt="brand"
                            src="images/brands/small/brand3.png"
                            width="100%"
                            height={ 50 }
                            threshold={ 500 }
                            effect="black and white"
                        />
                    </figure>

                    <figure>
                        <LazyLoadImage
                            alt="brand"
                            src="images/brands/small/brand4.png"
                            width="100%"
                            height={ 50 }
                            threshold={ 500 }
                            effect="black and white"
                        />
                    </figure>

                    <figure>
                        <LazyLoadImage
                            alt="brand"
                            src="images/brands/small/brand5.png"
                            width="100%"
                            height={ 50 }
                            threshold={ 500 }
                            effect="black and white"
                        />
                    </figure>

                    <figure>
                        <LazyLoadImage
                            alt="brand"
                            src="images/brands/small/brand6.png"
                            width="100%"
                            height={ 50 }
                            threshold={ 500 }
                            effect="black and white"
                        />
                    </figure>

                    <figure>
                        <LazyLoadImage
                            alt="brand"
                            src="images/brands/small/brand3.png"
                            width="100%"
                            height={ 50 }
                            threshold={ 500 }
                            effect="black and white"
                        />
                    </figure>
                </OwlCarousel >
            </Reveal>
        </div>
    );
}

export default React.memo( BrandSection );