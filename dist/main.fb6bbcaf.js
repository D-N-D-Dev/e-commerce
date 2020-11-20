// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// contentful code
var client = contentful.createClient({
  space: "59i9t2wtqsks",
  accessToken: "NijxV8hlFa5Qu9CcqCWfCSfT8f8SuQhwwUoVd9prC0Q"
}); // variables

var main = document.querySelector("main");
var hamburger = document.querySelector(".hamburger_menu");
var nav = document.querySelector(".nav");
var logIN = document.querySelector(".log_in");
var signUP = document.querySelector(".sign_up");
var logINContainer = document.querySelector(".log_in_container");
var signUpContainer = document.querySelector(".signup_container");
var goSignUp = document.getElementById("signup");
var goLogin = document.getElementById("signup_btn");
var user = document.querySelector(".user");
var shoppingCart = document.querySelector(".shopping-cart");
var shoppingContainer = document.querySelector(".shopping_cart");
var closedSignup = document.querySelector(".close_signup");
var closedLogin = document.querySelector(".close_login");
var link = document.querySelectorAll(".list");
var sideBar = document.querySelectorAll(".sidebar");
var closes = document.querySelectorAll(".open_left");
var curDate = document.querySelector(".date span");
var emailErr = document.querySelector(".email_container small");
var passwordErr = document.querySelector(".password_container small");
var Email = document.getElementById("email");
var password = document.getElementById("password");
var submit = document.querySelector("form");
var collections = document.querySelector(".collections_layout");
var cartDOM = document.querySelector(".shopping_cart_count");
var totalCartAmount = document.querySelector(".subtotal_amount");
var shopQuantity = document.getElementById("item");
var shopItem = document.getElementById("cart");
var productCardContainer = document.querySelector(".cart");
var container = document.querySelector(".container");
var reviewcontainer = document.querySelector(".review_container");
var button = document.querySelector("button");
/******************GOOGLE API **********************/

function googleAPI() {
  window.gapi.load("client:auth2", function () {
    window.gapi.client.init({
      clientId: "614866311839-vbs9lk21j969dn80suvc2jb6mkgis3cn.apps.googleusercontent.com",
      scope: "email"
    }).then(function () {
      init();
    }).catch(function (error) {
      console.log(error);
    });
  });
}

googleAPI();

function init() {
  var auth = gapi.auth2.getAuthInstance();
  auth.isSignIn = null;
  button.addEventListener("click", function () {
    auth.signIn();
    button.innerText = "LOG OUT WITH GOOGLE";

    if (auth.isSignedIn === true) {
      auth.signOut();
      button.innerText = "LOG IN WITH GOOGLE";
      console.log(auth.isSignedIn);
    }
  });
}

function fetchData() {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var data, getData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return client.getEntries({
              content_type: "klepo"
            });

          case 3:
            data = _context.sent;
            // let data = await datas.json();
            getData = data.items;
            getData = getData.map(function (item) {
              var id = item.sys.id;
              var _item$fields = item.fields,
                  productName = _item$fields.productName,
                  price = _item$fields.price;
              var url = item.fields.images.fields.file.url;
              return {
                id: id,
                productName: productName,
                price: price,
                url: url
              };
            });
            return _context.abrupt("return", getData);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _fetchData.apply(this, arguments);
}

var cart = [];
var buttonsDOMs = [];
var savedData = fetchData();
cartDOM.innerText = "";

