(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1568],{2078:function(e,t,a){"use strict";var o=a(6265),l=a(1163),r=a(7294),n=a(8974),s=r.createElement;function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){(0,o.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e){var t=e.totalPage;console.log(t);var a=(0,l.useRouter)().query,o=a.page?parseInt(a.page):0,c=[];console.log(o);for(var u=0;u<Math.min(t,3);u++)o<4||o>t-3?(o<4&&(c[u]=u+1),t>4&&o>t-3&&(c[u]=t-2+u)):c[u]=o-1+u;return s(r.Fragment,null,t>1&&s("ul",{className:"pagination toolbox-item"},o>0&&s("li",{className:"page-item"},s(n.Z,{className:"page-link page-link-btn",href:{query:i(i({},a),{},{page:o-1})},scroll:!1},s("i",{className:"icon-angle-left"}))),c.map((function(e){return s("li",{className:"page-item ".concat(o===e-1?"active":""),key:"page-".concat(e)},s(n.Z,{className:"page-link",href:{query:i(i({},a),{},{page:e-1})},scroll:!1},e,o===e-1&&s("span",{className:"sr-only"},"(current)")))})),o<t-1&&s("li",{className:"page-item"},s(n.Z,{className:"page-link page-link-btn",href:{query:i(i({},a),{},{page:o+1})},scroll:!1},s("i",{className:"icon-angle-right"})))))}t.Z=r.memo(u)},4011:function(e,t,a){"use strict";var o=a(6265),l=a(809),r=a.n(l),n=a(2447),s=a(4121),c=a(7261),i=a(7294),u=a(1163),d=a(8216),p=(a(2679),a(5708)),m=a(2806),v=a(6723),g=a(8974),f=(a(3699),a(6058)),y=a(1919),h=i.createElement;function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){(0,o.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function w(){var e=(0,c.Z)(["\n  mutation AddToCart($input: addToCartInput!) {\n    addToCart(input: $input) {\n      message\n    }\n  }\n"]);return w=function(){return e},e}var x=(0,f.Ps)(w());t.Z=(0,d.$j)((function(e){return{wishlist:e.wishlist.list?e.wishlist.list:[]}}),N(N(N({},p.Nw),m.Nw),v.Nw))((function(e){var t,a,o=(0,u.useRouter)(),l=e.adClass,c=void 0===l?"":l,i=(e.link,e.product),d=(0,y.D)(x),p=(0,s.Z)(d,1)[0];function m(){var e;return console.log(i),i.price[0]!==i.price[1]&&0===i.variants.length?"-"+(100*(i.price[1]-i.price[0])/i.price[1]).toFixed(0)+"%":!(null===i||void 0===i||null===(e=i.variants)||void 0===e||!e.find((function(e){return null===e||void 0===e?void 0:e.sale_price})))&&"Sale"}var v=function(){var e=(0,n.Z)(r().mark((function e(t,a){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),localStorage.getItem("token"),e.prev=2,e.next=5,p({variables:{input:{productId:a._id,quantity:1}}});case 5:e.sent&&o.push("/pages/cart"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}();return h("div",{className:"product-default media-with-lazy ".concat(c)},h("figure",{style:e.customStyle&&{paddingTop:e.customStyle}},h(g.Z,{href:"/product/default/".concat(null===i||void 0===i?void 0:i._id)},h("div",{className:"lazy-overlay"}),h("span",{style:{display:"flex",justifyContent:"center"}},h("img",{src:null===i||void 0===i||null===(t=i.images[0])||void 0===t?void 0:t.fileURL,style:{width:"130px",objectFit:"contain",marginTop:"30px"}}))),h("div",{className:"label-group"},i.is_hot?h("div",{className:"product-label label-hot"},"HOT"):"",m()?h("div",{className:"product-label label-sale"},m()):"")),h("div",{className:"product-details",style:N({alignItems:"left",justifyContent:"left"},e.customdetailStyle&&{marginTop:e.customdetailStyle})},h("div",{className:"category-wrap",style:{display:"flex",marginTop:"0",alignItems:"end",justifyContent:"center"}},h("div",{className:"category-list",style:{width:"50%",fontWeight:600}},h(g.Z,{href:"#",style:{color:"rgba(227, 6, 19, 1)",fontWeight:600}},null===i||void 0===i?void 0:i.categoryNamePath)),h("div",{style:{width:"50%",display:"flex",justifyContent:"end"}},h("div",{className:"custom-addcart",onClick:function(e){return v(e,i)}},h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",viewBox:"0 0 25 24",fill:"black",stroke:"black",className:"plusbtn"},h("path",{d:"M6.51025 12.0156H18.2022","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}),h("path",{d:"M12.356 17.8421V6.19043","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round"}))))),h("h3",{className:"product-title"},h(g.Z,{href:"/product/default/".concat(i._id),style:{fontWeight:"500px",fontSize:"14px"}},i.productName)),h("div",{className:"price-box"},h("span",{style:{fontFamily:"Plus Jakarta Sans"}},"OMR"),h("span",{className:"product-price",style:{fontFamily:"Poppins",fontWeight:"800px",fontSize:"16px",lineHeight:"15px",marginLeft:"14px"}},null===i||void 0===i?void 0:i.price),h("span",{className:"old-price",style:{marginLeft:"14px",color:"#777777"}},+(null===i||void 0===i||null===(a=i.mrp)||void 0===a?void 0:a.toFixed(2))))))}))},9066:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var o=a(7294),l=a(4011),r=o.createElement;function n(e){var t=e.products,a=void 0===t?[]:t,n=e.gridClass,s=void 0===n?"col-6 col-sm-4 col-lg-3 custom-shopproduct":n,c=e.loading,i=e.perPage,u=e.addClass,d=void 0===u?"":u;return console.log(a),r(o.Fragment,null,r("div",{className:"custom-divide-line"},r("div",{className:"row row-joined  products-group skeleton-body skel-shop-products ".concat(d," ").concat(c?"":"loaded"),style:{marginRight:"-1px",marginLeft:"-1px"}},c?new Array(parseInt(i)).fill(1).map((function(e,t){return r("div",{className:"skel-pro skel-pro-grid pr-3 pl-3 ".concat(s),key:"ProductGrid:"+t})})):a.map((function(e,t){return r("div",{className:s,key:"product-".concat(t),style:{border:"1px solid #B9B9B9",borderTop:"transparent",borderRight:"transparent"}},r(l.Z,{adClass:"inner-quickview inner-icon",product:e}))})))),c||0!==a.length?"":r("div",{className:"info-box with-icon"},r("p",null,"No products were found matching your selection.")))}},9596:function(e,t,a){"use strict";a.r(t);var o=a(4121),l=a(7294),r=a(1163),n=a(8460),s=a(8974),c=a(5128),i=a(101),u=a(2078),d=a(9066),p=a(1649),m=a(3331),v=a(4733),g=l.createElement;t.default=(0,m.Z)({ssr:!1})((function(){var e,t,a,m,f=(0,r.useRouter)(),y=f.query.grid,h="3cols"===y||"4cols"===y,b="7cols"===y||"8cols"===y,N=f.query,w=(0,n.t)(v.tT),x=(0,o.Z)(w,2),O=x[0],k=x[1],j=k.data,Z=k.loading,S=k.error,P=(0,l.useState)(12),_=P[0],C=P[1],T=(0,l.useState)(N.sortBy?N.sortBy:"default"),E=T[0],F=T[1],q=j&&(null===j||void 0===j||null===(e=j.products)||void 0===e?void 0:e.data),B=j?parseInt((null===j||void 0===j||null===(t=j.products)||void 0===t?void 0:t.total)/_)+((null===j||void 0===j||null===(a=j.products)||void 0===a?void 0:a.total)%_?1:0):1;function D(e){var t=f.pathname.replace("[grid]",y),a=["page=1"];for(var o in N)"page"!==o&&"grid"!==o&&a.push(o+"="+N[o]);t=t+"?"+a.join("&"),f.push(t),C(e.target.value)}return(0,l.useEffect)((function(){var e=document.querySelector(".main-content").getBoundingClientRect().top+window.pageYOffset-58;setTimeout((function(){window.scrollTo({top:e,behavior:"smooth"})}),200);var t=N.page?N.page:1;O({variables:{search:null===N||void 0===N?void 0:N.search,colors:null!==N&&void 0!==N&&N.colors?null===N||void 0===N?void 0:N.colors.split(","):[],sizes:null!==N&&void 0!==N&&N.sizes?null===N||void 0===N?void 0:N.sizes.split(","):[],min_price:parseInt(N.min_price),max_price:parseInt(N.max_price),category:null===N||void 0===N?void 0:N.category,tag:null===N||void 0===N?void 0:N.tag,sortBy:E,from:_*(t-1),to:_*t}})}),[N,_,E]),S?g("div",null,S.message):g("main",{className:"main"},g(c.Z,null),g("nav",{"aria-label":"breadcrumb",className:"breadcrumb-nav mb-3"},g("div",{className:"container"},g("ol",{className:"breadcrumb"},g("li",{className:"breadcrumb-item"},g(s.Z,{href:"/"},g(p.QO$,{style:{fontSize:"16px"}}))),N.category?g(l.Fragment,null,g("li",{className:"breadcrumb-item"},g(s.Z,{href:"/shop/".concat(y),scroll:!1},"shop")),j&&(null===j||void 0===j||null===(m=j.products)||void 0===m?void 0:m.categoryFamily.map((function(e,t){return g("li",{className:"breadcrumb-item",key:"category-family-".concat(t)},g(s.Z,{href:"/shop/".concat(y,"?category=").concat(e.slug),scroll:!1},e.name))}))),g("li",{className:"breadcrumb-item active"},N.search?g(l.Fragment,null,"Search -"," ",g(s.Z,{href:"/shop/".concat(y,"?category=").concat(null===N||void 0===N?void 0:N.category),scroll:!1},null===N||void 0===N?void 0:N.category)," ","/ ",null===N||void 0===N?void 0:N.search):null===N||void 0===N?void 0:N.category)):N.search?g(l.Fragment,null,g("li",{className:"breadcrumb-item"},g(s.Z,{href:"/shop/".concat(y),scroll:!1},"Shop")),g("li",{className:"breadcrumb-item active","aria-current":"page"},"Search - ".concat(N.search))):N.tag?g(l.Fragment,null,g("li",{className:"breadcrumb-item"},g(s.Z,{href:"/shop/".concat(y),scroll:!1},"Shop")),g("li",{className:"breadcrumb-item active","aria-current":"page"},"Product Tag - ".concat(N.tag))):g("li",{className:"breadcrumb-item active","aria-current":"page"},"Shop")))),g("div",{className:"container pt-2"},g("div",{className:"row"},g("div",{className:"main-content ".concat(h?"col-lg-9":"col-12")},g("nav",{className:"toolbox sticky-header mobile-sticky"},g("div",{className:"toolbox-left"},g("a",{href:"#",className:"sidebar-toggle",onClick:function(e){return function(e){var t=document.querySelector("body");e.preventDefault(),t.classList.contains("sidebar-opened")?t.classList.remove("sidebar-opened"):t.classList.add("sidebar-opened")}(e)}},g("svg",{"data-name":"Layer 3",id:"Layer_3",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},g("line",{x1:"15",x2:"26",y1:"9",y2:"9",className:"cls-1"}),g("line",{x1:"6",x2:"9",y1:"9",y2:"9",className:"cls-1"}),g("line",{x1:"23",x2:"26",y1:"16",y2:"16",className:"cls-1"}),g("line",{x1:"6",x2:"17",y1:"16",y2:"16",className:"cls-1"}),g("line",{x1:"17",x2:"26",y1:"23",y2:"23",className:"cls-1"}),g("line",{x1:"6",x2:"11",y1:"23",y2:"23",className:"cls-1"}),g("path",{d:"M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z",className:"cls-2"}),g("path",{d:"M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z",className:"cls-2"}),g("path",{d:"M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z",className:"cls-3"}),g("path",{d:"M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z",className:"cls-2"})),g("span",null,"Filter")),g("div",{className:"toolbox-item toolbox-sort"},g("label",null,"Sort By:"),g("div",{className:"select-custom"},g("select",{name:"orderby",className:"form-control",value:E,onChange:function(e){return function(e){var t=f.pathname.replace("[grid]",y),a=["sortBy=".concat(e.target.value),"page=1"];for(var o in N)"sortBy"!==o&&"page"!==o&&"grid"!==o&&a.push(o+"="+N[o]);t=t+"?"+a.join("&"),f.push(t),F(e.target.value)}(e)}},g("option",{value:"default"},"Default sorting"),g("option",{value:"popularity"},"Sort by popularity"),g("option",{value:"rating"},"Sort by average rating"),g("option",{value:"date"},"Sort by newness"),g("option",{value:"price"},"Sort by price: low to high"),g("option",{value:"price-desc"},"Sort by price: high to low"))))),g("div",{className:"toolbox-right"},g("div",{className:"toolbox-item toolbox-show"},g("label",null,"Show:"),g("div",{className:"select-custom"},g("select",{name:"count",className:"form-control",value:_,onChange:function(e){return D(e)}},g("option",{value:"12"},"12"),g("option",{value:"24"},"24"),g("option",{value:"36"},"36")))),g("div",{className:"toolbox-item layout-modes"},g(s.Z,{href:{pathname:f.pathname,query:N},className:"layout-btn btn-grid active",title:"Grid"},g("i",{className:"icon-mode-grid"})),g(s.Z,{href:{pathname:"/shop/list",query:N},className:"layout-btn btn-list",title:"List"},g("i",{className:"icon-mode-list"}))))),g(d.Z,{products:q,loading:Z,perPage:_,gridClass:{"3cols":"col-6 col-sm-4","4cols":"col-6 col-sm-4 col-md-3","5cols":"col-6 col-sm-4 col-md-3 col-xl-5col","6cols":"col-6 col-sm-4 col-md-3 col-xl-2","7cols":"col-6 col-sm-4 col-md-3 col-xl-7col","8cols":"col-6 col-sm-4 col-md-3 col-xl-8col"}[y],addClass:b?"sm-padding row-sm":""}),Z||q&&q.length?g("nav",{className:"toolbox toolbox-pagination border-0"},g("div",{className:"toolbox-item toolbox-show"},g("label",null,"Show:"),g("div",{className:"select-custom"},g("select",{name:"count",className:"form-control",value:_,onChange:function(e){return D(e)}},g("option",{value:"12"},"12"),g("option",{value:"24"},"24"),g("option",{value:"36"},"36")))),g(u.Z,{totalPage:B})):""),g(i.ZP,h?null:{display:"none"}))),g("div",{className:"mb-xl-4 mb-0"}))}))},4994:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/[grid]",function(){return a(9596)}])}},function(e){e.O(0,[5804,1081,9322,4146,9774,2888,179],(function(){return t=4994,e(e.s=t);var t}));var t=e.O();_N_E=t}]);