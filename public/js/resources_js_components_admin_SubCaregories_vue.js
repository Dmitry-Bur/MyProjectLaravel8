"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_admin_SubCaregories_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SubCaregories.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SubCaregories.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "SubCaregories",
  data: function data() {
    return {
      categories: null,
      newFlag: null,
      editFlagId: null,
      name: null,
      idSelectCat: null,
      selectSubCategories: null,
      editSubCat: [],
      deleteSubCat: []
    };
  },
  mounted: function mounted() {
    this.getCategories();
  },
  methods: {
    show: function show() {
      var _this = this;

      console.log(88888);
      console.log(this.deleteSubCat);

      if (this.deleteSubCat.length) {
        this.$modal.show('dialog', {
          title: "<b><div class=\"text-danger\">" + 'Внимание' + "</div></b>",
          text: 'При удалении подкатегории, все её продукты будут удалены.',
          buttons: [{
            title: 'Отмена',
            handler: function handler() {
              _this.$modal.hide('dialog');
            }
          }, {
            title: "<b><div class=\"text-danger\">" + 'Подтвердить' + "</div></b>",
            handler: function handler() {
              _this.$modal.hide('dialog');

              _this.EditSubCategories();
            }
          }]
        });
      } else {
        this.EditSubCategories();
      }
    },
    showDeleteCategory: function showDeleteCategory(ID) {
      //this.delId = ID
      this.show();
    },
    getCategories: function getCategories() {
      var _this2 = this;

      axios.get('/api/admin/categories').then(function (res) {
        console.log(res);
        console.log(res.data.data);
        console.log(123); // console.log(res.data.data.subcategories);

        _this2.categories = res.data.data;
      });
      console.log(this.idSelectCat);
    },
    addSubCategory: function addSubCategory() {
      var _this3 = this;

      console.log(this.name);
      console.log(this.idSelectCat);
      axios.post("/api/admin/subcategories/", {
        category_id: this.idSelectCat,
        name: this.name
      }).then(function (res) {
        _this3.getCategories();

        _this3.newFlag = null;
      });
    },
    showAddSubCategory: function showAddSubCategory() {
      this.newFlag = 1;
      this.editFlagId = null;
    },
    getEditSubCategory: function getEditSubCategory(Id, name) {
      var _this4 = this;

      // this.selectSubCategories = null
      this.newFlag = null;
      this.editFlagId = Id;
      axios.get("/api/admin/subcategories/".concat(Id)).then(function (res) {
        _this4.selectSubCategories = res.data.data; //  this.show(name,   this.selectSubCategories)
      });
    },
    EditSubCategories: function EditSubCategories() {
      var _this5 = this;

      var ids = [];
      var id = 3;
      var names = [];
      var category_ids = [];
      this.selectSubCategories.forEach(function (value) {
        ids.push('name', value.name);
      });
      console.log(this.deleteSubCat);
      console.log(9999999999999);
      console.log(this.selectSubCategories);
      console.log(ids);
      axios.patch("/api/admin/subcategories/".concat(this.editFlagId), {
        subcat: this.selectSubCategories,
        delete_subcategories: this.deleteSubCat
      }).then(function (res) {
        _this5.newFlag = null;
        _this5.editFlagId = null;
        _this5.selectSubCategories = null;

        _this5.getCategories();
      });
    },
    closeWin: function closeWin() {
      this.newFlag = null;
      this.editFlagId = null;
      this.selectSubCategories = null;
    },
    delSubCategories: function delSubCategories(Id) {
      this.deleteSubCat.push(Id);
    },
    cancelDelSubCategories: function cancelDelSubCategories(Id) {
      var del = null;
      del = this.deleteSubCat.indexOf(Id, 0);
      this.deleteSubCat.splice(del, 1);
    },
    showDeleteSubCategory: function showDeleteSubCategory(Id) {
      var del = null;

      if ((del = this.deleteSubCat.indexOf(Id, 0)) !== -1) {
        return Id;
      } else {
        return 0;
      }
    }
  },
  computed: {}
});

/***/ }),