var GetProduct = /*#__PURE__*/function () {
  function GetProduct() {
    _classCallCheck(this, GetProduct);
  }

  _createClass(GetProduct, [{
    key: "collectionProduct",
    // constructor(){
    value: function collectionProduct(product) {
      var gettingProduct = product.map(function (product) {
        return "<div class=\"collections_product_card\" id=\"five\">\n      <div class=\"image_container \">\n        <img src=\"".concat(product.url, "\" alt=\"").concat(product.productName, "\">\n      </div>\n      <div class=\"discount_container\">\n        <p class=\"discount\"> 20% off</p>\n      </div>\n      <div class=\"collections_details_container\">\n        <span class=\"product_name\">").concat(product.productName, "</span>\n        <span class=\"review\"></span>\n        <span class=\"store\">china best</span>\n        <span class=\"product_price\">N").concat(product.price, "</span>\n        <button class=\"add_cart\" data-id='").concat(product.id, "'>add to cart\n          <span class=\"fa fa-shopping-cart\"></span>  \n        </button>\n        </div>\n      </div>\n  </div>");
      }).join("");
      collections.insertAdjacentHTML("beforeend", gettingProduct); // addCart(btnArr);
      // this.retriveProduct(btnArr);
    }
  }, {
    key: "retriveProduct",
    value: function retriveProduct() {
      var _this = this;

      var getbutton = document.querySelectorAll(".add_cart");

      var btnArr = _toConsumableArray(getbutton);

      buttonsDOMs = btnArr;
      buttonsDOMs.forEach(function (button) {
        var id = button.dataset.id; // product in the cart

        var inCart = cart.find(function (product) {
          return product.id === id;
        }); // console.log(cart);

        if (inCart) {
          _this.buttonDOM(button);
        }

        button.addEventListener("click", function (event) {
          // get product of clicked button
          _this.buttonDOM(button); // retrive product from DOM


          _this.retriveLocalStorage(id); // push data to local storage


          _this.storedToSTorage(); // update cart count value and total price
          // this.updateCartCount();
          // this.updateCartCount();
          // display product in the DOM

        });
      });
    }
  }, {
    key: "buttonDOM",
    value: function buttonDOM(button) {
      button.disabled = true;
      button.innerText = "added to cart";
    }
  }, {
    key: "retriveLocalStorage",
    value: function retriveLocalStorage(id) {
      var storedRetrivedData = Storage.getProduct(id); // add the amount to stored Retrived Data

      var cartItems = _objectSpread(_objectSpread({}, storedRetrivedData), {}, {
        amount: 1
      }); // saved all data to the shopping cart


      this.displayCartDOM(cartItems); // add

      cart = [].concat(_toConsumableArray(cart), [cartItems]); // this.removeProductCard();

      this.updateCartCount(cart);
      this.updated();
    }
  }, {
    key: "storedToSTorage",
    value: function storedToSTorage() {
      Storage.savedCart(cart);
    }
  }, {
    key: "updateCartCount",
    value: function updateCartCount(cart) {
      var cartCount = 0;
      var totalAmount = 0;
      cart.forEach(function (product) {
        totalAmount += product.amount * parseInt(product.price);
        cartCount += product.amount;
      });
      cartDOM.innerText = cartCount;
      totalCartAmount.innerText = "N".concat(totalAmount, ",000");
    }
  }, {
    key: "displayCartDOM",
    value: function displayCartDOM(product) {
      var cartDiv = document.createElement("div");
      cartDiv.classList.add("products_cart");
      cartDiv.innerHTML = "\n    <div class=\"image_container\">\n    <img src=\"".concat(product.url, "\" alt=\"").concat(product.productName, "\">\n  </div>\n            <!-- product name -->\n            <div class=\"center\">\n              <div class=\"product_name\">\n                <p>").concat(product.productName, "</p>\n              </div>\n              <div class=\"shipping\">\n                <p>eligible for free shipping with klepo express(lagos only) or klepo prime.</p>\n              </div>\n                  <!-- product price -->\n              <div class=\"prices\">\n                <p>N").concat(product.price, "</p>\n              </div>\n            </div>\n           <!-- product buttons -->\n      <div class=\"product_buttons\">\n  <span class=\"delete\" id=\"").concat(product.id, "\">\n    <i class=\"fa fa-trash\"></i>\n    REMOVE\n  </span>\n  <span class=\"quantity\">\n    <span class= \"decrease\" id=\"").concat(product.id, "\"> \n      <i class=\"fa fa-minus-circle decrease\"></i>\n    </span>\n    <small class=\"amount\" >").concat(product.amount, "</small>\n    <span class =\"increase\" id=\"").concat(product.id, "\"> \n      <i class=\"fa fa-plus-circle increase\"></i>\n    </span>\n  </span>\n</div>      \n    ");
      container.appendChild(cartDiv);
    }
  }, {
    key: "storeOnLoad",
    value: function storeOnLoad() {
      cart = Storage.savedProducts();
      this.updateCartCount(cart);
      this.displayToDOM(cart);
      this.updateQuantity(cart); // console.log(cart);
    }
  }, {
    key: "displayToDOM",
    value: function displayToDOM(cart) {
      var _this2 = this;

      cart.forEach(function (cart) {
        return _this2.displayCartDOM(cart);
      }); // this.removeProductCard();
    }
  }, {
    key: "updateQuantity",
    value: function updateQuantity(cart) {
      if (cart.length === 0) {
        this.empty();
      } else {
        this.updated();
      }
    }
  }, {
    key: "updated",
    value: function updated() {
      shopQuantity.innerText = "item quantity has been updated";
      shopItem.innerText = "your cart has been updated";
    }
  }, {
    key: "empty",
    value: function empty() {
      shopQuantity.innerText = "item quantity is empty";
      shopItem.innerText = "your cart is empty";
    }
  }, {
    key: "removeProductCard",
    value: function removeProductCard() {
      var _this3 = this;

      var productCard = document.querySelector(".container");
      productCard.addEventListener("click", function (event) {
        var targeted = event.target; // REMOVING INDIVIDUAL PRODUCT FROM THE CART

        if (targeted.classList.contains("delete")) {
          var removeID = targeted.id; // get product in the Cart

          var ItemID = cart.map(function (item) {
            return item.id;
          });
          ItemID.forEach(function (item) {
            return _this3.deleteFunt(removeID);
          }); // remove from the dom

          container.removeChild(targeted.parentElement.parentElement); // update the "added to cart" to "add to cart with cart icon"

          if (cart.length === 0) {
            _this3.empty();

            cartDOM.innerText = "";
          }

          buttonsDOMs.forEach(function (button) {
            button.disabled = false;
            button.innerHTML = "add to cart <span class=\"fa fa-shopping-cart\"></span>";
          }); // INCREASING THE QUANTITY
        } else if (targeted.classList.contains("increase")) {
          var removeElem = targeted.parentElement.id; // get the amount from the cart

          var productsItem = cart.find(function (item) {
            return item.id === removeElem;
          }); // increase the amount in the cart

          productsItem.amount += 1; // get the parent container and find the child with the small container

          var amountDOM = targeted.parentElement.parentElement.children[1]; // update the amount DOM

          amountDOM.innerText = productsItem.amount; //  saved new cart to localStorage

          Storage.savedCart(cart); // update cart local storage

          _this3.updateCartCount(cart);
        } else if (targeted.classList.contains("decrease")) {
          var elemID = targeted.parentElement.id; // get the item of the cart

          var item = cart.find(function (item) {
            return item.id === elemID;
          }); // get the amount of the item in the cart

          item.amount = item.amount - 1; // get the parent container and find the child with the small container

          var _amountDOM = targeted.parentElement.parentElement.children[1]; // Update the amount DOM

          _amountDOM.innerText = item.amount; //  saved new cart to localStorage

          _this3.updateCartCount(cart);

          if (item.amount == 0) {
            _this3.deleteFunt(elemID);

            container.removeChild(targeted.parentElement.parentElement.parentElement.parentElement);
          }
        }
      });
    }
  }, {
    key: "deleteFunt",
    value: function deleteFunt(id) {
      cart = cart.filter(function (item) {
        return item.id !== id;
      }); // store the new cart array to the local storage

      this.storedToSTorage(); // update the cart count and total

      this.updateCartCount(cart);
    }
  }]);

  return GetProduct;
}();

