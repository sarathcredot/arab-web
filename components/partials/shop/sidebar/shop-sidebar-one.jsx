import SlideToggle from "react-slide-toggle";
import InputRange from "react-input-range";
import StickyBox from "react-sticky-box";
import Tree from "rc-tree";
import { useRouter } from "next/router";
import { useState, useEffect, useMemo } from "react";
import { useQuery, gql } from "@apollo/react-hooks";
// Import Apollo Server and Query
import withApollo from "../../../../server/apollo";
import { GET_SHOP_SIDEBAR_DATA } from "../../../../server/queries";

// Import Custom Component
import ALink from "../../../common/ALink";

// Import Utils
import { shopColors, shopBrands } from "../../../../utils/data/shop";

const GET_ATTRIBUTE = gql`
  query Query($input: AttributesDetailsWithCategoryIdInput!) {
    getAttributesDetailsByCategory(input: $input) {
      message
      record {
        _id
        categoryName
        attributes {
          _id
          attributeType
          attributeValues {
            value
            _id
          }
          name
          description
        }
      }
    }
  }
`;

export const BRAND_LISTING = gql`
  query GetBrandDetailsWithCategory($input: BrandsDetailsWithCategoryIdInput!) {
    getBrandDetailsWithCategory(input: $input) {
      message
      records {
        _id
        brandName
        logo {
          fileType
          originalName
          fileURL
        }
        isPopular
        priority
      }
    }
  }
`;
export const MAX_PRICE = gql`
  query GetProductsMaxPrice($input: categoriesInput!) {
    getProductsMaxPrice(input: $input) {
      maxPrice
      message
    }
  }
`;
const TreeNode = (props) => {
  return (
    <>
      {props.name}
      <span className="products-count">({props.count})</span>
    </>
  );
};

function ShopSidebarOne(props) {
  const router = useRouter();
  const query = router.query;
  // const queryString = query?.cat_id;
  // const parts = queryString ? queryString.split("?") : [];
  const catId = query?.cat_id;
  const brand = query?.brand;
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [sortOrder, setSortOrder] = useState('Price Low-High');
  const [selectedAttributeValues, setSelectedAttributeValues] = useState([]);
  console.log(query);
  const { data, loading, error } = useQuery(GET_SHOP_SIDEBAR_DATA, {
    variables: { input: { parent: catId } },
  });

  console.log(data);
  //maxprice value getting
  const {
    data: maxPriceData,
    loading: priceLoading,
    priceError,
  } = useQuery(MAX_PRICE, { variables: { input: { categories: [catId] } } });
  console.log(maxPriceData);
  const maxpricevalue = maxPriceData?.getProductsMaxPrice?.maxPrice
    ? maxPriceData?.getProductsMaxPrice?.maxPrice
    : 1000;
  console.log(data);
  const {
    data: attributeData,
    loading: attributeLoading,
    error: attributeError,
  } = useQuery(GET_ATTRIBUTE, {
    variables: { input: { categoryId: catId } },
  });
  const {
    data: brandData,
    loading: brandloading,
    error: branderror,
  } = useQuery(BRAND_LISTING, {
    variables: { input: { categoryId: catId } },
  });

  const [priceRange, setRange] = useState({ min: 0, max: 1000 });
  
  //   let cats = data?.getActiveChildCategories?.records || [];

  //   let stack = [],
  //     result = [];
  //   result = cats.reduce((acc, cur) => {
  //     console.log(acc);
  //     if (!cur.parent) {
  //       let newNode = {
  //         key: cur._id,
  //         title: <TreeNode name={cur.categoryName} count={cur.count} />,
  //         children: [],
  //       };
  //       acc.push(newNode);
  //       stack.push({
  //         name: cur.categoryName,
  //         children: newNode.children,
  //       });
  //     }
  //     return acc;
  //    },
  //   []);

  //   let temp, children, childNode;

  //   while (stack.length) {
  //     temp = stack[stack.length - 1];
  //     stack.pop();
  //     children = cats.filter((item) => item.parent === temp.name);
  //     children.forEach((child) => {
  //       childNode = {
  //         key: child.slug,
  //         title: <TreeNode name={child.name} count={child.count} />,
  //         children: [],
  //       };
  //       temp.children.push(childNode);
  //       stack.push({
  //         name: child.name,
  //         children: childNode.children,
  //       });
  //     });
  //   }

  //   return result;
  // }, [data]);

  useEffect(() => {
    return () => {
      closeSidebar();
    };
  }, []);

  useEffect(() => {
    if (query.min_price && query.max_price) {
      setRange({
        min: parseInt(query.min_price),
        max: parseInt(query.max_price),
      });
    } else {
      setRange({ min: 0, max: maxpricevalue });
    }
  }, [query, maxpricevalue]);

  useEffect(() => {
    // Extract brand ID from the URL
    console.log("click");
    const brandId = props.brand;
    console.log(brandId);
    console.log(brandData);
    // Check the brand corresponding to the brand ID in the URL
    if (brandId && brandData?.getBrandDetailsWithCategory?.records) {
      const brandName = brandData.getBrandDetailsWithCategory.records.find(
        (item) => item._id === brandId
      )?.brandName;

      if (brandName) {
        console.log("click");
        setSelectedBrands([brandName]);
      }
    }
  }, [brandData]);

  const handleBrandCheckboxChange = (brandName) => {
    console.log(selectedBrands);
    // Toggle the selected state of the brand
    if (selectedBrands.includes(brandName)) {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== brandName));
    } else {
      setSelectedBrands([...selectedBrands, brandName]);
    }
  };

  function filterByCategory(selected) {
    console.log(selected);
    router.push(
      router.pathname.replace("[grid]", query.grid) +
        "?category=" +
        (selected.length ? selected[0] : "")
    );
  }

  function onChangePriceRange(value) {
    setRange(value);
  }

  function containsAttrInUrl(type, value) {
    const currentQueries = query[type] ? query[type].split(",") : [];
    return currentQueries && currentQueries.includes(value);
  }

  function getUrlForAttrs(type, value) {
    let currentQueries = query[type] ? query[type].split(",") : [];
    currentQueries = containsAttrInUrl(type, value)
      ? currentQueries.filter((item) => item !== value)
      : [...currentQueries, value];
    return currentQueries.join(",");
  }

  function filterByPrice(e) {
    e.preventDefault();
    const searchParams = router.query;
    const newSearchparams = {
      ...searchParams,
      max_price: priceRange.max,
      min_price: priceRange.min,
    };
    router.replace({ pathname: router.pathname, query: newSearchparams });
  }

  function handleSortOrderChange(e) {
    console.log(e);
    const selectedSortOrder = e.target.value;
    setSortOrder(selectedSortOrder);
    const searchParams = router.query;
    const newSearchParams = {
        ...searchParams,
        sort_order: selectedSortOrder
    };
    router.replace({ pathname: router.pathname, query: newSearchParams });
}

