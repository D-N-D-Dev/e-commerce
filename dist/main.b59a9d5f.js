parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function t(t){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?e(Object(i),!0).forEach(function(e){n(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return c(e)||o(e)||r(e)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return s(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function m(e,t,n,a,i,r,o){try{var c=e[r](o),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(a,i)}function p(e){return function(){var t=this,n=arguments;return new Promise(function(a,i){var r=e.apply(t,n);function o(e){m(r,a,i,o,c,"next",e)}function c(e){m(r,a,i,o,c,"throw",e)}o(void 0)})}}var g=contentful.createClient({space:"59i9t2wtqsks",accessToken:"NijxV8hlFa5Qu9CcqCWfCSfT8f8SuQhwwUoVd9prC0Q"}),f=document.querySelector("main"),v=document.querySelector(".hamburger_menu"),y=document.querySelector(".nav"),h=document.querySelector(".log_in"),b=document.querySelector(".sign_up"),x=document.querySelector(".log_in_container"),w=document.querySelector(".signup_container"),q=document.getElementById("signup"),E=document.getElementById("signup_btn"),S=document.querySelector(".user"),C=document.querySelector(".shopping-cart"),I=document.querySelector(".shopping_cart"),L=document.querySelector(".close_signup"),_=document.querySelector(".close_login"),V=document.querySelectorAll(".list"),O=document.querySelectorAll(".sidebar"),k=document.querySelectorAll(".open_left"),N=document.querySelector(".date span"),P=document.querySelector(".email_container small"),T=document.querySelector(".password_container small"),j=document.getElementById("email"),A=document.getElementById("password"),M=document.querySelector("form"),D=document.querySelector(".collections_layout"),U=document.querySelector(".shopping_cart_count"),B=document.querySelector(".subtotal_amount"),F=document.getElementById("item"),z=document.getElementById("cart"),Q=document.querySelector(".cart"),R=document.querySelector(".container"),H=document.querySelector(".review_container");function J(){return Y.apply(this,arguments)}function Y(){return(Y=p(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.getEntries({content_type:"klepo"});case 3:return t=e.sent,n=(n=t.items).map(function(e){var t=e.sys.id,n=e.fields;return{id:t,productName:n.productName,price:n.price}}),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}))).apply(this,arguments)}var Z=[],$=[],G=J();U.innerText="";var W=function(){function e(){u(this,e)}return l(e,[{key:"collectionProduct",value:function(e){var t=e.map(function(e){return'<div class="collections_product_card" id="five">\n      <div class="image_container ">\n        <img src="'.concat(e.image,'" alt="').concat(e.productName,'">\n      </div>\n      <div class="discount_container">\n        <p class="discount"> 20% off</p>\n      </div>\n      <div class="collections_details_container">\n        <span class="product_name">').concat(e.productName,'</span>\n        <span class="review"></span>\n        <span class="store">china best</span>\n        <span class="product_price">N').concat(e.price,'</span>\n        <button class="add_cart" data-id=\'').concat(e.id,'\'>add to cart\n          <span class="fa fa-shopping-cart"></span>  \n        </button>\n        </div>\n      </div>\n  </div>')}).join("");D.insertAdjacentHTML("beforeend",t)}},{key:"retriveProduct",value:function(){var e=this,t=a(document.querySelectorAll(".add_cart"));($=t).forEach(function(t){var n=t.dataset.id;Z.find(function(e){return e.id===n})&&e.buttonDOM(t),t.addEventListener("click",function(a){e.buttonDOM(t),e.retriveLocalStorage(n),e.storedToSTorage(),e.updateCartCount(Z)})})}},{key:"buttonDOM",value:function(e){e.disabled=!0,e.innerText="added to cart"}},{key:"retriveLocalStorage",value:function(e){var n=t(t({},K.getProduct(e)),{},{amount:1});this.displayCartDOM(n),Z=[].concat(a(Z),[n]),this.updated()}},{key:"storedToSTorage",value:function(){K.savedCart(Z)}},{key:"updateCartCount",value:function(e){var t=0,n=0;e.forEach(function(e){n+=parseFloat(e.amount*e.price),t+=e.amount}),U.innerText=t,B.innerText="N".concat(n)}},{key:"displayCartDOM",value:function(e){var t=document.createElement("div");t.classList.add("products_cart"),t.innerHTML='\n    <div class="image_container">\n    <img src="'.concat(e.image,'" alt="').concat(e.title,'">\n  </div>\n            \x3c!-- product name --\x3e\n            <div class="center">\n              <div class="product_name">\n                <p>').concat(e.title,'</p>\n              </div>\n              <div class="shipping">\n                <p>eligible for free shipping with klepo express(lagos only) or klepo prime.</p>\n              </div>\n                  \x3c!-- product price --\x3e\n              <div class="prices">\n                <p>N').concat(e.price,'</p>\n              </div>\n            </div>\n           \x3c!-- product buttons --\x3e\n      <div class="product_buttons">\n  <span class="delete" id="').concat(e.id,'">\n    <i class="fa fa-trash"></i>\n    REMOVE\n  </span>\n  <span class="quantity">\n    <span class= "decrease" id="').concat(e.id,'"> \n      <i class="fa fa-minus-circle decrease"></i>\n    </span>\n    <small class="amount" >').concat(e.amount,'</small>\n    <span class ="increase" id="').concat(e.id,'"> \n      <i class="fa fa-plus-circle increase"></i>\n    </span>\n  </span>\n</div>      \n    '),R.appendChild(t)}},{key:"storeOnLoad",value:function(){Z=K.savedProducts(),this.updateCartCount(Z),this.displayToDOM(Z),this.updateQuantity(Z)}},{key:"displayToDOM",value:function(e){var t=this;e.forEach(function(e){return t.displayCartDOM(e)})}},{key:"updateQuantity",value:function(e){0===e.length?this.empty():this.updated()}},{key:"updated",value:function(){F.innerText="item quantity has been updated",z.innerText="your cart has been updated"}},{key:"empty",value:function(){F.innerText="item quantity is empty",z.innerText="your cart is empty"}},{key:"removeProductCard",value:function(){var e=this;document.querySelector(".container").addEventListener("click",function(t){var n=t.target;if(n.classList.contains("delete")){var a=n.id;Z.map(function(e){return e.id}).forEach(function(t){return e.deleteFunt(a)}),R.removeChild(n.parentElement.parentElement),0===Z.length&&(e.empty(),U.innerText=""),$.forEach(function(e){e.disabled=!1,e.innerHTML='add to cart <span class="fa fa-shopping-cart"></span>'})}else if(n.classList.contains("increase")){var i=n.parentElement.id,r=Z.find(function(e){return e.id===i});r.amount+=1,n.parentElement.parentElement.children[1].innerText=r.amount,K.savedCart(Z),e.updateCartCount(Z)}else if(n.classList.contains("decrease")){var o=n.parentElement.id,c=Z.find(function(e){return e.id===o});c.amount=c.amount-1,n.parentElement.parentElement.children[1].innerText=c.amount,e.updateCartCount(Z),0==c.amount&&(e.deleteFunt(o),R.removeChild(n.parentElement.parentElement.parentElement.parentElement))}})}},{key:"deleteFunt",value:function(e){Z=Z.filter(function(t){return t.id!==e}),this.storedToSTorage(),this.updateCartCount(Z)}}]),e}(),K=function(){function e(){u(this,e)}return l(e,null,[{key:"storeProduct",value:function(e){localStorage.setItem("productsList",JSON.stringify(e))}},{key:"getProduct",value:function(e){return JSON.parse(localStorage.getItem("productsList")).find(function(t){return t.id===e})}},{key:"savedCart",value:function(e){localStorage.setItem("cartList",JSON.stringify(e))}},{key:"getSavedCart",value:function(e){return JSON.parse(localStorage.getItem("cartList")).find(function(t){return t.id===e})}},{key:"savedProducts",value:function(){return localStorage.getItem("cartList")?JSON.parse(localStorage.getItem("cartList")):[]}},{key:"deleteStorage",value:function(e){}}]),e}();function X(){window.addEventListener("scroll",function(){var e=y.getBoundingClientRect().height,t=window.pageYOffset;console.log(t),y.style.display=t>e?"none":"block"})}window.addEventListener("DOMContentLoaded",function(){var e=new W;e.storeOnLoad(),G.then(function(t){e.collectionProduct(t),e.retriveProduct(),K.storeProduct(t),e.removeProductCard()})}),X();var ee=[{id:201,name:"Nulla",price:207,subCategoryId:101,categoryId:1,rate:2.44,content:"Culpa sed tenetur incidunt quia veniam sed mollitia exercitationem. Laboriosam reprehenderit laborum pariatur",review:78,typeVariant:"D",colorVariant:"5",imageUrl:"https://placeholdit.imgix.net/~text?txtsize=55&txt=137x945&w=137&h=945"},{id:202,name:"Corporis",price:271,subCategoryId:101,categoryId:1,rate:2.18,content:"Nam incidunt blanditiis odio inventore. Nobis voluptatum quibusdam laboriosam a numquam. Delectus sequi ipsa possimus.",review:67,typeVariant:"A",colorVariant:"4",imageUrl:"https://dummyimage.com/931x785"},{id:203,name:"Minus",price:295,subCategoryId:101,categoryId:1,rate:.91,content:"Quod reiciendis aspernatur ipsum cum debitis. Quisquam tempore doloremque quo ipsum ipsa tempora. Dignissimos qui ex.",review:116,typeVariant:"E",colorVariant:"2",imageUrl:"https://dummyimage.com/556x985"},{id:204,name:"Qui",price:280,subCategoryId:101,categoryId:1,rate:3.11,content:"Occaecati dolore assumenda facilis error quaerat. Rem harum alias cum eum quam corporis. Esse numquam vero facilis labore.",review:78,typeVariant:"D",colorVariant:"3",imageUrl:"https://dummyimage.com/855x573"},{id:205,name:"Blanditiis",price:138,subCategoryId:101,categoryId:1,rate:2.42,content:"Reiciendis dolorum debitis occaecati assumenda totam ex. Ullam iure dolore excepturi unde in libero modi molestiae. Voluptate .",review:156,typeVariant:"A",colorVariant:"2",imageUrl:"https://placeholdit.imgix.net/~text?txtsize=55&txt=79x934&w=79&h=934"},{id:206,name:"Est",price:296,subCategoryId:101,categoryId:1,rate:4.32,content:"Aut consequatur fugit ut voluptates fugit numquam vero velit. Distinctio minima quo nesciunt maiores.",review:107,typeVariant:"E",colorVariant:"3",imageUrl:"https://dummyimage.com/135x733"},{id:207,name:"Incidunt",price:183,subCategoryId:101,categoryId:1,rate:4.19,content:"Nam aperiam rem atque ut eius molestiae ex omnis. Ex consequatur ipsam quaerat nam provident. Maiores q.",review:174,typeVariant:"E",colorVariant:"3",imageUrl:"https://placeholdit.imgix.net/~text?txtsize=55&txt=578x984&w=578&h=984"},{id:208,name:"Ratione",price:104,subCategoryId:101,categoryId:1,rate:4.64,content:"Occaecati nam laudantium est quos. Fuga molestias facere consequatur sapiente cum reprehenderit quibusdam. Earum omnis i.",review:104,typeVariant:"B",colorVariant:"3",imageUrl:"https://placeholdit.imgix.net/~text?txtsize=55&txt=808x46&w=808&h=46"},{id:209,name:"Similique",price:262,subCategoryId:101,categoryId:1,rate:.29,content:"Autem blanditiis similique saepe excepturi at error. Fugit qui accusantium expedita. Illo similique suscipit sunt magni eos est.",review:44,typeVariant:"C",colorVariant:"3",imageUrl:"http://www.lorempixel.com/577/852"},{id:210,name:"Molestias",price:145,subCategoryId:101,categoryId:1,rate:.15,content:"Deserunt ad ducimus recusandae praesentium. Repudiandae officia aliquam quas mollitia. Voluptatum ipsam iure eos.",review:95,typeVariant:"E",colorVariant:"2",imageUrl:"https://dummyimage.com/76x231"},{id:211,name:"Modi",price:228,subCategoryId:101,categoryId:1,rate:2.94,content:"Iure similique perferendis quia optio provident asperiores ad. Perferendis id voluptatibus impedit. Rerum totam quam distin.",review:153,typeVariant:"E",colorVariant:"4",imageUrl:"https://placeholdit.imgix.net/~text?txtsize=55&txt=533x992&w=533&h=992"},{id:212,name:"Voluptatibus",price:172,subCategoryId:101,categoryId:1,rate:2.68,content:"Cum aperiam sapiente non magni sequi facere. Et nihil soluta illum ipsum fuga vero. Magnam ni.",review:29,typeVariant:"C",colorVariant:"4",imageUrl:"https://dummyimage.com/153x1011"},{id:213,name:"Sapiente",price:100,subCategoryId:101,categoryId:1,rate:1.89,content:"Totam repudiandae assumenda facilis quod suscipit repellat delectus eligendi. Nihil repellendus officiis officia.",review:200,typeVariant:"B",colorVariant:"1",imageUrl:"https://dummyimage.com/379x367"},{id:214,name:"Alias",price:152,subCategoryId:101,categoryId:1,rate:.17,content:"At non doloribus alias optio delectus sit. Aperiam officiis soluta molestias asperiores similique reiciendis pariatur. Ab .",review:68,typeVariant:"B",colorVariant:"4",imageUrl:"https://placeholdit.imgix.net/~text?txtsize=55&txt=470x604&w=470&h=604"},{id:215,name:"Non",price:189,subCategoryId:101,categoryId:1,rate:3.51,content:"Eligendi rem perspiciatis quas accusamus. Consequatur perferendis placea.",review:86,typeVariant:"B",colorVariant:"3",imageUrl:"https://dummyimage.com/624x281"},{id:216,name:"Quaerat",price:280,subCategoryId:102,categoryId:1,rate:.81,content:"Nisi eos aspernatur exercitationem eius architecto dignissimos. Nam recusandae repellat saepe hic.",review:135,typeVariant:"E",colorVariant:"2",imageUrl:"http://www.lorempixel.com/864/326"},{id:217,name:"Odit",price:238,subCategoryId:102,categoryId:1,rate:2.35,content:"Beatae voluptatem soluta maxime non dignissimos. Doloribus asperiores dicta iusto itaque vel quos.",review:186,typeVariant:"A",colorVariant:"3",imageUrl:"https://placeholdit.imgix.net/~text?txtsize=55&txt=270x252&w=270&h=252"},{id:218,name:"Quibusdam",price:100,subCategoryId:102,categoryId:1,rate:3.44,content:"Consectetur nihil inventore ut delectus. Soluta eius soluta nisi eius. Accusantium atque impedit consectetur odio ea omnis.",review:125,typeVariant:"B",colorVariant:"3",imageUrl:"https://placeholdit.imgix.net/~text?txtsize=55&txt=757x645&w=757&h=645"},{id:219,name:"Velit",price:130,subCategoryId:102,categoryId:1,rate:3.27,content:"Sint quibusdam ratione eos. Alias accusantium fugit eum dolores aliquid eum. Odit repellendus molestias veniam inventore earum.",review:125,typeVariant:"D",colorVariant:"5",imageUrl:"https://dummyimage.com/839x368"}],te=ee.map(function(e){return e}),ne=te.map(function(e){return'\n  <div class="individual_review up" id="one">\n  <div class="reviewer_image">\n    <img src="'.concat(e.imageUrl,'" alt="').concat(e.name,'">\n  </div>\n  <div class="text_container">\n    <span class="reviewer_heading">\n      <h1>').concat(e.name,'</h1>\n    </span>\n    <span class="reviewer_location">\n    <p>Lagos, Nigeria</p>\n      </span>\n    <span class="comments">\n    <p>\n       ').concat(e.content,"\n       </P>\n    </span>\n  </div>\n</div>\n  ")}).join("");H.innerHTML=ne;var ae=[{productName:"Female Shirt",productPrice:"N2,700",images:"./img/product-1.jpg"},{productName:"Gucci Jeans",productPrice:"N12,000",images:"./img/product-2.jpg"},{productName:"Ladies Butterfly",productPrice:"N5,000",images:"./img/product-3.jpg"},{productName:"Navy-Colored Shirt",productPrice:"N20,00",images:"./img/product-4.jpg"},{productName:"Paul Smit Male Jeans",productPrice:"N20,000",images:"/img/product-5.jpg"},{productName:"Male Free",productPrice:"N12,00",images:"/img/product-6.jpg"},{productName:"Female Hoodie",productPrice:"N30,000",images:"./img/product-7.jpg"}],ie=function(e){var t=e.map(function(e){return'\n     <div class="product_card" id="five">\n     <div class="image_container ">\n       <img src="'.concat(e.images,'" alt="joggers">\n     </div>\n     <div class="price_details_container">\n       <span class="name">').concat(e.productName,'</span>\n       <span class="review"></span>\n       <span class="price">').concat(e.productPrice,"</span>\n     </div>\n   </div>\n   ")}).join("");document.querySelector(".product_card_layout").insertAdjacentHTML("beforeend",t)};function re(e){e.classList.add("error")}function oe(e){e.classList.add("correct")}function ce(e){e.forEach(function(e){""===e.value.trim()&&(e.value="",re(e))})}function se(e){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.value.trim())?oe(e):re(e)}function ue(e,t,n){e.value.length<t?re(e):e.value.length>n?re(e):oe(e)}function de(e){e.classList.toggle("open_sidebar")}function le(e,t){t.classList.contains("open_sidebar")?e.innerHTML='<i class="fa fa-times"></i>':e.innerHTML='<i class="fa fa-bars"></i>'}function me(e){e.classList.remove("open_sidebar")}function pe(e){e.classList.add("active")}function ge(e){e.classList.remove("active")}ie(ae),M.addEventListener("submit",function(e){e.preventDefault(),ce([j,A]),se(j),ue(A,6,30)}),v.addEventListener("click",function(){de(y),le(v,y)}),V.forEach(function(e){e.addEventListener("click",function(e){var t=e.currentTarget.dataset.id;pe(document.getElementById(t))})}),k.forEach(function(e){e.addEventListener("click",function(){O.forEach(function(e){ge(e)})})});var fe=window.matchMedia("(min-width:768px)");function ve(e){e.matches&&V.forEach(function(e){e.addEventListener("mouseover",function(e){var t=e.currentTarget.dataset.id;document.getElementById(t).classList.toggle("active")})})}function ye(e){e.classList.add("sign")}function he(e){e.classList.remove("sign")}function be(e){e.classList.add("open")}function xe(e){e.classList.remove("open")}b.addEventListener("click",function(){ye(w),me(y),le(v,y),xe(x)}),L.addEventListener("click",function(){he(w)}),E.addEventListener("click",function(){be(x),me(y),le(v,y),he(w)}),h.addEventListener("click",function(){be(x),me(y),le(v,y),he(w)}),q.addEventListener("click",function(){ye(w),me(y),le(v,y),xe(x)}),_.addEventListener("click",function(){xe(x)}),C.addEventListener("click",function(){I.classList.toggle("shop")}),S.addEventListener("click",function(){x.classList.toggle("open"),he(w)});var we=(new Date).getFullYear();N.innerText=we;
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.b59a9d5f.js.map