var Storage = /*#__PURE__*/function () {
  function Storage() {
    _classCallCheck(this, Storage);
  }

  _createClass(Storage, null, [{
    key: "storeProduct",
    value: function storeProduct(product) {
      localStorage.setItem("productsList", JSON.stringify(product));
    }
  }, {
    key: "getProduct",
    value: function getProduct(id) {
      var product = JSON.parse(localStorage.getItem("productsList"));
      return product.find(function (product) {
        return product.id === id;
      });
    }
  }, {
    key: "savedCart",
    value: function savedCart(product) {
      localStorage.setItem("cartList", JSON.stringify(product));
    }
  }, {
    key: "getSavedCart",
    value: function getSavedCart(id) {
      var product = JSON.parse(localStorage.getItem("cartList"));
      return product.find(function (product) {
        return product.id === id;
      });
    }
  }, {
    key: "savedProducts",
    value: function savedProducts() {
      // return JSON.parse(localStorage.getItem("cartList"));
      return localStorage.getItem("cartList") ? JSON.parse(localStorage.getItem("cartList")) : [];
    }
  }, {
    key: "deleteStorage",
    value: function deleteStorage(id) {// return localStorage.remove(id);
    }
  }]);

  return Storage;
}();

window.addEventListener("DOMContentLoaded", function () {
  var product = new GetProduct();
  product.storeOnLoad();
  savedData.then(function (resolve) {
    product.collectionProduct(resolve);
    product.retriveProduct();
    Storage.storeProduct(resolve);
    product.removeProductCard();
  });
});
/************* HIDE THE UL ON THE DESTOP VIEW ON SCROLL***********/
// const mediaQuery = window.matchMedia("(min-width:768px)");

