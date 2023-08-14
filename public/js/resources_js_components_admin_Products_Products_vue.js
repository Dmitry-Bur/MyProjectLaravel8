"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_Products_Products_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Products/Products.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Products/Products.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../router */ "./resources/js/router.js");
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
  name: "Products",
  data: function data() {
    return {
      products: []
    };
  },
  mounted: function mounted() {
    this.getProducts();
  },
  methods: {
    getProducts: function getProducts() {
      var _this = this;

      axios.get('/api/admin/products').then(function (res) {
        console.log(res);
        console.log(res.data.data);
        console.log(123); // console.log(res.data.data.subcategories);

        _this.products = res.data.data;
      });
    },
    create: function create() {
      axios.get('/api/admin/products/create').then(function (res) {});
    },
    edit: function edit(id) {
      //  console.log(id);
      // axios.get(`/api/admin/products/${id}/edit`)
      //  .then(res =>{
      _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
        name: 'admin.products.edit',
        params: {
          id: id
        }
      }); // console.log(res.data);
      //   })
    }
  }
});

/***/ }),

/***/ "./resources/js/components/admin/Products/Products.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/Products/Products.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Products_vue_vue_type_template_id_17d93ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=17d93ef4&scoped=true& */ "./resources/js/components/admin/Products/Products.vue?vue&type=template&id=17d93ef4&scoped=true&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Products/Products.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_17d93ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Products_vue_vue_type_template_id_17d93ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "17d93ef4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Products/Products.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Products/Products.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/Products/Products.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Products/Products.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Products/Products.vue?vue&type=template&id=17d93ef4&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/admin/Products/Products.vue?vue&type=template&id=17d93ef4&scoped=true& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_17d93ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_17d93ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_17d93ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=template&id=17d93ef4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Products/Products.vue?vue&type=template&id=17d93ef4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Products/Products.vue?vue&type=template&id=17d93ef4&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Products/Products.vue?vue&type=template&id=17d93ef4&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", [
      _c("div", { staticClass: "col-lg-12 grid-margin stretch-card w-75" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h4", { staticClass: "card-title" }, [_vm._v("Продукция111")]),
            _vm._v(" "),
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table table-striped" }, [
                _c("thead", [
                  _c("tr", [
                    _c("td", { attrs: { colspan: "5" } }, [
                      _c(
                        "div",
                        [
                          _c(
                            "router-link",
                            {
                              attrs: {
                                to: { name: "admin.products.create" },
                                title: "Добавить новый продукт",
                              },
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "icon-md mdi mdi-plus-circle text-success",
                              }),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm._m(0),
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.products, function (product) {
                    return _c("tr", [
                      _c("td", [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(product.id) +
                            "\n                                "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                    " +
                            _vm._s(product.name) +
                            "\n                                "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", { staticClass: "block" }, [
                          _c(
                            "button",
                            {
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  return _vm.edit(product.id)
                                },
                              },
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "icon-md mdi mdi-pencil-box text-success",
                              }),
                            ]
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", [
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function ($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "p",
                                      undefined,
                                      $event.key,
                                      undefined
                                    )
                                  ) {
                                    return null
                                  }
                                  $event.preventDefault()
                                  return _vm.showDeleteCategory(_vm.category.id)
                                },
                              },
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "icon-md  mdi mdi-delete-forever text-danger ",
                              }),
                            ]
                          ),
                        ]),
                      ]),
                    ])
                  }),
                  0
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [
        _vm._v(
          "\n                                    Id\n                                "
        ),
      ]),
      _vm._v(" "),
      _c("th", [
        _vm._v(
          "\n                                    Наименование продукта\n                                "
        ),
      ]),
      _vm._v(" "),
      _c("th", [
        _vm._v(
          "\n                                    Редактировать\n                                "
        ),
      ]),
      _vm._v(" "),
      _c("th", [
        _vm._v(
          "\n                                    Удалить\n                                "
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);