function filterByDiscount(selectedDiscount) {
  console.log(selectedDiscount);
  const query = router.query;
  router.push({
    pathname: router.pathname,
    query: {
      ...query,
      discount: selectedDiscount,
      page: 0, // Reset page to 0 when applying filters
    },
  });
}

  function closeSidebar() {
    document.querySelector("body").classList.contains("sidebar-opened") &&
      document.querySelector("body").classList.remove("sidebar-opened");
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div className="sidebar-overlay" onClick={closeSidebar}></div>

      <aside
        className={`sidebar-shop col-lg-3 pb-lg-3 mobile-sidebar skeleton-body skel-shop-products ${
          !loading ? "loaded" : ""
        } ${props.display === "none" ? "d-lg-none" : ""} ${
          props.right ? "" : "order-lg-first"
        }`}
        style={{
          paddingLeft: "0",
          paddingRight: "0",
          maxHeight: "650px",
          overflow: "scroll",
        }}
      >
        <StickyBox className="sidebar-wrapper" offsetTop={0}>
          <div className="widget" style={{ padding: "0" }}>
            {loading ? (
              <div className="skel-widget"></div>
            ) : (
              <SlideToggle>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <>
                    <h3
                      className="widget-title"
                      style={{
                        borderBottom: "1px solid",
                        borderColor: "#DDDDDD",
                        width: "298px",
                        marginLeft: "0px",
                        paddingBottom: "20px",
                      }}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault(), onToggle();
                        }}
                        className={
                          toggleState === "COLLAPSED" ? "collapsed" : ""
                        }
                        style={{ marginLeft: "20px", marginTop: "20px" }}
                      >
                        Categories
                      </a>
                    </h3>
                    <div
                      className="overflow-hidden"
                      ref={setCollapsibleElement}
                    >
                      <div className="widget-body pb-4 m-4">
                        <ul>
                          {data &&
                          data?.getActiveChildCategories?.records.length > 0 ? (
                            data?.getActiveChildCategories?.records?.map(
                              (category, index) => (
                                <li key={`category-${index}`}>
                                  <ALink
                                    className="custom-categorylabels"
                                    href={{
                                      query: {
                                        ...query,
                                        page: 0,
                                        category: getUrlForAttrs(
                                          "category",
                                          category._id
                                        ),
                                      },
                                    }}
                                    scroll={false}
                                    style={
                                      containsAttrInUrl(
                                        "category",
                                        category?._id
                                      )
                                        ? { color: "red" }
                                        : {}
                                    }
                                  >
                                    {category?.categoryName}
                                  </ALink>
                                </li>
                              )
                            )
                          ) : (
                            <li>No categories</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </SlideToggle>
            )}
          </div>

          {(query.category || query.page||
            query.sizes ||
            query.colors ||
            query.min_price ||
            query.max_price) || query.discount ? (
            <div className="widget">
              <ALink
                href={{ query: { cat_id: query.cat_id } }}
                //  href={{ query: { grid: query.grid } }}
                scroll={false}
                className="btn btn-primary reset-filter"
              >
                Reset All Filters
              </ALink>
            </div>
          ):""}
          {/* )} */}
          <div className="widget widget-brand">
            {loading ? (
              <div className="skel-widget"></div>
            ) : (
              <SlideToggle>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <>
                    {brandData &&
                    brandData?.getBrandDetailsWithCategory?.records.length >
                      0 ? (
                      <h3 className="widget-title">
                        <a
                          className={
                            toggleState === "COLLAPSED" ? "collapsed" : ""
                          }
                          href="#"
                          onClick={(e) => {
                            e.preventDefault(), onToggle();
                          }}
                        >
                          Brand
                        </a>
                      </h3>
                    ) : (
                      ""
                    )}
                    <div
                      className="overflow-hidden"
                      ref={setCollapsibleElement}
                    >
                      <div className="widget-body pb-0">
                        <ul className="cat-list">
                          {brandData?.getBrandDetailsWithCategory?.records?.map(
                            (item, index) => (
                              <li
                                // className={
                                //   containsAttrInUrl("brands", item.category)
                                //     ? "active"
                                //     : ""
                                // }
                                // key={`brands-${index}`}
                              >
<ALink
                                    href={{
                                      query: {
                                        ...query,
                                        page: 0,
                                        brands: getUrlForAttrs(
                                          "brands",
                                          item._id
                                        ),
                                      },
                                    }}
                                    key={`brands-${index}`}
                                   

                                    scroll={false}
                                    
                                  >
                                <label htmlFor={item.brandName}  style={
                                      containsAttrInUrl(
                                        "brands",
                                        item._id
                                      )
                                        ? { color: "red",fontWeight:"500" }
                                        : {color:"inherit",fontWeight:"500"}
                                    }>
                                  <input
                                    id={item.brandName}
                                    type="checkbox"
                                    checked={query?.brands?.includes(item._id)}
                                    onChange={() =>
                                      handleBrandCheckboxChange(item.brandName)
                                    }
                                    style={{ marginRight: "5px" }}
                                  />
                                  
                                    {item.brandName}
                                </label>
                                  </ALink>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </SlideToggle>
            )}
          </div>


          {/* sort */}
          <div className="widget widget-brand">
            {loading ? (
              <div className="skel-widget"></div>
            ) : (
              <SlideToggle>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <>
                   
                      <h3 className="widget-title">
                        <a
                          className={
                            toggleState === "COLLAPSED" ? "collapsed" : ""
                          }
                          href="#"
                          onClick={(e) => {
                            e.preventDefault(), onToggle();
                          }}
                        >
                          Sort
                        </a>
                      </h3>
                   
                    <div
                      className="overflow-hidden"
                      ref={setCollapsibleElement}
                    >
                      <div className="widget-body pb-0">
                        <ul className="cat-list">
                          
                              <li>
                            <input type="radio" id="lowToHigh" name="fav_language" value="lowToHigh"onChange={handleSortOrderChange}/>
<label for="lowToHigh"
 style={{
  color: query.sort_order === 'lowToHigh' ? "red" : "inherit", 
  fontWeight: "500"
}}
> &nbsp;Price Low- High</label>


                               
                              </li>
                              <li>
                                 <input type="radio" id="highToLow" name="fav_language" value="highToLow" onChange={handleSortOrderChange}/>
 <label for="highToLow" 
  style={{
    color: query.sort_order === 'highToLow' ? "red" : "inherit", 
    fontWeight: "500"
  }}
 > &nbsp;Price High-Low</label>
                                
                              </li>
                           
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </SlideToggle>
            )}
          </div>

          {/* discount */}
          <div className="widget widget-brand">
            {loading ? (
              <div className="skel-widget"></div>
            ) : (
              <SlideToggle>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <>
                   
                      <h3 className="widget-title">
                        <a
                          className={
                            toggleState === "COLLAPSED" ? "collapsed" : ""
                          }
                          href="#"
                          onClick={(e) => {
                            e.preventDefault(), onToggle();
                          }}
                        >
                          Discount
                        </a>
                      </h3>
                   
                    <div
                      className="overflow-hidden"
                      ref={setCollapsibleElement}
                    >
                      <div className="widget-body pb-0">
                        <ul className="cat-list">
                          
                              <li>
<label  onClick={() => filterByDiscount('10%')}
  style={{
    color: query.discount === '10%' ? "red" : "inherit", // Apply red color if selected, otherwise use default color
    fontWeight: "500"
  }}
 > 
 10% off or more</label>


                               
                              </li>
                              <li>
 <label   onClick={() => filterByDiscount('25%')}
 style={{
  color: query.discount === '25%' ? "red" : "inherit", 
  fontWeight: "500"
}}
  >25% off or more</label>
                                
                              </li>
                              <li>
 <label  onClick={() => filterByDiscount('50%')}
  style={{
    color: query.discount === '50%' ? "red" : "inherit", 
    fontWeight: "500"
  }}> 50% off or more</label>
                                
                              </li>
                              <li>
 <label   onClick={() => filterByDiscount('75%')}
  style={{
    color: query.discount === '75%' ? "red" : "inherit", 
    fontWeight: "500"
  }}
 >75% off or more</label>
                                
                              </li>
                           
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </SlideToggle>
            )}
          </div>


         
         
          <div
            className="widget widget-price overflow-hidden"
            style={{ padding: "0" }}
          >
            {loading ? (
              <div className="skel-widget"></div>
            ) : (
              <SlideToggle>
                {({ onToggle, setCollapsibleElement, toggleState }) => (
                  <>
                    <h3
                      className="widget-title"
                      style={{
                        borderBottom: "1px solid",
                        borderColor: "#DDDDDD",
                        width: "298px",
                        marginLeft: "0px",
                        paddingBottom: "20px",
                      }}
                    >
                      <a
                        className={
                          toggleState === "COLLAPSED" ? "collapsed" : ""
                        }
                        href="#"
                        role="button"
                        onClick={(e) => {
                          e.preventDefault(), onToggle();
                        }}
                        style={{ marginLeft: "20px", marginTop: "20px" }}
                      >
                        Price
                      </a>
                    </h3>

                    <div ref={setCollapsibleElement}>
                      <div
                        className="widget-body pb-2"
                        style={{ padding: "20px" }}
                      >
                        <form action="#">
                          <div className="price-slider-wrapper">
                            <InputRange
                              maxValue={maxpricevalue}
                              minValue={0}
                              step={50}
                              value={priceRange}
                              onChange={onChangePriceRange}
                            />
                          </div>

                          <div className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                            <div
                              className="filter-price-text"
                              style={{
                                fontFamily: "Poppins",
                                fontWeight: "500px",
                                fontSize: "12px",
                              }}
                            >
                              Price:{" "}
                              <span id="filter-price-range">
                                OMR {priceRange.min} &mdash; {priceRange.max}
                              </span>
                            </div>

                            <button
                              type="button"
                              className="btn "
                              style={{
                                backgroundColor: "black",
                                color: "white",
                              }}
                              onClick={(e) => filterByPrice(e)}
                            >
                              Filter
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </>
                )}
              </SlideToggle>
            )}
          </div>

          {/* conditional */}
          {attributeData?.getAttributesDetailsByCategory?.record.attributes
            .length > 0 &&
            attributeData?.getAttributesDetailsByCategory?.record?.attributes?.map(
              (attri, index) => {
                console.log(attri);

                let attributeComponent;

                // Check attribute type and render the appropriate component
                if (attri.attributeType === "COLOR") {
                  attributeComponent = (
                    <div
                      className="widget widget-color"
                      style={{ padding: "0" }}
                    >
                      {loading ? (
                        <div className="skel-widget"></div>
                      ) : (
                        <SlideToggle>
                          {({
                            onToggle,
                            setCollapsibleElement,
                            toggleState,
                          }) => (
                            <>
                              <div>
                                <h3
                                  className="widget-title"
                                  style={{
                                    borderBottom: "1px solid",
                                    borderColor: "#DDDDDD",
                                    width: "298px",
                                    marginLeft: "0px",
                                    paddingBottom: "20px",
                                  }}
                                >
                                  <a
                                    className={
                                      toggleState === "COLLAPSED"
                                        ? "collapsed"
                                        : ""
                                    }
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      onToggle();
                                    }}
                                    style={{
                                      marginLeft: "20px",
                                      marginTop: "20px",
                                    }}
                                  >
                                    {attri?.description}
                                  </a>
                                </h3>
                              </div>
                              <div
                                className="overflow-hidden"
                                ref={setCollapsibleElement}
                              >
                                <div className="widget-body pb-4">
                                  <ul
                                    className="config-swatch-list"
                                    style={{
                                      width: "359px",
                                      height: "48px",
                                      gap: "2px",
                                      padding: "20px",
                                    }}
                                  >
                                    {attri?.attributeValues.map(
                                      (item, index) => (
                                        <li
                                          className={
                                            containsAttrInUrl(
                                              [attri?._id],
                                              item?._id
                                            )
                                              ? "active"
                                              : ""
                                          }
                                          key={`${attri?._id}-${index}`}
                                          style={{
                                            width: "38px",
                                            height: "38px",
                                          }}
                                        >
                                          <ALink
                                            href={{
                                              query: {
                                                ...query,
                                                page: 0,
                                                [attri?._id]: getUrlForAttrs(
                                                  attri?._id,
                                                  item._id
                                                ),
                                              },
                                            }}
                                            style={{
                                              backgroundColor: item?.value,
                                              borderRadius: "50%",
                                            }}
                                            scroll={false}
                                          ></ALink>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </>
                          )}
                        </SlideToggle>
                      )}
                    </div>
                  );
                } else {
                  attributeComponent = (
                    <div
                      className="widget widget-normal"
                      style={{ padding: "0" }}
                    >
                      {loading ? (
                        <div className="skel-widget"></div>
                      ) : (
                        <SlideToggle>
                          {({
                            onToggle,
                            setCollapsibleElement,
                            toggleState,
                          }) => (
                            <>
                              <div>
                                <h3
                                  className="widget-title"
                                  style={{
                                    borderBottom: "1px solid",
                                    borderColor: "#DDDDDD",
                                    width: "298px",
                                    marginLeft: "0px",
                                    paddingBottom: "20px",
                                  }}
                                >
                                  <a
                                    className={
                                      toggleState === "COLLAPSED"
                                        ? "collapsed"
                                        : ""
                                    }
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      onToggle();
                                    }}
                                    style={{
                                      marginLeft: "20px",
                                      marginTop: "20px",
                                    }}
                                  >
                                    {attri?.description}
                                  </a>
                                </h3>
                              </div>
                              <div
                                className="overflow-hidden"
                                ref={setCollapsibleElement}
                              >
                                {/* design */}
                                <div style={{ padding: "10px" }}>
                                 <div
                                    style={{
                                      display: "flex",
                                      flexWrap: "wrap",
                                      maxWidth: "286px",
                                    }}
                                  >
                                    {attri?.attributeValues.length>0 && attri?.attributeValues?.map((attriValues, index)=>{
const attriId = attri?._id;
const selectedIds =
  query[attriId]?.split(",") || [];
const isActive = selectedIds.includes(
  attriValues._id
);
return(
  <ALink
                                              className="custom-categorylabels"
                                              href={{
                                                query: {
                                                  ...query,
                                                  page: 0,
                                                  [attri?._id]: getUrlForAttrs(
                                                    attri?._id,
                                                    attriValues._id
                                                  ),
                                                },
                                              }}
                                              key={`${attri?._id}-${index}`}
                                              scroll={false}
                                              style={
                                                containsAttrInUrl(
                                                  attri?._id,
                                                  attriValues._id
                                                )
                                                  ? { color: "red" }
                                                  : {}
                                              }
                                            >
<div
                                      style={{
                                        border: "1px solid rgb(220, 220, 220)",
                                        padding: "10px",
                                      }}
                                    >
                                      {attriValues.value}
                                    </div>
                                    </ALink>

)
                                    
                                    })}
                                    
                                  </div>
                                </div>
                               
                              </div>
                            </>
                          )}
                        </SlideToggle>
                      )}
                    </div>
                  );
                }

                return <div key={index}>{attributeComponent}</div>;
              }
            )}
        </StickyBox>
      </aside>
    </>
  );
}

export default withApollo({ ssr: typeof window === "undefined" })(
  ShopSidebarOne
);