function onScroll() {
  // if (e.matches) {
  window.addEventListener("scroll", function () {
    var linkHeight = nav.getBoundingClientRect().height;
    var scrollHeight = window.pageYOffset;
    console.log(scrollHeight);

    if (scrollHeight > linkHeight) {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  }); // }
}

onScroll(); // mediaQuery.addListener(onscroll);

/*DYNAMIC REVIEW */

var Product = [{
  id: 201,
  name: "Nulla",
  price: 207,
  subCategoryId: 101,
  categoryId: 1,
  rate: 2.44,
  content: "Culpa sed tenetur incidunt quia veniam sed mollitia exercitationem. Laboriosam reprehenderit laborum pariatur",
  review: 78,
  typeVariant: "D",
  colorVariant: "5",
  imageUrl: "https://placeholdit.imgix.net/~text?txtsize=55&txt=137x945&w=137&h=945"
}, {
  id: 202,
  name: "Corporis",
  price: 271,
  subCategoryId: 101,
  categoryId: 1,
  rate: 2.18,
  content: "Nam incidunt blanditiis odio inventore. Nobis voluptatum quibusdam laboriosam a numquam. Delectus sequi ipsa possimus.",
  review: 67,
  typeVariant: "A",
  colorVariant: "4",
  imageUrl: "https://dummyimage.com/931x785"
}, {
  id: 203,
  name: "Minus",
  price: 295,
  subCategoryId: 101,
  categoryId: 1,
  rate: 0.91,
  content: "Quod reiciendis aspernatur ipsum cum debitis. Quisquam tempore doloremque quo ipsum ipsa tempora. Dignissimos qui ex.",
  review: 116,
  typeVariant: "E",
  colorVariant: "2",
  imageUrl: "https://dummyimage.com/556x985"
}, {
  id: 204,
  name: "Qui",
  price: 280,
  subCategoryId: 101,
  categoryId: 1,
  rate: 3.11,
  content: "Occaecati dolore assumenda facilis error quaerat. Rem harum alias cum eum quam corporis. Esse numquam vero facilis labore.",
  review: 78,
  typeVariant: "D",
  colorVariant: "3",
  imageUrl: "https://dummyimage.com/855x573"
}, {
  id: 205,
  name: "Blanditiis",
  price: 138,
  subCategoryId: 101,
  categoryId: 1,
  rate: 2.42,
  content: "Reiciendis dolorum debitis occaecati assumenda totam ex. Ullam iure dolore excepturi unde in libero modi molestiae. Voluptate .",
  review: 156,
  typeVariant: "A",
  colorVariant: "2",
  imageUrl: "https://placeholdit.imgix.net/~text?txtsize=55&txt=79x934&w=79&h=934"
}, {
  id: 206,
  name: "Est",
  price: 296,
  subCategoryId: 101,
  categoryId: 1,
  rate: 4.32,
  content: "Aut consequatur fugit ut voluptates fugit numquam vero velit. Distinctio minima quo nesciunt maiores.",
  review: 107,
  typeVariant: "E",
  colorVariant: "3",
  imageUrl: "https://dummyimage.com/135x733"
}, {
  id: 207,
  name: "Incidunt",
  price: 183,
  subCategoryId: 101,
  categoryId: 1,
  rate: 4.19,
  content: "Nam aperiam rem atque ut eius molestiae ex omnis. Ex consequatur ipsam quaerat nam provident. Maiores q.",
  review: 174,
  typeVariant: "E",
  colorVariant: "3",
  imageUrl: "https://placeholdit.imgix.net/~text?txtsize=55&txt=578x984&w=578&h=984"
}, {
  id: 208,
  name: "Ratione",
  price: 104,
  subCategoryId: 101,
  categoryId: 1,
  rate: 4.64,
  content: "Occaecati nam laudantium est quos. Fuga molestias facere consequatur sapiente cum reprehenderit quibusdam. Earum omnis i.",
  review: 104,
  typeVariant: "B",
  colorVariant: "3",
  imageUrl: "https://placeholdit.imgix.net/~text?txtsize=55&txt=808x46&w=808&h=46"
}, {
  id: 209,
  name: "Similique",
  price: 262,
  subCategoryId: 101,
  categoryId: 1,
  rate: 0.29,
  content: "Autem blanditiis similique saepe excepturi at error. Fugit qui accusantium expedita. Illo similique suscipit sunt magni eos est.",
  review: 44,
  typeVariant: "C",
  colorVariant: "3",
  imageUrl: "http://www.lorempixel.com/577/852"
}, {
  id: 210,
  name: "Molestias",
  price: 145,
  subCategoryId: 101,
  categoryId: 1,
  rate: 0.15,
  content: "Deserunt ad ducimus recusandae praesentium. Repudiandae officia aliquam quas mollitia. Voluptatum ipsam iure eos.",
  review: 95,
  typeVariant: "E",
  colorVariant: "2",
  imageUrl: "https://dummyimage.com/76x231"
}, {
  id: 211,
  name: "Modi",
  price: 228,
  subCategoryId: 101,
  categoryId: 1,
  rate: 2.94,
  content: "Iure similique perferendis quia optio provident asperiores ad. Perferendis id voluptatibus impedit. Rerum totam quam distin.",
  review: 153,
  typeVariant: "E",
  colorVariant: "4",
  imageUrl: "https://placeholdit.imgix.net/~text?txtsize=55&txt=533x992&w=533&h=992"
}, {
  id: 212,
  name: "Voluptatibus",
  price: 172,
  subCategoryId: 101,
  categoryId: 1,
  rate: 2.68,
  content: "Cum aperiam sapiente non magni sequi facere. Et nihil soluta illum ipsum fuga vero. Magnam ni.",
  review: 29,
  typeVariant: "C",
  colorVariant: "4",
  imageUrl: "https://dummyimage.com/153x1011"
}, {
  id: 213,
  name: "Sapiente",
  price: 100,
  subCategoryId: 101,
  categoryId: 1,
  rate: 1.89,
  content: "Totam repudiandae assumenda facilis quod suscipit repellat delectus eligendi. Nihil repellendus officiis officia.",
  review: 200,
  typeVariant: "B",
  colorVariant: "1",
  imageUrl: "https://dummyimage.com/379x367"
}, {
  id: 214,
  name: "Alias",
  price: 152,
  subCategoryId: 101,
  categoryId: 1,
  rate: 0.17,
  content: "At non doloribus alias optio delectus sit. Aperiam officiis soluta molestias asperiores similique reiciendis pariatur. Ab .",
  review: 68,
  typeVariant: "B",
  colorVariant: "4",
  imageUrl: "https://placeholdit.imgix.net/~text?txtsize=55&txt=470x604&w=470&h=604"
}, {
  id: 215,
  name: "Non",
  price: 189,
  subCategoryId: 101,
  categoryId: 1,
  rate: 3.51,
  content: "Eligendi rem perspiciatis quas accusamus. Consequatur perferendis placea.",
  review: 86,
  typeVariant: "B",
  colorVariant: "3",
  imageUrl: "https://dummyimage.com/624x281"
}, {
  id: 216,
  name: "Quaerat",
  price: 280,
  subCategoryId: 102,
  categoryId: 1,
  rate: 0.81,
  content: "Nisi eos aspernatur exercitationem eius architecto dignissimos. Nam recusandae repellat saepe hic.",
  review: 135,
  typeVariant: "E",
  colorVariant: "2",
  imageUrl: "http://www.lorempixel.com/864/326"
}, {
  id: 217,
  name: "Odit",
  price: 238,
  subCategoryId: 102,
  categoryId: 1,
  rate: 2.35,
  content: "Beatae voluptatem soluta maxime non dignissimos. Doloribus asperiores dicta iusto itaque vel quos.",
  review: 186,
  typeVariant: "A",
  colorVariant: "3",
  imageUrl: "https://placeholdit.imgix.net/~text?txtsize=55&txt=270x252&w=270&h=252"
}, {
  id: 218,
  name: "Quibusdam",
  price: 100,
  subCategoryId: 102,
  categoryId: 1,
  rate: 3.44,
  content: "Consectetur nihil inventore ut delectus. Soluta eius soluta nisi eius. Accusantium atque impedit consectetur odio ea omnis.",
  review: 125,
  typeVariant: "B",
  colorVariant: "3",
  imageUrl: "https://placeholdit.imgix.net/~text?txtsize=55&txt=757x645&w=757&h=645"
}, {
  id: 219,
  name: "Velit",
  price: 130,
  subCategoryId: 102,
  categoryId: 1,
  rate: 3.27,
  content: "Sint quibusdam ratione eos. Alias accusantium fugit eum dolores aliquid eum. Odit repellendus molestias veniam inventore earum.",
  review: 125,
  typeVariant: "D",
  colorVariant: "5",
  imageUrl: "https://dummyimage.com/839x368"
}];
var review = Product.map(function (review) {
  // const { name, content, imageUrl } = review;
  // return [name, content, imageUrl];
  return review;
});
var displayReview = review.map(function (curReview) {
  return "\n  <div class=\"individual_review up\" id=\"one\">\n  <div class=\"reviewer_image\">\n    <img src=\"".concat(curReview.imageUrl, "\" alt=\"").concat(curReview.name, "\">\n  </div>\n  <div class=\"text_container\">\n    <span class=\"reviewer_heading\">\n      <h1>").concat(curReview.name, "</h1>\n    </span>\n    <span class=\"reviewer_location\">\n    <p>Lagos, Nigeria</p>\n      </span>\n    <span class=\"comments\">\n    <p>\n       ").concat(curReview.content, "\n       </P>\n    </span>\n  </div>\n</div>\n  ");
}).join("");
reviewcontainer.innerHTML = displayReview;
/****************************BEST SELLING*************************/

var bestSelling = [{
  productName: "Female Shirt",
  productPrice: "N2,700",
  images: "./img/product-1.jpg"
}, {
  productName: "Gucci Jeans",
  productPrice: "N12,000",
  images: "./img/product-2.jpg"
}, {
  productName: "Ladies Butterfly",
  productPrice: "N5,000",
  images: "./img/product-3.jpg"
}, {
  productName: "Navy-Colored Shirt",
  productPrice: "N20,00",
  images: "./img/product-4.jpg"
}, {
  productName: "Paul Smit Male Jeans",
  productPrice: "N20,000",
  images: "/img/product-5.jpg"
}, {
  productName: "Male Free",
  productPrice: "N12,00",
  images: "/img/product-6.jpg"
}, {
  productName: "Female Hoodie",
  productPrice: "N30,000",
  images: "./img/product-7.jpg"
}];

var bestSell = function bestSell(product) {
  var bestSellingDOM = product.map(function (product) {
    return "\n     <div class=\"product_card\" id=\"five\">\n     <div class=\"image_container \">\n       <img src=\"".concat(product.images, "\" alt=\"joggers\">\n     </div>\n     <div class=\"price_details_container\">\n       <span class=\"name\">").concat(product.productName, "</span>\n       <span class=\"review\"></span>\n       <span class=\"price\">").concat(product.productPrice, "</span>\n     </div>\n   </div>\n   ");
  }).join("");
  var bestSellingContainer = document.querySelector(".product_card_layout");
  bestSellingContainer.insertAdjacentHTML("beforeend", bestSellingDOM);
};

bestSell(bestSelling);
/********************LOGIN VALIDATION***********************/
// function smallEl(input, error) {
//   const trial = input.parentElement;
//   let small = trial.querySelector("small");
//   small.innerText = error;
// }

function classError(input) {
  input.classList.add("error");
}

function classCorrect(input) {
  input.classList.add("correct");
}

function onEmpty(input) {
  input.forEach(function (input) {
    if (input.value.trim() === "") {
      input.value = ""; // smallEl(input, `${input.id} must be filled!`);

      classError(input);
    }
  });
} // email validation


function EmailValidation(input) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(input.value.trim())) {
    classError(input); // smallEl(input, `${input.id} is invalid!`);
  } else {
    classCorrect(input);
  }
} // password length