/***/ "./resources/js/components/admin/SubCaregories.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/SubCaregories.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubCaregories_vue_vue_type_template_id_bcac423a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubCaregories.vue?vue&type=template&id=bcac423a&scoped=true& */ "./resources/js/components/admin/SubCaregories.vue?vue&type=template&id=bcac423a&scoped=true&");
/* harmony import */ var _SubCaregories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubCaregories.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/SubCaregories.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubCaregories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubCaregories_vue_vue_type_template_id_bcac423a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _SubCaregories_vue_vue_type_template_id_bcac423a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "bcac423a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/SubCaregories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/SubCaregories.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/SubCaregories.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubCaregories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubCaregories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SubCaregories.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubCaregories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/SubCaregories.vue?vue&type=template&id=bcac423a&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/admin/SubCaregories.vue?vue&type=template&id=bcac423a&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubCaregories_vue_vue_type_template_id_bcac423a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubCaregories_vue_vue_type_template_id_bcac423a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubCaregories_vue_vue_type_template_id_bcac423a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SubCaregories.vue?vue&type=template&id=bcac423a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SubCaregories.vue?vue&type=template&id=bcac423a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SubCaregories.vue?vue&type=template&id=bcac423a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/admin/SubCaregories.vue?vue&type=template&id=bcac423a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("Подкатегории")]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive" }, [
                _c("table", { staticClass: "table table-striped" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("td", { attrs: { colspan: "4" } }, [
                        !_vm.newFlag && !this.editFlagId
                          ? _c("div", [
                              _c(
                                "a",
                                {
                                  attrs: {
                                    href: "#",
                                    title: "Добавить новую подкатегорию",
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
                                      return _vm.showAddSubCategory.apply(
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
                        _vm.newFlag && !this.editFlagId
                          ? _c("div", [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  {
                                    attrs: { for: "exampleFormControlSelect2" },
                                  },
                                  [
                                    _vm._v(
                                      "Выбирите главную категорию, для создание подкатегории"
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.idSelectCat,
                                        expression: "idSelectCat",
                                      },
                                    ],
                                    staticClass: "form-control mb-3",
                                    attrs: { id: "exampleFormControlSelect2" },
                                    on: {
                                      change: function ($event) {
                                        var $$selectedVal =
                                          Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function (o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function (o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                        _vm.idSelectCat = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      },
                                    },
                                  },
                                  _vm._l(_vm.categories, function (category) {
                                    return _c(
                                      "option",
                                      { domProps: { value: category.id } },
                                      [_vm._v(_vm._s(category.name))]
                                    )
                                  }),
                                  0
                                ),
                                _vm._v(" "),
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
                                    disabled: !_vm.idSelectCat,
                                    type: "text",
                                    placeholder: "Имя новой подкатегории",
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
                              ]),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-success mt-3",
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      return _vm.addSubCategory.apply(
                                        null,
                                        arguments
                                      )
                                    },
                                  },
                                },
                                [
                                  _vm._v(
                                    "Добавить\n                                            "
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
                                      "\n                                                    Закрыть"
                                    ),
                                  ]
                                ),
                              ]),
                            ])
                          : _vm._e(),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      !_vm.selectSubCategories
                        ? _c("th", [
                            _vm._v(
                              "\n                                        Id\n                                    "
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.selectSubCategories
                        ? _c("th", [
                            _vm._v(
                              "\n                                        Главная категория\n                                    "
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.selectSubCategories
                        ? _c("th", [
                            _vm._v(
                              "\n                                        Редактировать подкатегории\n                                    "
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.selectSubCategories
                        ? _c("th", [
                            _vm._v(
                              "\n                                        Имя подкатегории\n                                    "
                            ),
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.selectSubCategories
                        ? _c("th", [
                            _vm._v(
                              "\n                                        Удалить\n                                    "
                            ),
                          ])
                        : _vm._e(),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.categories, function (category) {
                        return !_vm.selectSubCategories
                          ? _c("tr", [
                              _vm.editFlagId !== category.id
                                ? _c("td", [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(category.id) +
                                        "\n                                    "
                                    ),
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.editFlagId !== category.id
                                ? _c("td", [
                                    _vm._v(
                                      "\n                                        " +
                                        _vm._s(category.name) +
                                        "\n                                    "
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
                                              return _vm.getEditSubCategory(
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
                            ])
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _vm._l(
                        _vm.selectSubCategories,
                        function (selectSubCategory, key) {
                          return _vm.selectSubCategories && _vm.editFlagId
                            ? _c("tr", [
                                _c("td", { attrs: { colspan: "1" } }, [
                                  _c("div", [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: selectSubCategory.name,
                                          expression: "selectSubCategory.name",
                                        },
                                      ],
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: selectSubCategory.name,
                                      },
                                      on: {
                                        input: function ($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            selectSubCategory,
                                            "name",
                                            $event.target.value
                                          )
                                        },
                                      },
                                    }),
                                  ]),
                                ]),
                                _vm._v(" "),
                                _c("td", { attrs: { colspan: "1" } }, [
                                  !_vm.showDeleteSubCategory(
                                    selectSubCategory.id
                                  )
                                    ? _c(
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
                                              return _vm.delSubCategories(
                                                selectSubCategory.id
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
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.showDeleteSubCategory(
                                    selectSubCategory.id
                                  )
                                    ? _c("div", [
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
                                                return _vm.cancelDelSubCategories(
                                                  selectSubCategory.id
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                Восстановить\n                                            "
                                            ),
                                          ]
                                        ),
                                      ])
                                    : _vm._e(),
                                ]),
                              ])
                            : _vm._e()
                        }
                      ),
                      _vm._v(" "),
                      _vm.editFlagId
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-success mt-3",
                              on: {
                                click: function ($event) {
                                  $event.preventDefault()
                                  _vm.show() /*EditSubCategories()*/
                                },
                              },
                            },
                            [
                              _vm._v(
                                "Редактировать\n                                "
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.editFlagId
                        ? _c("div", { staticClass: "text-" }, [
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
                                    return _vm.closeWin.apply(null, arguments)
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                                        Закрыть"
                                ),
                              ]
                            ),
                          ])
                        : _vm._e(),
                    ],
                    2
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
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);