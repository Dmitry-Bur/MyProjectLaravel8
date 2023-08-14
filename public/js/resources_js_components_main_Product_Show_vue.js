"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_Product_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/Product/Show.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/Product/Show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Show",
  data: function data() {
    return {
      product: null,
      images: [],
      image_prev: null,
      quantity: 1,
      cart: JSON.parse(localStorage.getItem('cart')),
      idsCartt: []
    };
  },
  mounted: function mounted() {
    this.getProduct();
    this.idsCart();
  },
  methods: {
    getProduct: function getProduct() {
      var _this = this;

      console.log(888999);
      console.log(this.$route.params.id);
      axios.get("/api/show/".concat(this.$route.params.id)).then(function (res) {
        _this.product = res.data.data;
        _this.images = res.data.data.images;
        _this.image_prev = res.data.data.image_prev[0].url;
        delete _this.product['images'];
        delete _this.product['image_prev'];
        _this.quantity = _this.quantityInCart; // присваиваем к инпуту количество если есть этот товар в корзине
      });
    },
    addToCart: function addToCart(id, name, price, quantity, image) {
      var toCart = [];

      if (this.cart && this.cart.find(function (item) {
        return item.id === id;
      }) !== undefined) {
        console.log('++--');
        return 0;
      }

      if (!this.cart) {
        toCart[0] = {
          id: id,
          name: name,
          price: price,
          quantity: quantity,
          image: image
        };
        localStorage.setItem('cart', JSON.stringify(toCart)); // console.log(toCart);
      } else {
        this.cart.push({
          id: id,
          name: name,
          price: price,
          quantity: quantity,
          image: image
        });
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }

      this.cart = JSON.parse(localStorage.getItem('cart'));
      this.idsCartt.push(id);
      console.log(this.idsCartt);
    },
    idsCart: function idsCart() {
      var _this2 = this;

      if (!this.cart) {
        return 0;
      } else {
        this.cart.forEach(function (res) {
          _this2.idsCartt.push(res.id);
        });
      }

      console.log(this.idsCartt);
    },
    inCart: function inCart(id) {
      if (!this.idsCartt) {
        return 0;
      } else {
        if (this.idsCartt.indexOf(id) === -1) {
          return 0;
        } else {
          return true;
        }
      }
    },
    removeFromCart: function removeFromCart(id) {
      var cart_ = this.cart.filter(function (item) {
        return item.id !== id;
      });
      localStorage.setItem('cart', JSON.stringify(cart_));
      this.cart = cart_;
      var idsCartt_ = this.idsCartt.filter(function (item) {
        return item !== id;
      });
      this.idsCartt = idsCartt_;
      console.log(cart_);
      console.log(this.idsCartt);
    }
  },
  computed: {
    quantityInCart: function quantityInCart() {
      var _this3 = this;

      var quantity;
      this.cart.filter(function (item) {
        if (item.id === _this3.product.id) {
          console.log(item.id);
          console.log('w');
          quantity = item.quantity;
        } else {
          quantity = 1;
        }
      });
      return quantity;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/main/Product/Show.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/main/Product/Show.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_72c69e90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=72c69e90& */ "./resources/js/components/main/Product/Show.vue?vue&type=template&id=72c69e90&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/components/main/Product/Show.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_72c69e90___WEBPACK_IMPORTED_MODULE_0__.render,
  _Show_vue_vue_type_template_id_72c69e90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/Product/Show.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/Product/Show.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/main/Product/Show.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/Product/Show.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/main/Product/Show.vue?vue&type=template&id=72c69e90&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/main/Product/Show.vue?vue&type=template&id=72c69e90& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_72c69e90___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_72c69e90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_72c69e90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Show.vue?vue&type=template&id=72c69e90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/Product/Show.vue?vue&type=template&id=72c69e90&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/Product/Show.vue?vue&type=template&id=72c69e90&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/Product/Show.vue?vue&type=template&id=72c69e90& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.product
    ? _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "product-details" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "product-gallery-box m-b-60" }, [
                  _c(
                    "div",
                    { staticClass: "product-image--large overflow-hidden" },
                    [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: {
                          id: "img-zoom",
                          src: _vm.images[0].url,
                          "data-zoom-image":
                            "main/assets/img/product/gallery/gallery-large/product-gallery-large-1.jpg",
                          alt: "",
                        },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "pos-relative m-t-30" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "product-image--thumb product-image--thumb-horizontal overflow-hidden swiper-outside-arrow-hover m-lr-30",
                        attrs: { id: "gallery-zoom" },
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "swiper-wrapper" },
                          _vm._l(_vm.images, function (image) {
                            return _c(
                              "div",
                              { staticClass: "swiper-slide w-25" },
                              [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      "data-image":
                                        "main/assets/img/product/gallery/gallery-large/product-gallery-large-2.jpg",
                                      "data-zoom-image":
                                        "main/assets/img/product/gallery/gallery-large/product-gallery-large-2.jpg",
                                    },
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-fluid",
                                      attrs: { src: image.url, alt: "" },
                                    }),
                                  ]
                                ),
                              ]
                            )
                          }),
                          0
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(0),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6" }, [
                _c("div", { staticClass: "product-details-box" }, [
                  _c("h5", { staticClass: "section-content__title" }, [
                    _vm._v(_vm._s(_vm.product.name)),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-reference" }, [
                    _vm._v("Брэнд: " + _vm._s(_vm.product.brand.name)),
                  ]),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "product__price" }, [
                    _c("span", { staticClass: "product__price-reg" }, [
                      _vm._v("₽" + _vm._s(_vm.product.price)),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "product-var p-t-30" }, [
                    _c(
                      "div",
                      { staticClass: "product-quantity product-var__item" },
                      [
                        _c("span", { staticClass: "product-var__text" }, [
                          _vm._v("Количество"),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "product-quantity-box" }, [
                          _c("div", { staticClass: "quantity" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.quantity,
                                  expression: "quantity",
                                },
                              ],
                              attrs: {
                                type: "number",
                                min: "1",
                                max: "9",
                                step: "1",
                              },
                              domProps: { value: _vm.quantity },
                              on: {
                                input: function ($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.quantity = $event.target.value
                                },
                              },
                            }),
                          ]),
                          _vm._v(" "),
                          !_vm.inCart(_vm.product.id)
                            ? _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn--box btn--small btn--blue btn--uppercase btn--weight m-l-20",
                                  attrs: {
                                    href: "#",
                                    "data-toggle": "modal",
                                    "data-dismiss": "modal",
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.addToCart(
                                        _vm.product.id,
                                        _vm.product.name,
                                        _vm.product.price,
                                        _vm.quantity,
                                        _vm.image_prev
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "Добавить\n                                        в корзину"
                                  ),
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.inCart(_vm.product.id)
                            ? _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn--box btn--small btn-danger btn--uppercase btn--weight  m-l-20",
                                  attrs: {
                                    href: "#",
                                    "data-toggle": "modal",
                                    "data-dismiss": "modal",
                                  },
                                  on: {
                                    click: function ($event) {
                                      return _vm.removeFromCart(_vm.product.id)
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "Удалить\n                                        из корзины "
                                  ),
                                  _c("i", { staticClass: "fa fa-times" }),
                                ]
                              )
                            : _vm._e(),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12" }, [
          _c(
            "div",
            {
              staticClass:
                "product product--1 border-around product-details-tab-area",
            },
            [
              _c("div", { staticClass: "row" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "product-details-tab-box m-t-50" }, [
                    _c("div", { staticClass: "tab-content" }, [
                      _c(
                        "div",
                        {
                          staticClass: "tab-pane show active",
                          attrs: { id: "product-desc" },
                        },
                        [
                          _c("div", {
                            staticClass: "para__content",
                            domProps: {
                              innerHTML: _vm._s(_vm.product.description),
                            },
                          }),
                        ]
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ]
          ),
        ]),
      ])
    : _vm._e()
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "swiper-buttons" }, [
      _c(
        "div",
        { staticClass: "swiper-button-next gallery__nav gallery__nav--next" },
        [_c("i", { staticClass: "fal fa-chevron-right" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "swiper-button-prev gallery__nav gallery__nav--prev" },
        [_c("i", { staticClass: "fal fa-chevron-left" })]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "review-box m-t-10 m-b-15" }, [
      _c(
        "a",
        {
          staticClass: "link--gray link--icon-left  m-b-5",
          attrs: { href: "#product-review" },
        },
        [
          _c("i", { staticClass: "fal fa-comment-dots" }),
          _vm._v("Читать отзывы (1) "),
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "link--gray link--icon-left m-b-5",
          attrs: { href: "#modalReview", "data-toggle": "modal" },
        },
        [_c("i", { staticClass: "fal fa-edit" }), _vm._v(" Написать отзыв")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "section-content--border" }, [
        _c(
          "ul",
          {
            staticClass:
              "tablist tablist--style-black tablist--style-title tablist--style-gap-70 nav",
          },
          [
            _c("li", [
              _c(
                "a",
                {
                  staticClass: "nav-link active",
                  attrs: { "data-toggle": "tab", href: "#product-desc" },
                },
                [_vm._v("Описание\n                                продукта")]
              ),
            ]),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);