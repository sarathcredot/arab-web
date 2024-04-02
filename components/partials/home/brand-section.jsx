import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { gql, useMutation, useQuery } from "@apollo/client";


// Import Cusom Component
import OwlCarousel from '../../features/owl-carousel';

// Import Settigns
import { brandSlider } from '../../../utils/data/slider';
import { fadeIn } from '../../../utils/data/keyframes';

const GET_ALL_BRANDS = gql`query GetAllTopBrandRecords($input: BrandRecordsFilter) {
    getAllTopBrandRecords(input: $input) {
      maxRecords
      message
      records {
        brandName
        _id
        logo {
            fileType
            fileURL
            mimeType
            originalName        }
      }
    }
  }`;

function BrandSection() {
    const { data: brndData } = useQuery(GET_ALL_BRANDS);
    return (
        <div className="brands-section mt-2 mb-3">
            <Reveal keyframes={fadeIn} delay={200} duration={500} triggerOnce>
                <div className="headding">
                    <h4 className="section-title text-transform-none">Top Brands</h4>
                </div>

                <OwlCarousel adClass="brands-slider bg-white nav-circle images-center" options={brandSlider}>

                    {
                        brndData && brndData.getAllTopBrandRecords.records.map((brand, index) => (
                            <figure key={index}>
                                <LazyLoadImage
                                    alt={brand.brandName}
                                    src={brand.logo.fileURL}
                                    width="100%"
                                    height={50}
                                    threshold={500}
                                    effect="black and white"
                                />
                            </figure>
                        ))
                    }


                </OwlCarousel >
            </Reveal>
        </div>
    );
}

export default React.memo(BrandSection);