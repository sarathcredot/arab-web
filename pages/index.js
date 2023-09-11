import { useQuery } from "@apollo/react-hooks";

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

function Home() {
  const { data, loading, error } = useQuery(GET_HOME_DATA, {
    variables: { productsCount: 15 },
  });
  const bestSelling = data && data.specialProducts.bestSelling;
  const electronic = data && data.electronic.data;
  const giftAndGadgets = data && data.giftAndGadgets.data;
  const latest = data && data.specialProducts.latest;
  const topRated = data && data.specialProducts.topRated;

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <main className="home">
        <div className="bg-gray">
          <HomeSection className="pb-5" />
          {/* <div className="container pb-3">
            <CategorySection />*round category section

            <PromoSection />
          </div> */}
        </div>

        <div
          className={`container skeleton-body skel-shop-products pt-5 ${
            loading ? "" : "loaded"
          }`}
        >
          {/* <InfoSection /> free shilping and return section*/}

          <BannerSection />

          <DealSection products={bestSelling} />
          <TopBrand />
        </div>

        <CategoryFilterSection />

        <div
          className={`bg-gray skeleton-body skel-shop-products ${
            loading ? "" : "loaded"
          }`}
        >
          <div className="container">
            <ElectronicCollection products={electronic} />
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
            />
            <RecentCollection bestSelling={bestSelling} />
          </div>
        </div>
      </main>

      <NewsletterModal />
    </>
  );
}

export default withApollo({ ssr: typeof window === "undefined" })(Home);
