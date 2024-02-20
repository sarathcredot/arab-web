// import { useQuery } from "@apollo/react-hooks";

// Import Apollo Server and Query
import withApollo from "../server/apollo";
import { GET_HOME_DATA } from "../server/queries";

// Import Custom Component
import BrandSection from "../components/partials/home/brand-section";
import CategorySection from "../components/partials/home/category-section";
import CategoryFilterSection from "../components/partials/home/category-filter-section";
import HomeSection from "../components/partials/home/home-section";
import NewsletterModal from "../components/features/modals/newsletter-modal";
import PromoSection from "../components/partials/home/promo-section";
import InfoSection from "../components/partials/home/info-section";
import BannerSection from "../components/partials/home/banner-section";
import DealSection from "../components/partials/home/deal-section";
import ElectronicCollection from "../components/partials/home/electronic-collection";
import GiftCollection from "../components/partials/home/gift-collection";
import GardenCollection from "../components/partials/home/garden-collection";
import SelectedCollection from "../components/partials/home/selected-collection";
import RecentCollection from "../components/partials/home/recent-collection";
import TopBrand from "../components/partials/home/top-brand";
import Footerbanner from "../components/partials/home/footerbanner";
import AppleProducts from "../components/partials/home/apple-products"
import MainMenu from "../components/common/partials/main-menu"
import { useQuery, gql, useMutation } from "@apollo/react-hooks";

export const CMS=gql`query GetAllCmsRecords($input: CmsRecordsFilter) {
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
}`

function Home() {
  const { data, loading, error } = useQuery(CMS)
  console.log(data);
  //   variables: { productsCount: 15 },
  // });
  // const bestSelling = data && data?.specialProducts?.bestSelling;
  // const electronic = data && data?.electronic?.data;
  // const giftAndGadgets = data && data?.giftAndGadgets?.data;
  // const latest = data && data?.specialProducts?.latest;
  // const topRated = data && data?.specialProducts?.topRated;

  // if (error) {
  //   return <div>{error.message}</div>;
  // }
  

  return (
    <>
      <main className="home">
        <div style={{position:"relative"}}>

      <div className="header-bottom d-flex"  
      style={{zIndex:"99",position:"absolute",width:"100%" ,
     }}
      >
          <div className="container"style={{marginBottom:"-15px"}}>
            <div >

            <MainMenu />
            </div>
          </div>
        </div>
        <div className="homebannerpadding"
        // style={{paddingTop:"53px"}}
        // className="bg-gray"
        >
          <HomeSection className="pb-5" data={data}/>
        </div>

        </div>
        <div
          className={`container skeleton-body skel-shop-products pt-5 ${
            false ? "" : "loaded"
          }`}
        >
          <BannerSection  data={data}/>

          <DealSection 
          // products={bestSelling
          // }
           />
        </div>
        <TopBrand data={data}/>

        <div
          className={`bg-gray skeleton-body skel-shop-products ${
            false ? "" : "loaded"
          }`}
        >
          <ElectronicCollection  />

          {/* <RecentCollection bestSelling={bestSelling} /> */}
        </div>
        {/* <CategoryFilterSection /> */}
  {/* <AppleProducts products={bestSelling}/> */}
        <Footerbanner data={data}/>
      </main>

      {/* <NewsletterModal /> */}
    </>
  );
}

export default withApollo({ ssr: typeof window === "undefined" })(Home);
