"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/mm/main.js?{"page":"pages%2Fuser%2Forder_list%2Forder_list"} ***!
  \**********************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_user_order_list_order_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/user/order_list/order_list.nvue?mpType=page */ 1);


_pages_user_order_list_order_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].mpType = 'page'
_pages_user_order_list_order_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].route = 'pages/user/order_list/order_list'
_pages_user_order_list_order_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"].el = '#root'

new Vue(_pages_user_order_list_order_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_0__["default"])


/***/ }),
/* 1 */
/*!**************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/mm/pages/user/order_list/order_list.nvue?mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_list_nvue_vue_type_template_id_b5deaff4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order_list.nvue?vue&type=template&id=b5deaff4&mpType=page */ 2);
/* harmony import */ var _order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order_list.nvue?vue&type=script&lang=js&mpType=page */ 4);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 11);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./order_list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 9).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./order_list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 9).default)
          }

}

/* normalize component */

var component = Object(_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_list_nvue_vue_type_template_id_b5deaff4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_list_nvue_vue_type_template_id_b5deaff4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "f490a1f4"
  
)

component.options.__file = "Documents/HBuilderProjects/mm/pages/user/order_list/order_list.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 2 */
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/mm/pages/user/order_list/order_list.nvue?vue&type=template&id=b5deaff4&mpType=page ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_template_id_b5deaff4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--3-0!./order_list.nvue?vue&type=template&id=b5deaff4&mpType=page */ 3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_template_id_b5deaff4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_template_id_b5deaff4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 3 */
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--3-0!C:/Users/Administrator/Documents/HBuilderProjects/mm/pages/user/order_list/order_list.nvue?vue&type=template&id=b5deaff4&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: ["tabs"] }, [
      _c(
        "div",
        { staticClass: ["tab"] },
        _vm._l(_vm.orderType, function(tab, tbIndex) {
          return _c(
            "text",
            {
              key: tbIndex,
              staticClass: ["tab-text"],
              class: [tbIndex == _vm.selectIndex ? "tab-text-on" : ""],
              on: {
                click: function($event) {
                  return _vm.showType(tbIndex)
                }
              }
            },
            [_vm._v(_vm._s(tab))]
          )
        }),
        0
      ),
      _c("div", {
        staticClass: ["border"],
        style: { transform: "translateX(" + _vm.translateXW + "px)" }
      })
    ]),
    _c(
      "slider",
      {
        staticClass: ["slider"],
        attrs: { autoPlay: false, infinite: false, index: _vm.selectIndex },
        on: { change: _vm.sliderChange }
      },
      _vm._l(_vm.orderList, function(page, index) {
        return _c(
          "list",
          { key: index, staticClass: ["frame"] },
          [
            page.length == 0
              ? _c("cell", { appendAsTree: true, attrs: { append: "tree" } }, [
                  _vm._m(0, true)
                ])
              : _vm._e(),
            _vm._l(page, function(row, rowIndex) {
              return page.length > 0
                ? _c(
                    "cell",
                    {
                      key: rowIndex,
                      appendAsTree: true,
                      attrs: { append: "tree" }
                    },
                    [
                      _c("div", { staticClass: ["row"] }, [
                        _c("text", { staticClass: ["type"] }, [
                          _vm._v(_vm._s(_vm.typeText[row.state]))
                        ]),
                        _c("div", { staticClass: ["order-info"] }, [
                          _c("div", { staticClass: ["order-info-left"] }, [
                            _c("image", {
                              staticClass: ["left-image"],
                              attrs: {
                                src: _vm.rootPath + row.detailed[0].imagePath
                              }
                            })
                          ]),
                          _c("div", { staticClass: ["order-info-right"] }, [
                            _c(
                              "text",
                              { staticClass: ["order-info-right-name"] },
                              [_vm._v("订单号:" + _vm._s(row.order_sn))]
                            ),
                            row.goods_type == 1
                              ? _c(
                                  "div",
                                  {
                                    staticClass: [
                                      "order-info-right-price-number"
                                    ]
                                  },
                                  [
                                    _c(
                                      "text",
                                      {
                                        staticClass: [
                                          "order-info-right-multiplier"
                                        ]
                                      },
                                      [_vm._v("合计:")]
                                    ),
                                    _c(
                                      "text",
                                      {
                                        staticClass: ["order-info-right-unit"]
                                      },
                                      [_vm._v("￥")]
                                    ),
                                    _c(
                                      "text",
                                      {
                                        staticClass: ["order-info-right-price"]
                                      },
                                      [_vm._v(_vm._s(row.market_price))]
                                    ),
                                    _c(
                                      "text",
                                      {
                                        staticClass: ["order-info-right-number"]
                                      },
                                      [_vm._v(_vm._s(row.numner))]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            row.goods_type == 2
                              ? _c(
                                  "div",
                                  {
                                    staticClass: [
                                      "order-info-right-price-number"
                                    ]
                                  },
                                  [
                                    _c(
                                      "text",
                                      {
                                        staticClass: [
                                          "order-info-right-multiplier"
                                        ]
                                      },
                                      [_vm._v("合计:")]
                                    ),
                                    _c(
                                      "text",
                                      {
                                        staticClass: ["order-info-right-unit"]
                                      },
                                      [_vm._v("￥")]
                                    ),
                                    _c(
                                      "text",
                                      {
                                        staticClass: ["order-info-right-price"]
                                      },
                                      [_vm._v(_vm._s(row.market_price))]
                                    ),
                                    _c(
                                      "text",
                                      {
                                        staticStyle: {
                                          fontSize: "30upx",
                                          paddingTop: "7upx"
                                        }
                                      },
                                      [_vm._v("/")]
                                    ),
                                    _c("image", {
                                      staticStyle: {
                                        width: "40px",
                                        height: "40px"
                                      },
                                      attrs: {
                                        src: "/static/img/icon/dou.png",
                                        mode: ""
                                      }
                                    }),
                                    _c(
                                      "text",
                                      {
                                        staticClass: ["order-info-right-price"]
                                      },
                                      [_vm._v(_vm._s(row.price))]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            row.goods_type == 3
                              ? _c(
                                  "div",
                                  {
                                    staticClass: [
                                      "order-info-right-price-number"
                                    ]
                                  },
                                  [
                                    _c(
                                      "text",
                                      {
                                        staticClass: [
                                          "order-info-right-multiplier"
                                        ]
                                      },
                                      [_vm._v("合计:")]
                                    ),
                                    _c(
                                      "text",
                                      {
                                        staticClass: ["order-info-right-price"]
                                      },
                                      [_vm._v(_vm._s(row.integral_price))]
                                    ),
                                    _c(
                                      "text",
                                      {
                                        staticClass: ["order-info-right-number"]
                                      },
                                      [_vm._v("积分")]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _c("div", { staticClass: ["detail"] }, [
                          _c("text", { staticClass: ["detail-number"] }, [
                            _vm._v(
                              "共" + _vm._s(row.detailed.length) + "件商品"
                            )
                          ]),
                          _vm._m(1, true)
                        ]),
                        _c("div", { staticClass: ["btns"] }, [
                          row.state == "0"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  {
                                    staticClass: ["btns-btn", "default"],
                                    on: {
                                      click: function($event) {
                                        return _vm.cancelOrder(row)
                                      }
                                    }
                                  },
                                  [_vm._v("取消订单")]
                                ),
                                _c(
                                  "text",
                                  {
                                    staticClass: ["btns-btn", "pay"],
                                    on: {
                                      click: function($event) {
                                        return _vm.toPayment(row)
                                      }
                                    }
                                  },
                                  [_vm._v("付款")]
                                )
                              ])
                            : _vm._e(),
                          row.state == "1"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  {
                                    staticClass: ["btns-btn", "default"],
                                    on: {
                                      click: function($event) {
                                        return _vm.remindDeliver(row)
                                      }
                                    }
                                  },
                                  [_vm._v("提醒发货")]
                                )
                              ])
                            : _vm._e(),
                          row.state == "2"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  {
                                    staticClass: ["btns-btn", "default"],
                                    on: {
                                      click: function($event) {
                                        return _vm.showLogistics(row)
                                      }
                                    }
                                  },
                                  [_vm._v("查看物流")]
                                ),
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "pay"] },
                                  [_vm._v("确认收货")]
                                ),
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "pay"] },
                                  [_vm._v("我要退货")]
                                )
                              ])
                            : _vm._e(),
                          row.state == "3"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "default"] },
                                  [_vm._v("评价")]
                                )
                              ])
                            : _vm._e()
                        ])
                      ])
                    ]
                  )
                : _vm._e()
            })
          ],
          2
        )
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: ["onorder"] }, [
      _c("image", {
        staticClass: ["onorder-image"],
        attrs: {
          src: "https://ae01.alicdn.com/kf/HTB1FGJ7XED1gK0jSZFG762d3FXam.png"
        }
      }),
      _c("text", { staticClass: ["onorder-text"] }, [_vm._v("没有相关订单")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: ["detail-sum"] }, [
      _c("text", { staticClass: ["detail-sum-nominal"] }, [
        _vm._v("(在支付页面选择支付方式)")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),
/* 4 */
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/mm/pages/user/order_list/order_list.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--2-0!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--3-0!./order_list.nvue?vue&type=script&lang=js&mpType=page */ 5);
/* harmony import */ var _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_2_0_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_2_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 5 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--2-1!./node_modules/vue-loader/lib??ref--3-0!C:/Users/Administrator/Documents/HBuilderProjects/mm/pages/user/order_list/order_list.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



















































































var _httpApi = _interopRequireDefault(__webpack_require__(/*! ../../../common/httpApi.js */ 7));
var _config = _interopRequireDefault(__webpack_require__(/*! ../../../common/config.js */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _self = void 0;var _default = { data: function data() {return { rootPath: '', selectIndex: 0, translateX: [0, 150, 300, 450, 600, 750], translateXW: 0, orderType: ['全部', '待付款', '待发货', '待收货', '待评价'], typeText: { 0: '待付款', 1: '待发货', 2: '待收货', 3: '待评价' // completed: '交易已完成',
        // refunds: '商品退货处理中',
        // cancelled: '订单已取消'
      }, orderList: [[{ type: 'unpaid', ordersn: 0, goods_id: 0, img: 'https://ae01.alicdn.com/kf/HTB16wepeW5s3KVjSZFNq6AD3FXaJ.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00', payment: 168.0, freight: 12.0, spec: '规格:S码', numner: 1 }, { type: 'unpaid', ordersn: 1, goods_id: 1, img: 'https://ae01.alicdn.com/kf/HTB1duHtcfBj_uVjSZFpq6A0SXXaJ.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00', payment: 168.0, freight: 12.0, spec: '规格:S码', numner: 1 }, { type: 'back', ordersn: 2, goods_id: 1, img: 'https://ae01.alicdn.com/kf/HTB173epeW5s3KVjSZFNq6AD3FXai.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00', payment: 168.0, freight: 12.0, spec: '规格:S码', numner: 1 }, { type: 'unreceived', ordersn: 3, goods_id: 1, img: 'https://ae01.alicdn.com/kf/HTB173epeW5s3KVjSZFNq6AD3FXai.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00', payment: 168.0, freight: 12.0, spec: '规格:S码', numner: 1 }, { type: 'received', ordersn: 4, goods_id: 1, img: 'https://ae01.alicdn.com/kf/HTB1JC1fe.CF3KVjSZJnq6znHFXaG.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00', payment: 168.0, freight: 12.0, spec: '规格:S码', numner: 1 }, { type: 'completed', ordersn: 5, goods_id: 1, img: 'https://ae01.alicdn.com/kf/HTB1GSqoeWWs3KVjSZFxq6yWUXXav.jpg', name: '商品名称商品名称商品名称商品名称商品名称', price: '168.00',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'refunds',
        ordersn: 6,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB1_Mefe3aH3KVjSZFjq6AFWpXaJ.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'cancelled',
        ordersn: 7,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB1Lu1pe8Cw3KVjSZFuq6AAOpXaI.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 }],


      [{
        type: 'unpaid',
        ordersn: 0,
        goods_id: 0,
        img: 'https://ae01.alicdn.com/kf/HTB1iMife3aH3KVjSZFjq6AFWpXaA.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'unpaid',
        ordersn: 1,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB1D6Sfe4iH3KVjSZPfq6xBiVXaG.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 }],


      [
        //无
      ],
      [{
        type: 'unreceived',
        ordersn: 3,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB1IjSfe4iH3KVjSZPfq6xBiVXa4.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 }],

      [{
        type: 'received',
        ordersn: 4,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB16wepeW5s3KVjSZFNq6AD3FXaJ.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 }],

      [{
        type: 'refunds',
        ordersn: 6,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB16wepeW5s3KVjSZFNq6AD3FXaJ.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 }]] };



  },
  created: function created() {
    this.selectIndex = parseInt(uni.getStorageSync('tbIndex')) + 1;
    this.rootPath = _config.default.APIHOST + _config.default.IMGPATH;
    this.httpRequest();
  },
  methods: {
    httpRequest: function httpRequest() {var _this = this;
      uni.showLoading({
        title: '查询中',
        icon: 'none' });

      var data = {
        type: 99 };

      var header = "application/x-www-form-urlencoded";
      var url = _config.default.APIHOST + _config.default.APIPATH + _httpApi.default.cart.orderList;
      uni.request({
        url: url,
        data: data,
        method: "POST",
        header: {
          "content-type": header,
          "token": uni.getStorageSync('token') },

        success: function success(result) {
          console.log(result, " at pages\\user\\order_list\\order_list.nvue:295");
          if (result.data.code != 0) {
            uni.showToast({
              title: result.msg,
              icon: 'none' });

          } else {
            _this.orderList = [];
            var arr0 = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arrAll = [];
            if (result.data.data.length > 0) {
              result.data.data.forEach(function (item) {
                arrAll.push(item);
                switch (item.state) {
                  case 0:
                    arr0.push(item);
                    break;
                  case 1:
                    arr1.push(item);
                    break;
                  case 2:
                    arr2.push(item);
                    break;
                  case 3:
                    arr3.push(item);
                    break;
                  default:
                    break;}

              });
            }
            _this.orderList = [arrAll, arr0, arr1, arr2, arr3];
          }
        },
        fail: function fail(e) {
          uni.showToast({
            title: '通信异常，请稍后再试',
            icon: 'none' });

          console.log(e, " at pages\\user\\order_list\\order_list.nvue:337");
        },
        complete: function complete() {
          uni.hideLoading();
        } });

    },
    showType: function showType(tbIndex) {
      this.selectIndex = tbIndex;
      this.translateXW = this.translateX[tbIndex];
      console.log('this.selectIndex: ' + this.selectIndex, " at pages\\user\\order_list\\order_list.nvue:347");

    },
    sliderChange: function sliderChange(e) {
      this.selectIndex = e.index;
      this.translateXW = this.translateX[e.index];
      console.log('e.index: ' + JSON.stringify(e.index), " at pages\\user\\order_list\\order_list.nvue:353");
    },

    remindDeliver: function remindDeliver(row) {
      uni.showToast({
        title: '已提醒商家发货' });

    },
    cancelOrder: function cancelOrder(row) {var _this2 = this;
      uni.showModal({
        title: '取消订单',
        content: '确定取消此订单？',
        success: function success(res) {
          if (res.confirm) {
            console.log('用户点击确定', " at pages\\user\\order_list\\order_list.nvue:367");
            _this2.doCancelOrder(row.ordersn);
          } else if (res.cancel) {
            console.log('用户点击取消', " at pages\\user\\order_list\\order_list.nvue:370");
          }
        } });

    },
    doCancelOrder: function doCancelOrder(ordersn) {
      var typeNum = this.orderList.length;
      for (var i = 0; i < typeNum; i++) {
        var list = this.orderList[i];
        var orderNum = list.length;
        if (orderNum > 0 && list[0].type == 'unpaid') {
          for (var j = 0; j < orderNum; j++) {
            if (this.orderList[i][j].ordersn == ordersn) {
              this.orderList[i][j].type = 'cancelled';
              break;
            }
          }
        }
      }
    },
    toPayment: function toPayment(row) {
      //本地模拟订单提交UI效果
      uni.showLoading({
        title: '正在获取订单...' });

      var paymentOrder = [];
      paymentOrder.push(row);
      setTimeout(function () {
        uni.setStorage({
          key: 'paymentOrder',
          data: paymentOrder,
          success: function success() {
            uni.hideLoading();
            uni.navigateTo({
              url: '../../pay/payment/payment?price=' + row.price +
              '&market_price=' + row.market_price +
              '&integral_price=' + row.integral_price +
              '&goods_type=' + row.goods_type +
              '&order_sn=' + row.order_sn });

          } });

      }, 500);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 6)["default"]))

/***/ }),
/* 6 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default, weexPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weexPlus", function() { return weexPlus; });
function initUni() {

    var isFn = function isFn(v) {
        return typeof v === 'function';
    };

    var handlePromise = function handlePromise(promise) {
        return promise.then(function(data) {
            return [null, data];
        }).catch(function(err) {
            return [err];
        });
    };

    var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
    var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
        'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
        'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
        'pageScrollTo', 'drawCanvas'
    ];

    var shouldPromise = function shouldPromise(name) {
        if (REGEX.test(name) && name !== 'createBLEConnection') {
            return false;
        }
        if (~API_NORMAL_LIST.indexOf(name)) {
            return false;
        }
        return true;
    };

    var promisify = function promisify(api) {
        return function() {
            for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                params[_key - 1] = arguments[_key];
            }

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
                return api.apply(undefined, [options].concat(params));
            }
            return handlePromise(new Promise(function(resolve, reject) {
                api.apply(undefined, [Object.assign({}, options, {
                    success: resolve,
                    fail: reject
                })].concat(params));
                /* eslint-disable no-extend-native */
                Promise.prototype.finally = function(callback) {
                    var promise = this.constructor;
                    return this.then(function(value) {
                        return promise.resolve(callback()).then(function() {
                            return value;
                        });
                    }, function(reason) {
                        return promise.resolve(callback()).then(function() {
                            throw reason;
                        });
                    });
                };
            }));
        };
    };

    var onMessageCallbacks = [];

    var origin = void 0;

    function onSubNVueMessage(data) {
        onMessageCallbacks.forEach(function(callback) {
            return callback({
                origin: origin,
                data: data
            });
        });
    }

    var webviewId = weexPlus.webview.currentWebview().id;

    var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
    channel.onmessage = function(event) {
        if (event.data.to === webviewId) {
            onSubNVueMessage(event.data.data);
        }
    };

    function wrapper(webview) {
        webview.$processed = true;

        var currentWebviewId = weexPlus.webview.currentWebview().id;
        var isPopupNVue = currentWebviewId === webview.id;

        var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
        var popupNVueId = webview.id;

        webview.postMessage = function(data) {
            if (hostNVueId) {
                channel.postMessage({
                    data: data,
                    to: isPopupNVue ? hostNVueId : popupNVueId
                });
            } else {
                postMessage({
                    type: 'UniAppSubNVue',
                    data: data
                });
            }
        };
        webview.onMessage = function(callback) {
            onMessageCallbacks.push(callback);
        };

        if (!webview.__uniapp_mask_id) {
            return;
        }
        origin = webview.__uniapp_host;

        var maskColor = webview.__uniapp_mask;

        var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
        maskWebview = maskWebview.parent() || maskWebview;//再次检测父
        var oldShow = webview.show;
        var oldHide = webview.hide;
        var oldClose = webview.close;

        var showMask = function showMask() {
            maskWebview.setStyle({
                mask: maskColor
            });
        };
        var closeMask = function closeMask() {
            maskWebview.setStyle({
                mask: 'none'
            });
        };
        webview.show = function() {
            showMask();

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return oldShow.apply(webview, args);
        };
        webview.hide = function() {
            closeMask();

            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }

            return oldHide.apply(webview, args);
        };
        webview.close = function() {
            closeMask();

            for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
            }

            return oldClose.apply(webview, args);
        };
    }

    function getSubNVueById(id) {
        var webview = weexPlus.webview.getWebviewById(id);
        if (webview && !webview.$processed) {
            wrapper(webview);
        }
        return webview;
    }

    function getCurrentSubNVue() {
        return getSubNVueById(weexPlus.webview.currentWebview().id);
    }

    var plus = weex.requireModule('plus');
    var globalEvent = weex.requireModule('globalEvent');

    var id = 0;
    var callbacks = {};

    var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

    globalEvent.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppJsApi') {
            invoke(e.data.id, e.data.data);
        } else if (e.data.type === 'UniAppSubNVue') {
            onSubNVueMessage(e.data.data, e.data.options);
        } else if (e.data.type === 'onNavigationBarButtonTap') {
            if (typeof onNavigationBarButtonTapCallback === 'function') {
                onNavigationBarButtonTapCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
            if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
                onNavigationBarSearchInputChangedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
            if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
                onNavigationBarSearchInputConfirmedCallback(e.data.data);
            }
        } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
            if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
                onNavigationBarSearchInputClickedCallback(e.data.data);
            }
        }
    });

    var createCallback = function createCallback(args, type) {
        var callback = function callback(res) {
            if (isFn(args)) {
                args(res);
            } else if (args) {
                if (~res.errMsg.indexOf(':ok')) {
                    isFn(args.success) && args.success(res);
                } else if (~res.errMsg.indexOf(':fail')) {
                    isFn(args.fail) && args.fail(res);
                }
                isFn(args.complete) && args.complete(res);
            }
        };
        if (isFn(args) || args && isFn(args.callback)) {
            callback.keepAlive = true;
        }
        return callback;
    };

    var invoke = function invoke(callbackId, data) {
        var callback = callbacks[callbackId];
        if (callback) {
            callback(data);
            if (!callback.keepAlive) {
                delete callbacks[callbackId];
            }
        } else {
            console.error('callback[' + callbackId + '] is undefined');
        }
    };

    var publish = function publish(_ref) {
        var id = _ref.id,
            type = _ref.type,
            params = _ref.params;

        callbacks[id] = createCallback(params, type);
        plus.postMessage({
            id: id,
            type: type,
            params: params
        }, UNIAPP_SERVICE_NVUE_ID);
    };

    function postMessage(data) {
        plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
    }

    var createPublish = function createPublish(name) {
        return function(args) {
            publish({
                id: id++,
                type: name,
                params: args
            });
        };
    };

    var onNavigationBarButtonTapCallback = void 0;
    var onNavigationBarSearchInputChangedCallback = void 0;
    var onNavigationBarSearchInputConfirmedCallback = void 0;
    var onNavigationBarSearchInputClickedCallback = void 0;

    function onNavigationBarButtonTap(callback) {
        onNavigationBarButtonTapCallback = callback;
    }

    function onNavigationBarSearchInputChanged(callback) {
        onNavigationBarSearchInputChangedCallback = callback;
    }

    function onNavigationBarSearchInputConfirmed(callback) {
        onNavigationBarSearchInputConfirmedCallback = callback;
    }

    function onNavigationBarSearchInputClicked(callback) {
        onNavigationBarSearchInputClickedCallback = callback;
    }

    function requireNativePlugin(pluginName) {
        return weex.requireModule(pluginName);
    }

    var dom = weex.requireModule('dom');

    function loadFontFace(_ref) {
        var family = _ref.family,
            source = _ref.source,
            desc = _ref.desc,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        dom.addRule('fontFace', {
            fontFamily: family,
            src: source.replace(/"/g, '\'')
        });
        var res = {
            errMsg: 'loadFontFace:ok',
            status: 'loaded'
        };
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var globalEvent$1 = weex.requireModule('globalEvent');

    var callbacks$1 = [];

    globalEvent$1.addEventListener('plusMessage', function(e) {
        if (e.data.type === 'UniAppReady') {
            ready.isUniAppReady = true;
            if (callbacks$1.length) {
                callbacks$1.forEach(function(callback) {
                    return callback();
                });
                callbacks$1 = [];
            }
        }
    });

    function ready(callback) {
        if (typeof callback === 'function') {
            if (this.isUniAppReady) {
                callback();
            } else {
                callbacks$1.push(callback);
            }
        }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
            "symbol" : typeof obj;
    };

    var stream = weex.requireModule('stream');

    // let requestTaskId = 0

    var METHOD_GET = 'GET';
    var METHOD_POST = 'POST';
    var CONTENT_TYPE_JSON = 'application/json';
    var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

    var serialize = function serialize(data) {
        var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
        var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
                return JSON.stringify(data);
            } else {
                return Object.keys(data).map(function(key) {
                    return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                }).join('&');
            }
        }
        return data;
    };

    function request(_ref) {
        var url = _ref.url,
            data = _ref.data,
            header = _ref.header,
            _ref$method = _ref.method,
            method = _ref$method === undefined ? 'GET' : _ref$method,
            _ref$dataType = _ref.dataType,
            dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
            responseType = _ref.responseType,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        // requestTaskId++
        var aborted = false;

        var hasContentType = false;
        var headers = {};
        if (header) {
            for (var name in header) {
                if (!hasContentType && name.toLowerCase() === 'content-type') {
                    hasContentType = true;
                    headers['Content-Type'] = header[name];
                } else {
                    headers[name] = header[name];
                }
            }
        }
        if (method === METHOD_GET && data) {
            url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
                serialize(data);
        }
        stream.fetch({
            url: url,
            method: method,
            headers: headers,
            type: dataType === 'json' ? 'json' : 'text',
            body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : ''
        }, function(_ref2) {
            var status = _ref2.status,
                ok = _ref2.ok,
                statusText = _ref2.statusText,
                data = _ref2.data,
                headers = _ref2.headers;

            var ret = {};
            if (!status || status === -1 || aborted) {
                ret.errMsg = 'request:fail';
                isFn(fail) && fail(ret);
            } else {
                ret.data = data;
                ret.statusCode = status;
                ret.header = headers;
                isFn(success) && success(ret);
            }
            isFn(complete) && complete(ret);
        });
        return {
            abort: function abort() {
                aborted = true;
            }
        };
    }

    var storage = weex.requireModule('plusstorage');
    var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

    function getStorage(_ref) {
        var key = _ref.key,
            data = _ref.data,
            success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function(ret) {
            if (ret.result === 'success') {
                var dataType = ret.data;
                storage.getItem(key, function(res) {
                    if (res.result === 'success') {
                        var result = res.data;
                        if (dataType && result) {
                            if (dataType !== 'String') {
                                result = JSON.parse(result);
                            }
                            isFn(success) && success({
                                errMsg: 'getStorage:ok',
                                data: result
                            });
                        } else {
                            res.errMsg = 'setStorage:fail';
                            isFn(fail) && fail(res);
                        }
                    } else {
                        res.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(res);
                    }
                    isFn(complete) && complete(res);
                });
            } else {
                ret.errMsg = 'setStorage:fail';
                isFn(fail) && fail(ret);
                isFn(complete) && complete(ret);
            }
        });
    }

    function setStorage(_ref2) {
        var key = _ref2.key,
            data = _ref2.data,
            success = _ref2.success,
            fail = _ref2.fail,
            complete = _ref2.complete;

        var dataType = 'String';
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
            dataType = 'Object';
            data = JSON.stringify(data);
        }
        storage.setItem(key, data, function(res) {
            if (res.result === 'success') {
                storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function(ret) {
                    if (ret.result === 'success') {
                        isFn(success) && success({
                            errMsg: 'setStorage:ok'
                        });
                    } else {
                        ret.errMsg = 'setStorage:fail';
                        isFn(fail) && fail(ret);
                    }
                });
            } else {
                res.errMsg = 'setStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
    }

    function removeStorage(_ref3) {
        var key = _ref3.key,
            data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        storage.removeItem(key, function(res) {
            if (res.result === 'success') {
                isFn(success) && success({
                    errMsg: 'removeStorage:ok'
                });
            } else {
                res.errMsg = 'removeStorage:fail';
                isFn(fail) && fail(res);
            }
            isFn(complete) && complete(res);
        });
        storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
    }

    function clearStorage(_ref4) {
        var key = _ref4.key,
            data = _ref4.data,
            success = _ref4.success,
            fail = _ref4.fail,
            complete = _ref4.complete;
    }

    var clipboard = weex.requireModule('clipboard');

    function getClipboardData(_ref) {
        var success = _ref.success,
            fail = _ref.fail,
            complete = _ref.complete;

        clipboard.getString(function(_ref2) {
            var data = _ref2.data;

            var res = {
                errMsg: 'getClipboardData:ok',
                data: data
            };
            isFn(success) && success(res);
            isFn(complete) && complete(res);
        });
    }

    function setClipboardData(_ref3) {
        var data = _ref3.data,
            success = _ref3.success,
            fail = _ref3.fail,
            complete = _ref3.complete;

        var res = {
            errMsg: 'setClipboardData:ok'
        };
        clipboard.setString(data);
        isFn(success) && success(res);
        isFn(complete) && complete(res);
    }

    var getEmitter = function() {
        if (typeof getUniEmitter === 'function') {
            /* eslint-disable no-undef */
            return getUniEmitter;
        }
        var Emitter = {
            $on: function $on() {
                console.warn('uni.$on failed');
            },
            $off: function $off() {
                console.warn('uni.$off failed');
            },
            $once: function $once() {
                console.warn('uni.$once failed');
            },
            $emit: function $emit() {
                console.warn('uni.$emit failed');
            }
        };
        return function getUniEmitter() {
            return Emitter;
        };
    }();

    function apply(ctx, method, args) {
        return ctx[method].apply(ctx, args);
    }

    function $on() {
        return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $off() {
        return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $once() {
        return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
    }

    function $emit() {
        return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
    }



    var api = /*#__PURE__*/ Object.freeze({
        loadFontFace: loadFontFace,
        ready: ready,
        request: request,
        getStorage: getStorage,
        setStorage: setStorage,
        removeStorage: removeStorage,
        clearStorage: clearStorage,
        getClipboardData: getClipboardData,
        setClipboardData: setClipboardData,
        onSubNVueMessage: onSubNVueMessage,
        getSubNVueById: getSubNVueById,
        getCurrentSubNVue: getCurrentSubNVue,
        $on: $on,
        $off: $off,
        $once: $once,
        $emit: $emit
    });


    var wx = {
        uploadFile: true,
        downloadFile: true,
        chooseImage: true,
        previewImage: true,
        getImageInfo: true,
        saveImageToPhotosAlbum: true,
        chooseVideo: true,
        saveVideoToPhotosAlbum: true,
        saveFile: true,
        getSavedFileList: true,
        getSavedFileInfo: true,
        removeSavedFile: true,
        openDocument: true,
        setStorage: true,
        getStorage: true,
        getStorageInfo: true,
        removeStorage: true,
        clearStorage: true,
        getLocation: true,
        chooseLocation: true,
        openLocation: true,
        getSystemInfo: true,
        getNetworkType: true,
        makePhoneCall: true,
        scanCode: true,
        setScreenBrightness: true,
        getScreenBrightness: true,
        setKeepScreenOn: true,
        vibrateLong: true,
        vibrateShort: true,
        addPhoneContact: true,
        showToast: true,
        showLoading: true,
        hideToast: true,
        hideLoading: true,
        showModal: true,
        showActionSheet: true,
        setNavigationBarTitle: true,
        setNavigationBarColor: true,
        navigateTo: true,
        redirectTo: true,
        reLaunch: true,
        switchTab: true,
        navigateBack: true,
        getProvider: true,
        login: true,
        getUserInfo: true,
        share: true,
        requestPayment: true,
        subscribePush: true,
        unsubscribePush: true,
        onPush: true,
        offPush: true
    };

    var baseUni = {
        os: {
            nvue: true
        }
    };

    var uni = {};

    if (typeof Proxy !== 'undefined') {
        uni = new Proxy({}, {
            get: function get(target, name) {
                if (name === 'os') {
                    return {
                        nvue: true
                    };
                }
                if (name === 'postMessage') {
                    return postMessage;
                }
                if (name === 'requireNativePlugin') {
                    return requireNativePlugin;
                }
                if (name === 'onNavigationBarButtonTap') {
                    return onNavigationBarButtonTap;
                }
                if (name === 'onNavigationBarSearchInputChanged') {
                    return onNavigationBarSearchInputChanged;
                }
                if (name === 'onNavigationBarSearchInputConfirmed') {
                    return onNavigationBarSearchInputConfirmed;
                }
                if (name === 'onNavigationBarSearchInputClicked') {
                    return onNavigationBarSearchInputClicked;
                }
                var method = api[name];
                if (!method) {
                    method = createPublish(name);
                }
                if (shouldPromise(name)) {
                    return promisify(method);
                }
                return method;
            }
        });
    } else {
        Object.keys(baseUni).forEach(function(key) {
            uni[key] = baseUni[key];
        });

        uni.postMessage = postMessage;

        uni.requireNativePlugin = requireNativePlugin;

        uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

        uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

        uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

        uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

        Object.keys(wx).forEach(function(name) {
            var method = api[name];
            if (!method) {
                method = createPublish(name);
            }
            if (shouldPromise(name)) {
                uni[name] = promisify(method);
            } else {
                uni[name] = method;
            }
        });
    }
    return uni;
}

var createUni;

if (typeof getUni === 'function') {
    createUni = getUni;
} else {
    createUni = initUni;
}
var weexPlus = new WeexPlus(weex);
/* harmony default export */ __webpack_exports__["default"] = (createUni(weex, weexPlus, BroadcastChannel));



/***/ }),
/* 7 */
/*!******************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/mm/common/httpApi.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 /**
               * API接口配置文件
               */
