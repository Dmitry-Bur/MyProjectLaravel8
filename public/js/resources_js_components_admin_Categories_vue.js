"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_Categories_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Categories.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Categories.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  name: "Categories",
  data: function data() {
    return {
      name: null,
      categories: [],
      newFlag: null,
      editFlagId: null,
      nameEdit: null,
      editId: null,
      catId: null,
      delId: null
    };
  },
  mounted: function mounted() {
    this.getCategories();
  },
  methods: {
    show: function show(Id) {
      var _this = this;

      this.$modal.show('dialog', {
        title: "<b><div class=\"text-danger\">" + 'Внимание' + "</div></b>",
        text: 'При удалении категории, все её подкатегории и принадлежащие им продукты будут удалены.',
        buttons: [{
          title: 'Отмена',
          handler: function handler() {
            _this.$modal.hide('dialog');
          }
        }, {
          title: "<b><div class=\"text-danger\">" + 'Подтвердить' + "</div></b>",
          handler: function handler() {
            _this.$modal.hide('dialog');

            _this.deleteCategory();
          }
        }]
      });
    },
    getCategories: function getCategories() {
      var _this2 = this;

      axios.get('/api/admin/categories').then(function (res) {
        console.log(res);
        console.log(res.data.data);
        console.log(123); // console.log(res.data.data.subcategories);

        _this2.categories = res.data.data;
      });
    },
    showAddCategory: function showAddCategory() {
      this.newFlag = 1;
      this.editFlagId = null;
    },
    showEditCategory: function showEditCategory(Id, name) {
      this.editFlagId = Id;
      this.nameEdit = name;
      this.editId = Id;
      this.newFlag = null;
      console.log(this.editFlagId);
    },
    addCategory: function addCategory() {
      var _this3 = this;

      axios.post('/api/admin/categories', {
        name: this.name
      }).then(function (res) {
        _this3.name = null;

        _this3.getCategories();
      });
    },
    editCategory: function editCategory() {
      var _this4 = this;

      console.log(this.nameEdit);
      axios.patch("/api/admin/categories/".concat(this.editId), {
        name: this.nameEdit
      }).then(function (res) {
        _this4.getCategories();

        _this4.editFlagId = null;
      });
    },
    showDeleteCategory: function showDeleteCategory(ID) {
      this.delId = ID;
      this.show();
    },
    deleteCategory: function deleteCategory() {
      var _this5 = this;

      axios["delete"]("/api/admin/categories/".concat(this.delId)).then(function (res) {
        _this5.getCategories();
      });
    },
    closeWin: function closeWin() {
      this.editFlagId = null;
      this.newFlag = null;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/admin/Categories.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/admin/Categories.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Categories_vue_vue_type_template_id_761c9947_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=761c9947&scoped=true& */ "./resources/js/components/admin/Categories.vue?vue&type=template&id=761c9947&scoped=true&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/Categories.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_761c9947_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Categories_vue_vue_type_template_id_761c9947_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "761c9947",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/Categories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/Categories.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/admin/Categories.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Categories.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/Categories.vue?vue&type=template&id=761c9947&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/admin/Categories.vue?vue&type=template&id=761c9947&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_761c9947_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_761c9947_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_761c9947_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Categories.vue?vue&type=template&id=761c9947&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Categories.vue?vue&type=template&id=761c9947&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Categories.vue?vue&type=template&id=761c9947&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/Categories.vue?vue&type=template&id=761c9947&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("div", [
        _c("div", { staticClass: "col-lg-12 grid-margin stretch-card w-75" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Категории")]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table table-striped" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("td", { attrs: { colspan: "5" } }, [
                        !_vm.newFlag
                          ? _c("div", [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: "#",
                                    title: "Добавить новую категорию",
                                  },
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
                                      return _vm.showAddCategory.apply(
                                        null,
                                        arguments
                                      )
                                    },
                                  },
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "icon-md mdi mdi-plus-circle text-success",
                                  }),
                                ]
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.newFlag
                          ? _c("div", [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.name,
                                    expression: "name",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder: "Имя новой категории",
                                },
                                domProps: { value: _vm.name },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.name = $event.target.value
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-success mt-3",
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      return _vm.addCategory.apply(
                                        null,
                                        arguments
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "Добавить\n                                        "
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "text-" }, [
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
                                        return _vm.closeWin.apply(
                                          null,
                                          arguments
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                                Закрыть"
                                    ),
                                  ]
                                ),
                              ]),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(0),
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.categories, function (category) {
                      return _c("tr", [
                        _vm.editFlagId !== category.id
                          ? _c("td", [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(category.id) +
                                  "\n                                "
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.editFlagId !== category.id
                          ? _c("td", [
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(category.name) +
                                  "\n                                "
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.editFlagId !== category.id
                          ? _c("td", [
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
                                        return _vm.showEditCategory(
                                          category.id,
                                          category.name
                                        )
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
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.editFlagId !== category.id
                          ? _c("td", [
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
                                        return _vm.showDeleteCategory(
                                          category.id
                                        )
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
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.editFlagId === category.id
                          ? _c("td", { attrs: { colspan: "3" } }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.nameEdit,
                                    expression: "nameEdit",
                                  },
                                ],
                                staticClass: "form-control w-100",
                                attrs: {
                                  type: "text",
                                  placeholder: "Имя новой категории",
                                },
                                domProps: { value: _vm.nameEdit },
                                on: {
                                  input: function ($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.nameEdit = $event.target.value
                                  },
                                },
                              }),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-success mt-3",
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      return _vm.editCategory.apply(
                                        null,
                                        arguments
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "Редактировать\n                                    "
                                  ),
                                ]
                              ),
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.editFlagId === category.id
                          ? _c("td", [
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
                                        return _vm.closeWin.apply(
                                          null,
                                          arguments
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            Закрыть\n                                        "
                                    ),
                                  ]
                                ),
                              ]),
                            ])
                          : _vm._e(),
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
      _vm._v(" "),
      _c("v-dialog"),
    ],
    1
  )
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
          "\n                                    Наименование категории\n                                "
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