function passwordLength(input, min, max) {
  if (input.value.length < min) {
    classError(input); // smallEl(input, `${input.id} should be not less than ${min} charaters.`);
  } else if (input.value.length > max) {
    classError(input); // smallEl(input, `${input.id} should not be more than ${max} charaters.`);
  } else {
    classCorrect(input);
  }
}

submit.addEventListener("submit", function (e) {
  e.preventDefault();
  onEmpty([Email, password]);
  EmailValidation(Email);
  passwordLength(password, 6, 30);
}); // function emptyInput(inputArr) {
//   // if (!input.value === "") {
//   console.log(inputArr.value);
//   // }
// }

/********************SIGN UP VALIDATION***********************/

/********************TOGGLING HAMBURGER  MENU***********************/
//toggling the menu bar function

function toggleMenu(val) {
  val.classList.toggle("open_sidebar");
} // changing icon on click of the menu bar function


function changeIcon(menu, val) {
  if (val.classList.contains("open_sidebar")) {
    menu.innerHTML = "<i class=\"fa fa-times\"></i>";
  } else {
    menu.innerHTML = "<i class=\"fa fa-bars\"></i>";
  }
} // togggling the hamburger menu event


hamburger.addEventListener("click", function () {
  toggleMenu(nav);
  changeIcon(hamburger, nav);
}); // close hamburger menu