module.exports = {

  card: {
    getBandCardList: '/getBandCardList', //查看银行卡列表
    addBankCard: '/addBankCard', //添加银行卡
    delBankCard: '/delBankCard', //删除银行卡
    updateBankCard: '/updateBankCard' //修改银行卡
  },
  cart: {
    cartList: '/carList', //查询购物车数据
    cartAdd: '/addCar', //加入购物车
    cartUpdate: '/changeCar', //修改购物车
    orderList: '/orderList', //查看订单
    addOrder: '/addOrder' //提交订单
  },
  home: {
    getAdList: '/getAdList', //首页轮播图
    goodsTypeList: '/goodsTypeList', //商品分类
    goodsTypeAll: '/goodsTypeAll', //商品分类带数据
    goodsList: '/goodsList', //所有商品查询接口
    goodsText: '/goodsText', //商品请情
    delUserAddress: '/delUserAddress' //修改地址
  },
  user: {
    updateUserInfo: '/updateUserInfo', //修改用户基本信息
    getUserAddress: '/getUserAddress', //查询用户地址
    addUserAddress: '/addUserAddress', //增加用户地址
    defaultUserAddress: '/defaultUserAddress', //设为默认地址
    updateUserAddress: '/updateUserAddress', //修改地址
    delUserAddress: '/delUserAddress', //修改地址
    getUserWallet: '/getUserWallet' //获取钱包余额
  },
  pay: {
    changePayPassword: '/changePayPassword', //修改支付密码
    resetPyaPassword: '/resetPyaPassword', //重置和首次支付密码
    addUserAddress: '/addUserAddress', //增加用户地址
    defaultUserAddress: '/defaultUserAddress', //设为默认地址
    updateUserAddress: '/updateUserAddress', //修改地址
    delUserAddress: '/delUserAddress', //修改地址
    getUserWallet: '/getUserWallet', //获取钱包余额
    pay: '/pay' //获取钱包余额
  },
  login: {
    signin: "/login", // 登陆 
    register: "/register", // 注册
    registerCode: "/getRegisterCode", // 注册验证码获取
    logout: '/logout', //退出登陆
    retrievePassword: '/retrievePassword' //退出登陆
  },
  cardAuth: {
    addUserAuthentication: "/addUserAuthentication", //添加实名认证
    uploadImage: "/uploadImage", //上传身份证图片
    getUserAuthentication: '/getUserAuthentication' //查看实名认证
  } };

