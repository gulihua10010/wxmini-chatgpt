(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chat"],{

/***/ 193:
/*!********************************************************************************!*\
  !*** /Users/gulihua/tmp/wxmini-chatgpt/main.js?{"page":"pages%2Fchat%2Fchat"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chat.nvue */ 194));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 194:
/*!**************************************************************!*\
  !*** /Users/gulihua/tmp/wxmini-chatgpt/pages/chat/chat.nvue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.nvue?vue&type=template&id=6e1957d8&scoped=true& */ 195);
/* harmony import */ var _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.nvue?vue&type=script&lang=js& */ 197);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.nvue?vue&type=style&index=0&lang=css& */ 199);
/* harmony import */ var _chat_nvue_vue_type_style_index_1_id_6e1957d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.nvue?vue&type=style&index=1&id=6e1957d8&lang=scss&scoped=true& */ 201);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 53);

var renderjs






/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6e1957d8",
  null,
  false,
  _chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/chat/chat.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 195:
/*!*********************************************************************************************************!*\
  !*** /Users/gulihua/tmp/wxmini-chatgpt/pages/chat/chat.nvue?vue&type=template&id=6e1957d8&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=template&id=6e1957d8&scoped=true& */ 196);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_6e1957d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 196:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/gulihua/tmp/wxmini-chatgpt/pages/chat/chat.nvue?vue&type=template&id=6e1957d8&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniNavBar: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar */ "uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue */ 289))
    },
    uniChatDetail: function () {
      return Promise.all(/*! import() | components/uni-chat-detail/uni-chat-detail */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-chat-detail/uni-chat-detail")]).then(__webpack_require__.bind(null, /*! @/components/uni-chat-detail/uni-chat-detail.vue */ 349))
    },
    uNotify: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-notify/u-notify */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-notify/u-notify")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-notify/u-notify.vue */ 334))
    },
    uToast: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uview-ui/components/u-toast/u-toast */ "uni_modules/uview-ui/components/u-toast/u-toast").then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-toast/u-toast.vue */ 342))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.msgList, function (item, index) {
    var $orig = _vm.__get_orig(item)
    var g0 = item.content.trim()
    return {
      $orig: $orig,
      g0: g0,
    }
  })
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      return _vm.$store.state.utils.back()
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 197:
/*!***************************************************************************************!*\
  !*** /Users/gulihua/tmp/wxmini-chatgpt/pages/chat/chat.nvue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=script&lang=js& */ 198);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 198:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/gulihua/tmp/wxmini-chatgpt/pages/chat/chat.nvue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _vuex = __webpack_require__(/*! vuex */ 47);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    var _ref;
    return _ref = {
      systemInfo: uni.getSystemInfoSync(),
      baseUrl: getApp().globalData.server,
      toUid: 0,
      sessionId: '',
      footAnimationData: {},
      scrollAnimationData: {},
      title: '',
      chatSrcollBottom: 0,
      KeyboardHeight: 0,
      safeBottom: 0,
      adjustPosition: true,
      msgList: [],
      msg: "",
      scrollTop: 0,
      srcollHeight: 0,
      chatDetailHeight: 0,
      willStop: false,
      initPoint: {
        identifier: 0,
        Y: 0
      },
      chatDetailBoxMaxWidth: 0,
      focus: false,
      refreshing: false,
      ready: false,
      isWxapp: false,
      isLogin: false,
      loading: false,
      loginType: '',
      navTip: '',
      source: null,
      parentId: 1,
      token: '',
      isDone: true,
      isFirst: true
    }, (0, _defineProperty2.default)(_ref, "scrollTop", 0), (0, _defineProperty2.default)(_ref, "fromId", ''), (0, _defineProperty2.default)(_ref, "toId", ''), (0, _defineProperty2.default)(_ref, "fromMsg", ''), (0, _defineProperty2.default)(_ref, "toMsg", ''), (0, _defineProperty2.default)(_ref, "msgAll", []), (0, _defineProperty2.default)(_ref, "ids", []), (0, _defineProperty2.default)(_ref, "rememberContext", false), (0, _defineProperty2.default)(_ref, "allAI", false), (0, _defineProperty2.default)(_ref, "placeholder", ''), (0, _defineProperty2.default)(_ref, "isStartAllAI", false), (0, _defineProperty2.default)(_ref, "sessionId2", '-1'), (0, _defineProperty2.default)(_ref, "role", 'assistant'), (0, _defineProperty2.default)(_ref, "parentId2", 1), (0, _defineProperty2.default)(_ref, "isDebug", false), (0, _defineProperty2.default)(_ref, "imgGen", false), (0, _defineProperty2.default)(_ref, "isSync", false), (0, _defineProperty2.default)(_ref, "status", true), _ref;
  },
  destroyed: function destroyed() {},
  onLoad: function onLoad(option) {
    this.safeBottom = this.systemInfo.safeAreaInsets.bottom > 0 ? this.systemInfo.safeAreaInsets.bottom : 0;
    // this.KeyboardHeight = this.safeBottom * 2;
    this.sessionId = option.id;
    this.title = option.name;
    this.navTip = option.name;
    this.chatDetailBoxMaxWidth = this.systemInfo.screenWidth - 110;
    this.isLogin = uni.getStorageSync('is_login');
    this.loginType = uni.getStorageSync('login_type');
    this.status = uni.getStorageSync('status');
  },
  onShow: function onShow() {
    this.isWxapp = true;
    this.onKeyboardHeight();
    this.safeBottom = this.systemInfo.safeAreaInsets.bottom > 0 ? this.systemInfo.safeAreaInsets.bottom : 0;
    // this.KeyboardHeight = this.safeBottom * 2;
    this.srcollHeight = this.systemInfo.screenHeight - this.systemInfo.statusBarHeight - 25 - this.safeBottom - 55;
    this.srcollHeight = this.systemInfo.screenHeight - this.systemInfo.statusBarHeight - 10 - this.safeBottom - 55;
    var that = this;
    this.isLogin = uni.getStorageSync('is_login');
    this.loginType = uni.getStorageSync('login_type');
    this.token = uni.getStorageSync('token');
    this.rememberContext = uni.getStorageSync('remember_context');
    var all = uni.getStorageSync('all_ai');
    if (all === true) {
      this.allAI = true;
      this.placeholder = "请输入起始语句";
    }
    uni.$on('onMessage', this.onMessage);
    this.isDebug = uni.getStorageSync('isDebug');
    var gen = uni.getStorageSync('ai_gen_img');
    if (gen === true) {
      this.imgGen = true;
      this.placeholder = "请输入图片描述";
    }
    this.isSync = uni.getStorageSync('sync_session');
    this.status = uni.getStorageSync('status');
    this.getChatList();
    // uni.removeStorageSync('chatList');
  },
  onReady: function onReady() {
    this.scrollToBottom();
    this.ready = true;
  },
  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: getApp().globalData.name,
      path: '/pages/chat/session',
      imageUrl: '/static/image/share_screen_slot.png'
    };
  },
  onShareTimeline: function onShareTimeline(res) {
    return {
      title: getApp().globalData.name
    };
  },
  onPullDownRefresh: function onPullDownRefresh() {
    // this.getSessionListRes();
  },
  computed: {
    chatBodyBottom: function chatBodyBottom() {
      return "height:".concat(this.srcollHeight, "px;");
    }
  },
  onHide: function onHide() {},
  methods: {
    onMessage: function onMessage(message) {
      // console.log(JSON.stringify(message));
      if (message.conversationId !== this.sessionId) {
        return;
      }
      this.isDone = message.isDone;
      if (this.allAI && this.isStartAllAI) {
        message.isSend = this.role === 'user';
      }
      var that = this;
      if (!message.isDone) {
        if (message.isSuccess && message.id) {
          if (this.ids.indexOf(message.id) === -1) {
            this.msgList.push(message);
            this.ids.push(message.id);
            this.navTip = '正在打字中...';
            this.toId = message.id;
            if (this.allAI && this.isStartAllAI) {
              if (this.role === 'user') {
                this.parentId2 = message.id;
              } else {
                this.parentId = message.id;
              }
            } else {
              this.parentId = message.id;
            }
          } else {
            for (var i = this.msgList.length - 1; i >= 0; i--) {
              var msg = this.msgList[i];
              if (msg.id === message.id) {
                msg.content = message.content;
                msg.html = message.html;
                this.toMsg = msg.content;
                break;
              }
            }
          }
        } else {
          //错误消息
          if (!message.isSuccess) {
            //错误消息
            this.msgList.push(message);
            if (this.allAI && this.isStartAllAI) {
              this.isStartAllAI = false;
              this.placeholder = "请输入起始语句";
              this.msg = '';
              return this.showToast('已停止!', 'success');
            }
          }
        }
      }
      if (message.isDone) {
        this.navTip = this.title;
        if (message.isSuccess && this.toId) {
          if (this.loginType === 'pwd' || this.loginType === 'token') {
            // 新会话
            if (!this.sessionId || this.sessionId == '-1') {
              this.getSessionListRes(true);
            } else if (this.allAI && this.sessionId2 == '-1') {
              if (this.role === 'user') {
                this.getSessionListRes(false);
              }
            }
          }
          if (this.allAI && this.isStartAllAI) {
            setTimeout(function () {
              that.sendMsg4Ai(that.toMsg);
            }, 3500);
          }
        }
        if (!message.isSuccess) {
          //错误消息
          this.msgList.push(message);
          if (this.allAI && this.isStartAllAI) {
            this.isStartAllAI = false;
            this.placeholder = "请输入起始语句";
            this.msg = '';
            return this.showToast('已停止!', 'success');
          }
        }
      }
      this.scrollToBottom();
      this.update2Store();
    },
    onKeyboardHeight: function onKeyboardHeight() {
      var _this = this;
      uni.onKeyboardHeightChange(function (res) {
        _this.translatePageTop(res.height);
        if (_this.systemInfo.platform == "android") {
          if (res.height > 100) {
            _this.chatSrcollBottom = res.height - _this.safeBottom;
            //this.inputScroll();
            //this.translatePageTop(res.height);

            _this.KeyboardHeight = _this.safeBottom * 2 + 70;
            _this.srcollHeight = _this.systemInfo.screenHeight - _this.systemInfo.statusBarHeight - 10 - _this.safeBottom - 100;
          } else {
            _this.chatSrcollBottom = 0;
            _this.KeyboardHeight = _this.safeBottom * 2;
            _this.srcollHeight = _this.systemInfo.screenHeight - _this.systemInfo.statusBarHeight - 10 - _this.safeBottom - 55;
          }
        } else {
          if (res.height > 300) {
            _this.chatSrcollBottom = res.height - _this.safeBottom;
            //this.translatePageTop(res.height);
          } else {
            _this.chatSrcollBottom = 0;
          }
        }
        if (res.height === 0) {
          //this.translatePageBottom();
          _this.focus = false;
        }
        _this.scrollToBottom();
      });
    },
    onpullingdown: function onpullingdown(event) {},
    translatePageTop: function translatePageTop(h) {
      var scrollAnimation = uni.createAnimation({
        duration: 220,
        timingFunction: 'ease'
      });
      var footAnimation = uni.createAnimation({
        duration: 220,
        timingFunction: 'ease'
      });
      if (h == 0) {
        scrollAnimation.translateY(-h).step();
        footAnimation.translateY(-h).step();
      } else {
        scrollAnimation.translateY(-h + 34).step();
        footAnimation.translateY(-h + 34).step();
      }
      this.scrollAnimationData = scrollAnimation.export();
      this.footAnimationData = footAnimation.export();
    },
    inputScroll: function inputScroll() {
      var foot = this.getEl(this.$refs.foot);
      if (this.chatSrcollBottom) {
        var translateY = -10;
      } else {
        var translateY = 0;
      }
      var translateFoot = BindingX.bind({
        eventType: 'timing',
        exitExpression: 't>1',
        props: [{
          element: foot,
          property: 'transform.translateY',
          expression: 'easeInOutSine(t,0,' + translateY + ',1)'
        }]
      }, function (res) {
        if (res.state === 'exit') {
          BindingX.unbind({
            token: translateFoot
          });
        }
      });
    },
    scrollToBottom: function scrollToBottom() {
      var _this2 = this;
      this.$nextTick(function () {
        uni.createSelectorQuery().in(_this2).select('.scroll-view-content').boundingClientRect(function (res) {
          var top = res.height - _this2.srcollHeight;
          if (top > 0) {
            _this2.scrollTop = top;
          }
        }).exec();
      });
    },
    //隐藏键盘
    hideKey: function hideKey() {
      uni.hideKeyboard();
      this.inputFocus();
    },
    //ref
    getEl: function getEl(el) {
      if (typeof el === 'string' || typeof el === 'number') return el;
      if (WXEnvironment) {
        return el.ref;
      } else {
        return el instanceof HTMLElement ? el : el.$el;
      }
    },
    inputFocus: function inputFocus() {
      var that = this;
      if (this.showMore) {
        var move = uni.upx2px(180);
        var menuAnimation = uni.createAnimation({
          duration: 220,
          timingFunction: 'ease'
        });
        menuAnimation.translateX(0).step();
        this.showMore = false;
      }
    },
    sendMsg: function sendMsg() {
      if (!this.status) {
        this.showNotify('服务器正在维护中~', 'error');
        return;
      }
      if (!this.msg || this.msg.trim() === '') {
        return this.showToast('请输入内容~', 'error');
      }
      if (this.allAI) {
        if (this.isStartAllAI) {
          if (this.msg === '停止') {
            this.isStartAllAI = false;
            this.placeholder = "请输入起始语句";
            this.msg = '';
            return this.showToast('停止成功!', 'success');
          } else {
            return this.showToast('无效输入~', 'error');
          }
        }
      }
      if (!this.isDone) {
        return this.showToast('还在回答问题呢,不要着急哦~', 'error');
      }
      var message = {
        content: this.msg,
        html: this.msg,
        isSend: true,
        isSuccess: true,
        createTime: new Date().getTime(),
        id: this.$store.state.utils.uuid(),
        role: "user"
      };
      this.fromId = message.id;
      var data = {
        "authValue": "Bearer " + this.token,
        "content": message.content,
        "parentId": this.parentId,
        "id": message.id
      };
      if (!this.isLogin) {
        data.isDemo = true;
      }
      if (this.sessionId != '-1') {
        data.conversationId = this.sessionId;
      }
      if (this.loginType === 'api') {
        data.authType = 'api';
        var msg_ = {
          role: 'user',
          content: this.msg
        };
        var msgParam = [];
        msgParam.push(msg_);
        data.messages = msgParam;
      }
      if (this.msg != "") {
        this.msgList.push(message);
        if (this.allAI) {
          this.isStartAllAI = true;
        }
        if (this.loginType === 'api' || !this.isLogin) {
          if (this.rememberContext) {
            data.messages = [];
            var index = this.msgList.length - 4;
            if (index < 0) {
              index = 0;
            }
            for (var i = index; i < this.msgList.length; i++) {
              var _msg_ = this.msgList[i];
              if (_msg_.isSuccess && !_msg_.isImg) {
                data.messages.push(_msg_);
              }
            }
          } else {
            var _msg_2 = {
              role: 'user',
              content: this.msg
            };
            var _msgParam = [];
            _msgParam.push(_msg_2);
            data.messages = _msgParam;
          }
          if (this.imgGen) {
            data.isGenImg = true;
          }
        }
        if ((this.isDebug || !this.isLogin || !this.isSync || this.loginType === 'api') && this.sessionId == '-1') {
          this.sessionId = this.$store.state.utils.uuid();
          var list = uni.getStorageSync('sessionList');
          if (!list || list.length === 0) {
            list = [];
          }
          var session = {
            createTime: new Date().getTime(),
            id: this.sessionId,
            title: '会话' + (list.length + 1)
          };
          if (!this.isDebug && !this.isSync && (this.loginType === 'pwd' || this.loginType === 'token')) {
            this.sessionId = '-1';
            session.id = '-1';
          }
          list.push(session);
          uni.setStorageSync('sessionList', list);
        }
        data.conversationId = this.sessionId;
        this.navTip = '正在思考中...';
        this.isDone = false;
        var that = this;
        this.update2Store();
        this.msg = "";
        getApp().globalData.$socket.sendMessage(JSON.stringify(data), function (isSucc, res) {
          if (!isSucc) {
            that.navTip = that.title;
            that.isDone = true;
            that.isStartAllAI = false;
          }
        });
        this.fromMsg = this.msg;
      }
      this.scrollToBottom();
      if (this.allAI && this.isStartAllAI) {
        this.placeholder = "输入'停止'终止会话";
      }
    },
    sendMsg4Ai: function sendMsg4Ai(msg) {
      var _this3 = this;
      if (!msg || msg.trim() === '') {
        return;
      }
      var message = {
        content: msg,
        html: msg,
        isSend: this.role === "user",
        createTime: new Date().getTime(),
        id: this.$store.state.utils.uuid(),
        role: this.role
      };
      var data = {
        "authValue": "Bearer " + this.token,
        "content": message.content,
        "parentId": this.parentId,
        "id": message.id
      };
      if (!this.isLogin) {
        data.isDemo = true;
      }
      if (this.role === 'user') {
        data.conversationId = this.sessionId;
        data.parentId = this.parentId;
      }
      if (this.role === 'assistant') {
        data.conversationId = this.sessionId2;
        data.parentId = this.parentId2;
      }
      if (this.loginType === 'api') {
        data.authType = 'api';
      }
      if (msg != "") {
        if (this.loginType === 'api') {
          if (this.rememberContext) {
            data.messages = [];
            var index = this.msgList.length - 4;
            if (index < 0) {
              index = 0;
            }
            for (var i = index; i < this.msgList.length; i++) {
              var msg_ = this.msgList[i];
              if (msg_.isSuccess && !msg_.isImg) {
                data.messages.push(msg_);
              }
            }
          } else {
            var _msg_3 = {
              role: 'user',
              content: msg
            };
            var msgParam = [];
            msgParam.push(_msg_3);
            data.messages = msgParam;
          }
        }
        this.navTip = '正在思考中...';
        this.isDone = false;
        var that = this;
        data.conversationId = this.sessionId;
        getApp().globalData.$socket.sendMessage(JSON.stringify(data), function (isSucc, res) {
          if (!isSucc) {
            that.navTip = that.title;
            _this3.isDone = true;
            that.isStartAllAI = false;
          }
        });
        if (this.role === 'user') {
          this.role = 'assistant';
        } else if (this.role === 'assistant') {
          this.role = 'user';
        }
      }
      this.scrollToBottom();
    },
    getChatList: function getChatList() {
      if (!this.sessionId || this.sessionId == '-1') {
        this.parentId = 1;
        this.msgList = [];
        return;
      }
      if (this.sessionId == '99999999') {
        var message = {
          content: '你好',
          html: '你好',
          isSend: true,
          createTime: new Date().getTime(),
          id: this.$store.state.utils.uuid(),
          role: 'user'
        };
        this.msgList.push(message);
        message = {
          content: '您好，这是一条demo消息! 您每天有20次向我提问的机会(基于IP), 登录用户不受此限制。发送 "查询次数" 查询剩余次数, 且用且珍惜!',
          html: '您好，这是一条demo消息! 您每天有20次向我提问的机会(基于IP), 登录用户不受此限制。发送 "查询次数" 查询剩余次数, 且用且珍惜!',
          isSend: false,
          createTime: new Date().getTime(),
          id: this.$store.state.utils.uuid(),
          role: 'assistant'
        };
        this.msgList.push(message);
        message = {
          content: '关于请求速率: 为了防止有人恶意请求，服务器增加了会话速率限制20 请求/分钟/IP',
          html: '关于请求速率: 为了防止有人恶意请求，服务器增加了会话速率限制20 请求/分钟/IP',
          isSend: false,
          createTime: new Date().getTime(),
          id: this.$store.state.utils.uuid(),
          role: 'assistant'
        };
        this.msgList.push(message);
      }
      var list = [];
      var chatList = uni.getStorageSync('chatList');
      if (chatList) {
        list = chatList[this.sessionId];
        if (list) {
          var _this$msgList;
          (_this$msgList = this.msgList).push.apply(_this$msgList, (0, _toConsumableArray2.default)(list));
        }
      }
      if (list && list.length > 0) {
        this.parentId = this.msgList[this.msgList.length - 1].id;
      }
      if (!this.isDebug && this.isSync && (!list || list.length === 0) && (this.loginType === 'pwd' || this.loginType === 'token')) {
        this.getChatListRes();
      }
    },
    getChatListRes: function getChatListRes() {
      if (!this.sessionId || this.sessionId == '-1') {
        this.navTip = ' 新会话';
        return false;
      }
      var that = this;
      this.loading = true;
      this.navTip = '加载中';
      uni.showLoading({
        title: '正在同步消息...'
      });
      var header = {};
      var token = uni.getStorageSync('token');
      if (token) {
        header = {
          "Authorization": "Bearer " + token
        };
      }
      console.log(">>request messageList...");
      uni.request({
        url: that.baseUrl + '/backend-api/conversation?id=' + that.sessionId,
        data: {},
        header: header,
        success: function success(res) {
          uni.stopPullDownRefresh();
          that.loading = false;
          uni.hideLoading();
          if (res.data.status === '000000') {
            if (res.data.messageList) {
              that.navTip = that.title;
              that.msgList = res.data.messageList;
              that.update2Store();
              that.parentId = that.msgList[that.msgList.length - 1].id;
            }
          } else {
            that.navTip = '服务出错';
            return that.showNotify('服务出错!', 'error');
          }
        },
        fail: function fail(res) {
          uni.stopPullDownRefresh();
          that.navTip = '服务出错';
          uni.hideLoading();
          return that.showNotify('服务出错!', 'error');
        }
      });
    },
    update2Store: function update2Store() {
      var chatList = uni.getStorageSync('chatList');
      if (!chatList) {
        chatList = {};
      }
      chatList[this.sessionId] = this.msgList;
      uni.setStorageSync('chatList', chatList);
    },
    moderations: function moderations(id, msg) {
      var data = {
        conversationId: this.sessionId,
        content: msg,
        id: id
      };
      var header = {};
      var token = uni.getStorageSync('token');
      if (token) {
        header = {
          "Authorization": "Bearer " + token
        };
      }
      var that = this;
      uni.request({
        url: that.baseUrl + '/backend-api/moderation',
        method: "POST",
        data: data,
        header: header,
        success: function success(res) {
          if (res.data.status !== '000000') {
            console.log(res.data);
          }
        },
        fail: function fail(res) {
          console.log(res.data);
        }
      });
    },
    getSessionListRes: function getSessionListRes(isThisSession) {
      if (this.isDebug || !(this.loginType === 'pwd' || this.loginType === 'token')) {
        return;
      }
      var that = this;
      var header = {};
      var token = uni.getStorageSync('token');
      if (token) {
        header = {
          "Authorization": "Bearer " + token
        };
      }
      console.log(">>request sessionList...");
      uni.request({
        url: that.baseUrl + '/backend-api/conversations',
        data: {},
        header: header,
        success: function success(res) {
          if (res.data.status === '000000') {
            if (res.data.list) {
              if (isThisSession && (!that.sessionId || that.sessionId == '-1')) {
                that.sessionId = res.data.list[0].id;
                if (that.isSync) {
                  uni.setStorageSync('sessionList', res.data.list);
                } else {
                  var list = uni.getStorageSync('sessionList');
                  if (list) {
                    list[list.length - 1].id = that.sessionId;
                    uni.setStorageSync('sessionList', list);
                  }
                }
                // that.moderations(this.fromId, this.fromMsg);
                that.genTitle();
                // that.moderations(this.toId, this.toMsg);
                that.update2Store();

                // uni.removeStorageSync('sessionList');
              } else if (!isThisSession && that.sessionId2 == '-1') {
                that.sessionId2 = res.data.list[0].id;
              }
            }
          } else {
            console.log(res);
          }
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    },
    genTitle: function genTitle() {
      var that = this;
      var data = {
        conversationId: this.sessionId,
        id: this.toId
      };
      var header = {};
      var token = uni.getStorageSync('token');
      if (token) {
        header = {
          "Authorization": "Bearer " + token
        };
      }
      uni.request({
        url: that.baseUrl + '/backend-api/gentitle',
        method: "POST",
        data: data,
        header: header,
        success: function success(res) {
          if (res.data.status === '000000') {
            if (res.data.title) {
              that.navTip = res.data.title;
              that.title = res.data.title;
              var list = uni.getStorageSync('sessionList');
              if (list) {
                if (that.isSync) {
                  list[0].title = res.data.title;
                  uni.setStorageSync('sessionList', list);
                } else {
                  list[list.length - 1] = that.sessionId;
                }
              }
            }
            // that.getSessionListRes()
          } else {
            console.log(res.data);
          }
        },
        fail: function fail(res) {
          console.log(res.data);
        }
      });
    },
    showNotify: function showNotify(title, type) {
      this.$refs.uNotify.show({
        type: type,
        message: title,
        duration: 1000 * 3,
        safeAreaInsetTop: true
      });
    },
    showToast: function showToast(msg, type) {
      this.$refs.uToast.show({
        message: msg,
        type: type,
        duration: 2000,
        position: 'bottom'
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 199:
/*!***********************************************************************************************!*\
  !*** /Users/gulihua/tmp/wxmini-chatgpt/pages/chat/chat.nvue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=style&index=0&lang=css& */ 200);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 200:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/gulihua/tmp/wxmini-chatgpt/pages/chat/chat.nvue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 201:
/*!************************************************************************************************************************!*\
  !*** /Users/gulihua/tmp/wxmini-chatgpt/pages/chat/chat.nvue?vue&type=style&index=1&id=6e1957d8&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_1_id_6e1957d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=style&index=1&id=6e1957d8&lang=scss&scoped=true& */ 202);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_1_id_6e1957d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_1_id_6e1957d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_1_id_6e1957d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_1_id_6e1957d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_1_id_6e1957d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 202:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/gulihua/tmp/wxmini-chatgpt/pages/chat/chat.nvue?vue&type=style&index=1&id=6e1957d8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[193,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat/chat.js.map