function CloseMenu(menu) {
  menu.classList.remove("open_sidebar");
}
/********************TOGGLING PRODUCT SIDE BAR***********************/
// opening each product side bar


function openSideBar(id) {
  id.classList.add("active");
} // remove the active class


function closeSideBar(id) {
  id.classList.remove("active");
} // get links id


link.forEach(function (curlink) {
  curlink.addEventListener("click", function (e) {
    var listID = e.currentTarget.dataset.id;
    var Id = document.getElementById(listID);
    openSideBar(Id);
  });
}); // remove active class from sideBar

closes.forEach(function (cur) {
  cur.addEventListener("click", function () {
    sideBar.forEach(function (curr) {
      closeSideBar(curr);
    });
  });
});
/****************DROP DOWN FOR LARGER SCREEN***********************/

var jsMedia = window.matchMedia("(min-width:768px)"); // console.log(jsMedia);

function hoverMenu(e) {
  if (e.matches) {
    link.forEach(function (curLink) {
      // console.log("hey");
      curLink.addEventListener("mouseover", function (e) {
        // console.log(e);
        var clicked = e.currentTarget.dataset.id;
        var clickedID = document.getElementById(clicked);
        clickedID.classList.toggle("active");
      });
    });
  }
} // jsMedia.addEventListener("change", hoverMenu);
// hoverMenu(jsMedia);
// link.forEach((cur) => {
//   cur.addEventListener("click", () => {
//     console.log("working");
//   });
// });