/***/ }),
/* 8 */
/*!*****************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/mm/common/config.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var ROOTPATH = "http://t249d62588.zicp.vip";
var APIPATH = "/api";
var IMGPATH = "/storage";
var DEFAULTPAGE = 'pages/tabBar/home/home'; //定义该页面时不能加"/",在后续逻辑中有补充

module.exports = {
  APIHOST: ROOTPATH,
  APIPATH: APIPATH,
  IMGPATH: IMGPATH,
  DEFAULTPAGE: DEFAULTPAGE };

/***/ }),
/* 9 */
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/mm/pages/user/order_list/order_list.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_3_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-0-1!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-0-3!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--3-0!./order_list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10);
/* harmony import */ var _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_3_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_3_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_3_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_3_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_3_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 10 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-0-1!./node_modules/postcss-loader/src??ref--6-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-0-3!./node_modules/vue-loader/lib??ref--3-0!C:/Users/Administrator/Documents/HBuilderProjects/mm/pages/user/order_list/order_list.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "tabs": {
    "width": "750",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "height": "80",
    "alignItems": "center",
    "backgroundColor": "#f8f8f8"
  },
  "tab": {
    "width": "750",
    "height": "76",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "tab-text": {
    "width": "150",
    "height": "76",
    "lineHeight": "76",
    "textAlign": "center",
    "fontSize": "26",
    "color": "#444444"
  },
  "tab-text-on": {
    "color": "#f06c7a"
  },
  "border": {
    "width": "75",
    "marginTop": 0,
    "marginRight": "25",
    "marginBottom": 0,
    "marginLeft": "25",
    "height": "4",
    "backgroundColor": "#f06c7a",
    "transitionProperty": "transform",
    "transitionDuration": 300,
    "transitionDelay": 0,
    "transitionTimingFunction": "ease"
  },
  "@TRANSITION": {
    "border": {
      "property": "transform",
      "duration": 300,
      "delay": 0,
      "timingFunction": "ease"
    }
  },
  "slider": {
    "width": "750",
    "top": "80",
    "bottom": 0,
    "backgroundColor": "#f3f3f3",
    "position": "absolute"
  },
  "frame": {
    "width": "750",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  },
  "onorder": {
    "width": "750",
    "height": "375",
    "display": "flex",
    "justifyContent": "center",
    "alignContent": "center",
    "flexWrap": "wrap",
    "flexDirection": "row",
    "marginTop": "50"
  },
  "onorder-image": {
    "width": 150,
    "height": 150,
    "borderRadius": 150
  },
  "onorder-text": {
    "width": 750,
    "height": "60",
    "fontSize": "28",
    "color": "#444444",
    "textAlign": "center",
    "lineHeight": "60"
  },
  "row": {
    "width": "710",
    "height": "400",
    "paddingTop": "10",
    "paddingRight": "20",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "borderRadius": "10",
    "backgroundColor": "#ffffff",
    "marginTop": "20",
    "flexDirection": "column"
  },
  "type": {
    "width": "710",
    "fontSize": "26",
    "color": "#ec652f",
    "height": "50",
    "textAlign": "left"
  },
  "order-info": {
    "width": "710",
    "height": "188",
    "flexDirection": "row"
  },
  "left": {
    "flexShrink": 0,
    "width": "188",
    "height": "188"
  },
  "left-image": {
    "width": "188",
    "height": "188",
    "borderRadius": "10"
  },
  "order-info-right": {
    "width": "472",
    "height": "188",
    "marginLeft": "10",
    "position": "relative",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "order-info-right-name": {
    "width": "472",
    "height": "94",
    "color": "#999999",
    "fontSize": "26",
    "overflow": "hidden"
  },
  "order-info-right-spec": {
    "color": "#a7a7a7",
    "fontSize": "22"
  },
  "order-info-right-price-number": {
    "position": "absolute",
    "bottom": 0,
    "width": "472",
    "color": "#333333",
    "justifyContent": "flex-end",
    "flexDirection": "row",
    "alignItems": "flex-end"
  },
  "order-info-right-unit": {
    "fontSize": "20"
  },
  "order-info-right-multiplier": {
    "fontSize": "20"
  },
  "order-info-right-price": {
    "fontSize": "24"
  },
  "order-info-right-number": {
    "fontSize": "24"
  },
  "detail": {
    "width": "670",
    "height": "60",
    "justifyContent": "flex-end",
    "alignItems": "flex-end",
    "flexDirection": "row"
  },
  "detail-number": {
    "fontSize": "26"
  },
  "detail-sum": {
    "paddingTop": 0,
    "paddingRight": "8",
    "paddingBottom": 0,
    "paddingLeft": "8",
    "flexDirection": "row",
    "alignItems": "flex-end"
  },
  "detail-sum-text": {
    "fontSize": "26"
  },
  "detail-sum-payment": {
    "fontSize": "30"
  },
  "detail-sum-nominal": {
    "fontSize": "26"
  },
  "btns": {
    "width": "670",
    "height": "80",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "btns-div": {
    "width": "670",
    "height": "50",
    "justifyContent": "flex-end",
    "flexDirection": "row"
  },
  "btns-btn": {
    "minWidth": "120",
    "height": "50",
    "paddingTop": 0,
    "paddingRight": "20",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "borderRadius": "50",
    "lineHeight": "50",
    "textAlign": "center",
    "fontSize": "28",
    "marginLeft": "20",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#cccccc"
  },
  "default": {
    "borderColor": "#cccccc",
    "color": "#666666"
  },
  "pay": {
    "borderColor": "#ec652f",
    "color": "#ec652f"
  }
}

/***/ }),
/* 11 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21tL21haW4uanM/N2I0OSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9tbS9wYWdlcy91c2VyL29yZGVyX2xpc3Qvb3JkZXJfbGlzdC5udnVlPzYyZGEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbW0vcGFnZXMvdXNlci9vcmRlcl9saXN0L29yZGVyX2xpc3QubnZ1ZT8yYWRiIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21tL3BhZ2VzL3VzZXIvb3JkZXJfbGlzdC9vcmRlcl9saXN0Lm52dWU/Mzc1MiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9tbS9wYWdlcy91c2VyL29yZGVyX2xpc3Qvb3JkZXJfbGlzdC5udnVlPzg3Y2QiLCJ1bmktYXBwOi8vL3BhZ2VzL3VzZXIvb3JkZXJfbGlzdC9vcmRlcl9saXN0Lm52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdW5pLWFwcC1wbHVzLW52dWUtdjgvZGlzdC9pbmRleC5qcz85OTJhIiwidW5pLWFwcDovLy9jb21tb24vaHR0cEFwaS5qcyIsInVuaS1hcHA6Ly8vY29tbW9uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9tbS9wYWdlcy91c2VyL29yZGVyX2xpc3Qvb3JkZXJfbGlzdC5udnVlPzI3M2QiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbW0vcGFnZXMvdXNlci9vcmRlcl9saXN0L29yZGVyX2xpc3QubnZ1ZT80YjcwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/Mjg3NyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY2FyZCIsImdldEJhbmRDYXJkTGlzdCIsImFkZEJhbmtDYXJkIiwiZGVsQmFua0NhcmQiLCJ1cGRhdGVCYW5rQ2FyZCIsImNhcnQiLCJjYXJ0TGlzdCIsImNhcnRBZGQiLCJjYXJ0VXBkYXRlIiwib3JkZXJMaXN0IiwiYWRkT3JkZXIiLCJob21lIiwiZ2V0QWRMaXN0IiwiZ29vZHNUeXBlTGlzdCIsImdvb2RzVHlwZUFsbCIsImdvb2RzTGlzdCIsImdvb2RzVGV4dCIsImRlbFVzZXJBZGRyZXNzIiwidXNlciIsInVwZGF0ZVVzZXJJbmZvIiwiZ2V0VXNlckFkZHJlc3MiLCJhZGRVc2VyQWRkcmVzcyIsImRlZmF1bHRVc2VyQWRkcmVzcyIsInVwZGF0ZVVzZXJBZGRyZXNzIiwiZ2V0VXNlcldhbGxldCIsInBheSIsImNoYW5nZVBheVBhc3N3b3JkIiwicmVzZXRQeWFQYXNzd29yZCIsImxvZ2luIiwic2lnbmluIiwicmVnaXN0ZXIiLCJyZWdpc3RlckNvZGUiLCJsb2dvdXQiLCJyZXRyaWV2ZVBhc3N3b3JkIiwiY2FyZEF1dGgiLCJhZGRVc2VyQXV0aGVudGljYXRpb24iLCJ1cGxvYWRJbWFnZSIsImdldFVzZXJBdXRoZW50aWNhdGlvbiIsIlJPT1RQQVRIIiwiQVBJUEFUSCIsIklNR1BBVEgiLCJERUZBVUxUUEFHRSIsIkFQSUhPU1QiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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OEVBQThFLGVBQWU7QUFDN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7OztBQzdOQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBhZ2VzL3VzZXIvb3JkZXJfbGlzdC9vcmRlcl9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiXG5pbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvdXNlci9vcmRlcl9saXN0L29yZGVyX2xpc3QubnZ1ZT9tcFR5cGU9cGFnZSdcbkFwcC5tcFR5cGUgPSAncGFnZSdcbkFwcC5yb3V0ZSA9ICdwYWdlcy91c2VyL29yZGVyX2xpc3Qvb3JkZXJfbGlzdCdcbkFwcC5lbCA9ICcjcm9vdCdcblxubmV3IFZ1ZShBcHApXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL29yZGVyX2xpc3QubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iNWRlYWZmNCZtcFR5cGU9cGFnZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL29yZGVyX2xpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9vcmRlcl9saXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy4kb3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy4kb3B0aW9ucy5zdHlsZSA9IHt9XG59XG5pZih0aGlzLl9fbWVyZ2Vfc3R5bGUgJiYgdGhpcy4kcm9vdCAmJiB0aGlzLiRyb290LiRvcHRpb25zLmFwcFN0eWxlKXtcbiAgdGhpcy5fX21lcmdlX3N0eWxlKHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpXG59XG5pZih0aGlzLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICB0aGlzLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vb3JkZXJfbGlzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLiRvcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL29yZGVyX2xpc3QubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBudWxsLFxuICBcImY0OTBhMWY0XCJcbiAgXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbW0vcGFnZXMvdXNlci9vcmRlcl9saXN0L29yZGVyX2xpc3QubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9zb2Z0L0hCdWlsZGVyWC4yLjEuMS4yMDE5MDcxNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvc29mdC9IQnVpbGRlclguMi4xLjEuMjAxOTA3MTYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0zLTAhLi9vcmRlcl9saXN0Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjVkZWFmZjQmbXBUeXBlPXBhZ2VcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcInRhYnNcIl0gfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInRhYlwiXSB9LFxuICAgICAgICBfdm0uX2woX3ZtLm9yZGVyVHlwZSwgZnVuY3Rpb24odGFiLCB0YkluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogdGJJbmRleCxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInRhYi10ZXh0XCJdLFxuICAgICAgICAgICAgICBjbGFzczogW3RiSW5kZXggPT0gX3ZtLnNlbGVjdEluZGV4ID8gXCJ0YWItdGV4dC1vblwiIDogXCJcIl0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93VHlwZSh0YkluZGV4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHRhYikpXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBbXCJib3JkZXJcIl0sXG4gICAgICAgIHN0eWxlOiB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKFwiICsgX3ZtLnRyYW5zbGF0ZVhXICsgXCJweClcIiB9XG4gICAgICB9KVxuICAgIF0pLFxuICAgIF9jKFxuICAgICAgXCJzbGlkZXJcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFtcInNsaWRlclwiXSxcbiAgICAgICAgYXR0cnM6IHsgYXV0b1BsYXk6IGZhbHNlLCBpbmZpbml0ZTogZmFsc2UsIGluZGV4OiBfdm0uc2VsZWN0SW5kZXggfSxcbiAgICAgICAgb246IHsgY2hhbmdlOiBfdm0uc2xpZGVyQ2hhbmdlIH1cbiAgICAgIH0sXG4gICAgICBfdm0uX2woX3ZtLm9yZGVyTGlzdCwgZnVuY3Rpb24ocGFnZSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwibGlzdFwiLFxuICAgICAgICAgIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFtcImZyYW1lXCJdIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgcGFnZS5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICA/IF9jKFwiY2VsbFwiLCB7IGFwcGVuZEFzVHJlZTogdHJ1ZSwgYXR0cnM6IHsgYXBwZW5kOiBcInRyZWVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwLCB0cnVlKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX2wocGFnZSwgZnVuY3Rpb24ocm93LCByb3dJbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gcGFnZS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjZWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IHJvd0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZEFzVHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBhcHBlbmQ6IFwidHJlZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcInJvd1wiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRleHRcIiwgeyBzdGF0aWNDbGFzczogW1widHlwZVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnR5cGVUZXh0W3Jvdy5zdGF0ZV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJvcmRlci1pbmZvXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wib3JkZXItaW5mby1sZWZ0XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJsZWZ0LWltYWdlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0ucm9vdFBhdGggKyByb3cuZGV0YWlsZWRbMF0uaW1hZ2VQYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWluZm8tcmlnaHRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJvcmRlci1pbmZvLXJpZ2h0LW5hbWVcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLorqLljZXlj7c6XCIgKyBfdm0uX3Mocm93Lm9yZGVyX3NuKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuZ29vZHNfdHlwZSA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlci1pbmZvLXJpZ2h0LXByaWNlLW51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlci1pbmZvLXJpZ2h0LW11bHRpcGxpZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWQiOiuoTpcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWluZm8tcmlnaHQtdW5pdFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi77+lXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJvcmRlci1pbmZvLXJpZ2h0LXByaWNlXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHJvdy5tYXJrZXRfcHJpY2UpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wib3JkZXItaW5mby1yaWdodC1udW1iZXJcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Mocm93Lm51bW5lcikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuZ29vZHNfdHlwZSA9PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlci1pbmZvLXJpZ2h0LXByaWNlLW51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcmRlci1pbmZvLXJpZ2h0LW11bHRpcGxpZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWQiOiuoTpcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWluZm8tcmlnaHQtdW5pdFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi77+lXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJvcmRlci1pbmZvLXJpZ2h0LXByaWNlXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHJvdy5tYXJrZXRfcHJpY2UpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMzB1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiN3VweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiL1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvc3RhdGljL2ltZy9pY29uL2RvdS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWluZm8tcmlnaHQtcHJpY2VcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Mocm93LnByaWNlKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5nb29kc190eXBlID09IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZGVyLWluZm8tcmlnaHQtcHJpY2UtbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yZGVyLWluZm8tcmlnaHQtbXVsdGlwbGllclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5ZCI6K6hOlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wib3JkZXItaW5mby1yaWdodC1wcmljZVwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhyb3cuaW50ZWdyYWxfcHJpY2UpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wib3JkZXItaW5mby1yaWdodC1udW1iZXJcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuenr+WIhlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wiZGV0YWlsXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImRldGFpbC1udW1iZXJcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5YWxXCIgKyBfdm0uX3Mocm93LmRldGFpbGVkLmxlbmd0aCkgKyBcIuS7tuWVhuWTgVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEsIHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdGUgPT0gXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtZGl2XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImJ0bnMtYnRuXCIsIFwiZGVmYXVsdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNhbmNlbE9yZGVyKHJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWPlua2iOiuouWNlVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImJ0bnMtYnRuXCIsIFwicGF5XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9QYXltZW50KHJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuS7mOasvlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdGUgPT0gXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtZGl2XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImJ0bnMtYnRuXCIsIFwiZGVmYXVsdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbWluZERlbGl2ZXIocm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5o+Q6YaS5Y+R6LSnXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0ZSA9PSBcIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wiYnRucy1kaXZcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiYnRucy1idG5cIiwgXCJkZWZhdWx0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0xvZ2lzdGljcyhyb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmn6XnnIvnianmtYFcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtYnRuXCIsIFwicGF5XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuehruiupOaUtui0p1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiYnRucy1idG5cIiwgXCJwYXlcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5oiR6KaB6YCA6LSnXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0ZSA9PSBcIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wiYnRucy1kaXZcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJidG5zLWJ0blwiLCBcImRlZmF1bHRcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi6K+E5Lu3XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgICAgMFxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm9ub3JkZXJcIl0gfSwgW1xuICAgICAgX2MoXCJpbWFnZVwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBbXCJvbm9yZGVyLWltYWdlXCJdLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHNyYzogXCJodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxRkdKN1hFRDFnSzBqU1pGRzc2MmQzRlhhbS5wbmdcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF9jKFwidGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJvbm9yZGVyLXRleHRcIl0gfSwgW192bS5fdihcIuayoeacieebuOWFs+iuouWNlVwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wiZGV0YWlsLXN1bVwiXSB9LCBbXG4gICAgICBfYyhcInRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiZGV0YWlsLXN1bS1ub21pbmFsXCJdIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiKOWcqOaUr+S7mOmhtemdoumAieaLqeaUr+S7mOaWueW8jylcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9zb2Z0L0hCdWlsZGVyWC4yLjEuMS4yMDE5MDcxNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMi0wIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9zb2Z0L0hCdWlsZGVyWC4yLjEuMS4yMDE5MDcxNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0yLTEhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMy0wIS4vb3JkZXJfbGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvc29mdC9IQnVpbGRlclguMi4xLjEuMjAxOTA3MTYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0zLTAhLi9vcmRlcl9saXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cInRhYnNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInRhYlwiPlxyXG5cdFx0XHRcdDx0ZXh0IHYtZm9yPVwiKHRhYiwgdGJJbmRleCkgaW4gb3JkZXJUeXBlXCIgOmtleT1cInRiSW5kZXhcIiBAY2xpY2s9XCJzaG93VHlwZSh0YkluZGV4KVwiIGNsYXNzPVwidGFiLXRleHRcIiA6Y2xhc3M9XCJbdGJJbmRleCA9PSBzZWxlY3RJbmRleCA/ICd0YWItdGV4dC1vbicgOiAnJ11cIj57eyB0YWIgfX08L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYm9yZGVyXCIgOnN0eWxlPVwieyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKCcgKyB0cmFuc2xhdGVYVyArICdweCknIH1cIj48L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PHNsaWRlciBjbGFzcz1cInNsaWRlclwiIDphdXRvLXBsYXk9XCJmYWxzZVwiIDppbmZpbml0ZT1cImZhbHNlXCIgOmluZGV4PVwic2VsZWN0SW5kZXhcIiBAY2hhbmdlPVwic2xpZGVyQ2hhbmdlXCI+XHJcblx0XHRcdDxsaXN0IGNsYXNzPVwiZnJhbWVcIiB2LWZvcj1cIihwYWdlLCBpbmRleCkgaW4gb3JkZXJMaXN0XCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0PGNlbGwgdi1pZj1cInBhZ2UubGVuZ3RoID09IDBcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvbm9yZGVyXCI+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cIm9ub3JkZXItaW1hZ2VcIiBzcmM9XCJodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxRkdKN1hFRDFnSzBqU1pGRzc2MmQzRlhhbS5wbmdcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9ub3JkZXItdGV4dFwiPuayoeacieebuOWFs+iuouWNlTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvY2VsbD5cclxuXHRcdFx0XHQ8Y2VsbCB2LWZvcj1cIihyb3csIHJvd0luZGV4KSBpbiBwYWdlXCIgOmtleT1cInJvd0luZGV4XCIgdi1pZj1cInBhZ2UubGVuZ3RoID4gMFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInR5cGVcIj57eyB0eXBlVGV4dFtyb3cuc3RhdGVdfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwhLS0gPGRpdiBjbGFzcz1cIm9yZGVyLWluZm9cIiBAY2xpY2s9XCJ0b09yZGVyRGV0YWlsKHJvdylcIj4gLS0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvcmRlci1pbmZvXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm9yZGVyLWluZm8tbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwibGVmdC1pbWFnZVwiIDpzcmM9XCJyb290UGF0aCtyb3cuZGV0YWlsZWRbMF0uaW1hZ2VQYXRoXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3JkZXItaW5mby1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvcmRlci1pbmZvLXJpZ2h0LW5hbWVcIj7orqLljZXlj7c6e3sgcm93Lm9yZGVyX3NuIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSA8dGV4dCBjbGFzcz1cIm9yZGVyLWluZm8tcmlnaHQtc3BlY1wiPnt7IHJvdy5zcGVjIH19PC90ZXh0PiAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cInJvdy5nb29kc190eXBlPT0xXCIgY2xhc3M9XCJvcmRlci1pbmZvLXJpZ2h0LXByaWNlLW51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9yZGVyLWluZm8tcmlnaHQtbXVsdGlwbGllclwiPuWQiOiuoTo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib3JkZXItaW5mby1yaWdodC11bml0XCI+77+lPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9yZGVyLWluZm8tcmlnaHQtcHJpY2VcIj57eyByb3cubWFya2V0X3ByaWNlIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9yZGVyLWluZm8tcmlnaHQtbnVtYmVyXCI+e3sgcm93Lm51bW5lciB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwicm93Lmdvb2RzX3R5cGU9PTJcIiBjbGFzcz1cIm9yZGVyLWluZm8tcmlnaHQtcHJpY2UtbnVtYmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib3JkZXItaW5mby1yaWdodC1tdWx0aXBsaWVyXCI+5ZCI6K6hOjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvcmRlci1pbmZvLXJpZ2h0LXVuaXRcIj7vv6U8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib3JkZXItaW5mby1yaWdodC1wcmljZVwiPnt7IHJvdy5tYXJrZXRfcHJpY2UgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAzMHVweDtwYWRkaW5nLXRvcDo3dXB4XCI+LzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi9zdGF0aWMvaW1nL2ljb24vZG91LnBuZ1wiIHN0eWxlPVwid2lkdGg6NDBweDtoZWlnaHQ6NDBweFwiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9yZGVyLWluZm8tcmlnaHQtcHJpY2VcIj57eyByb3cucHJpY2UgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cInJvdy5nb29kc190eXBlPT0zXCIgY2xhc3M9XCJvcmRlci1pbmZvLXJpZ2h0LXByaWNlLW51bWJlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9yZGVyLWluZm8tcmlnaHQtbXVsdGlwbGllclwiPuWQiOiuoTo8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib3JkZXItaW5mby1yaWdodC1wcmljZVwiPnt7IHJvdy5pbnRlZ3JhbF9wcmljZSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvcmRlci1pbmZvLXJpZ2h0LW51bWJlclwiPuenr+WIhjwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRldGFpbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGV0YWlsLW51bWJlclwiPuWFsXt7IHJvdy5kZXRhaWxlZC5sZW5ndGggfX3ku7bllYblk4E8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRldGFpbC1zdW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gPHRleHQgY2xhc3M9XCJkZXRhaWwtc3VtLXRleHRcIj7lkIjorqHvv6U8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRldGFpbC1zdW0tcGF5bWVudFwiPnt7IHJvdy5wYXltZW50IH19PC90ZXh0PiAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gPHRleHQgY2xhc3M9XCJkZXRhaWwtc3VtLW5vbWluYWxcIj4o5ZCr6L+Q6LS5IO+/pXt7IHJvdy5mcmVpZ2h0IH19KTwvdGV4dD4gLS0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImRldGFpbC1zdW0tbm9taW5hbFwiPijlnKjmlK/ku5jpobXpnaLpgInmi6nmlK/ku5jmlrnlvI8pPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0bnNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnRucy1kaXZcIiB2LWlmPVwicm93LnN0YXRlID09ICcwJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJidG5zLWJ0biBkZWZhdWx0XCIgQGNsaWNrPVwiY2FuY2VsT3JkZXIocm93KVwiPuWPlua2iOiuouWNlTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYnRucy1idG4gcGF5XCIgQGNsaWNrPVwidG9QYXltZW50KHJvdylcIj7ku5jmrL48L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0bnMtZGl2XCIgdi1pZj1cInJvdy5zdGF0ZSA9PSAnMSdcIj48dGV4dCBjbGFzcz1cImJ0bnMtYnRuIGRlZmF1bHRcIiBAY2xpY2s9XCJyZW1pbmREZWxpdmVyKHJvdylcIj7mj5DphpLlj5HotKc8L3RleHQ+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0bnMtZGl2XCIgdi1pZj1cInJvdy5zdGF0ZSA9PSAnMidcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYnRucy1idG4gZGVmYXVsdFwiIEBjbGljaz1cInNob3dMb2dpc3RpY3Mocm93KVwiPuafpeeci+eJqea1gTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYnRucy1idG4gcGF5XCI+56Gu6K6k5pS26LSnPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJidG5zLWJ0biBwYXlcIj7miJHopoHpgIDotKc8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0bnMtZGl2XCIgdi1pZj1cInJvdy5zdGF0ZSA9PSAnMydcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYnRucy1idG4gZGVmYXVsdFwiPuivhOS7tzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gPHRleHQgY2xhc3M9XCJidG5zLWJ0biBkZWZhdWx0XCI+5YaN5qyh6LSt5LmwPC90ZXh0PiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0bnMtZGl2XCIgdi1pZj1cInJvdy50eXBlID09ICdjb21wbGV0ZWQnXCI+PHRleHQgY2xhc3M9XCJidG5zLWJ0biBkZWZhdWx0XCI+5YaN5qyh6LSt5LmwPC90ZXh0PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidG5zLWRpdlwiIHYtaWY9XCJyb3cudHlwZSA9PSAncmVmdW5kcydcIj48dGV4dCBjbGFzcz1cImJ0bnMtYnRuIGRlZmF1bHRcIj7mn6XnnIvov5vluqY8L3RleHQ+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0bnMtZGl2XCIgdi1pZj1cInJvdy50eXBlID09ICdjYW5jZWxsZWQnXCI+PHRleHQgY2xhc3M9XCJidG5zLWJ0biBkZWZhdWx0XCI+5bey5Y+W5raIPC90ZXh0PjwvZGl2PiAtLT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2NlbGw+XHJcblx0XHRcdDwvbGlzdD5cclxuXHRcdDwvc2xpZGVyPlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgSHR0cEFwaSBmcm9tICcuLi8uLi8uLi9jb21tb24vaHR0cEFwaS5qcydcclxuXHRpbXBvcnQgUk9PVFBBVEggZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbmZpZy5qcydcclxuXHRjb25zdCBfc2VsZiA9IHRoaXM7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyb290UGF0aDogJycsXHJcblx0XHRcdFx0c2VsZWN0SW5kZXg6IDAsXHJcblx0XHRcdFx0dHJhbnNsYXRlWDogWzAsIDE1MCwgMzAwLCA0NTAsIDYwMCwgNzUwXSxcclxuXHRcdFx0XHR0cmFuc2xhdGVYVzogMCxcclxuXHRcdFx0XHRvcmRlclR5cGU6IFsn5YWo6YOoJywgJ+W+heS7mOasvicsICflvoXlj5HotKcnLCAn5b6F5pS26LSnJywgJ+W+heivhOS7tyddLFxyXG5cdFx0XHRcdHR5cGVUZXh0OiB7XHJcblx0XHRcdFx0XHQwOiAn5b6F5LuY5qy+JyxcclxuXHRcdFx0XHRcdDE6ICflvoXlj5HotKcnLFxyXG5cdFx0XHRcdFx0MjogJ+W+heaUtui0pycsXHJcblx0XHRcdFx0XHQzOiAn5b6F6K+E5Lu3JyxcclxuXHRcdFx0XHRcdC8vIGNvbXBsZXRlZDogJ+S6pOaYk+W3suWujOaIkCcsXHJcblx0XHRcdFx0XHQvLyByZWZ1bmRzOiAn5ZWG5ZOB6YCA6LSn5aSE55CG5LitJyxcclxuXHRcdFx0XHRcdC8vIGNhbmNlbGxlZDogJ+iuouWNleW3suWPlua2iCdcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG9yZGVyTGlzdDogW1xyXG5cdFx0XHRcdFx0W3tcclxuXHRcdFx0XHRcdFx0XHR0eXBlOiAndW5wYWlkJyxcclxuXHRcdFx0XHRcdFx0XHRvcmRlcnNuOiAwLFxyXG5cdFx0XHRcdFx0XHRcdGdvb2RzX2lkOiAwLFxyXG5cdFx0XHRcdFx0XHRcdGltZzogJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE2d2VwZVc1czNLVmpTWkZOcTZBRDNGWGFKLmpwZycsXHJcblx0XHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRcdFx0cHJpY2U6ICcxNjguMDAnLFxyXG5cdFx0XHRcdFx0XHRcdHBheW1lbnQ6IDE2OC4wLFxyXG5cdFx0XHRcdFx0XHRcdGZyZWlnaHQ6IDEyLjAsXHJcblx0XHRcdFx0XHRcdFx0c3BlYzogJ+inhOagvDpT56CBJyxcclxuXHRcdFx0XHRcdFx0XHRudW1uZXI6IDFcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICd1bnBhaWQnLFxyXG5cdFx0XHRcdFx0XHRcdG9yZGVyc246IDEsXHJcblx0XHRcdFx0XHRcdFx0Z29vZHNfaWQ6IDEsXHJcblx0XHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMWR1SHRjZkJqX3VWalNaRnBxNkEwU1hYYUouanBnJyxcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0XHRwcmljZTogJzE2OC4wMCcsXHJcblx0XHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0XHRzcGVjOiAn6KeE5qC8OlPnoIEnLFxyXG5cdFx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2JhY2snLFxyXG5cdFx0XHRcdFx0XHRcdG9yZGVyc246IDIsXHJcblx0XHRcdFx0XHRcdFx0Z29vZHNfaWQ6IDEsXHJcblx0XHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTczZXBlVzVzM0tWalNaRk5xNkFEM0ZYYWkuanBnJyxcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0XHRwcmljZTogJzE2OC4wMCcsXHJcblx0XHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0XHRzcGVjOiAn6KeE5qC8OlPnoIEnLFxyXG5cdFx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3VucmVjZWl2ZWQnLFxyXG5cdFx0XHRcdFx0XHRcdG9yZGVyc246IDMsXHJcblx0XHRcdFx0XHRcdFx0Z29vZHNfaWQ6IDEsXHJcblx0XHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTczZXBlVzVzM0tWalNaRk5xNkFEM0ZYYWkuanBnJyxcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0XHRwcmljZTogJzE2OC4wMCcsXHJcblx0XHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0XHRzcGVjOiAn6KeE5qC8OlPnoIEnLFxyXG5cdFx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3JlY2VpdmVkJyxcclxuXHRcdFx0XHRcdFx0XHRvcmRlcnNuOiA0LFxyXG5cdFx0XHRcdFx0XHRcdGdvb2RzX2lkOiAxLFxyXG5cdFx0XHRcdFx0XHRcdGltZzogJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFKQzFmZS5DRjNLVmpTWkpucTZ6bkhGWGFHLmpwZycsXHJcblx0XHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRcdFx0cHJpY2U6ICcxNjguMDAnLFxyXG5cdFx0XHRcdFx0XHRcdHBheW1lbnQ6IDE2OC4wLFxyXG5cdFx0XHRcdFx0XHRcdGZyZWlnaHQ6IDEyLjAsXHJcblx0XHRcdFx0XHRcdFx0c3BlYzogJ+inhOagvDpT56CBJyxcclxuXHRcdFx0XHRcdFx0XHRudW1uZXI6IDFcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdjb21wbGV0ZWQnLFxyXG5cdFx0XHRcdFx0XHRcdG9yZGVyc246IDUsXHJcblx0XHRcdFx0XHRcdFx0Z29vZHNfaWQ6IDEsXHJcblx0XHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUdTcW9lV1dzM0tWalNaRnhxNnlXVVhYYXYuanBnJyxcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0XHRwcmljZTogJzE2OC4wMCcsXHJcblx0XHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0XHRzcGVjOiAn6KeE5qC8OlPnoIEnLFxyXG5cdFx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3JlZnVuZHMnLFxyXG5cdFx0XHRcdFx0XHRcdG9yZGVyc246IDYsXHJcblx0XHRcdFx0XHRcdFx0Z29vZHNfaWQ6IDEsXHJcblx0XHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMV9NZWZlM2FIM0tWalNaRmpxNkFGV3BYYUouanBnJyxcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0XHRwcmljZTogJzE2OCcsXHJcblx0XHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0XHRzcGVjOiAn6KeE5qC8OlPnoIEnLFxyXG5cdFx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2NhbmNlbGxlZCcsXHJcblx0XHRcdFx0XHRcdFx0b3JkZXJzbjogNyxcclxuXHRcdFx0XHRcdFx0XHRnb29kc19pZDogMSxcclxuXHRcdFx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxTHUxcGU4Q3czS1ZqU1pGdXE2QUFPcFhhSS5qcGcnLFxyXG5cdFx0XHRcdFx0XHRcdG5hbWU6ICfllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7AnLFxyXG5cdFx0XHRcdFx0XHRcdHByaWNlOiAnMTY4JyxcclxuXHRcdFx0XHRcdFx0XHRwYXltZW50OiAxNjguMCxcclxuXHRcdFx0XHRcdFx0XHRmcmVpZ2h0OiAxMi4wLFxyXG5cdFx0XHRcdFx0XHRcdHNwZWM6ICfop4TmoLw6U+eggScsXHJcblx0XHRcdFx0XHRcdFx0bnVtbmVyOiAxXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRbe1xyXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICd1bnBhaWQnLFxyXG5cdFx0XHRcdFx0XHRcdG9yZGVyc246IDAsXHJcblx0XHRcdFx0XHRcdFx0Z29vZHNfaWQ6IDAsXHJcblx0XHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMWlNaWZlM2FIM0tWalNaRmpxNkFGV3BYYUEuanBnJyxcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0XHRwcmljZTogJzE2OCcsXHJcblx0XHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0XHRzcGVjOiAn6KeE5qC8OlPnoIEnLFxyXG5cdFx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3VucGFpZCcsXHJcblx0XHRcdFx0XHRcdFx0b3JkZXJzbjogMSxcclxuXHRcdFx0XHRcdFx0XHRnb29kc19pZDogMSxcclxuXHRcdFx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxRDZTZmU0aUgzS1ZqU1pQZnE2eEJpVlhhRy5qcGcnLFxyXG5cdFx0XHRcdFx0XHRcdG5hbWU6ICfllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7AnLFxyXG5cdFx0XHRcdFx0XHRcdHByaWNlOiAnMTY4JyxcclxuXHRcdFx0XHRcdFx0XHRwYXltZW50OiAxNjguMCxcclxuXHRcdFx0XHRcdFx0XHRmcmVpZ2h0OiAxMi4wLFxyXG5cdFx0XHRcdFx0XHRcdHNwZWM6ICfop4TmoLw6U+eggScsXHJcblx0XHRcdFx0XHRcdFx0bnVtbmVyOiAxXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRbXHJcblx0XHRcdFx0XHRcdC8v5pegXHJcblx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0W3tcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3VucmVjZWl2ZWQnLFxyXG5cdFx0XHRcdFx0XHRvcmRlcnNuOiAzLFxyXG5cdFx0XHRcdFx0XHRnb29kc19pZDogMSxcclxuXHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUlqU2ZlNGlIM0tWalNaUGZxNnhCaVZYYTQuanBnJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiAnMTY4JyxcclxuXHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdGZyZWlnaHQ6IDEyLjAsXHJcblx0XHRcdFx0XHRcdHNwZWM6ICfop4TmoLw6U+eggScsXHJcblx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0fV0sXHJcblx0XHRcdFx0XHRbe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAncmVjZWl2ZWQnLFxyXG5cdFx0XHRcdFx0XHRvcmRlcnNuOiA0LFxyXG5cdFx0XHRcdFx0XHRnb29kc19pZDogMSxcclxuXHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTZ3ZXBlVzVzM0tWalNaRk5xNkFEM0ZYYUouanBnJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiAnMTY4JyxcclxuXHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdGZyZWlnaHQ6IDEyLjAsXHJcblx0XHRcdFx0XHRcdHNwZWM6ICfop4TmoLw6U+eggScsXHJcblx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0fV0sXHJcblx0XHRcdFx0XHRbe1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAncmVmdW5kcycsXHJcblx0XHRcdFx0XHRcdG9yZGVyc246IDYsXHJcblx0XHRcdFx0XHRcdGdvb2RzX2lkOiAxLFxyXG5cdFx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNndlcGVXNXMzS1ZqU1pGTnE2QUQzRlhhSi5qcGcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6ICcxNjgnLFxyXG5cdFx0XHRcdFx0XHRwYXltZW50OiAxNjguMCxcclxuXHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0c3BlYzogJ+inhOagvDpT56CBJyxcclxuXHRcdFx0XHRcdFx0bnVtbmVyOiAxXHJcblx0XHRcdFx0XHR9XVxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdEluZGV4ID0gcGFyc2VJbnQodW5pLmdldFN0b3JhZ2VTeW5jKCd0YkluZGV4JykpICsgMTtcclxuXHRcdFx0dGhpcy5yb290UGF0aCA9IFJPT1RQQVRILkFQSUhPU1QgKyBST09UUEFUSC5JTUdQQVRIO1xyXG5cdFx0XHR0aGlzLmh0dHBSZXF1ZXN0KClcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGh0dHBSZXF1ZXN0KCkge1xyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+afpeivouS4rScsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGxldCBkYXRhID0ge1xyXG5cdFx0XHRcdFx0dHlwZTogOTlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGhlYWRlciA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XHJcblx0XHRcdFx0bGV0IHVybCA9IFJPT1RQQVRILkFQSUhPU1QgKyBST09UUEFUSC5BUElQQVRIICsgSHR0cEFwaS5jYXJ0Lm9yZGVyTGlzdDtcclxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFx0XHRtZXRob2Q6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdFx0aGVhZGVyOiB7XHJcblx0XHRcdFx0XHRcdFwiY29udGVudC10eXBlXCI6IGhlYWRlcixcclxuXHRcdFx0XHRcdFx0XCJ0b2tlblwiOiB1bmkuZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLmNvZGUgIT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6IHJlc3VsdC5tc2csXHJcblx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMub3JkZXJMaXN0ID0gW11cclxuXHRcdFx0XHRcdFx0XHRsZXQgYXJyMCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0bGV0IGFycjEgPSBbXVxyXG5cdFx0XHRcdFx0XHRcdGxldCBhcnIyID0gW11cclxuXHRcdFx0XHRcdFx0XHRsZXQgYXJyMyA9IFtdXHJcblx0XHRcdFx0XHRcdFx0bGV0IGFyckFsbCA9IFtdXHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdC5kYXRhLmRhdGEubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0LmRhdGEuZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGFyckFsbC5wdXNoKGl0ZW0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN3aXRjaCAoaXRlbS5zdGF0ZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFycjAucHVzaChpdGVtKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJyMS5wdXNoKGl0ZW0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcnIyLnB1c2goaXRlbSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFycjMucHVzaChpdGVtKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLm9yZGVyTGlzdCA9IFthcnJBbGwsIGFycjAsIGFycjEsIGFycjIsIGFycjNdXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOiAoZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+mAmuS/oeW8guW4uO+8jOivt+eojeWQjuWGjeivlScsXHJcblx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93VHlwZSh0YkluZGV4KSB7XHJcblx0XHRcdFx0dGhpcy5zZWxlY3RJbmRleCA9IHRiSW5kZXg7XHJcblx0XHRcdFx0dGhpcy50cmFuc2xhdGVYVyA9IHRoaXMudHJhbnNsYXRlWFt0YkluZGV4XTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygndGhpcy5zZWxlY3RJbmRleDogJyArIHRoaXMuc2VsZWN0SW5kZXgpO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0c2xpZGVyQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdEluZGV4ID0gZS5pbmRleDtcclxuXHRcdFx0XHR0aGlzLnRyYW5zbGF0ZVhXID0gdGhpcy50cmFuc2xhdGVYW2UuaW5kZXhdO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlLmluZGV4OiAnICsgSlNPTi5zdHJpbmdpZnkoZS5pbmRleCkpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0cmVtaW5kRGVsaXZlcihyb3cpIHtcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5bey5o+Q6YaS5ZWG5a625Y+R6LSnJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjYW5jZWxPcmRlcihyb3cpIHtcclxuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5Y+W5raI6K6i5Y2VJyxcclxuXHRcdFx0XHRcdGNvbnRlbnQ6ICfnoa7lrprlj5bmtojmraTorqLljZXvvJ8nLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZG9DYW5jZWxPcmRlcihyb3cub3JkZXJzbik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkb0NhbmNlbE9yZGVyKG9yZGVyc24pIHtcclxuXHRcdFx0XHRsZXQgdHlwZU51bSA9IHRoaXMub3JkZXJMaXN0Lmxlbmd0aDtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHR5cGVOdW07IGkrKykge1xyXG5cdFx0XHRcdFx0bGV0IGxpc3QgPSB0aGlzLm9yZGVyTGlzdFtpXTtcclxuXHRcdFx0XHRcdGxldCBvcmRlck51bSA9IGxpc3QubGVuZ3RoO1xyXG5cdFx0XHRcdFx0aWYgKG9yZGVyTnVtID4gMCAmJiBsaXN0WzBdLnR5cGUgPT0gJ3VucGFpZCcpIHtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBvcmRlck51bTsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMub3JkZXJMaXN0W2ldW2pdLm9yZGVyc24gPT0gb3JkZXJzbikge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5vcmRlckxpc3RbaV1bal0udHlwZSA9ICdjYW5jZWxsZWQnO1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b1BheW1lbnQocm93KSB7XHJcblx0XHRcdFx0Ly/mnKzlnLDmqKHmi5/orqLljZXmj5DkuqRVSeaViOaenFxyXG5cdFx0XHRcdHVuaS5zaG93TG9hZGluZyh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+ato+WcqOiOt+WPluiuouWNlS4uLidcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRsZXQgcGF5bWVudE9yZGVyID0gW107XHJcblx0XHRcdFx0cGF5bWVudE9yZGVyLnB1c2gocm93KTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlKHtcclxuXHRcdFx0XHRcdFx0a2V5OiAncGF5bWVudE9yZGVyJyxcclxuXHRcdFx0XHRcdFx0ZGF0YTogcGF5bWVudE9yZGVyLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XHJcblx0XHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOiAnLi4vLi4vcGF5L3BheW1lbnQvcGF5bWVudD9wcmljZT0nICsgcm93LnByaWNlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0JyZtYXJrZXRfcHJpY2U9JyArIHJvdy5tYXJrZXRfcHJpY2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQnJmludGVncmFsX3ByaWNlPScgKyByb3cuaW50ZWdyYWxfcHJpY2UgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQnJmdvb2RzX3R5cGU9JyArIHJvdy5nb29kc190eXBlICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0JyZvcmRlcl9zbj0nICsgcm93Lm9yZGVyX3NuXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0sIDUwMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQudGFicyB7XHJcblx0XHR3aWR0aDogNzUwcHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0aGVpZ2h0OiA4MHB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcblx0fVxyXG5cclxuXHQudGFiIHtcclxuXHRcdHdpZHRoOiA3NTBweDtcclxuXHRcdGhlaWdodDogNzZweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0fVxyXG5cclxuXHQudGFiLXRleHQge1xyXG5cdFx0d2lkdGg6IDE1MHB4O1xyXG5cdFx0aGVpZ2h0OiA3NnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDc2cHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDI2cHg7XHJcblx0XHRjb2xvcjogIzQ0NDtcclxuXHR9XHJcblxyXG5cdC50YWItdGV4dC1vbiB7XHJcblx0XHRjb2xvcjogI2YwNmM3YTtcclxuXHR9XHJcblxyXG5cdC5ib3JkZXIge1xyXG5cdFx0d2lkdGg6IDc1cHg7XHJcblx0XHRtYXJnaW46IDAgMjVweDtcclxuXHRcdGhlaWdodDogNHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YwNmM3YTtcclxuXHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcblx0XHR0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuXHRcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG5cdH1cclxuXHJcblx0LnNsaWRlciB7XHJcblx0XHR3aWR0aDogNzUwcHg7XHJcblx0XHR0b3A6IDgwcHg7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdH1cclxuXHJcblx0LmZyYW1lIHtcclxuXHRcdHdpZHRoOiA3NTBweDtcclxuXHRcdHBhZGRpbmc6IDIwcHggMjBweDtcclxuXHR9XHJcblxyXG5cdC5vbm9yZGVyIHtcclxuXHRcdHdpZHRoOiA3NTBweDtcclxuXHRcdGhlaWdodDogMzc1cHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0bWFyZ2luLXRvcDogNTBweDtcclxuXHR9XHJcblxyXG5cdC5vbm9yZGVyLWltYWdlIHtcclxuXHRcdHdpZHRoOiAxNTA7XHJcblx0XHRoZWlnaHQ6IDE1MDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDE1MDtcclxuXHR9XHJcblxyXG5cdC5vbm9yZGVyLXRleHQge1xyXG5cdFx0d2lkdGg6IDc1MDtcclxuXHRcdGhlaWdodDogNjBweDtcclxuXHRcdGZvbnQtc2l6ZTogMjhweDtcclxuXHRcdGNvbG9yOiAjNDQ0O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDYwcHg7XHJcblx0fVxyXG5cclxuXHQucm93IHtcclxuXHRcdHdpZHRoOiA3MTBweDtcclxuXHRcdGhlaWdodDogNDAwcHg7XHJcblx0XHRwYWRkaW5nOiAxMHB4IDIwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdG1hcmdpbi10b3A6IDIwcHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuXHJcblx0LnR5cGUge1xyXG5cdFx0d2lkdGg6IDcxMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdFx0Y29sb3I6ICNlYzY1MmY7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdH1cclxuXHJcblx0Lm9yZGVyLWluZm8ge1xyXG5cdFx0d2lkdGg6IDcxMHB4O1xyXG5cdFx0aGVpZ2h0OiAxODhweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cclxuXHQubGVmdCB7XHJcblx0XHRmbGV4LXNocmluazogMDtcclxuXHRcdHdpZHRoOiAxODhweDtcclxuXHRcdGhlaWdodDogMTg4cHg7XHJcblx0fVxyXG5cclxuXHQubGVmdC1pbWFnZSB7XHJcblx0XHR3aWR0aDogMTg4cHg7XHJcblx0XHRoZWlnaHQ6IDE4OHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1pbmZvLXJpZ2h0IHtcclxuXHRcdHdpZHRoOiA0NzJweDtcclxuXHRcdGhlaWdodDogMTg4cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0fVxyXG5cclxuXHQub3JkZXItaW5mby1yaWdodC1uYW1lIHtcclxuXHRcdHdpZHRoOiA0NzJweDtcclxuXHRcdGhlaWdodDogOTRweDtcclxuXHRcdGNvbG9yOiAjOTk5O1xyXG5cdFx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1pbmZvLXJpZ2h0LXNwZWMge1xyXG5cdFx0Y29sb3I6ICNhN2E3YTc7XHJcblx0XHRmb250LXNpemU6IDIycHg7XHJcblx0fVxyXG5cclxuXHQub3JkZXItaW5mby1yaWdodC1wcmljZS1udW1iZXIge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0d2lkdGg6IDQ3MnB4O1xyXG5cdFx0Y29sb3I6ICMzMzM7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHR9XHJcblxyXG5cdC5vcmRlci1pbmZvLXJpZ2h0LXVuaXQsXHJcblx0Lm9yZGVyLWluZm8tcmlnaHQtbXVsdGlwbGllciB7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0fVxyXG5cclxuXHQub3JkZXItaW5mby1yaWdodC1wcmljZSxcclxuXHQub3JkZXItaW5mby1yaWdodC1udW1iZXIge1xyXG5cdFx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdH1cclxuXHJcblx0LmRldGFpbCB7XHJcblx0XHR3aWR0aDogNjcwcHg7XHJcblx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR9XHJcblxyXG5cdC5kZXRhaWwtbnVtYmVyIHtcclxuXHRcdGZvbnQtc2l6ZTogMjZweDtcclxuXHR9XHJcblxyXG5cdC5kZXRhaWwtc3VtIHtcclxuXHRcdHBhZGRpbmc6IDAgOHB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHR9XHJcblxyXG5cdC5kZXRhaWwtc3VtLXRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdH1cclxuXHJcblx0LmRldGFpbC1zdW0tcGF5bWVudCB7XHJcblx0XHRmb250LXNpemU6IDMwcHg7XHJcblx0fVxyXG5cclxuXHQuZGV0YWlsLXN1bS1ub21pbmFsIHtcclxuXHRcdGZvbnQtc2l6ZTogMjZweDtcclxuXHR9XHJcblxyXG5cdC5idG5zIHtcclxuXHRcdHdpZHRoOiA2NzBweDtcclxuXHRcdGhlaWdodDogODBweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmJ0bnMtZGl2IHtcclxuXHRcdHdpZHRoOiA2NzBweDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdH1cclxuXHJcblx0LmJ0bnMtYnRuIHtcclxuXHRcdG1pbi13aWR0aDogMTIwcHg7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRwYWRkaW5nOiAwIDIwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDUwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRmb250LXNpemU6IDI4cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogMjBweDtcclxuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0XHRib3JkZXItd2lkdGg6IDFweDtcclxuXHRcdGJvcmRlci1jb2xvcjogI2NjYztcclxuXHR9XHJcblxyXG5cdC5kZWZhdWx0IHtcclxuXHRcdGJvcmRlci1jb2xvcjogI2NjYztcclxuXHRcdGNvbG9yOiAjNjY2O1xyXG5cdH1cclxuXHJcblx0LnBheSB7XHJcblx0XHRib3JkZXItY29sb3I6ICNlYzY1MmY7XHJcblx0XHRjb2xvcjogI2VjNjUyZjtcclxuXHR9XHJcbjwvc3R5bGU+XG4iLCJmdW5jdGlvbiBpbml0VW5pKCkge1xyXG5cclxuICAgIHZhciBpc0ZuID0gZnVuY3Rpb24gaXNGbih2KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaGFuZGxlUHJvbWlzZSA9IGZ1bmN0aW9uIGhhbmRsZVByb21pc2UocHJvbWlzZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW251bGwsIGRhdGFdO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gW2Vycl07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBSRUdFWCA9IC9eXFwkfF5vbnxeY3JlYXRlfFN5bmMkfE1hbmFnZXIkfF5wYXVzZS87XHJcbiAgICB2YXIgQVBJX05PUk1BTF9MSVNUID0gWydvcycsICdnZXRDdXJyZW50U3ViTlZ1ZScsICdnZXRTdWJOVnVlQnlJZCcsICdzdG9wUmVjb3JkJywgJ3N0b3BWb2ljZScsXHJcbiAgICAgICAgJ3N0b3BCYWNrZ3JvdW5kQXVkaW8nLCAnc3RvcFB1bGxEb3duUmVmcmVzaCcsICdoaWRlS2V5Ym9hcmQnLCAnaGlkZVRvYXN0JywgJ2hpZGVMb2FkaW5nJyxcclxuICAgICAgICAnc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2hpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdjYW5JVXNlJywgJ25hdmlnYXRlQmFjaycsICdjbG9zZVNvY2tldCcsXHJcbiAgICAgICAgJ3BhZ2VTY3JvbGxUbycsICdkcmF3Q2FudmFzJ1xyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgc2hvdWxkUHJvbWlzZSA9IGZ1bmN0aW9uIHNob3VsZFByb21pc2UobmFtZSkge1xyXG4gICAgICAgIGlmIChSRUdFWC50ZXN0KG5hbWUpICYmIG5hbWUgIT09ICdjcmVhdGVCTEVDb25uZWN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh+QVBJX05PUk1BTF9MSVNULmluZGV4T2YobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShhcGkpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNGbihvcHRpb25zLnN1Y2Nlc3MpIHx8IGlzRm4ob3B0aW9ucy5mYWlsKSB8fCBpc0ZuKG9wdGlvbnMuY29tcGxldGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpLmFwcGx5KHVuZGVmaW5lZCwgW29wdGlvbnNdLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUHJvbWlzZShuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGFwaS5hcHBseSh1bmRlZmluZWQsIFtPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgICAgICAgICAgIH0pXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1leHRlbmQtbmF0aXZlICovXHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyByZWFzb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbk1lc3NhZ2VDYWxsYmFja3MgPSBbXTtcclxuXHJcbiAgICB2YXIgb3JpZ2luID0gdm9pZCAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uU3ViTlZ1ZU1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW46IG9yaWdpbixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuXHJcbiAgICB2YXIgY2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCdVTkktQVBQLVNVQk5WVUUnKTtcclxuICAgIGNoYW5uZWwub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuZGF0YS50byA9PT0gd2Vidmlld0lkKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZXZlbnQuZGF0YS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHdyYXBwZXIod2Vidmlldykge1xyXG4gICAgICAgIHdlYnZpZXcuJHByb2Nlc3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50V2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG4gICAgICAgIHZhciBpc1BvcHVwTlZ1ZSA9IGN1cnJlbnRXZWJ2aWV3SWQgPT09IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHZhciBob3N0TlZ1ZUlkID0gd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5fdHlwZSA9PT0gJ3VuaU5WaWV3JyAmJiB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl9pZDtcclxuICAgICAgICB2YXIgcG9wdXBOVnVlSWQgPSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB3ZWJ2aWV3LnBvc3RNZXNzYWdlID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoaG9zdE5WdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0bzogaXNQb3B1cE5WdWUgPyBob3N0TlZ1ZUlkIDogcG9wdXBOVnVlSWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVbmlBcHBTdWJOVnVlJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5vbk1lc3NhZ2UgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcmlnaW4gPSB3ZWJ2aWV3Ll9fdW5pYXBwX2hvc3Q7XHJcblxyXG4gICAgICAgIHZhciBtYXNrQ29sb3IgPSB3ZWJ2aWV3Ll9fdW5pYXBwX21hc2s7XHJcblxyXG4gICAgICAgIHZhciBtYXNrV2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQod2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKTtcbiAgICAgICAgbWFza1dlYnZpZXcgPSBtYXNrV2Vidmlldy5wYXJlbnQoKSB8fCBtYXNrV2VidmlldzsvL+WGjeasoeajgOa1i+eItlxyXG4gICAgICAgIHZhciBvbGRTaG93ID0gd2Vidmlldy5zaG93O1xyXG4gICAgICAgIHZhciBvbGRIaWRlID0gd2Vidmlldy5oaWRlO1xyXG4gICAgICAgIHZhciBvbGRDbG9zZSA9IHdlYnZpZXcuY2xvc2U7XHJcblxyXG4gICAgICAgIHZhciBzaG93TWFzayA9IGZ1bmN0aW9uIHNob3dNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrQ29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2xvc2VNYXNrID0gZnVuY3Rpb24gY2xvc2VNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LnNob3cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd01hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkU2hvdy5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRIaWRlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRDbG9zZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN1Yk5WdWVCeUlkKGlkKSB7XHJcbiAgICAgICAgdmFyIHdlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKGlkKTtcclxuICAgICAgICBpZiAod2VidmlldyAmJiAhd2Vidmlldy4kcHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIod2Vidmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWJ2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTdWJOVnVlKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRTdWJOVnVlQnlJZCh3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwbHVzID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzJyk7XHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGlkID0gMDtcclxuICAgIHZhciBjYWxsYmFja3MgPSB7fTtcclxuXHJcbiAgICB2YXIgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCA9ICdfX3VuaWFwcF9fc2VydmljZSc7XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwSnNBcGknKSB7XHJcbiAgICAgICAgICAgIGludm9rZShlLmRhdGEuaWQsIGUuZGF0YS5kYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwU3ViTlZ1ZScpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShlLmRhdGEuZGF0YSwgZS5kYXRhLm9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBjcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrKGFyZ3MsIHR5cGUpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzRm4oYXJncykpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MocmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOm9rJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3Muc3VjY2VzcykgJiYgYXJncy5zdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpmYWlsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuZmFpbCkgJiYgYXJncy5mYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuY29tcGxldGUpICYmIGFyZ3MuY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGlzRm4oYXJncykgfHwgYXJncyAmJiBpc0ZuKGFyZ3MuY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGludm9rZSA9IGZ1bmN0aW9uIGludm9rZShjYWxsYmFja0lkLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKCFjYWxsYmFjay5rZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYWxsYmFja1snICsgY2FsbGJhY2tJZCArICddIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHB1Ymxpc2ggPSBmdW5jdGlvbiBwdWJsaXNoKF9yZWYpIHtcclxuICAgICAgICB2YXIgaWQgPSBfcmVmLmlkLFxyXG4gICAgICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmLnBhcmFtcztcclxuXHJcbiAgICAgICAgY2FsbGJhY2tzW2lkXSA9IGNyZWF0ZUNhbGxiYWNrKHBhcmFtcywgdHlwZSk7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9LCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2UoZGF0YSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNyZWF0ZVB1Ymxpc2ggPSBmdW5jdGlvbiBjcmVhdGVQdWJsaXNoKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBwdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCsrLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogYXJnc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXF1aXJlTmF0aXZlUGx1Z2luKHBsdWdpbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gd2VleC5yZXF1aXJlTW9kdWxlKHBsdWdpbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRGb250RmFjZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGZhbWlseSA9IF9yZWYuZmFtaWx5LFxyXG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmLnNvdXJjZSxcclxuICAgICAgICAgICAgZGVzYyA9IF9yZWYuZGVzYyxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBkb20uYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGZhbWlseSxcclxuICAgICAgICAgICAgc3JjOiBzb3VyY2UucmVwbGFjZSgvXCIvZywgJ1xcJycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnbG9hZEZvbnRGYWNlOm9rJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGVkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQkMSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgY2FsbGJhY2tzJDEgPSBbXTtcclxuXHJcbiAgICBnbG9iYWxFdmVudCQxLmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFJlYWR5Jykge1xyXG4gICAgICAgICAgICByZWFkeS5pc1VuaUFwcFJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrcyQxLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5pQXBwUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9IDogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID9cclxuICAgICAgICAgICAgXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzdHJlYW0gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpO1xyXG5cclxuICAgIC8vIGxldCByZXF1ZXN0VGFza0lkID0gMFxyXG5cclxuICAgIHZhciBNRVRIT0RfR0VUID0gJ0dFVCc7XHJcbiAgICB2YXIgTUVUSE9EX1BPU1QgPSAnUE9TVCc7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0pTT04gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0ZPUk0gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcclxuXHJcbiAgICB2YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKGRhdGEpIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBNRVRIT0RfR0VUO1xyXG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogQ09OVEVOVF9UWVBFX0ZPUk07XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSBNRVRIT0RfUE9TVCAmJiBjb250ZW50VHlwZS50b0xvd2VyQ2FzZSgpID09PSBDT05URU5UX1RZUEVfSlNPTikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWVzdChfcmVmKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IF9yZWYudXJsLFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXIgPSBfcmVmLmhlYWRlcixcclxuICAgICAgICAgICAgX3JlZiRtZXRob2QgPSBfcmVmLm1ldGhvZCxcclxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZiRtZXRob2QgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogX3JlZiRtZXRob2QsXHJcbiAgICAgICAgICAgIF9yZWYkZGF0YVR5cGUgPSBfcmVmLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZSA9IF9yZWYkZGF0YVR5cGUgPT09IHVuZGVmaW5lZCA/ICdqc29uJyA6IF9yZWYkZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9IF9yZWYucmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIC8vIHJlcXVlc3RUYXNrSWQrK1xyXG4gICAgICAgIHZhciBhYm9ydGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBoYXNDb250ZW50VHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDb250ZW50VHlwZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29udGVudFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgPT09IE1FVEhPRF9HRVQgJiYgZGF0YSkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAofnVybC5pbmRleE9mKCc/JykgPyB1cmwuc3Vic3RyKC0xKSA9PT0gJyYnIHx8IHVybC5zdWJzdHIoLTEpID09PSAnPycgPyAnJyA6ICcmJyA6ICc/JykgK1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIHR5cGU6IGRhdGFUeXBlID09PSAnanNvbicgPyAnanNvbicgOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGJvZHk6IG1ldGhvZCAhPT0gTUVUSE9EX0dFVCA/IHNlcmlhbGl6ZShkYXRhLCBtZXRob2QsIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSA6ICcnXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIG9rID0gX3JlZjIub2ssXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gX3JlZjIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyA9IF9yZWYyLmhlYWRlcnM7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0ID0ge307XHJcbiAgICAgICAgICAgIGlmICghc3RhdHVzIHx8IHN0YXR1cyA9PT0gLTEgfHwgYWJvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdyZXF1ZXN0OmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXQuc3RhdHVzQ29kZSA9IHN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJldC5oZWFkZXIgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0b3JhZ2UgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXNzdG9yYWdlJyk7XHJcbiAgICB2YXIgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFID0gJ19fVFlQRSc7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmFnZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGUgPSByZXQuZGF0YTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgJiYgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdTdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRTdG9yYWdlOm9rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdG9yYWdlKF9yZWYyKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYyLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjIuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gJ1N0cmluZyc7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBkYXRhVHlwZSA9ICdPYmplY3QnO1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEsIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBkYXRhVHlwZSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnc2V0U3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RvcmFnZShfcmVmMykge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMy5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3JlbW92ZVN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAncmVtb3ZlU3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKF9yZWY0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWY0LmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWY0LmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmNC5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjQuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmNC5jb21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2xpcGJvYXJkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdjbGlwYm9hcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDbGlwYm9hcmREYXRhKF9yZWYpIHtcclxuICAgICAgICB2YXIgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBjbGlwYm9hcmQuZ2V0U3RyaW5nKGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRDbGlwYm9hcmREYXRhOm9rJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2xpcGJvYXJkRGF0YShfcmVmMykge1xyXG4gICAgICAgIHZhciBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdzZXRDbGlwYm9hcmREYXRhOm9rJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2xpcGJvYXJkLnNldFN0cmluZyhkYXRhKTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnZXRFbWl0dGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVbmlFbWl0dGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlFbWl0dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRW1pdHRlciA9IHtcclxuICAgICAgICAgICAgJG9uOiBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb24gZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvZmY6IGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb2ZmIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb25jZTogZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb25jZSBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGVtaXQ6IGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJGVtaXQgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRVbmlFbWl0dGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1pdHRlcjtcclxuICAgICAgICB9O1xyXG4gICAgfSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGx5KGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb24nLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRlbWl0JywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBhcGkgPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIGxvYWRGb250RmFjZTogbG9hZEZvbnRGYWNlLFxyXG4gICAgICAgIHJlYWR5OiByZWFkeSxcclxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IGdldFN0b3JhZ2UsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogc2V0U3RvcmFnZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiByZW1vdmVTdG9yYWdlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogY2xlYXJTdG9yYWdlLFxyXG4gICAgICAgIGdldENsaXBib2FyZERhdGE6IGdldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgc2V0Q2xpcGJvYXJkRGF0YTogc2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBvblN1Yk5WdWVNZXNzYWdlOiBvblN1Yk5WdWVNZXNzYWdlLFxyXG4gICAgICAgIGdldFN1Yk5WdWVCeUlkOiBnZXRTdWJOVnVlQnlJZCxcclxuICAgICAgICBnZXRDdXJyZW50U3ViTlZ1ZTogZ2V0Q3VycmVudFN1Yk5WdWUsXHJcbiAgICAgICAgJG9uOiAkb24sXHJcbiAgICAgICAgJG9mZjogJG9mZixcclxuICAgICAgICAkb25jZTogJG9uY2UsXHJcbiAgICAgICAgJGVtaXQ6ICRlbWl0XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHd4ID0ge1xyXG4gICAgICAgIHVwbG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgZG93bmxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUltYWdlOiB0cnVlLFxyXG4gICAgICAgIHByZXZpZXdJbWFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRJbWFnZUluZm86IHRydWUsXHJcbiAgICAgICAgc2F2ZUltYWdlVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VWaWRlbzogdHJ1ZSxcclxuICAgICAgICBzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIHNhdmVGaWxlOiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUxpc3Q6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTYXZlZEZpbGU6IHRydWUsXHJcbiAgICAgICAgb3BlbkRvY3VtZW50OiB0cnVlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBvcGVuTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgZ2V0U3lzdGVtSW5mbzogdHJ1ZSxcclxuICAgICAgICBnZXROZXR3b3JrVHlwZTogdHJ1ZSxcclxuICAgICAgICBtYWtlUGhvbmVDYWxsOiB0cnVlLFxyXG4gICAgICAgIHNjYW5Db2RlOiB0cnVlLFxyXG4gICAgICAgIHNldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgZ2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBzZXRLZWVwU2NyZWVuT246IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZUxvbmc6IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZVNob3J0OiB0cnVlLFxyXG4gICAgICAgIGFkZFBob25lQ29udGFjdDogdHJ1ZSxcclxuICAgICAgICBzaG93VG9hc3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgaGlkZVRvYXN0OiB0cnVlLFxyXG4gICAgICAgIGhpZGVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHNob3dNb2RhbDogdHJ1ZSxcclxuICAgICAgICBzaG93QWN0aW9uU2hlZXQ6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhclRpdGxlOiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJDb2xvcjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZVRvOiB0cnVlLFxyXG4gICAgICAgIHJlZGlyZWN0VG86IHRydWUsXHJcbiAgICAgICAgcmVMYXVuY2g6IHRydWUsXHJcbiAgICAgICAgc3dpdGNoVGFiOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlQmFjazogdHJ1ZSxcclxuICAgICAgICBnZXRQcm92aWRlcjogdHJ1ZSxcclxuICAgICAgICBsb2dpbjogdHJ1ZSxcclxuICAgICAgICBnZXRVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgICBzaGFyZTogdHJ1ZSxcclxuICAgICAgICByZXF1ZXN0UGF5bWVudDogdHJ1ZSxcclxuICAgICAgICBzdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIHVuc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICBvblB1c2g6IHRydWUsXHJcbiAgICAgICAgb2ZmUHVzaDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFzZVVuaSA9IHtcclxuICAgICAgICBvczoge1xyXG4gICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdW5pID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwb3N0TWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3JlcXVpcmVOYXRpdmVQbHVnaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYmFzZVVuaSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgdW5pW2tleV0gPSBiYXNlVW5pW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVuaS5wb3N0TWVzc2FnZSA9IHBvc3RNZXNzYWdlO1xyXG5cclxuICAgICAgICB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbiA9IHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJCdXR0b25UYXAgPSBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyh3eCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaTtcclxufVxyXG5cclxudmFyIGNyZWF0ZVVuaTtcclxuXHJcbmlmICh0eXBlb2YgZ2V0VW5pID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBjcmVhdGVVbmkgPSBnZXRVbmk7XHJcbn0gZWxzZSB7XHJcbiAgICBjcmVhdGVVbmkgPSBpbml0VW5pO1xyXG59XHJcbnZhciB3ZWV4UGx1cyA9IG5ldyBXZWV4UGx1cyh3ZWV4KTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVW5pKHdlZXgsIHdlZXhQbHVzLCBCcm9hZGNhc3RDaGFubmVsKTtcclxuZXhwb3J0IHtcclxuICAgIHdlZXhQbHVzXHJcbn07XG4iLCIvKipcclxuICogQVBJ5o6l5Y+j6YWN572u5paH5Lu2XHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuXHJcblx0Y2FyZDoge1xyXG5cdFx0Z2V0QmFuZENhcmRMaXN0OiAnL2dldEJhbmRDYXJkTGlzdCcsIC8v5p+l55yL6ZO26KGM5Y2h5YiX6KGoXHJcblx0XHRhZGRCYW5rQ2FyZDogJy9hZGRCYW5rQ2FyZCcsIC8v5re75Yqg6ZO26KGM5Y2hXHJcblx0XHRkZWxCYW5rQ2FyZDogJy9kZWxCYW5rQ2FyZCcsIC8v5Yig6Zmk6ZO26KGM5Y2hXHJcblx0XHR1cGRhdGVCYW5rQ2FyZDogJy91cGRhdGVCYW5rQ2FyZCcsIC8v5L+u5pS56ZO26KGM5Y2hXHJcblx0fSxcclxuXHRjYXJ0OiB7XHJcblx0XHRjYXJ0TGlzdDogJy9jYXJMaXN0JywgLy/mn6Xor6LotK3nianovabmlbDmja5cclxuXHRcdGNhcnRBZGQ6ICcvYWRkQ2FyJywgLy/liqDlhaXotK3nianovaZcclxuXHRcdGNhcnRVcGRhdGU6ICcvY2hhbmdlQ2FyJywgLy/kv67mlLnotK3nianovaZcclxuXHRcdG9yZGVyTGlzdDogJy9vcmRlckxpc3QnLCAvL+afpeeci+iuouWNlVxyXG5cdFx0YWRkT3JkZXI6ICcvYWRkT3JkZXInLCAvL+aPkOS6pOiuouWNlVxyXG5cdH0sXHJcblx0aG9tZToge1xyXG5cdFx0Z2V0QWRMaXN0OiAnL2dldEFkTGlzdCcsIC8v6aaW6aG16L2u5pKt5Zu+XHJcblx0XHRnb29kc1R5cGVMaXN0OiAnL2dvb2RzVHlwZUxpc3QnLCAvL+WVhuWTgeWIhuexu1xyXG5cdFx0Z29vZHNUeXBlQWxsOiAnL2dvb2RzVHlwZUFsbCcsIC8v5ZWG5ZOB5YiG57G75bim5pWw5o2uXHJcblx0XHRnb29kc0xpc3Q6ICcvZ29vZHNMaXN0JywgLy/miYDmnInllYblk4Hmn6Xor6LmjqXlj6NcclxuXHRcdGdvb2RzVGV4dDogJy9nb29kc1RleHQnLCAvL+WVhuWTgeivt+aDhVxyXG5cdFx0ZGVsVXNlckFkZHJlc3M6ICcvZGVsVXNlckFkZHJlc3MnLCAvL+S/ruaUueWcsOWdgFxyXG5cdH0sXHJcblx0dXNlcjoge1xyXG5cdFx0dXBkYXRlVXNlckluZm86ICcvdXBkYXRlVXNlckluZm8nLCAvL+S/ruaUueeUqOaIt+WfuuacrOS/oeaBr1xyXG5cdFx0Z2V0VXNlckFkZHJlc3M6ICcvZ2V0VXNlckFkZHJlc3MnLCAvL+afpeivoueUqOaIt+WcsOWdgFxyXG5cdFx0YWRkVXNlckFkZHJlc3M6ICcvYWRkVXNlckFkZHJlc3MnLCAvL+WinuWKoOeUqOaIt+WcsOWdgFxyXG5cdFx0ZGVmYXVsdFVzZXJBZGRyZXNzOiAnL2RlZmF1bHRVc2VyQWRkcmVzcycsIC8v6K6+5Li66buY6K6k5Zyw5Z2AXHJcblx0XHR1cGRhdGVVc2VyQWRkcmVzczogJy91cGRhdGVVc2VyQWRkcmVzcycsIC8v5L+u5pS55Zyw5Z2AXHJcblx0XHRkZWxVc2VyQWRkcmVzczogJy9kZWxVc2VyQWRkcmVzcycsIC8v5L+u5pS55Zyw5Z2AXHJcblx0XHRnZXRVc2VyV2FsbGV0OiAnL2dldFVzZXJXYWxsZXQnLCAvL+iOt+WPlumSseWMheS9meminVxyXG5cdH0sXHJcblx0cGF5OiB7XHJcblx0XHRjaGFuZ2VQYXlQYXNzd29yZDogJy9jaGFuZ2VQYXlQYXNzd29yZCcsIC8v5L+u5pS55pSv5LuY5a+G56CBXHJcblx0XHRyZXNldFB5YVBhc3N3b3JkOiAnL3Jlc2V0UHlhUGFzc3dvcmQnLCAvL+mHjee9ruWSjOmmluasoeaUr+S7mOWvhueggVxyXG5cdFx0YWRkVXNlckFkZHJlc3M6ICcvYWRkVXNlckFkZHJlc3MnLCAvL+WinuWKoOeUqOaIt+WcsOWdgFxyXG5cdFx0ZGVmYXVsdFVzZXJBZGRyZXNzOiAnL2RlZmF1bHRVc2VyQWRkcmVzcycsIC8v6K6+5Li66buY6K6k5Zyw5Z2AXHJcblx0XHR1cGRhdGVVc2VyQWRkcmVzczogJy91cGRhdGVVc2VyQWRkcmVzcycsIC8v5L+u5pS55Zyw5Z2AXHJcblx0XHRkZWxVc2VyQWRkcmVzczogJy9kZWxVc2VyQWRkcmVzcycsIC8v5L+u5pS55Zyw5Z2AXHJcblx0XHRnZXRVc2VyV2FsbGV0OiAnL2dldFVzZXJXYWxsZXQnLCAvL+iOt+WPlumSseWMheS9meminVxyXG5cdFx0cGF5OiAnL3BheScsIC8v6I635Y+W6ZKx5YyF5L2Z6aKdXHJcblx0fSxcclxuXHRsb2dpbjoge1xyXG5cdFx0c2lnbmluOiBcIi9sb2dpblwiLCAvLyDnmbvpmYYgXHJcblx0XHRyZWdpc3RlcjogXCIvcmVnaXN0ZXJcIiwgLy8g5rOo5YaMXHJcblx0XHRyZWdpc3RlckNvZGU6IFwiL2dldFJlZ2lzdGVyQ29kZVwiLCAvLyDms6jlhozpqozor4HnoIHojrflj5ZcclxuXHRcdGxvZ291dDogJy9sb2dvdXQnLCAvL+mAgOWHuueZu+mZhlxyXG5cdFx0cmV0cmlldmVQYXNzd29yZDogJy9yZXRyaWV2ZVBhc3N3b3JkJywgLy/pgIDlh7rnmbvpmYZcclxuXHR9LFxyXG5cdGNhcmRBdXRoOiB7XHJcblx0XHRhZGRVc2VyQXV0aGVudGljYXRpb246IFwiL2FkZFVzZXJBdXRoZW50aWNhdGlvblwiLCAvL+a3u+WKoOWunuWQjeiupOivgVxyXG5cdFx0dXBsb2FkSW1hZ2U6IFwiL3VwbG9hZEltYWdlXCIsIC8v5LiK5Lyg6Lqr5Lu96K+B5Zu+54mHXHJcblx0XHRnZXRVc2VyQXV0aGVudGljYXRpb246ICcvZ2V0VXNlckF1dGhlbnRpY2F0aW9uJyAvL+afpeeci+WunuWQjeiupOivgVxyXG5cdH1cclxufVxyXG4iLCJjb25zdCBST09UUEFUSCA9IFwiaHR0cDovL3QyNDlkNjI1ODguemljcC52aXBcIjtcclxuY29uc3QgQVBJUEFUSCA9IFwiL2FwaVwiO1xyXG5jb25zdCBJTUdQQVRIICA9IFwiL3N0b3JhZ2VcIlxyXG5jb25zdCBERUZBVUxUUEFHRSA9ICdwYWdlcy90YWJCYXIvaG9tZS9ob21lJyAvL+WumuS5ieivpemhtemdouaXtuS4jeiDveWKoFwiL1wiLOWcqOWQjue7remAu+i+keS4reacieihpeWFhVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0QVBJSE9TVDpST09UUEFUSCxcclxuXHRBUElQQVRIOkFQSVBBVEgsXHJcblx0SU1HUEFUSDpJTUdQQVRILFxyXG5cdERFRkFVTFRQQUdFOkRFRkFVTFRQQUdFXHJcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9zb2Z0L0hCdWlsZGVyWC4yLjEuMS4yMDE5MDcxNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9zb2Z0L0hCdWlsZGVyWC4yLjEuMS4yMDE5MDcxNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvc29mdC9IQnVpbGRlclguMi4xLjEuMjAxOTA3MTYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9zb2Z0L0hCdWlsZGVyWC4yLjEuMS4yMDE5MDcxNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTMtMCEuL29yZGVyX2xpc3QubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9zb2Z0L0hCdWlsZGVyWC4yLjEuMS4yMDE5MDcxNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvc29mdC9IQnVpbGRlclguMi4xLjEuMjAxOTA3MTYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMy0wIS4vb3JkZXJfbGlzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInRhYnNcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiODBcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmOGY4ZjhcIlxuICB9LFxuICBcInRhYlwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzZcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwidGFiLXRleHRcIjoge1xuICAgIFwid2lkdGhcIjogXCIxNTBcIixcbiAgICBcImhlaWdodFwiOiBcIjc2XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNzZcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNlwiLFxuICAgIFwiY29sb3JcIjogXCIjNDQ0NDQ0XCJcbiAgfSxcbiAgXCJ0YWItdGV4dC1vblwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmMDZjN2FcIlxuICB9LFxuICBcImJvcmRlclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjVcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjI1XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjA2YzdhXCIsXG4gICAgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogXCJ0cmFuc2Zvcm1cIixcbiAgICBcInRyYW5zaXRpb25EdXJhdGlvblwiOiAzMDAsXG4gICAgXCJ0cmFuc2l0aW9uRGVsYXlcIjogMCxcbiAgICBcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOiBcImVhc2VcIlxuICB9LFxuICBcIkBUUkFOU0lUSU9OXCI6IHtcbiAgICBcImJvcmRlclwiOiB7XG4gICAgICBcInByb3BlcnR5XCI6IFwidHJhbnNmb3JtXCIsXG4gICAgICBcImR1cmF0aW9uXCI6IDMwMCxcbiAgICAgIFwiZGVsYXlcIjogMCxcbiAgICAgIFwidGltaW5nRnVuY3Rpb25cIjogXCJlYXNlXCJcbiAgICB9XG4gIH0sXG4gIFwic2xpZGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwXCIsXG4gICAgXCJ0b3BcIjogXCI4MFwiLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjNmM2YzXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCJcbiAgfSxcbiAgXCJmcmFtZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwXCJcbiAgfSxcbiAgXCJvbm9yZGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzNzVcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwXCJcbiAgfSxcbiAgXCJvbm9yZGVyLWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IDE1MCxcbiAgICBcImhlaWdodFwiOiAxNTAsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogMTUwXG4gIH0sXG4gIFwib25vcmRlci10ZXh0XCI6IHtcbiAgICBcIndpZHRoXCI6IDc1MCxcbiAgICBcImhlaWdodFwiOiBcIjYwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4XCIsXG4gICAgXCJjb2xvclwiOiBcIiM0NDQ0NDRcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjYwXCJcbiAgfSxcbiAgXCJyb3dcIjoge1xuICAgIFwid2lkdGhcIjogXCI3MTBcIixcbiAgICBcImhlaWdodFwiOiBcIjQwMFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwXCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcInR5cGVcIjoge1xuICAgIFwid2lkdGhcIjogXCI3MTBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjZcIixcbiAgICBcImNvbG9yXCI6IFwiI2VjNjUyZlwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBcIixcbiAgICBcInRleHRBbGlnblwiOiBcImxlZnRcIlxuICB9LFxuICBcIm9yZGVyLWluZm9cIjoge1xuICAgIFwid2lkdGhcIjogXCI3MTBcIixcbiAgICBcImhlaWdodFwiOiBcIjE4OFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwibGVmdFwiOiB7XG4gICAgXCJmbGV4U2hyaW5rXCI6IDAsXG4gICAgXCJ3aWR0aFwiOiBcIjE4OFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTg4XCJcbiAgfSxcbiAgXCJsZWZ0LWltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTg4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxODhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwXCJcbiAgfSxcbiAgXCJvcmRlci1pbmZvLXJpZ2h0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDcyXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxODhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJvcmRlci1pbmZvLXJpZ2h0LW5hbWVcIjoge1xuICAgIFwid2lkdGhcIjogXCI0NzJcIixcbiAgICBcImhlaWdodFwiOiBcIjk0XCIsXG4gICAgXCJjb2xvclwiOiBcIiM5OTk5OTlcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjZcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJvcmRlci1pbmZvLXJpZ2h0LXNwZWNcIjoge1xuICAgIFwiY29sb3JcIjogXCIjYTdhN2E3XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjIyXCJcbiAgfSxcbiAgXCJvcmRlci1pbmZvLXJpZ2h0LXByaWNlLW51bWJlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcIndpZHRoXCI6IFwiNDcyXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwib3JkZXItaW5mby1yaWdodC11bml0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBcIlxuICB9LFxuICBcIm9yZGVyLWluZm8tcmlnaHQtbXVsdGlwbGllclwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJvcmRlci1pbmZvLXJpZ2h0LXByaWNlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRcIlxuICB9LFxuICBcIm9yZGVyLWluZm8tcmlnaHQtbnVtYmVyXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRcIlxuICB9LFxuICBcImRldGFpbFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY3MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjBcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZGV0YWlsLW51bWJlclwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2XCJcbiAgfSxcbiAgXCJkZXRhaWwtc3VtXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiOFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCJkZXRhaWwtc3VtLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNlwiXG4gIH0sXG4gIFwiZGV0YWlsLXN1bS1wYXltZW50XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBcIlxuICB9LFxuICBcImRldGFpbC1zdW0tbm9taW5hbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2XCJcbiAgfSxcbiAgXCJidG5zXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjcwXCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiYnRucy1kaXZcIjoge1xuICAgIFwid2lkdGhcIjogXCI2NzBcIixcbiAgICBcImhlaWdodFwiOiBcIjUwXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtZW5kXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJidG5zLWJ0blwiOiB7XG4gICAgXCJtaW5XaWR0aFwiOiBcIjEyMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1MFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjUwXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNjY2NjY2NcIlxuICB9LFxuICBcImRlZmF1bHRcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjY2NjY2NjXCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NjY2NjZcIlxuICB9LFxuICBcInBheVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlYzY1MmZcIixcbiAgICBcImNvbG9yXCI6IFwiI2VjNjUyZlwiXG4gIH1cbn0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==