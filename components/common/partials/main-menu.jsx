import { withRouter } from "next/router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuery } from "@apollo/react-hooks";
import React, { useState } from "react";
// Import Apollo Server
import withApollo from "../../../server/apollo";
import { GET_HOME_DATA } from "../../../server/queries";
// Import Custom Component
import ALink from "../ALink";
import ProductCountdown from "../../features/product-countdown";
import OwlCarousel from "../../features/owl-carousel";
import ProductThree from "../../features/products/product-three";
import { AiOutlineArrowLeft } from "react-icons/ai";
// Import Utils
import { mainMenu } from "../../../utils/data/menu";

function MainMenu({ router }) {
  const [parentcategory, setParentcategory] = useState({
    cat1: "",
    cat2: "",
    cat3: "",
    cat4: "",
    cat5: "",
  });
  const [activeItem, setActiveItem] = useState("");
  const [activeItem2, setActiveItem2] = useState("");
  const [activeItem3, setActiveItem3] = useState("");
  const [activeItem4, setActiveItem4] = useState("");
  const [activeItem5, setActiveItem5] = useState("");
  const pathname = router.pathname;
  const { data, loading, error } = useQuery(GET_HOME_DATA, {
    variables: { productsCount: 10, postsCount: 6 },
  });

  const featured = data && data?.specialProducts?.featured;

  // if (error) {
  //   return <div>{error?.message}</div>;
  // }

  function isOtherPage() {
    return mainMenu.other.find((variation) => variation.url === pathname);
  }

  function activeHandler(e) {
    e.preventDefault();
    document.querySelector("body").classList.toggle("mmenu-depart-active");
    e.currentTarget.querySelector(".menu-depart").classList.toggle("opened");
  }

  const movebackward = () => {
    const array = Object.entries(parentcategory);
    console.log(array);

    let index = array?.findIndex((item) => item[1] === "");
    if (index === -1) {
      index = array.length;
    }
    const element = array[index - 1][0];
    console.log(element);
    setParentcategory((e) => ({ ...e, [element]: "" }));
  };
  const mainNav = [
    { key: "mobile", label: "Mobiles", icon: "images/mobile.svg" },
    { key: "tablets", label: "Tablets", icon: "images/mobile.svg" },
    { key: "smartwatches", label: "Smart Watches", icon: "images/mobile.svg" },
    { key: "monitor", label: "Monitor", icon: "images/mobile.svg" },
    { key: "audio", label: "Audio", icon: "images/mobile.svg" },
    { key: "gaming", label: "Gaming", icon: "images/mobile.svg" },
    { key: "accessories", label: "Accessories", icon: "images/mobile.svg" },
    { key: "powerbank", label: "Power bank", icon: "images/mobile.svg" },
    { key: "peripheerals", label: "It Peripherals", icon: "images/mobile.svg" },
    { key: "scanner", label: "Scanner", icon: "images/mobile.svg" },
    { key: "laptop", label: "Laptop", icon: "images/mobile.svg" },
  ];

  const child1 = [
    { key: "printers", label: "Printers" },
    { key: "laptop", label: "Laptop Battery" },
    { key: "cpu", label: "CPU Cabinet" },
    { key: "ram", label: "RAM" },
    { key: "monitor", label: "Monitor" },
    { key: "smps", label: "SMPS" },
    { key: "cartridge", label: "Cartridge" },
    { key: "keyboard", label: "Keyboard" },
    { key: "mouse", label: "Mouse" },
    { key: "scanner", label: "Scanner" },
  ];
  const child2 = [
    { key: "laptop", label: "Laptop" },
    { key: "desktop", label: "Desktop" },
  ];
  const varient = [
    { key: "ddr1", label: "DDR 1" },
    { key: "ddr2", label: "DDR 2" },
    { key: "ddr3", label: "DDR 3" },
    { key: "ddr4", label: "DDR 4" },
  ];
  const brand = [
    {
      key: "seagate",
      label: "Seagate",
      icon: "images/seagate.svg",
    },
    {
      key: "sandisk",
      label: "Sandisk",
      icon: "images/seagate.svg",
    },
    {
      key: "samsung",
      label: "Sumsung",
      icon: "images/seagate.svg",
    },
    { key: "thoshiba", label: "Toshiba", icon: "images/seagate.svg" },
    {
      key: "wd",
      label: "WD",
      icon: "images/seagate.svg",
    },
    {
      key: "crucial",
      label: "Crucial",
      icon: "images/seagate.svg",
    },
    {
      key: "others",
      label: "Others",
      icon: "images/seagate.svg",
    },
  ];
  return (
    <>
      <nav
        className={`w-100 skeleton-body skel-shop-products ${
          !loading ? "loaded" : ""
        }`}
      >
        <ul className="custom__menu w-100">
          {mainNav.map((item) => (
            <li
              key={item.key}
              className={`custom__menu__item px-2 ${
                item.key === parentcategory.cat1 ? "activate" : ""
              }`}
              onClick={() => {
                setParentcategory((e) => ({
                  cat1: item.key,
                  cat2: "",
                  cat3: "",
                  cat4: "",
                  cat5: "",
                }));
              }}
            >
              <span className="custom__menu__item-image">
                <img src={item.icon} alt={item.label} />
              </span>
              <p className="custom__menu__item-label">{item.label}</p>
            </li>
          ))}
        </ul>

        {/* mobile responsive menu */}
        <ul className="custom__mobilemenu w-100">
          {mainNav.map((item) => (
            <li
              className="custom__mobilemenu__item"
              onClick={() => {
                setParentcategory((e) => ({
                  cat1: item.key,
                  cat2: "",
                  cat3: "",
                  cat4: "",
                  cat5: "",
                }));
              }}
            >
              <div className="custom__mobilemenu__item-circle">
                <span className="custom__mobilemenu__item-image">
                  <img src={item.icon} alt={item.label} />
                </span>
              </div>
              <p>{item.label}</p>
            </li>
          ))}
        </ul>

        {parentcategory?.cat2 ? (
          <BackArrow movebackward={movebackward} />
        ) : null}

        {parentcategory?.cat1 ? (
          <ul
            className={`custom__menufirstchild w-100 ${
              parentcategory.cat2 ? "active_container_hidden" : ""
            }`}
          >
            {child1?.map((item) => (
              <li
                key={item.key}
                className={`custom__menufirstchild__item px-2 ${
                  item.key === parentcategory.cat2 ? "customactive" : ""
                }`}
                onClick={() => {
                  console.log("click");
                  setParentcategory((e) => ({
                    ...e,
                    cat2: item.key,
                    cat3: "",
                    cat4: "",
                    cat5: "",
                  }));
                }}
              >
                <p className="custom__menufirstchild__item-label">
                  {item?.label}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
        {parentcategory?.cat2 ? (
          <>
            <p
              className={`customheading ${
                parentcategory.cat3 ? "active_container_hidden" : ""
              }`}
            >
              SELECT SUB CATEGORY
            </p>
            <ul
              className={`custom__menusecondchild w-100 ${
                parentcategory?.cat3 ? "active_container_hidden" : ""
              }`}
            >
              {child2.map((item) => (
                <li
                  key={item.key}
                  className={`custom__menusecondchild__item px-4 ${
                    item.key === parentcategory.cat3 ? "customactive" : ""
                  }`}
                  onClick={() => {
                    console.log("click");
                    setParentcategory((e) => ({
                      ...e,
                      cat3: item.key,
                      cat4: "",
                      cat5: "",
                    }));
                  }}
                >
                  <p className="custom__menusecondchild__item-label">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {parentcategory?.cat3 ? (
          <>
            <p
              className={`pb-4 customheading ${
                parentcategory.cat4 ? "active_container_hidden" : ""
              }`}
            >
              SELECT VARIENT
            </p>
            <ul
              className={`custom__menusecondchild w-100 ${
                parentcategory.cat4 ? "active_container_hidden" : ""
              }`}
            >
              {varient.map((item) => (
                <li
                  key={item.key}
                  className={`custom__menusecondchild__item px-4 ${
                    item.key === parentcategory.cat4 ? "customactive" : ""
                  }`}
                  onClick={() => {
                    console.log("click");
                    setParentcategory((e) => ({
                      ...e,
                      cat4: item.key,
                      cat5: "",
                    }));
                  }}
                >
                  <p className="custom__menusecondchild__item-label">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        {parentcategory?.cat4 ? (
          <>
            <p className="pb-4 customheading">SELECT BRAND</p>
            <ul className="custom__menulastchild w-100">
              {brand.map((item) => (
                <li
                  key={item.key}
                  className={`custom__menulastchild__item px-4 ${
                    item.key === parentcategory.cat5 ? "customactive" : ""
                  }`}
                  onClick={() =>
                    setParentcategory((e) => ({ ...e, cat5: item.key }))
                  }
                >
                  <span className="custom__menulastchild__item-image">
                    <img src={item.icon} alt={item.label} />
                  </span>
                  <p className="custom__menulastchild__item-label">
                    {item.label}
                  </p>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </nav>
    </>
  );
}

const BackArrow = ({ movebackward }) => {
  return (
    <div className="mobile_backward" onClick={movebackward}>
      <AiOutlineArrowLeft />
    </div>
  );
};

export default withApollo({ ssr: typeof window === "undefined" })(
  withRouter(MainMenu)
);