/****************OPEN AND CLOSE SIGN UP CONTAINERS******************/
// sign up function


function signUp(sign) {
  sign.classList.add("sign");
} // sign up events


signUP.addEventListener("click", function () {
  // open the sign up
  signUp(signUpContainer); // close hamburger menu

  CloseMenu(nav); // change the icon

  changeIcon(hamburger, nav); // close log in container if present

  closeLogin(logINContainer);
}); //close signup container

function closeSignUp(sign) {
  sign.classList.remove("sign");
} // close signup toggle


closedSignup.addEventListener("click", function () {
  closeSignUp(signUpContainer);
}); // access login container from the sign up

goLogin.addEventListener("click", function () {
  //open the login
  logIn(logINContainer); // close hamburger menu

  CloseMenu(nav); // change the icon

  changeIcon(hamburger, nav); // close sign up container if present

  closeSignUp(signUpContainer);
});
/****************OPEN AND CLOSE LOGIN CONTAINERS******************/
// log in function

function logIn(varl) {
  varl.classList.add("open");
} // log in events


logIN.addEventListener("click", function () {
  //open the login
  logIn(logINContainer); // close hamburger menu

  CloseMenu(nav); // change the icon

  changeIcon(hamburger, nav); // close sign up container if present

  closeSignUp(signUpContainer);
}); //close login container

function closeLogin(varl) {
  varl.classList.remove("open");
} // access sign up container from the login button


goSignUp.addEventListener("click", function () {
  // open the sign up
  signUp(signUpContainer); // close hamburger menu

  CloseMenu(nav); // change the icon

  changeIcon(hamburger, nav); // close log in container if present

  closeLogin(logINContainer);
});
closedLogin.addEventListener("click", function () {
  closeLogin(logINContainer);
});
/*******************SHOPPING CART FUNCTION**************************/
// shopping cart toggling

shoppingCart.addEventListener("click", function () {
  shoppingContainer.classList.toggle("shop");
});
/*******************USER ICON TOGGLE LOGIN BAR*******************/
// toggle the login from the user icon

user.addEventListener("click", function () {
  logINContainer.classList.toggle("open");
  closeSignUp(signUpContainer);
});
/************GET CURRENT DATE******************************/

var currentDate = new Date().getFullYear();
curDate.innerText = currentDate; // window.addEventListener("click", () => {
//   CloseMenu(nav);
//   console.log(nav);
// });
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61459" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map