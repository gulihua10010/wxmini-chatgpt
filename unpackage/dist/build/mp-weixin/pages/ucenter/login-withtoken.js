(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/login-withtoken"],{"1ea9":function(e,n,t){"use strict";t.r(n);var o=t("a847"),i=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n["default"]=i.a},2592:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return o}));var o={uniNavBar:function(){return t.e("uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"38f7"))},uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"dae0"))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,"125e"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"205b"))},uniIdPagesAgreements:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-id-pages/components/uni-id-pages-agreements/uni-id-pages-agreements")]).then(t.bind(null,"ec14"))},uNotify:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-notify/u-notify")]).then(t.bind(null,"52a0"))},uToast:function(){return t.e("uni_modules/uview-ui/components/u-toast/u-toast").then(t.bind(null,"193b"))}},i=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){return e.$store.state.utils.back()},e.e1=function(n){e.focusToken=!1})},u=[]},"7c08":function(e,n,t){"use strict";var o=t("8b78"),i=t.n(o);i.a},"8b78":function(e,n,t){},a847:function(e,n,t){"use strict";(function(e){var o=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(t("9523")),u=t("26cb");function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}var s={data:function(){return{token:"",focusToken:!1,needAgreements:!0,logo:"/static/image/logo.png",isSync:!1,isDebug:!1}},onShow:function(){this.isDebug=e.getStorageSync("isDebug")},computed:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){(0,i.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},(0,u.mapState)({utils:function(e){return e.utils}})),methods:{tokenLogin:function(){var n=this;if(!this.token.length)return this.focusToken=!0,this.showToast("请输入token");if(this.needAgreements&&this.$refs.agreements&&!this.$refs.agreements.getAgree())return this.$refs.agreements.popup(this.pwdLogin);var t={accessToken:this.token},o=this;e.showLoading({title:"请求中..."}),e.request({url:getApp().globalData.server+"/api/auth/token/verify",method:"POST",data:JSON.stringify(t),success:function(t){if(e.hideLoading(),t=t.data,"000000"===t.status)return o.$store.dispatch("loginWithtoken",n.token),setTimeout((function(){e.switchTab({url:"/pages/chat/session"})}),1e3),o.showNotify("登录成功!","success");var i=t.msg;return"400001"===t.status&&(i="token错误!"),i||(i="请求出错!"),o.showNotify(i,"error")},fail:function(n){return e.hideLoading(),o.showNotify("请求出错!","error")}})},setSync:function(n){this.isSync=!this.isSync,e.setStorageSync("sync_session",this.isSync)},pwdLogin:function(){e.navigateTo({url:"/pages/ucenter/login-withpwd"})},apiLogin:function(){e.navigateTo({url:"/pages/ucenter/login-withapi"})},howFetch:function(){e.navigateTo({url:"/pages/ucenter/fetch-token"})},showNotify:function(e,n){this.$refs.uNotify.show({type:n,message:e,duration:3e3,safeAreaInsetTop:!0})},showToast:function(e){this.$refs.uToast.show({message:e,type:"error",duration:2e3,position:"bottom"})}}};n.default=s}).call(this,t("543d")["default"])},cef3:function(e,n,t){"use strict";(function(e,n){var o=t("4ea4");t("cd32"),t("a9ff");o(t("66fd"));var i=o(t("edc6"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},edc6:function(e,n,t){"use strict";t.r(n);var o=t("2592"),i=t("1ea9");for(var u in i)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(u);t("7c08");var r=t("f0c5"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"c4817838",null,!1,o["a"],void 0);n["default"]=s.exports}},[["cef3","common/runtime","common/vendor"]]]);