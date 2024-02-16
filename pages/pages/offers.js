import React from "react";
import ElectronicCollection from "../../components/partials/home/electronic-collection";
import GiftCollection from "../../components/partials/home/gift-collection";
import GardenCollection from "../../components/partials/home/garden-collection";
import SelectedCollection from "../../components/partials/home/selected-collection";
import RecentCollection from "../../components/partials/home/recent-collection";
import NewsletterModal from "../../components/features/modals/newsletter-modal";
import CategoryFilterSection from "../../components/partials/home/category-filter-section";
import DealSection from "../../components/partials/home/deal-section";
import BannerSection from "../../components/partials/home/banner-section";
// import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query

import withApollo from "../../server/apollo";
// import { GET_HOME_DATA } from "../../server/queries";
import HomeSection from "../../components/partials/home/home-section";
import BrandSection from "../../components/partials/home/brand-section";
import { gql, useQuery } from "@apollo/client";
import MainMenu from "../../components/common/partials/main-menu";

const GET_PRODUCTS = gql`
  query GetProducts($input: ProductFilters) {
    getProducts(input: $input) {
      maxRecords
      records {
        _id
        attributes {
          attributeValue
          attributeName
        }
        brandId
        brandName
        categoryId
        categoryIdPath
        categoryNamePath
        description
        images {
          fileURL
          originalName
          fileType
        }
        material
        mrp
        offerPrice
        price
        productCode
        productInfo
        productName
        productShortInfo
        rating
        sellingPrice
        shortDescription
        skuId
        status
        stock
        tags
        vendorId
        isBlocked
      }
    }
  }
`;

export const CMS = gql`
  query GetAllCmsRecords($input: CmsRecordsFilter) {
    getAllCmsRecords(input: $input) {
      records {
        _id
        images {
          fileType
          fileURL
          originalName
        }
        sectionName
        pageName
      }
    }
  }
`;
function offers() {
  // const { data, loading, error } = useQuery(GET_HOME_DATA, {
  //   variables: { productsCount: 15 },
  // });
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  const bestSelling = data && data?.getProducts?.records;
  // const electronic = data && data?.electronic?.data;
  // const giftAndGadgets = data && data?.giftAndGadgets?.data;
  // const latest = data && data?.specialProducts?.latest;
  // const topRated = data && data?.specialProducts?.topRated;

  // if (error) {
  //   return <div>{error.message}</div>;
  // }
  // console.log(bestSelling)

 
  const { data: cmsData } = useQuery(CMS);

  
  
  return (
    <>
      <main className="home" style={{ marginTop: "-10px" }}>
      <div className="header-bottom d-flex">
          <div className="container">
            <MainMenu />
          </div>
        </div>
        <div className="bg-gray">
          <HomeSection data={cmsData} />
          
        </div>

        <div className={`container skeleton-body skel-shop-products `}>
          {/* <InfoSection /> free shilping and return section*/}

          {/* <DealSection products={bestSelling} /> */}
          <BannerSection data={cmsData} />

          {/* <TopBrand /> */}
        </div>

        {/* <CategoryFilterSection />  */}

        <div className={`bg-gray skeleton-body skel-shop-products`}>
          <div
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              backgroundColor: "white",
              marginTop: "67px",
            }}
          >
            <img
              src="images\banners\offersBanner2.svg"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
           
          {/* <div className="container" style={{height:"20000px"}}>
            {/* <ElectronicCollection products={electronic} />
            <GiftCollection products={giftAndGadgets} />
            <GardenCollection
              latest={latest}
              bestSelling={bestSelling}
              topRated={topRated}
              loading={loading}
            />
            <BrandSection />
            <SelectedCollection
              latest={latest}
              bestSelling={bestSelling}
              topRated={topRated}
            /> */}


            
          {/* </div> */}
        </div>
        <div className="container">
        <RecentCollection bestSelling={bestSelling} />
        </div>
        
        <div
          style={{
            width: "100%",
            maxWidth: "100%",
            height: "auto",
            backgroundColor: "white",
            marginTop: "40px",
          }}
        >
          <img
            src="images\banners\offerBanner2.svg"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
      </main>

      {/* <NewsletterModal /> */}
    </>
  );
}

export default withApollo({ ssr: typeof window === "undefined" })(offers);
