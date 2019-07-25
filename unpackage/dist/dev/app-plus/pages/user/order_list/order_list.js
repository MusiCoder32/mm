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
/* harmony import */ var _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 9);



function injectStyles (context) {
  
  if(!this.$options.style){
    this.$options.style = {}
}
if(this.__merge_style && this.$root && this.$root.$options.appStyle){
  this.__merge_style(this.$root.$options.appStyle)
}
if(this.__merge_style){
              this.__merge_style(__webpack_require__(/*! ./order_list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 7).default)
          }else{
              Object.assign(this.$options.style,__webpack_require__(/*! ./order_list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 7).default)
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
                          _vm._v(_vm._s(_vm.typeText[row.type]))
                        ]),
                        _c("div", { staticClass: ["order-info"] }, [
                          _c("div", { staticClass: ["order-info-left"] }, [
                            _c("image", {
                              staticClass: ["left-image"],
                              attrs: { src: row.img }
                            })
                          ]),
                          _c("div", { staticClass: ["order-info-right"] }, [
                            _c(
                              "text",
                              { staticClass: ["order-info-right-name"] },
                              [_vm._v(_vm._s(row.name))]
                            ),
                            _c(
                              "text",
                              { staticClass: ["order-info-right-spec"] },
                              [_vm._v(_vm._s(row.spec))]
                            ),
                            _c(
                              "div",
                              {
                                staticClass: ["order-info-right-price-number"]
                              },
                              [
                                _c(
                                  "text",
                                  { staticClass: ["order-info-right-unit"] },
                                  [_vm._v("￥")]
                                ),
                                _c(
                                  "text",
                                  { staticClass: ["order-info-right-price"] },
                                  [_vm._v(_vm._s(row.price))]
                                ),
                                _c(
                                  "text",
                                  {
                                    staticClass: ["order-info-right-multiplier"]
                                  },
                                  [_vm._v("x")]
                                ),
                                _c(
                                  "text",
                                  { staticClass: ["order-info-right-number"] },
                                  [_vm._v(_vm._s(row.numner))]
                                )
                              ]
                            )
                          ])
                        ]),
                        _c("div", { staticClass: ["detail"] }, [
                          _c("text", { staticClass: ["detail-number"] }, [
                            _vm._v("共" + _vm._s(row.numner) + "件商品")
                          ]),
                          _c("div", { staticClass: ["detail-sum"] }, [
                            _c("text", { staticClass: ["detail-sum-text"] }, [
                              _vm._v("合计￥")
                            ]),
                            _c(
                              "text",
                              { staticClass: ["detail-sum-payment"] },
                              [_vm._v(_vm._s(row.payment))]
                            ),
                            _c(
                              "text",
                              { staticClass: ["detail-sum-nominal"] },
                              [_vm._v("(含运费 ￥" + _vm._s(row.freight) + ")")]
                            )
                          ])
                        ]),
                        _c("div", { staticClass: ["btns"] }, [
                          row.type == "unpaid"
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
                          row.type == "back"
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
                          row.type == "unreceived"
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
                          row.type == "received"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "default"] },
                                  [_vm._v("评价")]
                                ),
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "default"] },
                                  [_vm._v("再次购买")]
                                )
                              ])
                            : _vm._e(),
                          row.type == "completed"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "default"] },
                                  [_vm._v("再次购买")]
                                )
                              ])
                            : _vm._e(),
                          row.type == "refunds"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "default"] },
                                  [_vm._v("查看进度")]
                                )
                              ])
                            : _vm._e(),
                          row.type == "cancelled"
                            ? _c("div", { staticClass: ["btns-div"] }, [
                                _c(
                                  "text",
                                  { staticClass: ["btns-btn", "default"] },
                                  [_vm._v("已取消")]
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
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      selectIndex: 0,
      translateX: [0, 125, 250, 375, 500, 625, 750],
      translateXW: 0,
      orderType: ['全部', '待付款', '待发货', '待收货', '待评价', '退换货'],
      typeText: {
        unpaid: '等待付款',
        back: '等待商家发货',
        unreceived: '商家已发货',
        received: '等待用户评价',
        completed: '交易已完成',
        refunds: '商品退货处理中',
        cancelled: '订单已取消' },

      orderList: [
      [
      {
        type: 'unpaid',
        ordersn: 0,
        goods_id: 0,
        img: 'https://ae01.alicdn.com/kf/HTB16wepeW5s3KVjSZFNq6AD3FXaJ.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168.00',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'unpaid',
        ordersn: 1,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB1duHtcfBj_uVjSZFpq6A0SXXaJ.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168.00',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'back',
        ordersn: 2,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB173epeW5s3KVjSZFNq6AD3FXai.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168.00',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'unreceived',
        ordersn: 3,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB173epeW5s3KVjSZFNq6AD3FXai.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168.00',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'received',
        ordersn: 4,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB1JC1fe.CF3KVjSZJnq6znHFXaG.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168.00',
        payment: 168.0,
        freight: 12.0,
        spec: '规格:S码',
        numner: 1 },

      {
        type: 'completed',
        ordersn: 5,
        goods_id: 1,
        img: 'https://ae01.alicdn.com/kf/HTB1GSqoeWWs3KVjSZFxq6yWUXXav.jpg',
        name: '商品名称商品名称商品名称商品名称商品名称',
        price: '168.00',
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


      [
      {
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
      [
      {
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


      [
      {
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


      [
      {
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
  },
  methods: {
    showType: function showType(tbIndex) {
      this.selectIndex = tbIndex;
      this.translateXW = this.translateX[tbIndex];
      console.log('this.selectIndex: ' + this.selectIndex, " at pages\\user\\order_list\\order_list.nvue:268");
    },
    sliderChange: function sliderChange(e) {
      this.selectIndex = e.index;
      this.translateXW = this.translateX[e.index];
      console.log('e.index: ' + JSON.stringify(e.index), " at pages\\user\\order_list\\order_list.nvue:273");
    },

    remindDeliver: function remindDeliver(row) {
      uni.showToast({
        title: '已提醒商家发货' });

    },
    cancelOrder: function cancelOrder(row) {var _this = this;
      uni.showModal({
        title: '取消订单',
        content: '确定取消此订单？',
        success: function success(res) {
          if (res.confirm) {
            console.log('用户点击确定', " at pages\\user\\order_list\\order_list.nvue:287");
            _this.doCancelOrder(row.ordersn);
          } else if (res.cancel) {
            console.log('用户点击取消', " at pages\\user\\order_list\\order_list.nvue:290");
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
              url: '../../pay/payment/payment?amount=' + row.payment });

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
/*!**********************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/HBuilderProjects/mm/pages/user/order_list/order_list.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_3_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-0-1!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-0-2!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-0-3!../../../../../../Downloads/soft/HBuilderX.2.1.1.20190716.full/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??ref--3-0!./order_list.nvue?vue&type=style&index=0&lang=css&mpType=page */ 8);
/* harmony import */ var _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_3_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_3_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_3_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_3_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_1_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_0_2_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_0_3_Downloads_soft_HBuilderX_2_1_1_20190716_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_ref_3_0_order_list_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
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
    "width": "125",
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
    "fontSize": "28",
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
/* 9 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21tL21haW4uanM/N2I0OSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9tbS9wYWdlcy91c2VyL29yZGVyX2xpc3Qvb3JkZXJfbGlzdC5udnVlPzYyZGEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0FkbWluaXN0cmF0b3IvRG9jdW1lbnRzL0hCdWlsZGVyUHJvamVjdHMvbW0vcGFnZXMvdXNlci9vcmRlcl9saXN0L29yZGVyX2xpc3QubnZ1ZT8yYWRiIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21tL3BhZ2VzL3VzZXIvb3JkZXJfbGlzdC9vcmRlcl9saXN0Lm52dWU/Mzc1MiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9tbS9wYWdlcy91c2VyL29yZGVyX2xpc3Qvb3JkZXJfbGlzdC5udnVlPzg3Y2QiLCJ1bmktYXBwOi8vL3BhZ2VzL3VzZXIvb3JkZXJfbGlzdC9vcmRlcl9saXN0Lm52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdW5pLWFwcC1wbHVzLW52dWUtdjgvZGlzdC9pbmRleC5qcz85OTJhIiwid2VicGFjazovLy9DOi9Vc2Vycy9BZG1pbmlzdHJhdG9yL0RvY3VtZW50cy9IQnVpbGRlclByb2plY3RzL21tL3BhZ2VzL3VzZXIvb3JkZXJfbGlzdC9vcmRlcl9saXN0Lm52dWU/MjczZCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvQWRtaW5pc3RyYXRvci9Eb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9tbS9wYWdlcy91c2VyL29yZGVyX2xpc3Qvb3JkZXJfbGlzdC5udnVlPzRiNzAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz8yODc3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqRnFFO0FBQ3JFLDBGQUFHO0FBQ0gsMEZBQUc7QUFDSCwwRkFBRzs7QUFFSCxRQUFRLDBGQUFHOzs7Ozs7Ozs7Ozs7QUNOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFHO0FBQzNCO0FBQ0w7QUFDckU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUJBQU8sQ0FBQyxzRUFBK0Q7QUFDeEcsV0FBVztBQUNYLGdEQUFnRCxtQkFBTyxDQUFDLHNFQUErRDtBQUN2SDs7QUFFQTs7QUFFQTtBQUNnTDtBQUNoTCxnQkFBZ0IscUxBQVU7QUFDMUIsRUFBRSw0RkFBTTtBQUNSLEVBQUUsaUdBQU07QUFDUixFQUFFLDBHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7O0FDakNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0JBQXdCO0FBQ3ZDO0FBQ0E7QUFDQSxTQUFTLHVCQUF1QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwyREFBMkQ7QUFDM0UsYUFBYTtBQUNiLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFDQUFxQztBQUNoRDtBQUNBO0FBQ0EsNEJBQTRCLDZCQUE2QixpQkFBaUIsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQSxpQ0FBaUMsdUJBQXVCO0FBQ3hELG9DQUFvQyx3QkFBd0I7QUFDNUQ7QUFDQTtBQUNBLG1DQUFtQyw4QkFBOEI7QUFDakUscUNBQXFDLG1DQUFtQztBQUN4RTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLDZCQUE2QjtBQUM3QjtBQUNBLHFDQUFxQyxvQ0FBb0M7QUFDekU7QUFDQTtBQUNBLCtCQUErQix5Q0FBeUM7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IseUNBQXlDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMseUNBQXlDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBDQUEwQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMkNBQTJDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Qsc0NBQXNDLGlDQUFpQztBQUN2RTtBQUNBO0FBQ0EscUNBQXFDLDhCQUE4QjtBQUNuRSx3Q0FBd0MsbUNBQW1DO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNDQUFzQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixzQ0FBc0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsd0JBQXdCO0FBQzNEO0FBQ0EseUNBQXlDLDRCQUE0QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDRCQUE0QjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyw0QkFBNEI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1DQUFtQztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxtQ0FBbUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyw0QkFBNEI7QUFDckU7QUFDQTtBQUNBLG1DQUFtQyx1Q0FBdUM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsdUNBQXVDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNEJBQTRCO0FBQ3JFO0FBQ0E7QUFDQSxtQ0FBbUMsdUNBQXVDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNEJBQTRCO0FBQ3JFO0FBQ0E7QUFDQSxtQ0FBbUMsdUNBQXVDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsNEJBQTRCO0FBQ3JFO0FBQ0E7QUFDQSxtQ0FBbUMsdUNBQXVDO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDJCQUEyQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGtCQUFrQixnQ0FBZ0M7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuUkE7QUFBQTtBQUFBO0FBQUE7QUFBOGhCLENBQWdCLGlqQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN1RWxqQjtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsbURBRkE7QUFHQSxvQkFIQTtBQUlBLDBEQUpBO0FBS0E7QUFDQSxzQkFEQTtBQUVBLHNCQUZBO0FBR0EsMkJBSEE7QUFJQSwwQkFKQTtBQUtBLDBCQUxBO0FBTUEsMEJBTkE7QUFPQSwwQkFQQSxFQUxBOztBQWNBO0FBQ0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsa0JBRkE7QUFHQSxtQkFIQTtBQUlBLDJFQUpBO0FBS0Esb0NBTEE7QUFNQSx1QkFOQTtBQU9BLHNCQVBBO0FBUUEscUJBUkE7QUFTQSxxQkFUQTtBQVVBLGlCQVZBLEVBREE7O0FBYUE7QUFDQSxzQkFEQTtBQUVBLGtCQUZBO0FBR0EsbUJBSEE7QUFJQSwyRUFKQTtBQUtBLG9DQUxBO0FBTUEsdUJBTkE7QUFPQSxzQkFQQTtBQVFBLHFCQVJBO0FBU0EscUJBVEE7QUFVQSxpQkFWQSxFQWJBOztBQXlCQTtBQUNBLG9CQURBO0FBRUEsa0JBRkE7QUFHQSxtQkFIQTtBQUlBLDJFQUpBO0FBS0Esb0NBTEE7QUFNQSx1QkFOQTtBQU9BLHNCQVBBO0FBUUEscUJBUkE7QUFTQSxxQkFUQTtBQVVBLGlCQVZBLEVBekJBOztBQXFDQTtBQUNBLDBCQURBO0FBRUEsa0JBRkE7QUFHQSxtQkFIQTtBQUlBLDJFQUpBO0FBS0Esb0NBTEE7QUFNQSx1QkFOQTtBQU9BLHNCQVBBO0FBUUEscUJBUkE7QUFTQSxxQkFUQTtBQVVBLGlCQVZBLEVBckNBOztBQWlEQTtBQUNBLHdCQURBO0FBRUEsa0JBRkE7QUFHQSxtQkFIQTtBQUlBLDJFQUpBO0FBS0Esb0NBTEE7QUFNQSx1QkFOQTtBQU9BLHNCQVBBO0FBUUEscUJBUkE7QUFTQSxxQkFUQTtBQVVBLGlCQVZBLEVBakRBOztBQTZEQTtBQUNBLHlCQURBO0FBRUEsa0JBRkE7QUFHQSxtQkFIQTtBQUlBLDJFQUpBO0FBS0Esb0NBTEE7QUFNQSx1QkFOQTtBQU9BLHNCQVBBO0FBUUEscUJBUkE7QUFTQSxxQkFUQTtBQVVBLGlCQVZBLEVBN0RBOztBQXlFQTtBQUNBLHVCQURBO0FBRUEsa0JBRkE7QUFHQSxtQkFIQTtBQUlBLDJFQUpBO0FBS0Esb0NBTEE7QUFNQSxvQkFOQTtBQU9BLHNCQVBBO0FBUUEscUJBUkE7QUFTQSxxQkFUQTtBQVVBLGlCQVZBLEVBekVBOztBQXFGQTtBQUNBLHlCQURBO0FBRUEsa0JBRkE7QUFHQSxtQkFIQTtBQUlBLDJFQUpBO0FBS0Esb0NBTEE7QUFNQSxvQkFOQTtBQU9BLHNCQVBBO0FBUUEscUJBUkE7QUFTQSxxQkFUQTtBQVVBLGlCQVZBLEVBckZBLENBREE7OztBQW1HQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxrQkFGQTtBQUdBLG1CQUhBO0FBSUEsMkVBSkE7QUFLQSxvQ0FMQTtBQU1BLG9CQU5BO0FBT0Esc0JBUEE7QUFRQSxxQkFSQTtBQVNBLHFCQVRBO0FBVUEsaUJBVkEsRUFEQTs7QUFhQTtBQUNBLHNCQURBO0FBRUEsa0JBRkE7QUFHQSxtQkFIQTtBQUlBLDJFQUpBO0FBS0Esb0NBTEE7QUFNQSxvQkFOQTtBQU9BLHNCQVBBO0FBUUEscUJBUkE7QUFTQSxxQkFUQTtBQVVBLGlCQVZBLEVBYkEsQ0FuR0E7OztBQTZIQTtBQUNBO0FBREEsT0E3SEE7QUFnSUE7QUFDQTtBQUNBLDBCQURBO0FBRUEsa0JBRkE7QUFHQSxtQkFIQTtBQUlBLDJFQUpBO0FBS0Esb0NBTEE7QUFNQSxvQkFOQTtBQU9BLHNCQVBBO0FBUUEscUJBUkE7QUFTQSxxQkFUQTtBQVVBLGlCQVZBLEVBREEsQ0FoSUE7OztBQThJQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSxrQkFGQTtBQUdBLG1CQUhBO0FBSUEsMkVBSkE7QUFLQSxvQ0FMQTtBQU1BLG9CQU5BO0FBT0Esc0JBUEE7QUFRQSxxQkFSQTtBQVNBLHFCQVRBO0FBVUEsaUJBVkEsRUFEQSxDQTlJQTs7O0FBNEpBO0FBQ0E7QUFDQSx1QkFEQTtBQUVBLGtCQUZBO0FBR0EsbUJBSEE7QUFJQSwyRUFKQTtBQUtBLG9DQUxBO0FBTUEsb0JBTkE7QUFPQSxzQkFQQTtBQVFBLHFCQVJBO0FBU0EscUJBVEE7QUFVQSxpQkFWQSxFQURBLENBNUpBLENBZEE7Ozs7O0FBMExBLEdBNUxBO0FBNkxBLFNBN0xBLHFCQTZMQTtBQUNBO0FBQ0EsR0EvTEE7QUFnTUE7QUFDQSxZQURBLG9CQUNBLE9BREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEE7QUFNQSxnQkFOQSx3QkFNQSxDQU5BLEVBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVZBOztBQVlBLGlCQVpBLHlCQVlBLEdBWkEsRUFZQTtBQUNBO0FBQ0Esd0JBREE7O0FBR0EsS0FoQkE7QUFpQkEsZUFqQkEsdUJBaUJBLEdBakJBLEVBaUJBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLDJCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUhBLE1BR0E7QUFDQTtBQUNBO0FBQ0EsU0FWQTs7QUFZQSxLQTlCQTtBQStCQSxpQkEvQkEseUJBK0JBLE9BL0JBLEVBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTdDQTtBQThDQSxhQTlDQSxxQkE4Q0EsR0E5Q0EsRUE4Q0E7QUFDQTtBQUNBO0FBQ0EsMEJBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFEQTtBQUVBLDRCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0Esb0VBREE7O0FBR0EsV0FSQTs7QUFVQSxPQVhBLEVBV0EsR0FYQTtBQVlBLEtBakVBLEVBaE1BLEU7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnR0FBZ0csYUFBYTtBQUM3RztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSwyRUFBMkUsYUFBYTtBQUN4RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhFQUE4RSxlQUFlO0FBQzdGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFLGVBQWU7QUFDN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDZSwwR0FBMkMsRUFBQztBQUd6RDs7Ozs7Ozs7Ozs7O0FDNXdCRjtBQUFBO0FBQUE7QUFBQTtBQUFzN0IsQ0FBZ0IsaTZCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0ExOEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDNU5BO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicGFnZXMvdXNlci9vcmRlcl9saXN0L29yZGVyX2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJcbmltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy91c2VyL29yZGVyX2xpc3Qvb3JkZXJfbGlzdC5udnVlP21wVHlwZT1wYWdlJ1xuQXBwLm1wVHlwZSA9ICdwYWdlJ1xuQXBwLnJvdXRlID0gJ3BhZ2VzL3VzZXIvb3JkZXJfbGlzdC9vcmRlcl9saXN0J1xuQXBwLmVsID0gJyNyb290J1xuXG5uZXcgVnVlKEFwcClcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vb3JkZXJfbGlzdC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI1ZGVhZmY0Jm1wVHlwZT1wYWdlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vb3JkZXJfbGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL29yZGVyX2xpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLiRvcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLiRvcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSAmJiB0aGlzLiRyb290ICYmIHRoaXMuJHJvb3QuJG9wdGlvbnMuYXBwU3R5bGUpe1xuICB0aGlzLl9fbWVyZ2Vfc3R5bGUodGhpcy4kcm9vdC4kb3B0aW9ucy5hcHBTdHlsZSlcbn1cbmlmKHRoaXMuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIHRoaXMuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9vcmRlcl9saXN0Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuJG9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vb3JkZXJfbGlzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvc29mdC9IQnVpbGRlclguMi4xLjEuMjAxOTA3MTYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBpbmplY3RTdHlsZXMsXG4gIG51bGwsXG4gIFwiZjQ5MGExZjRcIlxuICBcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEb2N1bWVudHMvSEJ1aWxkZXJQcm9qZWN0cy9tbS9wYWdlcy91c2VyL29yZGVyX2xpc3Qvb3JkZXJfbGlzdC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9zb2Z0L0hCdWlsZGVyWC4yLjEuMS4yMDE5MDcxNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTMtMCEuL29yZGVyX2xpc3QubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iNWRlYWZmNCZtcFR5cGU9cGFnZVwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1widGFic1wiXSB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogW1widGFiXCJdIH0sXG4gICAgICAgIF92bS5fbChfdm0ub3JkZXJUeXBlLCBmdW5jdGlvbih0YWIsIHRiSW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiB0YkluZGV4LFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widGFiLXRleHRcIl0sXG4gICAgICAgICAgICAgIGNsYXNzOiBbdGJJbmRleCA9PSBfdm0uc2VsZWN0SW5kZXggPyBcInRhYi10ZXh0LW9uXCIgOiBcIlwiXSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dUeXBlKHRiSW5kZXgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGFiKSldXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKSxcbiAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFtcImJvcmRlclwiXSxcbiAgICAgICAgc3R5bGU6IHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoXCIgKyBfdm0udHJhbnNsYXRlWFcgKyBcInB4KVwiIH1cbiAgICAgIH0pXG4gICAgXSksXG4gICAgX2MoXG4gICAgICBcInNsaWRlclwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogW1wic2xpZGVyXCJdLFxuICAgICAgICBhdHRyczogeyBhdXRvUGxheTogZmFsc2UsIGluZmluaXRlOiBmYWxzZSwgaW5kZXg6IF92bS5zZWxlY3RJbmRleCB9LFxuICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5zbGlkZXJDaGFuZ2UgfVxuICAgICAgfSxcbiAgICAgIF92bS5fbChfdm0ub3JkZXJMaXN0LCBmdW5jdGlvbihwYWdlLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJsaXN0XCIsXG4gICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogW1wiZnJhbWVcIl0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBwYWdlLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICAgID8gX2MoXCJjZWxsXCIsIHsgYXBwZW5kQXNUcmVlOiB0cnVlLCBhdHRyczogeyBhcHBlbmQ6IFwidHJlZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDAsIHRydWUpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fbChwYWdlLCBmdW5jdGlvbihyb3csIHJvd0luZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBwYWdlLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImNlbGxcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogcm93SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgYXBwZW5kQXNUcmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGFwcGVuZDogXCJ0cmVlXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wicm93XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ0eXBlXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udHlwZVRleHRbcm93LnR5cGVdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wib3JkZXItaW5mb1wiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWluZm8tbGVmdFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWFnZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wibGVmdC1pbWFnZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcm93LmltZyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWluZm8tcmlnaHRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJvcmRlci1pbmZvLXJpZ2h0LW5hbWVcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKHJvdy5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wib3JkZXItaW5mby1yaWdodC1zcGVjXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhyb3cuc3BlYykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wib3JkZXItaW5mby1yaWdodC1wcmljZS1udW1iZXJcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWluZm8tcmlnaHQtdW5pdFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLvv6VcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWluZm8tcmlnaHQtcHJpY2VcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhyb3cucHJpY2UpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWluZm8tcmlnaHQtbXVsdGlwbGllclwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcInhcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcIm9yZGVyLWluZm8tcmlnaHQtbnVtYmVyXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Mocm93Lm51bW5lcikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJkZXRhaWxcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiZGV0YWlsLW51bWJlclwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5YWxXCIgKyBfdm0uX3Mocm93Lm51bW5lcikgKyBcIuS7tuWVhuWTgVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wiZGV0YWlsLXN1bVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImRldGFpbC1zdW0tdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLlkIjorqHvv6VcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiZGV0YWlsLXN1bS1wYXltZW50XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhyb3cucGF5bWVudCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImRldGFpbC1zdW0tbm9taW5hbFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIijlkKvov5DotLkg77+lXCIgKyBfdm0uX3Mocm93LmZyZWlnaHQpICsgXCIpXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wiYnRuc1wiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy50eXBlID09IFwidW5wYWlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtZGl2XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImJ0bnMtYnRuXCIsIFwiZGVmYXVsdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNhbmNlbE9yZGVyKHJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWPlua2iOiuouWNlVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImJ0bnMtYnRuXCIsIFwicGF5XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9QYXltZW50KHJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuS7mOasvlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3cudHlwZSA9PSBcImJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wiYnRucy1kaXZcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiYnRucy1idG5cIiwgXCJkZWZhdWx0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtaW5kRGVsaXZlcihyb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmj5DphpLlj5HotKdcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnR5cGUgPT0gXCJ1bnJlY2VpdmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtZGl2XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImJ0bnMtYnRuXCIsIFwiZGVmYXVsdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNob3dMb2dpc3RpY3Mocm93KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5p+l55yL54mp5rWBXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJidG5zLWJ0blwiLCBcInBheVwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLnoa7orqTmlLbotKdcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtYnRuXCIsIFwicGF5XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaIkeimgemAgOi0p1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3cudHlwZSA9PSBcInJlY2VpdmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtZGl2XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiYnRucy1idG5cIiwgXCJkZWZhdWx0XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuivhOS7t1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiYnRucy1idG5cIiwgXCJkZWZhdWx0XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWGjeasoei0reS5sFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3cudHlwZSA9PSBcImNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJidG5zLWRpdlwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtYnRuXCIsIFwiZGVmYXVsdFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlho3mrKHotK3kubBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnR5cGUgPT0gXCJyZWZ1bmRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtZGl2XCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiYnRucy1idG5cIiwgXCJkZWZhdWx0XCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuafpeeci+i/m+W6plwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3cudHlwZSA9PSBcImNhbmNlbGxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBbXCJidG5zLWRpdlwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImJ0bnMtYnRuXCIsIFwiZGVmYXVsdFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlt7Llj5bmtohcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICAwXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogW1wib25vcmRlclwiXSB9LCBbXG4gICAgICBfYyhcImltYWdlXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm9ub3JkZXItaW1hZ2VcIl0sXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFGR0o3WEVEMWdLMGpTWkZHNzYyZDNGWGFtLnBuZ1wiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX2MoXCJ0ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcIm9ub3JkZXItdGV4dFwiXSB9LCBbX3ZtLl92KFwi5rKh5pyJ55u45YWz6K6i5Y2VXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yLTAhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTItMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvc29mdC9IQnVpbGRlclguMi4xLjEuMjAxOTA3MTYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0zLTAhLi9vcmRlcl9saXN0Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvc29mdC9IQnVpbGRlclguMi4xLjEuMjAxOTA3MTYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTItMCEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvc29mdC9IQnVpbGRlclguMi4xLjEuMjAxOTA3MTYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMi0xIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9zb2Z0L0hCdWlsZGVyWC4yLjEuMS4yMDE5MDcxNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTMtMCEuL29yZGVyX2xpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxyXG5cdDxkaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwidGFic1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidGFiXCI+XHJcblx0XHRcdFx0PHRleHQgdi1mb3I9XCIodGFiLCB0YkluZGV4KSBpbiBvcmRlclR5cGVcIiA6a2V5PVwidGJJbmRleFwiIFxyXG5cdFx0XHRcdFx0QGNsaWNrPVwic2hvd1R5cGUodGJJbmRleClcIiBcclxuXHRcdFx0XHRcdGNsYXNzPVwidGFiLXRleHRcIiBcclxuXHRcdFx0XHRcdDpjbGFzcz1cIlt0YkluZGV4ID09IHNlbGVjdEluZGV4ID8gJ3RhYi10ZXh0LW9uJyA6ICcnXVwiXHJcblx0XHRcdFx0Pnt7IHRhYiB9fTwvdGV4dD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJib3JkZXJcIiA6c3R5bGU9XCJ7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoJyArIHRyYW5zbGF0ZVhXICsgJ3B4KScgfVwiPjwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8c2xpZGVyIGNsYXNzPVwic2xpZGVyXCIgOmF1dG8tcGxheT1cImZhbHNlXCIgOmluZmluaXRlPVwiZmFsc2VcIiA6aW5kZXg9XCJzZWxlY3RJbmRleFwiIEBjaGFuZ2U9XCJzbGlkZXJDaGFuZ2VcIj5cclxuXHRcdFx0PGxpc3QgY2xhc3M9XCJmcmFtZVwiIHYtZm9yPVwiKHBhZ2UsIGluZGV4KSBpbiBvcmRlckxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHQ8Y2VsbCB2LWlmPVwicGFnZS5sZW5ndGggPT0gMFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm9ub3JkZXJcIj5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwib25vcmRlci1pbWFnZVwiIHNyYz1cImh0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFGR0o3WEVEMWdLMGpTWkZHNzYyZDNGWGFtLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib25vcmRlci10ZXh0XCI+5rKh5pyJ55u45YWz6K6i5Y2VPC90ZXh0PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9jZWxsPlxyXG5cdFx0XHRcdDxjZWxsIHYtZm9yPVwiKHJvdywgcm93SW5kZXgpIGluIHBhZ2VcIiA6a2V5PVwicm93SW5kZXhcIiB2LWlmPVwicGFnZS5sZW5ndGggPiAwXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidHlwZVwiPnt7IHR5cGVUZXh0W3Jvdy50eXBlXSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm9yZGVyLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3JkZXItaW5mby1sZWZ0XCI+PGltYWdlIGNsYXNzPVwibGVmdC1pbWFnZVwiIDpzcmM9XCJyb3cuaW1nXCI+PC9pbWFnZT48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3JkZXItaW5mby1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvcmRlci1pbmZvLXJpZ2h0LW5hbWVcIj57eyByb3cubmFtZSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib3JkZXItaW5mby1yaWdodC1zcGVjXCI+e3sgcm93LnNwZWMgfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib3JkZXItaW5mby1yaWdodC1wcmljZS1udW1iZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvcmRlci1pbmZvLXJpZ2h0LXVuaXRcIj7vv6U8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwib3JkZXItaW5mby1yaWdodC1wcmljZVwiPnt7IHJvdy5wcmljZSB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvcmRlci1pbmZvLXJpZ2h0LW11bHRpcGxpZXJcIj54PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9yZGVyLWluZm8tcmlnaHQtbnVtYmVyXCI+e3sgcm93Lm51bW5lciB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRldGFpbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGV0YWlsLW51bWJlclwiPuWFsXt7IHJvdy5udW1uZXIgfX3ku7bllYblk4E8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRldGFpbC1zdW1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGV0YWlsLXN1bS10ZXh0XCI+5ZCI6K6h77+lPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJkZXRhaWwtc3VtLXBheW1lbnRcIj57eyByb3cucGF5bWVudCB9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZGV0YWlsLXN1bS1ub21pbmFsXCI+KOWQq+i/kOi0uSDvv6V7eyByb3cuZnJlaWdodCB9fSk8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnRuc1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidG5zLWRpdlwiIHYtaWY9XCJyb3cudHlwZSA9PSAndW5wYWlkJ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJidG5zLWJ0biBkZWZhdWx0XCIgQGNsaWNrPVwiY2FuY2VsT3JkZXIocm93KVwiPuWPlua2iOiuouWNlTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYnRucy1idG4gcGF5XCIgQGNsaWNrPVwidG9QYXltZW50KHJvdylcIj7ku5jmrL48L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0bnMtZGl2XCIgdi1pZj1cInJvdy50eXBlID09ICdiYWNrJ1wiPjx0ZXh0IGNsYXNzPVwiYnRucy1idG4gZGVmYXVsdFwiIEBjbGljaz1cInJlbWluZERlbGl2ZXIocm93KVwiPuaPkOmGkuWPkei0pzwvdGV4dD48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnRucy1kaXZcIiB2LWlmPVwicm93LnR5cGUgPT0gJ3VucmVjZWl2ZWQnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJ0bnMtYnRuIGRlZmF1bHRcIiBAY2xpY2s9XCJzaG93TG9naXN0aWNzKHJvdylcIj7mn6XnnIvnianmtYE8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJ0bnMtYnRuIHBheVwiPuehruiupOaUtui0pzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYnRucy1idG4gcGF5XCI+5oiR6KaB6YCA6LSnPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidG5zLWRpdlwiIHYtaWY9XCJyb3cudHlwZSA9PSAncmVjZWl2ZWQnXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJ0bnMtYnRuIGRlZmF1bHRcIj7or4Tku7c8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImJ0bnMtYnRuIGRlZmF1bHRcIj7lho3mrKHotK3kubA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0bnMtZGl2XCIgdi1pZj1cInJvdy50eXBlID09ICdjb21wbGV0ZWQnXCI+PHRleHQgY2xhc3M9XCJidG5zLWJ0biBkZWZhdWx0XCI+5YaN5qyh6LSt5LmwPC90ZXh0PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidG5zLWRpdlwiIHYtaWY9XCJyb3cudHlwZSA9PSAncmVmdW5kcydcIj48dGV4dCBjbGFzcz1cImJ0bnMtYnRuIGRlZmF1bHRcIj7mn6XnnIvov5vluqY8L3RleHQ+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ0bnMtZGl2XCIgdi1pZj1cInJvdy50eXBlID09ICdjYW5jZWxsZWQnXCI+PHRleHQgY2xhc3M9XCJidG5zLWJ0biBkZWZhdWx0XCI+5bey5Y+W5raIPC90ZXh0PjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvY2VsbD5cclxuXHRcdFx0PC9saXN0PlxyXG5cdFx0PC9zbGlkZXI+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHNlbGVjdEluZGV4OiAwLFxyXG5cdFx0XHR0cmFuc2xhdGVYOiBbMCwgMTI1LCAyNTAsIDM3NSwgNTAwLCA2MjUsIDc1MF0sXHJcblx0XHRcdHRyYW5zbGF0ZVhXOiAwLFxyXG5cdFx0XHRvcmRlclR5cGU6IFsn5YWo6YOoJywgJ+W+heS7mOasvicsICflvoXlj5HotKcnLCAn5b6F5pS26LSnJywgJ+W+heivhOS7tycsICfpgIDmjaLotKcnXSxcclxuXHRcdFx0dHlwZVRleHQ6IHtcclxuXHRcdFx0XHR1bnBhaWQ6ICfnrYnlvoXku5jmrL4nLFxyXG5cdFx0XHRcdGJhY2s6ICfnrYnlvoXllYblrrblj5HotKcnLFxyXG5cdFx0XHRcdHVucmVjZWl2ZWQ6ICfllYblrrblt7Llj5HotKcnLFxyXG5cdFx0XHRcdHJlY2VpdmVkOiAn562J5b6F55So5oi36K+E5Lu3JyxcclxuXHRcdFx0XHRjb21wbGV0ZWQ6ICfkuqTmmJPlt7LlrozmiJAnLFxyXG5cdFx0XHRcdHJlZnVuZHM6ICfllYblk4HpgIDotKflpITnkIbkuK0nLFxyXG5cdFx0XHRcdGNhbmNlbGxlZDogJ+iuouWNleW3suWPlua2iCdcclxuXHRcdFx0fSxcclxuXHRcdFx0b3JkZXJMaXN0OiBbXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAndW5wYWlkJyxcclxuXHRcdFx0XHRcdFx0b3JkZXJzbjogMCxcclxuXHRcdFx0XHRcdFx0Z29vZHNfaWQ6IDAsXHJcblx0XHRcdFx0XHRcdGltZzogJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE2d2VwZVc1czNLVmpTWkZOcTZBRDNGWGFKLmpwZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7AnLFxyXG5cdFx0XHRcdFx0XHRwcmljZTogJzE2OC4wMCcsXHJcblx0XHRcdFx0XHRcdHBheW1lbnQ6IDE2OC4wLFxyXG5cdFx0XHRcdFx0XHRmcmVpZ2h0OiAxMi4wLFxyXG5cdFx0XHRcdFx0XHRzcGVjOiAn6KeE5qC8OlPnoIEnLFxyXG5cdFx0XHRcdFx0XHRudW1uZXI6IDFcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICd1bnBhaWQnLFxyXG5cdFx0XHRcdFx0XHRvcmRlcnNuOiAxLFxyXG5cdFx0XHRcdFx0XHRnb29kc19pZDogMSxcclxuXHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMWR1SHRjZkJqX3VWalNaRnBxNkEwU1hYYUouanBnJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiAnMTY4LjAwJyxcclxuXHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdGZyZWlnaHQ6IDEyLjAsXHJcblx0XHRcdFx0XHRcdHNwZWM6ICfop4TmoLw6U+eggScsXHJcblx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ2JhY2snLFxyXG5cdFx0XHRcdFx0XHRvcmRlcnNuOiAyLFxyXG5cdFx0XHRcdFx0XHRnb29kc19pZDogMSxcclxuXHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTczZXBlVzVzM0tWalNaRk5xNkFEM0ZYYWkuanBnJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiAnMTY4LjAwJyxcclxuXHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdGZyZWlnaHQ6IDEyLjAsXHJcblx0XHRcdFx0XHRcdHNwZWM6ICfop4TmoLw6U+eggScsXHJcblx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3VucmVjZWl2ZWQnLFxyXG5cdFx0XHRcdFx0XHRvcmRlcnNuOiAzLFxyXG5cdFx0XHRcdFx0XHRnb29kc19pZDogMSxcclxuXHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMTczZXBlVzVzM0tWalNaRk5xNkFEM0ZYYWkuanBnJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiAnMTY4LjAwJyxcclxuXHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdGZyZWlnaHQ6IDEyLjAsXHJcblx0XHRcdFx0XHRcdHNwZWM6ICfop4TmoLw6U+eggScsXHJcblx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3JlY2VpdmVkJyxcclxuXHRcdFx0XHRcdFx0b3JkZXJzbjogNCxcclxuXHRcdFx0XHRcdFx0Z29vZHNfaWQ6IDEsXHJcblx0XHRcdFx0XHRcdGltZzogJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjFKQzFmZS5DRjNLVmpTWkpucTZ6bkhGWGFHLmpwZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7AnLFxyXG5cdFx0XHRcdFx0XHRwcmljZTogJzE2OC4wMCcsXHJcblx0XHRcdFx0XHRcdHBheW1lbnQ6IDE2OC4wLFxyXG5cdFx0XHRcdFx0XHRmcmVpZ2h0OiAxMi4wLFxyXG5cdFx0XHRcdFx0XHRzcGVjOiAn6KeE5qC8OlPnoIEnLFxyXG5cdFx0XHRcdFx0XHRudW1uZXI6IDFcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICdjb21wbGV0ZWQnLFxyXG5cdFx0XHRcdFx0XHRvcmRlcnNuOiA1LFxyXG5cdFx0XHRcdFx0XHRnb29kc19pZDogMSxcclxuXHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMUdTcW9lV1dzM0tWalNaRnhxNnlXVVhYYXYuanBnJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiAnMTY4LjAwJyxcclxuXHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdGZyZWlnaHQ6IDEyLjAsXHJcblx0XHRcdFx0XHRcdHNwZWM6ICfop4TmoLw6U+eggScsXHJcblx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3JlZnVuZHMnLFxyXG5cdFx0XHRcdFx0XHRvcmRlcnNuOiA2LFxyXG5cdFx0XHRcdFx0XHRnb29kc19pZDogMSxcclxuXHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMV9NZWZlM2FIM0tWalNaRmpxNkFGV3BYYUouanBnJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiAnMTY4JyxcclxuXHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdGZyZWlnaHQ6IDEyLjAsXHJcblx0XHRcdFx0XHRcdHNwZWM6ICfop4TmoLw6U+eggScsXHJcblx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ2NhbmNlbGxlZCcsXHJcblx0XHRcdFx0XHRcdG9yZGVyc246IDcsXHJcblx0XHRcdFx0XHRcdGdvb2RzX2lkOiAxLFxyXG5cdFx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxTHUxcGU4Q3czS1ZqU1pGdXE2QUFPcFhhSS5qcGcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6ICcxNjgnLFxyXG5cdFx0XHRcdFx0XHRwYXltZW50OiAxNjguMCxcclxuXHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0c3BlYzogJ+inhOagvDpT56CBJyxcclxuXHRcdFx0XHRcdFx0bnVtbmVyOiAxXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICd1bnBhaWQnLFxyXG5cdFx0XHRcdFx0XHRvcmRlcnNuOiAwLFxyXG5cdFx0XHRcdFx0XHRnb29kc19pZDogMCxcclxuXHRcdFx0XHRcdFx0aW1nOiAnaHR0cHM6Ly9hZTAxLmFsaWNkbi5jb20va2YvSFRCMWlNaWZlM2FIM0tWalNaRmpxNkFGV3BYYUEuanBnJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ+WVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensOWVhuWTgeWQjeensCcsXHJcblx0XHRcdFx0XHRcdHByaWNlOiAnMTY4JyxcclxuXHRcdFx0XHRcdFx0cGF5bWVudDogMTY4LjAsXHJcblx0XHRcdFx0XHRcdGZyZWlnaHQ6IDEyLjAsXHJcblx0XHRcdFx0XHRcdHNwZWM6ICfop4TmoLw6U+eggScsXHJcblx0XHRcdFx0XHRcdG51bW5lcjogMVxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3VucGFpZCcsXHJcblx0XHRcdFx0XHRcdG9yZGVyc246IDEsXHJcblx0XHRcdFx0XHRcdGdvb2RzX2lkOiAxLFxyXG5cdFx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxRDZTZmU0aUgzS1ZqU1pQZnE2eEJpVlhhRy5qcGcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6ICcxNjgnLFxyXG5cdFx0XHRcdFx0XHRwYXltZW50OiAxNjguMCxcclxuXHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0c3BlYzogJ+inhOagvDpT56CBJyxcclxuXHRcdFx0XHRcdFx0bnVtbmVyOiAxXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHQvL+aXoFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHR0eXBlOiAndW5yZWNlaXZlZCcsXHJcblx0XHRcdFx0XHRcdG9yZGVyc246IDMsXHJcblx0XHRcdFx0XHRcdGdvb2RzX2lkOiAxLFxyXG5cdFx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxSWpTZmU0aUgzS1ZqU1pQZnE2eEJpVlhhNC5qcGcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6ICcxNjgnLFxyXG5cdFx0XHRcdFx0XHRwYXltZW50OiAxNjguMCxcclxuXHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0c3BlYzogJ+inhOagvDpT56CBJyxcclxuXHRcdFx0XHRcdFx0bnVtbmVyOiAxXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICdyZWNlaXZlZCcsXHJcblx0XHRcdFx0XHRcdG9yZGVyc246IDQsXHJcblx0XHRcdFx0XHRcdGdvb2RzX2lkOiAxLFxyXG5cdFx0XHRcdFx0XHRpbWc6ICdodHRwczovL2FlMDEuYWxpY2RuLmNvbS9rZi9IVEIxNndlcGVXNXMzS1ZqU1pGTnE2QUQzRlhhSi5qcGcnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAn5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ew5ZWG5ZOB5ZCN56ewJyxcclxuXHRcdFx0XHRcdFx0cHJpY2U6ICcxNjgnLFxyXG5cdFx0XHRcdFx0XHRwYXltZW50OiAxNjguMCxcclxuXHRcdFx0XHRcdFx0ZnJlaWdodDogMTIuMCxcclxuXHRcdFx0XHRcdFx0c3BlYzogJ+inhOagvDpT56CBJyxcclxuXHRcdFx0XHRcdFx0bnVtbmVyOiAxXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHR5cGU6ICdyZWZ1bmRzJyxcclxuXHRcdFx0XHRcdFx0b3JkZXJzbjogNixcclxuXHRcdFx0XHRcdFx0Z29vZHNfaWQ6IDEsXHJcblx0XHRcdFx0XHRcdGltZzogJ2h0dHBzOi8vYWUwMS5hbGljZG4uY29tL2tmL0hUQjE2d2VwZVc1czNLVmpTWkZOcTZBRDNGWGFKLmpwZycsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICfllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7DllYblk4HlkI3np7AnLFxyXG5cdFx0XHRcdFx0XHRwcmljZTogJzE2OCcsXHJcblx0XHRcdFx0XHRcdHBheW1lbnQ6IDE2OC4wLFxyXG5cdFx0XHRcdFx0XHRmcmVpZ2h0OiAxMi4wLFxyXG5cdFx0XHRcdFx0XHRzcGVjOiAn6KeE5qC8OlPnoIEnLFxyXG5cdFx0XHRcdFx0XHRudW1uZXI6IDFcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdF1cclxuXHRcdH07XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0dGhpcy5zZWxlY3RJbmRleCA9IHBhcnNlSW50KHVuaS5nZXRTdG9yYWdlU3luYygndGJJbmRleCcpKSsxO1xyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0c2hvd1R5cGUodGJJbmRleCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdEluZGV4ID0gdGJJbmRleDtcclxuXHRcdFx0dGhpcy50cmFuc2xhdGVYVyA9IHRoaXMudHJhbnNsYXRlWFt0YkluZGV4XTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ3RoaXMuc2VsZWN0SW5kZXg6ICcgKyB0aGlzLnNlbGVjdEluZGV4KTtcclxuXHRcdH0sXHJcblx0XHRzbGlkZXJDaGFuZ2UoZSkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdEluZGV4ID0gZS5pbmRleDtcclxuXHRcdFx0dGhpcy50cmFuc2xhdGVYVyA9IHRoaXMudHJhbnNsYXRlWFtlLmluZGV4XTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2UuaW5kZXg6ICcgKyBKU09OLnN0cmluZ2lmeShlLmluZGV4KSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHJlbWluZERlbGl2ZXIocm93KSB7XHJcblx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdHRpdGxlOiAn5bey5o+Q6YaS5ZWG5a625Y+R6LSnJ1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRjYW5jZWxPcmRlcihyb3cpIHtcclxuXHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0dGl0bGU6ICflj5bmtojorqLljZUnLFxyXG5cdFx0XHRcdGNvbnRlbnQ6ICfnoa7lrprlj5bmtojmraTorqLljZXvvJ8nLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRvQ2FuY2VsT3JkZXIocm93Lm9yZGVyc24pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGRvQ2FuY2VsT3JkZXIob3JkZXJzbikge1xyXG5cdFx0XHRsZXQgdHlwZU51bSA9IHRoaXMub3JkZXJMaXN0Lmxlbmd0aDtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0eXBlTnVtOyBpKyspIHtcclxuXHRcdFx0XHRsZXQgbGlzdCA9IHRoaXMub3JkZXJMaXN0W2ldO1xyXG5cdFx0XHRcdGxldCBvcmRlck51bSA9IGxpc3QubGVuZ3RoO1xyXG5cdFx0XHRcdGlmIChvcmRlck51bSA+IDAgJiYgbGlzdFswXS50eXBlID09ICd1bnBhaWQnKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG9yZGVyTnVtOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMub3JkZXJMaXN0W2ldW2pdLm9yZGVyc24gPT0gb3JkZXJzbikge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMub3JkZXJMaXN0W2ldW2pdLnR5cGUgPSAnY2FuY2VsbGVkJztcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHRvUGF5bWVudChyb3cpIHtcclxuXHRcdFx0Ly/mnKzlnLDmqKHmi5/orqLljZXmj5DkuqRVSeaViOaenFxyXG5cdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdHRpdGxlOiAn5q2j5Zyo6I635Y+W6K6i5Y2VLi4uJ1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0bGV0IHBheW1lbnRPcmRlciA9IFtdO1xyXG5cdFx0XHRwYXltZW50T3JkZXIucHVzaChyb3cpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZSh7XHJcblx0XHRcdFx0XHRrZXk6ICdwYXltZW50T3JkZXInLFxyXG5cdFx0XHRcdFx0ZGF0YTogcGF5bWVudE9yZGVyLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKTtcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDogJy4uLy4uL3BheS9wYXltZW50L3BheW1lbnQ/YW1vdW50PScgKyByb3cucGF5bWVudFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSwgNTAwKTtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4udGFicyB7XHJcblx0d2lkdGg6IDc1MHB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGhlaWdodDogODBweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbn1cclxuXHJcbi50YWIge1xyXG5cdHdpZHRoOiA3NTBweDtcclxuXHRoZWlnaHQ6IDc2cHg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi50YWItdGV4dCB7XHJcblx0d2lkdGg6IDEyNXB4O1xyXG5cdGhlaWdodDogNzZweDtcclxuXHRsaW5lLWhlaWdodDogNzZweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdGNvbG9yOiAjNDQ0O1xyXG59XHJcbi50YWItdGV4dC1vbiB7XHJcblx0Y29sb3I6ICNmMDZjN2E7XHJcbn1cclxuLmJvcmRlciB7XHJcblx0d2lkdGg6IDc1cHg7XHJcblx0bWFyZ2luOiAwIDI1cHg7XHJcblx0aGVpZ2h0OiA0cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YwNmM3YTtcclxuXHR0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuXHR0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcblx0d2lkdGg6IDc1MHB4O1xyXG5cdHRvcDogODBweDtcclxuXHRib3R0b206IDA7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5mcmFtZSB7XHJcblx0d2lkdGg6IDc1MHB4O1xyXG5cdHBhZGRpbmc6IDIwcHggMjBweDtcclxufVxyXG4ub25vcmRlciB7XHJcblx0d2lkdGg6IDc1MHB4O1xyXG5cdGhlaWdodDogMzc1cHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxufVxyXG4ub25vcmRlci1pbWFnZSB7XHJcblx0d2lkdGg6IDE1MDtcclxuXHRoZWlnaHQ6IDE1MDtcclxuXHRib3JkZXItcmFkaXVzOiAxNTA7XHJcbn1cclxuLm9ub3JkZXItdGV4dCB7XHJcblx0d2lkdGg6IDc1MDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdGNvbG9yOiAjNDQ0O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRsaW5lLWhlaWdodDogNjBweDtcclxufVxyXG5cclxuLnJvdyB7XHJcblx0d2lkdGg6IDcxMHB4O1xyXG5cdGhlaWdodDogNDAwcHg7XHJcblx0cGFkZGluZzogMTBweCAyMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50eXBlIHtcclxuXHR3aWR0aDogNzEwcHg7XHJcblx0Zm9udC1zaXplOiAyNnB4O1xyXG5cdGNvbG9yOiAjZWM2NTJmO1xyXG5cdGhlaWdodDogNTBweDtcclxuXHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ub3JkZXItaW5mbyB7XHJcblx0d2lkdGg6IDcxMHB4O1xyXG5cdGhlaWdodDogMTg4cHg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmxlZnQge1xyXG5cdGZsZXgtc2hyaW5rOiAwO1xyXG5cdHdpZHRoOiAxODhweDtcclxuXHRoZWlnaHQ6IDE4OHB4O1xyXG59XHJcbi5sZWZ0LWltYWdlIHtcclxuXHR3aWR0aDogMTg4cHg7XHJcblx0aGVpZ2h0OiAxODhweDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ub3JkZXItaW5mby1yaWdodCB7XHJcblx0d2lkdGg6IDQ3MnB4O1xyXG5cdGhlaWdodDogMTg4cHg7XHJcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4ub3JkZXItaW5mby1yaWdodC1uYW1lIHtcclxuXHR3aWR0aDogNDcycHg7XHJcblx0aGVpZ2h0OiA5NHB4O1xyXG5cdGZvbnQtc2l6ZTogMjhweDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ub3JkZXItaW5mby1yaWdodC1zcGVjIHtcclxuXHRjb2xvcjogI2E3YTdhNztcclxuXHRmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5vcmRlci1pbmZvLXJpZ2h0LXByaWNlLW51bWJlciB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogMDtcclxuXHR3aWR0aDogNDcycHg7XHJcblx0Y29sb3I6ICMzMzM7XHJcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG4ub3JkZXItaW5mby1yaWdodC11bml0LFxyXG4ub3JkZXItaW5mby1yaWdodC1tdWx0aXBsaWVyIHtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLm9yZGVyLWluZm8tcmlnaHQtcHJpY2UsXHJcbi5vcmRlci1pbmZvLXJpZ2h0LW51bWJlciB7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uZGV0YWlsIHtcclxuXHR3aWR0aDogNjcwcHg7XHJcblx0aGVpZ2h0OiA2MHB4O1xyXG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmRldGFpbC1udW1iZXIge1xyXG5cdGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG4uZGV0YWlsLXN1bSB7XHJcblx0cGFkZGluZzogMCA4cHg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuLmRldGFpbC1zdW0tdGV4dCB7XHJcblx0Zm9udC1zaXplOiAyNnB4O1xyXG59XHJcbi5kZXRhaWwtc3VtLXBheW1lbnQge1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uZGV0YWlsLXN1bS1ub21pbmFsIHtcclxuXHRmb250LXNpemU6IDI2cHg7XHJcbn1cclxuLmJ0bnMge1xyXG5cdHdpZHRoOiA2NzBweDtcclxuXHRoZWlnaHQ6IDgwcHg7XHJcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5idG5zLWRpdiB7XHJcblx0d2lkdGg6IDY3MHB4O1xyXG5cdGhlaWdodDogNTBweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmJ0bnMtYnRuIHtcclxuXHRtaW4td2lkdGg6IDEyMHB4O1xyXG5cdGhlaWdodDogNTBweDtcclxuXHRwYWRkaW5nOiAwIDIwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRsaW5lLWhlaWdodDogNTBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAyOHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cdGJvcmRlci1zdHlsZTogc29saWQ7XHJcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4uZGVmYXVsdCB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjY2NjO1xyXG5cdGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG4ucGF5IHtcclxuXHRib3JkZXItY29sb3I6ICNlYzY1MmY7XHJcblx0Y29sb3I6ICNlYzY1MmY7XHJcbn1cclxuPC9zdHlsZT5cbiIsImZ1bmN0aW9uIGluaXRVbmkoKSB7XHJcblxyXG4gICAgdmFyIGlzRm4gPSBmdW5jdGlvbiBpc0ZuKHYpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYW5kbGVQcm9taXNlID0gZnVuY3Rpb24gaGFuZGxlUHJvbWlzZShwcm9taXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbnVsbCwgZGF0YV07XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbZXJyXTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIFJFR0VYID0gL15cXCR8Xm9ufF5jcmVhdGV8U3luYyR8TWFuYWdlciR8XnBhdXNlLztcclxuICAgIHZhciBBUElfTk9STUFMX0xJU1QgPSBbJ29zJywgJ2dldEN1cnJlbnRTdWJOVnVlJywgJ2dldFN1Yk5WdWVCeUlkJywgJ3N0b3BSZWNvcmQnLCAnc3RvcFZvaWNlJyxcclxuICAgICAgICAnc3RvcEJhY2tncm91bmRBdWRpbycsICdzdG9wUHVsbERvd25SZWZyZXNoJywgJ2hpZGVLZXlib2FyZCcsICdoaWRlVG9hc3QnLCAnaGlkZUxvYWRpbmcnLFxyXG4gICAgICAgICdzaG93TmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2NhbklVc2UnLCAnbmF2aWdhdGVCYWNrJywgJ2Nsb3NlU29ja2V0JyxcclxuICAgICAgICAncGFnZVNjcm9sbFRvJywgJ2RyYXdDYW52YXMnXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBzaG91bGRQcm9taXNlID0gZnVuY3Rpb24gc2hvdWxkUHJvbWlzZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKFJFR0VYLnRlc3QobmFtZSkgJiYgbmFtZSAhPT0gJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKH5BUElfTk9STUFMX0xJU1QuaW5kZXhPZihuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KGFwaSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0ZuKG9wdGlvbnMuc3VjY2VzcykgfHwgaXNGbihvcHRpb25zLmZhaWwpIHx8IGlzRm4ob3B0aW9ucy5jb21wbGV0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGkuYXBwbHkodW5kZWZpbmVkLCBbb3B0aW9uc10uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQcm9taXNlKG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgYXBpLmFwcGx5KHVuZGVmaW5lZCwgW09iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICAgICAgICAgICAgfSldLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cclxuICAgICAgICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlYXNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTWVzc2FnZUNhbGxiYWNrcyA9IFtdO1xyXG5cclxuICAgIHZhciBvcmlnaW4gPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJOVnVlTWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG5cclxuICAgIHZhciBjaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ1VOSS1BUFAtU1VCTlZVRScpO1xyXG4gICAgY2hhbm5lbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5kYXRhLnRvID09PSB3ZWJ2aWV3SWQpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShldmVudC5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gd3JhcHBlcih3ZWJ2aWV3KSB7XHJcbiAgICAgICAgd2Vidmlldy4kcHJvY2Vzc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRXZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcbiAgICAgICAgdmFyIGlzUG9wdXBOVnVlID0gY3VycmVudFdlYnZpZXdJZCA9PT0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgdmFyIGhvc3ROVnVlSWQgPSB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl90eXBlID09PSAndW5pTlZpZXcnICYmIHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX2lkO1xyXG4gICAgICAgIHZhciBwb3B1cE5WdWVJZCA9IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHdlYnZpZXcucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChob3N0TlZ1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBpc1BvcHVwTlZ1ZSA/IGhvc3ROVnVlSWQgOiBwb3B1cE5WdWVJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VuaUFwcFN1Yk5WdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3Lm9uTWVzc2FnZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIXdlYnZpZXcuX191bmlhcHBfbWFza19pZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9yaWdpbiA9IHdlYnZpZXcuX191bmlhcHBfaG9zdDtcclxuXHJcbiAgICAgICAgdmFyIG1hc2tDb2xvciA9IHdlYnZpZXcuX191bmlhcHBfbWFzaztcclxuXHJcbiAgICAgICAgdmFyIG1hc2tXZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZCh3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpO1xuICAgICAgICBtYXNrV2VidmlldyA9IG1hc2tXZWJ2aWV3LnBhcmVudCgpIHx8IG1hc2tXZWJ2aWV3Oy8v5YaN5qyh5qOA5rWL54i2XHJcbiAgICAgICAgdmFyIG9sZFNob3cgPSB3ZWJ2aWV3LnNob3c7XHJcbiAgICAgICAgdmFyIG9sZEhpZGUgPSB3ZWJ2aWV3LmhpZGU7XHJcbiAgICAgICAgdmFyIG9sZENsb3NlID0gd2Vidmlldy5jbG9zZTtcclxuXHJcbiAgICAgICAgdmFyIHNob3dNYXNrID0gZnVuY3Rpb24gc2hvd01hc2soKSB7XHJcbiAgICAgICAgICAgIG1hc2tXZWJ2aWV3LnNldFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IG1hc2tDb2xvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBjbG9zZU1hc2sgPSBmdW5jdGlvbiBjbG9zZU1hc2soKSB7XHJcbiAgICAgICAgICAgIG1hc2tXZWJ2aWV3LnNldFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG1hc2s6ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuc2hvdyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzaG93TWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRTaG93LmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5oaWRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZEhpZGUuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmNsb3NlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZENsb3NlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3ViTlZ1ZUJ5SWQoaWQpIHtcclxuICAgICAgICB2YXIgd2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQoaWQpO1xyXG4gICAgICAgIGlmICh3ZWJ2aWV3ICYmICF3ZWJ2aWV3LiRwcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgd3JhcHBlcih3ZWJ2aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdlYnZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFN1Yk5WdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFN1Yk5WdWVCeUlkKHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBsdXMgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXMnKTtcclxuICAgIHZhciBnbG9iYWxFdmVudCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgaWQgPSAwO1xyXG4gICAgdmFyIGNhbGxiYWNrcyA9IHt9O1xyXG5cclxuICAgIHZhciBVTklBUFBfU0VSVklDRV9OVlVFX0lEID0gJ19fdW5pYXBwX19zZXJ2aWNlJztcclxuXHJcbiAgICBnbG9iYWxFdmVudC5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBKc0FwaScpIHtcclxuICAgICAgICAgICAgaW52b2tlKGUuZGF0YS5pZCwgZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBTdWJOVnVlJykge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGUuZGF0YS5kYXRhLCBlLmRhdGEub3B0aW9ucyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGNyZWF0ZUNhbGxiYWNrID0gZnVuY3Rpb24gY3JlYXRlQ2FsbGJhY2soYXJncywgdHlwZSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKHJlcykge1xyXG4gICAgICAgICAgICBpZiAoaXNGbihhcmdzKSkge1xyXG4gICAgICAgICAgICAgICAgYXJncyhyZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6b2snKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oYXJncy5zdWNjZXNzKSAmJiBhcmdzLnN1Y2Nlc3MocmVzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOmZhaWwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oYXJncy5mYWlsKSAmJiBhcmdzLmZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlzRm4oYXJncy5jb21wbGV0ZSkgJiYgYXJncy5jb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoaXNGbihhcmdzKSB8fCBhcmdzICYmIGlzRm4oYXJncy5jYWxsYmFjaykpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sua2VlcEFsaXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaW52b2tlID0gZnVuY3Rpb24gaW52b2tlKGNhbGxiYWNrSWQsIGRhdGEpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrLmtlZXBBbGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbGxiYWNrWycgKyBjYWxsYmFja0lkICsgJ10gaXMgdW5kZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHVibGlzaCA9IGZ1bmN0aW9uIHB1Ymxpc2goX3JlZikge1xyXG4gICAgICAgIHZhciBpZCA9IF9yZWYuaWQsXHJcbiAgICAgICAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtcyA9IF9yZWYucGFyYW1zO1xyXG5cclxuICAgICAgICBjYWxsYmFja3NbaWRdID0gY3JlYXRlQ2FsbGJhY2socGFyYW1zLCB0eXBlKTtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgICAgIH0sIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0TWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZShkYXRhLCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY3JlYXRlUHVibGlzaCA9IGZ1bmN0aW9uIGNyZWF0ZVB1Ymxpc2gobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgIHB1Ymxpc2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkKyssXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBhcmdzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gdm9pZCAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVpcmVOYXRpdmVQbHVnaW4ocGx1Z2luTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB3ZWV4LnJlcXVpcmVNb2R1bGUocGx1Z2luTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEZvbnRGYWNlKF9yZWYpIHtcclxuICAgICAgICB2YXIgZmFtaWx5ID0gX3JlZi5mYW1pbHksXHJcbiAgICAgICAgICAgIHNvdXJjZSA9IF9yZWYuc291cmNlLFxyXG4gICAgICAgICAgICBkZXNjID0gX3JlZi5kZXNjLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIGRvbS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuICAgICAgICAgICAgZm9udEZhbWlseTogZmFtaWx5LFxyXG4gICAgICAgICAgICBzcmM6IHNvdXJjZS5yZXBsYWNlKC9cIi9nLCAnXFwnJylcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdsb2FkRm9udEZhY2U6b2snLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdsb2FkZWQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnbG9iYWxFdmVudCQxID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBjYWxsYmFja3MkMSA9IFtdO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50JDEuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwUmVhZHknKSB7XHJcbiAgICAgICAgICAgIHJlYWR5LmlzVW5pQXBwUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tzJDEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiByZWFkeShjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmlBcHBSZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuICAgIH0gOiBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgP1xyXG4gICAgICAgICAgICBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHN0cmVhbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnc3RyZWFtJyk7XHJcblxyXG4gICAgLy8gbGV0IHJlcXVlc3RUYXNrSWQgPSAwXHJcblxyXG4gICAgdmFyIE1FVEhPRF9HRVQgPSAnR0VUJztcclxuICAgIHZhciBNRVRIT0RfUE9TVCA9ICdQT1NUJztcclxuICAgIHZhciBDT05URU5UX1RZUEVfSlNPTiA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgIHZhciBDT05URU5UX1RZUEVfRk9STSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xyXG5cclxuICAgIHZhciBzZXJpYWxpemUgPSBmdW5jdGlvbiBzZXJpYWxpemUoZGF0YSkge1xyXG4gICAgICAgIHZhciBtZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IE1FVEhPRF9HRVQ7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBDT05URU5UX1RZUEVfRk9STTtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBpZiAobWV0aG9kLnRvVXBwZXJDYXNlKCkgPT09IE1FVEhPRF9QT1NUICYmIGNvbnRlbnRUeXBlLnRvTG93ZXJDYXNlKCkgPT09IENPTlRFTlRfVFlQRV9KU09OKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfSkuam9pbignJicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXF1ZXN0KF9yZWYpIHtcclxuICAgICAgICB2YXIgdXJsID0gX3JlZi51cmwsXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlciA9IF9yZWYuaGVhZGVyLFxyXG4gICAgICAgICAgICBfcmVmJG1ldGhvZCA9IF9yZWYubWV0aG9kLFxyXG4gICAgICAgICAgICBtZXRob2QgPSBfcmVmJG1ldGhvZCA9PT0gdW5kZWZpbmVkID8gJ0dFVCcgOiBfcmVmJG1ldGhvZCxcclxuICAgICAgICAgICAgX3JlZiRkYXRhVHlwZSA9IF9yZWYuZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlID0gX3JlZiRkYXRhVHlwZSA9PT0gdW5kZWZpbmVkID8gJ2pzb24nIDogX3JlZiRkYXRhVHlwZSxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlID0gX3JlZi5yZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgLy8gcmVxdWVzdFRhc2tJZCsrXHJcbiAgICAgICAgdmFyIGFib3J0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIGhhc0NvbnRlbnRUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSB7fTtcclxuICAgICAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0NvbnRlbnRUeXBlICYmIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNDb250ZW50VHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBoZWFkZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbbmFtZV0gPSBoZWFkZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gTUVUSE9EX0dFVCAmJiBkYXRhKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArICh+dXJsLmluZGV4T2YoJz8nKSA/IHVybC5zdWJzdHIoLTEpID09PSAnJicgfHwgdXJsLnN1YnN0cigtMSkgPT09ICc/JyA/ICcnIDogJyYnIDogJz8nKSArXHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemUoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0cmVhbS5mZXRjaCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgdHlwZTogZGF0YVR5cGUgPT09ICdqc29uJyA/ICdqc29uJyA6ICd0ZXh0JyxcclxuICAgICAgICAgICAgYm9keTogbWV0aG9kICE9PSBNRVRIT0RfR0VUID8gc2VyaWFsaXplKGRhdGEsIG1ldGhvZCwgaGVhZGVyc1snQ29udGVudC1UeXBlJ10pIDogJydcclxuICAgICAgICB9LCBmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gX3JlZjIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgb2sgPSBfcmVmMi5vayxcclxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSBfcmVmMi5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzID0gX3JlZjIuaGVhZGVycztcclxuXHJcbiAgICAgICAgICAgIHZhciByZXQgPSB7fTtcclxuICAgICAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAtMSB8fCBhYm9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3JlcXVlc3Q6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldC5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldC5zdGF0dXNDb2RlID0gc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgcmV0LmhlYWRlciA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiBhYm9ydCgpIHtcclxuICAgICAgICAgICAgICAgIGFib3J0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc3RvcmFnZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1c3N0b3JhZ2UnKTtcclxuICAgIHZhciBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUgPSAnX19UWVBFJztcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdG9yYWdlKF9yZWYpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgc3RvcmFnZS5nZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhVHlwZSA9IHJldC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5nZXRJdGVtKGtleSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSAmJiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSAhPT0gJ1N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ2dldFN0b3JhZ2U6b2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFN0b3JhZ2UoX3JlZjIpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjIua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYyLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYyLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgZGF0YVR5cGUgPSAnU3RyaW5nJztcclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlID0gJ09iamVjdCc7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGRhdGFUeXBlLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdzZXRTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVTdG9yYWdlKF9yZWYzKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYzLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAncmVtb3ZlU3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdyZW1vdmVTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclN0b3JhZ2UoX3JlZjQpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjQua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjQuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWY0LnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmNC5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWY0LmNvbXBsZXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjbGlwYm9hcmQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2NsaXBib2FyZCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENsaXBib2FyZERhdGEoX3JlZikge1xyXG4gICAgICAgIHZhciBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIGNsaXBib2FyZC5nZXRTdHJpbmcoZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBfcmVmMi5kYXRhO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgICAgIGVyck1zZzogJ2dldENsaXBib2FyZERhdGE6b2snLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDbGlwYm9hcmREYXRhKF9yZWYzKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ3NldENsaXBib2FyZERhdGE6b2snXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjbGlwYm9hcmQuc2V0U3RyaW5nKGRhdGEpO1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdldEVtaXR0ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGdldFVuaUVtaXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICAgICAgcmV0dXJuIGdldFVuaUVtaXR0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBFbWl0dGVyID0ge1xyXG4gICAgICAgICAgICAkb246IGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvbiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9mZjogZnVuY3Rpb24gJG9mZigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvZmYgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvbmNlOiBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvbmNlIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkZW1pdDogZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kZW1pdCBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldFVuaUVtaXR0ZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFbWl0dGVyO1xyXG4gICAgICAgIH07XHJcbiAgICB9KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwbHkoY3R4LCBtZXRob2QsIGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gY3R4W21ldGhvZF0uYXBwbHkoY3R4LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbicsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9mZigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9mZicsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbmNlJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJGVtaXQnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdmFyIGFwaSA9IC8qI19fUFVSRV9fKi8gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgbG9hZEZvbnRGYWNlOiBsb2FkRm9udEZhY2UsXHJcbiAgICAgICAgcmVhZHk6IHJlYWR5LFxyXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogZ2V0U3RvcmFnZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiBzZXRTdG9yYWdlLFxyXG4gICAgICAgIHJlbW92ZVN0b3JhZ2U6IHJlbW92ZVN0b3JhZ2UsXHJcbiAgICAgICAgY2xlYXJTdG9yYWdlOiBjbGVhclN0b3JhZ2UsXHJcbiAgICAgICAgZ2V0Q2xpcGJvYXJkRGF0YTogZ2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBzZXRDbGlwYm9hcmREYXRhOiBzZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2U6IG9uU3ViTlZ1ZU1lc3NhZ2UsXHJcbiAgICAgICAgZ2V0U3ViTlZ1ZUJ5SWQ6IGdldFN1Yk5WdWVCeUlkLFxyXG4gICAgICAgIGdldEN1cnJlbnRTdWJOVnVlOiBnZXRDdXJyZW50U3ViTlZ1ZSxcclxuICAgICAgICAkb246ICRvbixcclxuICAgICAgICAkb2ZmOiAkb2ZmLFxyXG4gICAgICAgICRvbmNlOiAkb25jZSxcclxuICAgICAgICAkZW1pdDogJGVtaXRcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgd3ggPSB7XHJcbiAgICAgICAgdXBsb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBkb3dubG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgY2hvb3NlSW1hZ2U6IHRydWUsXHJcbiAgICAgICAgcHJldmlld0ltYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldEltYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICBzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIGNob29zZVZpZGVvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVWaWRlb1RvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgc2F2ZUZpbGU6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlTGlzdDogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVJbmZvOiB0cnVlLFxyXG4gICAgICAgIHJlbW92ZVNhdmVkRmlsZTogdHJ1ZSxcclxuICAgICAgICBvcGVuRG9jdW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHJlbW92ZVN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgY2xlYXJTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldExvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Mb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBnZXRTeXN0ZW1JbmZvOiB0cnVlLFxyXG4gICAgICAgIGdldE5ldHdvcmtUeXBlOiB0cnVlLFxyXG4gICAgICAgIG1ha2VQaG9uZUNhbGw6IHRydWUsXHJcbiAgICAgICAgc2NhbkNvZGU6IHRydWUsXHJcbiAgICAgICAgc2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBnZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIHNldEtlZXBTY3JlZW5PbjogdHJ1ZSxcclxuICAgICAgICB2aWJyYXRlTG9uZzogdHJ1ZSxcclxuICAgICAgICB2aWJyYXRlU2hvcnQ6IHRydWUsXHJcbiAgICAgICAgYWRkUGhvbmVDb250YWN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dUb2FzdDogdHJ1ZSxcclxuICAgICAgICBzaG93TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBoaWRlVG9hc3Q6IHRydWUsXHJcbiAgICAgICAgaGlkZUxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgc2hvd01vZGFsOiB0cnVlLFxyXG4gICAgICAgIHNob3dBY3Rpb25TaGVldDogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyVGl0bGU6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhckNvbG9yOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlVG86IHRydWUsXHJcbiAgICAgICAgcmVkaXJlY3RUbzogdHJ1ZSxcclxuICAgICAgICByZUxhdW5jaDogdHJ1ZSxcclxuICAgICAgICBzd2l0Y2hUYWI6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVCYWNrOiB0cnVlLFxyXG4gICAgICAgIGdldFByb3ZpZGVyOiB0cnVlLFxyXG4gICAgICAgIGxvZ2luOiB0cnVlLFxyXG4gICAgICAgIGdldFVzZXJJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNoYXJlOiB0cnVlLFxyXG4gICAgICAgIHJlcXVlc3RQYXltZW50OiB0cnVlLFxyXG4gICAgICAgIHN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgdW5zdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIG9uUHVzaDogdHJ1ZSxcclxuICAgICAgICBvZmZQdXNoOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYXNlVW5pID0ge1xyXG4gICAgICAgIG9zOiB7XHJcbiAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB1bmkgPSB7fTtcclxuXHJcbiAgICBpZiAodHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHVuaSA9IG5ldyBQcm94eSh7fSwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3Bvc3RNZXNzYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncmVxdWlyZU5hdGl2ZVBsdWdpbicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWlyZU5hdGl2ZVBsdWdpbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGFwaVtuYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2lmeShtZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhiYXNlVW5pKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICB1bmlba2V5XSA9IGJhc2VVbmlba2V5XTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdW5pLnBvc3RNZXNzYWdlID0gcG9zdE1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luID0gcmVxdWlyZU5hdGl2ZVBsdWdpbjtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCA9IG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHd4KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGFwaVtuYW1lXTtcclxuICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShtZXRob2QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5pO1xyXG59XHJcblxyXG52YXIgY3JlYXRlVW5pO1xyXG5cclxuaWYgKHR5cGVvZiBnZXRVbmkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGNyZWF0ZVVuaSA9IGdldFVuaTtcclxufSBlbHNlIHtcclxuICAgIGNyZWF0ZVVuaSA9IGluaXRVbmk7XHJcbn1cclxudmFyIHdlZXhQbHVzID0gbmV3IFdlZXhQbHVzKHdlZXgpO1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVbmkod2VleCwgd2VleFBsdXMsIEJyb2FkY2FzdENoYW5uZWwpO1xyXG5leHBvcnQge1xyXG4gICAgd2VleFBsdXNcclxufTtcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9zb2Z0L0hCdWlsZGVyWC4yLjEuMS4yMDE5MDcxNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvc29mdC9IQnVpbGRlclguMi4xLjEuMjAxOTA3MTYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMy0wIS4vb3JkZXJfbGlzdC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvc29mdC9IQnVpbGRlclguMi4xLjEuMjAxOTA3MTYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvc29mdC9IQnVpbGRlclguMi4xLjEuMjAxOTA3MTYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL3NvZnQvSEJ1aWxkZXJYLjIuMS4xLjIwMTkwNzE2LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9zb2Z0L0hCdWlsZGVyWC4yLjEuMS4yMDE5MDcxNi5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvc29mdC9IQnVpbGRlclguMi4xLjEuMjAxOTA3MTYuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0zLTAhLi9vcmRlcl9saXN0Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidGFic1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y4ZjhmOFwiXG4gIH0sXG4gIFwidGFiXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwXCIsXG4gICAgXCJoZWlnaHRcIjogXCI3NlwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJ0YWItdGV4dFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEyNVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNzZcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCI3NlwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI2XCIsXG4gICAgXCJjb2xvclwiOiBcIiM0NDQ0NDRcIlxuICB9LFxuICBcInRhYi10ZXh0LW9uXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2YwNmM3YVwiXG4gIH0sXG4gIFwiYm9yZGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzVcIixcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyNVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjVcIixcbiAgICBcImhlaWdodFwiOiBcIjRcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMDZjN2FcIixcbiAgICBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiBcInRyYW5zZm9ybVwiLFxuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IDMwMCxcbiAgICBcInRyYW5zaXRpb25EZWxheVwiOiAwLFxuICAgIFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6IFwiZWFzZVwiXG4gIH0sXG4gIFwiQFRSQU5TSVRJT05cIjoge1xuICAgIFwiYm9yZGVyXCI6IHtcbiAgICAgIFwicHJvcGVydHlcIjogXCJ0cmFuc2Zvcm1cIixcbiAgICAgIFwiZHVyYXRpb25cIjogMzAwLFxuICAgICAgXCJkZWxheVwiOiAwLFxuICAgICAgXCJ0aW1pbmdGdW5jdGlvblwiOiBcImVhc2VcIlxuICAgIH1cbiAgfSxcbiAgXCJzbGlkZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBcIixcbiAgICBcInRvcFwiOiBcIjgwXCIsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmM2YzZjNcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIlxuICB9LFxuICBcImZyYW1lXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBcIlxuICB9LFxuICBcIm9ub3JkZXJcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBcIixcbiAgICBcImhlaWdodFwiOiBcIjM3NVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBcIlxuICB9LFxuICBcIm9ub3JkZXItaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogMTUwLFxuICAgIFwiaGVpZ2h0XCI6IDE1MCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiAxNTBcbiAgfSxcbiAgXCJvbm9yZGVyLXRleHRcIjoge1xuICAgIFwid2lkdGhcIjogNzUwLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhcIixcbiAgICBcImNvbG9yXCI6IFwiIzQ0NDQ0NFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IFwiNjBcIlxuICB9LFxuICBcInJvd1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjcxMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDAwXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwidHlwZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjcxMFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNlwiLFxuICAgIFwiY29sb3JcIjogXCIjZWM2NTJmXCIsXG4gICAgXCJoZWlnaHRcIjogXCI1MFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiXG4gIH0sXG4gIFwib3JkZXItaW5mb1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjcxMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTg4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJsZWZ0XCI6IHtcbiAgICBcImZsZXhTaHJpbmtcIjogMCxcbiAgICBcIndpZHRoXCI6IFwiMTg4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxODhcIlxuICB9LFxuICBcImxlZnQtaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIxODhcIixcbiAgICBcImhlaWdodFwiOiBcIjE4OFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTBcIlxuICB9LFxuICBcIm9yZGVyLWluZm8tcmlnaHRcIjoge1xuICAgIFwid2lkdGhcIjogXCI0NzJcIixcbiAgICBcImhlaWdodFwiOiBcIjE4OFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcIm9yZGVyLWluZm8tcmlnaHQtbmFtZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjQ3MlwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiOTRcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJvcmRlci1pbmZvLXJpZ2h0LXNwZWNcIjoge1xuICAgIFwiY29sb3JcIjogXCIjYTdhN2E3XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjIyXCJcbiAgfSxcbiAgXCJvcmRlci1pbmZvLXJpZ2h0LXByaWNlLW51bWJlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcIndpZHRoXCI6IFwiNDcyXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwib3JkZXItaW5mby1yaWdodC11bml0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjBcIlxuICB9LFxuICBcIm9yZGVyLWluZm8tcmlnaHQtbXVsdGlwbGllclwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwXCJcbiAgfSxcbiAgXCJvcmRlci1pbmZvLXJpZ2h0LXByaWNlXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRcIlxuICB9LFxuICBcIm9yZGVyLWluZm8tcmlnaHQtbnVtYmVyXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRcIlxuICB9LFxuICBcImRldGFpbFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY3MFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjBcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZGV0YWlsLW51bWJlclwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2XCJcbiAgfSxcbiAgXCJkZXRhaWwtc3VtXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiOFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCJkZXRhaWwtc3VtLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNlwiXG4gIH0sXG4gIFwiZGV0YWlsLXN1bS1wYXltZW50XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBcIlxuICB9LFxuICBcImRldGFpbC1zdW0tbm9taW5hbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI2XCJcbiAgfSxcbiAgXCJidG5zXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjcwXCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiYnRucy1kaXZcIjoge1xuICAgIFwid2lkdGhcIjogXCI2NzBcIixcbiAgICBcImhlaWdodFwiOiBcIjUwXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtZW5kXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJidG5zLWJ0blwiOiB7XG4gICAgXCJtaW5XaWR0aFwiOiBcIjEyMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI1MFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjUwXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMFwiLFxuICAgIFwiYm9yZGVyU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyV2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNjY2NjY2NcIlxuICB9LFxuICBcImRlZmF1bHRcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjY2NjY2NjXCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NjY2NjZcIlxuICB9LFxuICBcInBheVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNlYzY1MmZcIixcbiAgICBcImNvbG9yXCI6IFwiI2VjNjUyZlwiXG4gIH1cbn0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==