"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_Cart_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/Cart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/Cart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Cart",
  data: function data() {
    return {
      cartProducts: JSON.parse(localStorage.getItem('cart')),
      totalPrices: [],
      quantity: null
    };
  },
  mounted: function mounted() {
    this.getCart();
  },
  methods: {
    getCart: function getCart() {
      var pr = JSON.stringify(this.product); // localStorage.setItem('_cart',pr)
    },
    removeFromCart: function removeFromCart(id) {
      var cart_ = this.cartProducts.filter(function (item) {
        return item.id !== id;
      });
      localStorage.setItem('cart', JSON.stringify(cart_));
      this.cartProducts = cart_;
      console.log(cart_);
    }
  },
  computed: {
    orderPrice: function orderPrice() {
      var Sum = 0;

      if (this.cartProducts) {
        this.cartProducts.forEach(function (pr) {
          Sum = Sum + pr.quantity * pr.price;
        });
        return Sum;
      } else {
        return 0;
      }
    }
  },
  watch: {
    cartProducts: {
      handler: function handler(newVal, oldVal) {
        this.cartProducts = newVal;
        localStorage.setItem('cart', JSON.stringify(newVal));
      },
      deep: true
    }
  }
});

/***/ }),

/***/ "./resources/js/components/main/Cart.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/main/Cart.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cart_vue_vue_type_template_id_8740f5ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart.vue?vue&type=template&id=8740f5ca&scoped=true& */ "./resources/js/components/main/Cart.vue?vue&type=template&id=8740f5ca&scoped=true&");
/* harmony import */ var _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart.vue?vue&type=script&lang=js& */ "./resources/js/components/main/Cart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Cart_vue_vue_type_template_id_8740f5ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Cart_vue_vue_type_template_id_8740f5ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8740f5ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/Cart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/Cart.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/main/Cart.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/Cart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/main/Cart.vue?vue&type=template&id=8740f5ca&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/main/Cart.vue?vue&type=template&id=8740f5ca&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_8740f5ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_8740f5ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_8740f5ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cart.vue?vue&type=template&id=8740f5ca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/Cart.vue?vue&type=template&id=8740f5ca&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/Cart.vue?vue&type=template&id=8740f5ca&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/Cart.vue?vue&type=template&id=8740f5ca&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-12" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "table-content table-responsive cart-table-content m-t-30",
        },
        [
          _c("table", [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.cartProducts, function (cartProduct) {
                return _c("tr", [
                  _c(
                    "td",
                    { staticClass: "product-thumbnail" },
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "main.show",
                              params: { id: cartProduct.id },
                            },
                          },
                        },
                        [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: cartProduct.image,
                              alt: cartProduct.name,
                            },
                          }),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("td", { staticClass: "product-name" }, [
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v(_vm._s(cartProduct.name)),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "product-price-cart" }, [
                    _c("span", { staticClass: "amount" }, [
                      _vm._v("₽" + _vm._s(cartProduct.price)),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "product-quantities" }, [
                    _c("div", { staticClass: "quantity d-inline-block" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: cartProduct.quantity,
                            expression: "cartProduct.quantity",
                          },
                        ],
                        attrs: {
                          type: "number",
                          min: "1",
                          step: "1",
                          value: "1",
                        },
                        domProps: { value: cartProduct.quantity },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              cartProduct,
                              "quantity",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "product-subtotal" }, [
                    _vm._v(
                      "₽" + _vm._s(cartProduct.price * cartProduct.quantity)
                    ),
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "product-remove" }, [
                    _c(
                      "a",
                      {
                        attrs: { href: "#" },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.removeFromCart(cartProduct.id)
                          },
                        },
                      },
                      [_c("i", { staticClass: "fa fa-times" })]
                    ),
                  ]),
                ])
              }),
              0
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _vm._m(2),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-lg-4 col-md-6 offset-8" }, [
      _vm.cartProducts
        ? _c("h4", { staticClass: "grand-total m-tb-25" }, [
            _vm._v("Общая сумма заказа "),
            _c("span", [_vm._v("₽" + _vm._s(_vm.orderPrice))]),
          ])
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-content" }, [
      _c("h5", { staticClass: "section-content__title" }, [
        _vm._v("Ваша корзина покупок"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "gray-bg" }, [
      _c("tr", [
        _c("th", [_vm._v("Изображение")]),
        _vm._v(" "),
        _c("th", [_vm._v("Имя продукта")]),
        _vm._v(" "),
        _c("th", [_vm._v("Цена")]),
        _vm._v(" "),
        _c("th", [_vm._v("Количество")]),
        _vm._v(" "),
        _c("th", [_vm._v("Общая сумма")]),
        _vm._v(" "),
        _c("th", [_vm._v("Удалить")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "cart-table-button m-t-10" }, [
      _c("div", { staticClass: "cart-table-button--left" }, [
        _c(
          "a",
          {
            staticClass:
              "btn btn--box btn--large btn--gray btn--uppercase btn--weight m-t-20",
            attrs: { href: "#" },
          },
          [_vm._v("Очистить корзину")]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "cart-table-button--right" }, [
        _c(
          "a",
          {
            staticClass:
              "btn btn--box btn--large btn--gray btn--uppercase btn--weight m-t-20 m-r-20",
            attrs: { href: "#" },
          },
          [_vm._v("Продолжить покупки")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass:
              "btn btn--box btn--large btn--blue btn--uppercase btn--weight m-t-20",
            attrs: { href: "#" },
          },
          [_vm._v("Заказать")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);