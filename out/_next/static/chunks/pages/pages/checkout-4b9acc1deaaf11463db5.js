(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3065],{9592:function(e,n,t){"use strict";var r=t(809),o=t.n(r),i=t(6265),l=t(2447),s=t(4121),a=t(7261),d=t(7294),u=t(2439),c=t(3331),p=t(6058),m=t(4718),v=t(1919),g=t(2132),f=t(1163),h=d.createElement;function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function N(){var e=(0,a.Z)(["mutation EditUserShippingAddress($input: UserEditShippingAddressInput!) {\n    editUserShippingAddress(input: $input) {\n      _id\n    }\n  }"]);return N=function(){return e},e}function C(){var e=(0,a.Z)(["query GetUserShippingAddress($input: GetUserShippingAddressInput!) {\n    getUserShippingAddress(input: $input) {\n      _id\n      apartment\n      city\n      \n      country\n      email\n      firstname\n      houseNumber\n      mobile\n      postCode\n      streetName\n      suite\n      unit\n     \n    }\n  }"]);return C=function(){return e},e}function S(){var e=(0,a.Z)(["mutation CreateUserShippingAddress($input: UserCreateShippingAddressInput!) {\n    createUserShippingAddress(input: $input) {\n      _id\n    }\n  }"]);return S=function(){return e},e}var x=(0,p.Ps)(S()),k=(0,p.Ps)(C()),A=(0,p.Ps)(N());n.ZP=(0,c.Z)({ssr:!1})((function(e){var n,t,r,i,a,c,p=e.isEdit,b=e.addressId,N=e.onClose;(0,f.useRouter)(),console.log(p,b);var C=(0,m.a)(k,{variables:{input:{_id:b}}}),S=C.data;C.loading,C.error,console.log(S);var U=(0,u.cI)({defaultValues:{firstname:"",country:"",streetName:"",houseNumber:"",city:"",postCode:"",apartment:"",email:"",mobile:""}}),O=(U.register,U.handleSubmit),_=(U.watch,U.setValue),w=U.reset,E=U.formState.errors,P=U.control;(0,d.useEffect)((function(){var e,n,t,r,o,i,l,s,a;p&&(_("firstname",null===S||void 0===S||null===(e=S.getUserShippingAddress)||void 0===e?void 0:e.firstname),_("country",null===S||void 0===S||null===(n=S.getUserShippingAddress)||void 0===n?void 0:n.country),_("houseNumber",null===S||void 0===S||null===(t=S.getUserShippingAddress)||void 0===t?void 0:t.houseNumber),_("streetName",null===S||void 0===S||null===(r=S.getUserShippingAddress)||void 0===r?void 0:r.streetName),_("city",null===S||void 0===S||null===(o=S.getUserShippingAddress)||void 0===o?void 0:o.city),_("postCode",null===S||void 0===S||null===(i=S.getUserShippingAddress)||void 0===i?void 0:i.postCode),_("mobile",null===S||void 0===S||null===(l=S.getUserShippingAddress)||void 0===l?void 0:l.mobile),_("email",null===S||void 0===S||null===(s=S.getUserShippingAddress)||void 0===s?void 0:s.email),_("apartment",null===S||void 0===S||null===(a=S.getUserShippingAddress)||void 0===a?void 0:a.apartment))}),[p,S]);var q=(0,v.D)(x),Z=(0,s.Z)(q,1)[0],D=(0,v.D)(A),R=(0,s.Z)(D,1)[0],T=function(){var e=(0,l.Z)(o().mark((function e(n){var t,r,i,l,s,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(n),event.preventDefault(),e.prev=2,!p){e.next=11;break}return e.next=6,R({variables:{input:y({_id:null===S||void 0===S||null===(t=S.getUserShippingAddress)||void 0===t?void 0:t._id},n)}});case 6:r=e.sent,console.log(r),r&&(g.Am.success(h("div",{style:{padding:"10px"}},"Shipping address updated")),N()),e.next=16;break;case 11:return e.next=13,Z({variables:{input:y({},n)}});case 13:i=e.sent,console.log(i),i&&(null===(l=localStorage)||void 0===l||l.setItem("shippingId",null===i||void 0===i||null===(s=i.data)||void 0===s||null===(a=s.createUserShippingAddress)||void 0===a?void 0:a._id),(0,g.Am)(h("div",{style:{padding:"10px"}},"Shipping address added")),N(),w());case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),console.log("error",e.t0);case 21:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(n){return e.apply(this,arguments)}}(),I={city:{required:"City is required"},firstname:{required:"First Name is required"},houseNumber:{required:"HouseNumber is required"},mobile:{required:"Mobile is required"},postCode:{required:"postCode is required"},streetName:{required:"Street Name is required"},email:{pattern:{value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,message:"Invalid email address"}}};return h("div",null,h("div",{className:"container checkout-container"},h("div",{className:"row"},h("div",{className:"col-lg-12"},h("ul",{className:"checkout-steps"},h("li",null,h("div",{className:"container custom-formspace"},h("h4",{className:"step-title"},"Shipping address")),h("form",{onSubmit:O(T),id:"checkout-form",style:{marginTop:"40px"}},h("div",{className:"form-group"},h("label",{style:{fontFamily:"Poppins",fontWeight:"400px",lineHeight:"20px"}},"First name"," ",h("ab",{className:"required",title:"required"},"*")),h(u.Qr,{control:P,name:"firstname",render:function(e){var n=e.field,t=n.onChange,r=n.value;return h("input",{type:"text",className:"form-control",value:r,onChange:t,style:{marginTop:"10px"}})},rules:I.firstname}),null!==E&&void 0!==E&&E.firstname?h("div",{style:{color:"red",fontWeight:"300"}},null===E||void 0===E||null===(n=E.firstname)||void 0===n?void 0:n.message):null),h("div",{className:"form-group"},h("label",{style:{fontFamily:"Poppins",fontWeight:"400px",lineHeight:"20px"}},"Country / Region "," "),h(u.Qr,{control:P,name:"country",render:function(e){var n=e.field,t=n.onChange,r=n.value;return h("input",{type:"text",className:"form-control",value:r,onChange:t,style:{marginTop:"10px"}})}})),h("div",{className:"form-group"},h("label",null,"Street address ",h("span",{className:"required"},"*")),h(u.Qr,{control:P,name:"houseNumber",render:function(e){var n=e.field,t=n.onChange,r=n.value;return h("input",{type:"text",className:"form-control",placeholder:"House number and street name",value:r,onChange:t,style:{marginTop:"10px"}})},rules:I.houseNumber}),null!==E&&void 0!==E&&E.houseNumber?h("div",{style:{color:"red",fontWeight:"300"}},null===E||void 0===E||null===(t=E.houseNumber)||void 0===t?void 0:t.message):null,h(u.Qr,{control:P,name:"streetName",render:function(e){var n=e.field,t=n.onChange,r=n.value;return h("input",{type:"text",className:"form-control",placeholder:"Apartment, suite, unit, etc. (optional)",value:r,onChange:t})},rules:I.streetName}),null!==E&&void 0!==E&&E.streetName?h("div",{style:{color:"red",fontWeight:"300"}},null===E||void 0===E||null===(r=E.streetName)||void 0===r?void 0:r.message):null),h("div",{className:"form-group"},h("label",null,"Twon/City ",h("span",{className:"required"},"*")),h(u.Qr,{control:P,name:"city",render:function(e){var n=e.field,t=n.onChange,r=n.value;return h("input",{type:"text",className:"form-control",placeholder:"Abu Dhabi",value:r,onChange:t,style:{marginTop:"10px"}})},rules:I.city}),null!==E&&void 0!==E&&E.city?h("div",{style:{color:"red",fontWeight:"300"}},null===E||void 0===E||null===(i=E.city)||void 0===i?void 0:i.message):null),h("div",{className:"form-group"},h("label",null,"Pincode/Zip ",h("span",{className:"required"},"*")),h(u.Qr,{control:P,name:"postCode",render:function(e){var n=e.field,t=n.onChange,r=n.value;return h("input",{type:"number",className:"form-control",placeholder:"6730016",value:r,onChange:t,style:{marginTop:"10px"}})},rules:I.postCode}),null!==E&&void 0!==E&&E.postCode?h("div",{style:{color:"red",fontWeight:"300"}},null===E||void 0===E||null===(a=E.postCode)||void 0===a?void 0:a.message):null),h("div",{className:"form-group"},h("label",null,"Phone",h("span",{className:"required"},"*")),h("div",{className:"input-group",style:{marginTop:"10px"}},h("div",{className:"input-group-prepend"},h("span",{className:"input-group-text",style:{padding:"10px"}},h("img",{src:"images\\brands\\flag1.svg",alt:"Flag",width:"24",height:"16"}),"+971")),h(u.Qr,{control:P,name:"mobile",render:function(e){var n=e.field,t=n.onChange,r=n.value;return h("input",{type:"tel",className:"form-control",placeholder:"Enter your phone number",value:r,onChange:t})},rules:I.mobile})),null!==E&&void 0!==E&&E.mobile?h("div",{style:{color:"red",fontWeight:"300"}},null===E||void 0===E||null===(c=E.city)||void 0===c?void 0:c.mobile):null),h("div",{className:"form-group"},h("label",null,"Email"),h(u.Qr,{control:P,name:"email",render:function(e){var n=e.field,t=n.onChange,r=n.value;return h("input",{type:"text",className:"form-control",value:r,onChange:t,style:{marginTop:"10px"}})}})),h("div",{className:"container",style:{display:"flex",justifyContent:"flex-end"}},h("div",{className:"mt-3"},h("button",{type:"submit",className:"btn btn-dark mr-0"},"Save changes"))))))))))}))},2774:function(e,n,t){"use strict";t.r(n),t.d(n,{GET_ADDRESSES:function(){return k},REMOVE_ADDRESS:function(){return A},PLACE_ORDER:function(){return U}});var r=t(809),o=t.n(r),i=t(2447),l=(t(6265),t(4121)),s=t(7261),a=t(7294),d=t(8216),u=(t(2954),t(8974)),c=t(6058),p=t(4718),m=t(1919),v=t(3331),g=t(9592),f=t(155),h=(t(2132),t(1163)),b=a.createElement;function y(){var e=(0,s.Z)(["mutation CreateUserOrder($input: CreateUserOrderInput!) {\n  createUserOrder(input: $input) {\n    orderId\n  }\n}"]);return y=function(){return e},e}function N(){var e=(0,s.Z)(["mutation RemoveUserShippingAddress($input: UserRemoveShippingAddressInput!) {\n  removeUserShippingAddress(input: $input) {\n    _id\n    message\n  }\n}"]);return N=function(){return e},e}function C(){var e=(0,s.Z)(["query GetUserShippingAddresses {\n  getUserShippingAddresses {\n    address {\n      _id\n      apartment\n      city\n    \n      country\n      email\n      firstname\n      houseNumber\n      mobile\n      postCode\n      streetName\n      suite\n      unit\n      isDefault\n    }\n  }\n}"]);return C=function(){return e},e}function S(){var e=(0,s.Z)(["\n  query GetCart {\n    getCart {\n      products {\n        _id\n        productId\n        quantity\n        name\n        stock\n      \n        price\n        image\n      }\n      grandTotal\n      subTotal\n      deliveryCharge\n    }\n  }\n"]);return S=function(){return e},e}var x=(0,c.Ps)(S()),k=(0,c.Ps)(C()),A=(0,c.Ps)(N()),U=(0,c.Ps)(y());n.default=(0,v.Z)({ssr:!1})((0,d.$j)((function(e){return{cartList:e.cartlist.cart?e.cartlist.cart:[]}}))((function(){var e,n,t,r,s,d=(0,a.useState)(),c=d[0],v=d[1],y=(0,a.useState)(!1),N=y[0],C=y[1],S=(0,a.useState)(!1),O=S[0],_=S[1],w=(0,a.useState)(""),E=w[0],P=w[1],q=(0,a.useState)(null),Z=q[0],D=q[1],R=(0,p.a)(k),T=R.data,I=(R.loading,R.error,R.refetch),j=(0,m.D)(A),$=(0,l.Z)(j,1)[0],W=(0,m.D)(U),F=(0,l.Z)(W,1)[0],Q=(0,h.useRouter)();console.log(T);var M=(0,a.useState)(!1),G=(M[0],M[1],localStorage.getItem("arabtoken"));console.log(E);var H=(0,p.a)(x,{skip:!G}),L=H.data,V=(H.loading,H.error),z=H.refetch;(0,a.useEffect)((function(){if(T&&T.getUserShippingAddresses&&T.getUserShippingAddresses.address.length>0){console.log("vbn");var e=T.getUserShippingAddresses.address.find((function(e){return e.isDefault}));console.log(e),e&&P(e._id)}}),[T]),console.log(L),(0,a.useEffect)((function(){V?console.error("Error fetching cart data:",V):L&&v(L.getCart.products||[]),z()}),[L]);var X=function(){var e=(0,i.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.next=3,$({variables:{input:{_id:n}}});case 3:t=e.sent,console.log(t),I();case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),B=function(){var e=(0,i.Z)(o().mark((function e(){var n,t,r,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("click"),e.prev=1,e.next=4,F({variables:{input:{grandTotal:null===L||void 0===L||null===(n=L.getCart)||void 0===n?void 0:n.grandTotal,paymentMode:"COD",shippingAddressId:E}}});case 4:i=e.sent,console.log(i),Q.push({pathname:"/pages/success",query:{orderId:null===i||void 0===i||null===(t=i.data)||void 0===t||null===(r=t.createUserOrder)||void 0===r?void 0:r.orderId}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),Q.push("/pages/failed");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return b(a.Fragment,null,b("ul",{className:"checkout-progress-bar d-flex justify-content-center flex-wrap"},b("li",null,b(u.Z,{href:"/pages/cart"},"Shopping Cart")),b("li",{className:"active"},b(u.Z,{href:"/pages/checkout"},"Checkout")),b("li",{className:"disabled"},b(u.Z,{href:"#"},"Order Complete"))),b("main",{className:"main main-test"},N?b(a.Fragment,null,b(g.ZP,{isEdit:O,addressId:Z,onClose:function(){console.log("click"),C(!1),I()}})):b("div",{className:"container checkout-container"},0===(null===c||void 0===c?void 0:c.length)?b("div",{className:"cart-empty-page text-center"},b("p",{className:"noproduct-msg mb-2"},"Checkout is not available while your cart is empty."),b("i",{className:"icon-bag-2"}),b("p",null,"No products added to the cart"),b(u.Z,{href:"/shop",className:"btn btn-dark btn-add-cart product-type-simple btn-shop font1"},"return to shop")):b(a.Fragment,null,b("div",{className:"row",style:{marginTop:"62px"}},b("div",{className:"col-lg-7"},b("div",null,b("h2",{className:"step-title"},"Select a shipping address"),b("div",{className:"shipingBox"},T&&(null===T||void 0===T||null===(e=T.getUserShippingAddresses)||void 0===e?void 0:e.address.length)>0?null===T||void 0===T||null===(n=T.getUserShippingAddresses)||void 0===n?void 0:n.address.map((function(e,n){var t;return b(a.Fragment,null,b("div",{key:n,style:{display:"flex",lineHeight:"19px",alignItems:"baseline",gap:"20px",border:"1px solid #dfdfdf",margin:"15px 0",padding:"10px",borderRadius:"4px"}},b("div",null,b("div",{className:"custom-control custom-radio d-flex"},b("input",{type:"radio",className:"custom-control-input",id:"shipaddress".concat(n),value:e._id,checked:E===e._id,onChange:function(){return n=e._id,void P(n);var n}}),b("label",{className:"custom-control-label",style:{paddingLeft:"10px",maxWidth:"575px"},htmlFor:"shipaddress".concat(n)},null===e||void 0===e?void 0:e.firstname,", \xa0",null===e||void 0===e?void 0:e.houseNumber,", ",null===e||void 0===e?void 0:e.streetName,", \xa0",null===e||void 0===e?void 0:e.postCode,",",null===e||void 0===e?void 0:e.city,", ",null===e||void 0===e?void 0:e.country)),b("div",{style:{display:"flex",color:"black"}},b("button",{style:{cursor:"pointer",background:"none",border:"none",color:"black"},onClick:function(){C(!0),_(!0),D(null===e||void 0===e?void 0:e._id)}},"Edit"),T&&(null===T||void 0===T||null===(t=T.getUserShippingAddresses)||void 0===t?void 0:t.address.length)>1&&b("button",{style:{cursor:"pointer",background:"none",border:"none",color:"#E30613"},onClick:function(){return X(null===e||void 0===e?void 0:e._id)}},"Remove")))))})):"",b("div",{style:{display:"flex",gap:"15px",alignItems:"center",cursor:"pointer"},onClick:function(){C(!0)}},b(f.RWZ,{style:{fontSize:"20px"}}),b("p",{className:"addaddressbtn",style:{margin:0}}," Add Address "))))),b("div",{className:"col-lg-5"},b("div",{className:"order-box"},b("div",{className:"order-summary"},b("h3",null,"YOUR ORDER"),b("table",{className:"table table-mini-cart"},b("thead",null,b("tr",null,b("th",{colSpan:"2",style:{fontSize:"1.4rem",fontWeight:"600"}},"Product"))),b("tbody",null,null===c||void 0===c?void 0:c.map((function(e,n){return b("tr",{key:"checks"+n},b("td",{className:"product-col"},b("h2",{className:"product-title"},(null===e||void 0===e?void 0:e.name)+" \xd7 "+(null===e||void 0===e?void 0:e.quantity))),b("td",{className:"price-col"},b("span",null,"OMR ",(null===e||void 0===e?void 0:e.price)*(null===e||void 0===e?void 0:e.quantity))))}))),b("tfoot",null,b("tr",{className:"cart-subtotal"},b("td",null,b("h4",null,"Shipping Charge")),b("td",{className:"price-col"},b("span",null,"OMR ",null===L||void 0===L||null===(t=L.getCart)||void 0===t?void 0:t.deliveryCharge))),b("tr",{className:"cart-subtotal"},b("td",null,b("h4",null,"Subtotal")),b("td",{className:"price-col"},b("span",null,"OMR ",null===L||void 0===L||null===(r=L.getCart)||void 0===r?void 0:r.subTotal))),b("tr",{className:"order-total"},b("td",null,b("h4",null,"Total")),b("td",null,b("b",{className:"total-price"},b("span",null,"OMR",null===L||void 0===L||null===(s=L.getCart)||void 0===s?void 0:s.grandTotal)))))),b("div",{className:"payment-methods"},b("h4",{className:""},"Payment methods"),b("div",{className:"info-box with-icon p-0"},b("div",{className:"custom-control custom-radio d-flex"},b("input",{type:"radio",className:"custom-control-input",name:"radio",defaultChecked:!0}),b("label",{className:"custom-control-label"},"Cash on Delivery")))),b("button",{type:"submit",value:"Place Order",name:"form-control",className:"btn btn-dark btn-place-order hoverbtn",onClick:B},"Place order")))))))))})))},7728:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/checkout",function(){return t(2774)}])}},function(e){e.O(0,[260,2439,9774,2888,179],(function(){return n=7728,e(e.s=n);var n}));var n=e.O();_N_E=n}]);