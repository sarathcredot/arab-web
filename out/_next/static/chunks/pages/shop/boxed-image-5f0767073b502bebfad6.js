(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2535],{2078:function(e,t,a){"use strict";var r=a(6265),o=a(1163),n=a(7294),l=a(8974),s=n.createElement;function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e){var t=e.totalPage;console.log(t);var a=(0,o.useRouter)().query,r=a.page?parseInt(a.page):0,i=[];console.log(r);for(var u=0;u<Math.min(t,3);u++)r<4||r>t-3?(r<4&&(i[u]=u+1),t>4&&r>t-3&&(i[u]=t-2+u)):i[u]=r-1+u;return s(n.Fragment,null,t>1&&s("ul",{className:"pagination toolbox-item"},r>0&&s("li",{className:"page-item"},s(l.Z,{className:"page-link page-link-btn",href:{query:c(c({},a),{},{page:r-1})},scroll:!1},s("i",{className:"icon-angle-left"}))),i.map((function(e){return s("li",{className:"page-item ".concat(r===e-1?"active":""),key:"page-".concat(e)},s(l.Z,{className:"page-link",href:{query:c(c({},a),{},{page:e-1})},scroll:!1},e,r===e-1&&s("span",{className:"sr-only"},"(current)")))})),r<t-1&&s("li",{className:"page-item"},s(l.Z,{className:"page-link page-link-btn",href:{query:c(c({},a),{},{page:r+1})},scroll:!1},s("i",{className:"icon-angle-right"})))))}t.Z=n.memo(u)},4011:function(e,t,a){"use strict";var r=a(6265),o=a(809),n=a.n(o),l=a(2447),s=a(4121),i=a(7261),c=a(7294),u=a(1163),p=a(8216),d=(a(2679),a(5708)),m=a(2806),v=a(6723),g=a(8974),f=(a(3699),a(6058)),y=a(1919),b=c.createElement;function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function w(){var e=(0,i.Z)(["\n  mutation AddToCart($input: addToCartInput!) {\n    addToCart(input: $input) {\n      message\n    }\n  }\n"]);return w=function(){return e},e}var O=(0,f.Ps)(w());t.Z=(0,p.$j)((function(e){return{wishlist:e.wishlist.list?e.wishlist.list:[]}}),N(N(N({},d.Nw),m.Nw),v.Nw))((function(e){var t,a,r=(0,u.useRouter)(),o=e.adClass,i=void 0===o?"":o,c=(e.link,e.product),p=(0,y.D)(O),d=(0,s.Z)(p,1)[0];function m(){var e;return console.log(c),c.price[0]!==c.price[1]&&0===c.variants.length?"-"+(100*(c.price[1]-c.price[0])/c.price[1]).toFixed(0)+"%":!(null===c||void 0===c||null===(e=c.variants)||void 0===e||!e.find((function(e){return null===e||void 0===e?void 0:e.sale_price})))&&"Sale"}var v=function(){var e=(0,l.Z)(n().mark((function e(t,a){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),localStorage.getItem("token"),e.prev=2,e.next=5,d({variables:{input:{productId:a._id,quantity:1}}});case 5:e.sent&&r.push("/pages/cart"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}();return b("div",{className:"product-default media-with-lazy ".concat(i)},b("figure",{style:e.customStyle&&{paddingTop:e.customStyle}},b(g.Z,{href:"/product/default/".concat(null===c||void 0===c?void 0:c._id)},b("div",{className:"lazy-overlay"}),b("span",{style:{display:"flex",justifyContent:"center"}},b("img",{src:null===c||void 0===c||null===(t=c.images[0])||void 0===t?void 0:t.fileURL,style:{width:"130px",objectFit:"contain",marginTop:"30px"}}))),b("div",{className:"label-group"},c.is_hot?b("div",{className:"product-label label-hot"},"HOT"):"",m()?b("div",{className:"product-label label-sale"},m()):"")),b("div",{className:"product-details",style:N({alignItems:"left",justifyContent:"left"},e.customdetailStyle&&{marginTop:e.customdetailStyle})},b("div",{className:"category-wrap",style:{display:"flex",marginTop:"0",alignItems:"end",justifyContent:"center"}},b("div",{className:"category-list",style:{width:"50%",fontWeight:600}},b(g.Z,{href:"#",style:{color:"rgba(227, 6, 19, 1)",fontWeight:600}},null===c||void 0===c?void 0:c.categoryNamePath)),b("div",{style:{width:"50%",display:"flex",justifyContent:"end"}},b("div",{className:"custom-addcart",onClick:function(e){return v(e,c)}},b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",viewBox:"0 0 25 24",fill:"black",stroke:"black",className:"plusbtn"},b("path",{d:"M6.51025 12.0156H18.2022","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}),b("path",{d:"M12.356 17.8421V6.19043","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}))))),b("h3",{className:"product-title"},b(g.Z,{href:"/product/default/".concat(c._id),style:{fontWeight:"500px",fontSize:"14px"}},c.productName)),b("div",{className:"price-box"},b("span",{style:{fontFamily:"Plus Jakarta Sans"}},"OMR"),b("span",{className:"product-price",style:{fontFamily:"Poppins",fontWeight:"800px",fontSize:"16px",lineHeight:"15px",marginLeft:"14px"}},null===c||void 0===c?void 0:c.price),b("span",{className:"old-price",style:{marginLeft:"14px",color:"#777777"}},+(null===c||void 0===c||null===(a=c.mrp)||void 0===a?void 0:a.toFixed(2))))))}))},9066:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var r=a(7294),o=a(4011),n=r.createElement;function l(e){var t=e.products,a=void 0===t?[]:t,l=e.gridClass,s=void 0===l?"col-6 col-sm-4 col-lg-3 custom-shopproduct":l,i=e.loading,c=e.perPage,u=e.addClass,p=void 0===u?"":u;return console.log(a),n(r.Fragment,null,n("div",{className:"custom-divide-line"},n("div",{className:"row row-joined  products-group skeleton-body skel-shop-products ".concat(p," ").concat(i?"":"loaded"),style:{marginRight:"-1px",marginLeft:"-1px"}},i?new Array(parseInt(c)).fill(1).map((function(e,t){return n("div",{className:"skel-pro skel-pro-grid pr-3 pl-3 ".concat(s),key:"ProductGrid:"+t})})):a.map((function(e,t){return n("div",{className:s,key:"product-".concat(t),style:{border:"1px solid #B9B9B9",borderTop:"transparent",borderRight:"transparent"}},n(o.Z,{adClass:"inner-quickview inner-icon",product:e}))})))),i||0!==a.length?"":n("div",{className:"info-box with-icon"},n("p",null,"No products were found matching your selection.")))}},6781:function(e,t,a){"use strict";a.r(t);var r=a(6265),o=a(4121),n=a(7294),l=a(1163),s=a(8460),i=a(3331),c=a(4733),u=a(8974),p=a(2078),d=a(9066),m=a(5128),v=a(101),g=a(1649),f=n.createElement;function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=(0,i.Z)({ssr:!1})((function(){var e,t,a=(0,l.useRouter)(),r=a.query,i=(0,s.t)(c.tT),y=(0,o.Z)(i,2),h=y[0],N=y[1],w=N.data,O=N.loading,x=N.error,j=(0,n.useState)(12),k=j[0],P=j[1],Z=(0,n.useState)(r.sortBy?r.sortBy:"default"),S=Z[0],_=Z[1],C=w&&(null===w||void 0===w||null===(e=w.products)||void 0===e?void 0:e.data),q=w?parseInt((null===w||void 0===w?void 0:w.products.total)/k)+((null===w||void 0===w?void 0:w.products.total)%k?1:0):1;function D(e){P(e.target.value),a.push({pathname:a.pathname,query:b(b({},r),{},{page:1})})}return(0,n.useEffect)((function(){var e=document.querySelector(".main-content").getBoundingClientRect().top+window.pageYOffset-58;setTimeout((function(){window.scrollTo({top:e,behavior:"smooth"})}),200);var t=r.page?r.page:1;h({variables:{search:r.search,colors:r.colors?r.colors.split(","):[],sizes:r.sizes?r.sizes.split(","):[],brands:r.brands?r.brands.split(","):[],min_price:parseInt(r.min_price),max_price:parseInt(r.max_price),category:r.category,tag:r.tag,sortBy:S,from:k*(t-1),to:k*t}})}),[r,k,S]),x?f("div",null,x.message):f("main",{className:"main"},f("nav",{"aria-label":"breadcrumb",className:"breadcrumb-nav mb-3"},f("div",{className:"container"},f("ol",{className:"breadcrumb"},f("li",{className:"breadcrumb-item"},f(u.Z,{href:"/"},f(g.QO$,{style:{fontSize:"16px"}}))),r.category?f(n.Fragment,null,f("li",{className:"breadcrumb-item"},f(u.Z,{href:{pathname:a.pathname,query:{}},scroll:!1},"shop")),w&&(null===w||void 0===w||null===(t=w.products)||void 0===t?void 0:t.categoryFamily.map((function(e,t){return f("li",{className:"breadcrumb-item",key:"category-family-".concat(t)},f(u.Z,{href:{query:{category:null===e||void 0===e?void 0:e.slug}},scroll:!1},null===e||void 0===e?void 0:e.name))}))),f("li",{className:"breadcrumb-item active"},r.search?f(n.Fragment,null,"Search - ",f(u.Z,{href:{query:{category:null===r||void 0===r?void 0:r.category}},scroll:!1},null===r||void 0===r?void 0:r.category)," / ",null===r||void 0===r?void 0:r.search):null===r||void 0===r?void 0:r.category)):r.search?f(n.Fragment,null,f("li",{className:"breadcrumb-item"},f(u.Z,{href:{pathname:a.pathname,query:{}},scroll:!1},"shop")),f("li",{className:"breadcrumb-item active","aria-current":"page"},"Search - ".concat(r.search))):r.tag?f(n.Fragment,null,f("li",{className:"breadcrumb-item"},f(u.Z,{href:{pathname:a.pathname,query:{}},scroll:!1},"shop")),f("li",{className:"breadcrumb-item active","aria-current":"page"},"Product Tag - ".concat(r.tag))):f("li",{className:"breadcrumb-item active","aria-current":"page"},"Shop")))),f("div",{className:"container pt-2"},f("div",{className:"row"},f("div",{className:"col-lg-9 main-content"},f(m.Z,{adClass:"mb-2"}),f("nav",{className:"toolbox sticky-header mobile-sticky"},f("div",{className:"toolbox-left"},f("a",{href:"#",className:"sidebar-toggle",onClick:function(e){return function(e){var t=document.querySelector("body");e.preventDefault(),t.classList.contains("sidebar-opened")?t.classList.remove("sidebar-opened"):t.classList.add("sidebar-opened")}(e)}},f("svg",{"data-name":"Layer 3",id:"Layer_3",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},f("line",{x1:"15",x2:"26",y1:"9",y2:"9",className:"cls-1"}),f("line",{x1:"6",x2:"9",y1:"9",y2:"9",className:"cls-1"}),f("line",{x1:"23",x2:"26",y1:"16",y2:"16",className:"cls-1"}),f("line",{x1:"6",x2:"17",y1:"16",y2:"16",className:"cls-1"}),f("line",{x1:"17",x2:"26",y1:"23",y2:"23",className:"cls-1"}),f("line",{x1:"6",x2:"11",y1:"23",y2:"23",className:"cls-1"}),f("path",{d:"M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z",className:"cls-2"}),f("path",{d:"M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z",className:"cls-2"}),f("path",{d:"M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z",className:"cls-3"}),f("path",{d:"M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z",className:"cls-2"})),f("span",null,"Filter")),f("div",{className:"toolbox-item toolbox-sort"},f("label",null,"Sort By:"),f("div",{className:"select-custom"},f("select",{name:"orderby",className:"form-control",value:S,onChange:function(e){return function(e){a.push({pathname:a.pathname,query:b(b({},r),{},{sortBy:e.target.value,page:1})}),_(e.target.value)}(e)}},f("option",{value:"default"},"Default sorting"),f("option",{value:"popularity"},"Sort by popularity"),f("option",{value:"rating"},"Sort by average rating"),f("option",{value:"date"},"Sort by newness"),f("option",{value:"price"},"Sort by price: low to high"),f("option",{value:"price-desc"},"Sort by price: high to low"))))),f("div",{className:"toolbox-right"},f("div",{className:"toolbox-item toolbox-show"},f("label",null,"Show:"),f("div",{className:"select-custom"},f("select",{name:"count",className:"form-control",value:k,onChange:function(e){return D(e)}},f("option",{value:"12"},"12"),f("option",{value:"24"},"24"),f("option",{value:"36"},"36")))),f("div",{className:"toolbox-item layout-modes"},f(u.Z,{href:{pathname:a.pathname,query:r},className:"layout-btn btn-grid active",title:"Grid"},f("i",{className:"icon-mode-grid"})),f(u.Z,{href:{pathname:"/shop/list",query:r},className:"layout-btn btn-list",title:"List"},f("i",{className:"icon-mode-list"}))))),f(d.Z,{products:C,loading:O,perPage:k}),O||C&&C.length?f("nav",{className:"toolbox toolbox-pagination border-0"},f("div",{className:"toolbox-item toolbox-show"},f("label",null,"Show:"),f("div",{className:"select-custom"},f("select",{name:"count",className:"form-control",value:k,onChange:function(e){return D(e)}},f("option",{value:"12"},"12"),f("option",{value:"24"},"24"),f("option",{value:"36"},"36")))),f(p.Z,{totalPage:q})):""),f(v.ZP,null))),f("div",{className:"mb-xl-4 mb-0"}))}))},9027:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/boxed-image",function(){return a(6781)}])}},function(e){e.O(0,[5804,1081,9322,4146,9774,2888,179],(function(){return t=9027,e(e.s=t);var t}));var t=e.O();_N_E=t}]);