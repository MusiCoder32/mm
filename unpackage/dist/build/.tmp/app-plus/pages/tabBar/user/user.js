(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/user/user"],{"031e":function(t,e,i){"use strict";i.r(e);var n=i("4e43"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},"1d38":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=(t._self._c,t._f("authTitle")(t.authResult.state));t.$mp.data=Object.assign({},{$root:{f0:i}})},o=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return o})},4377:function(t,e,i){"use strict";i.r(e);var n=i("1d38"),o=i("031e");for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);i("6ce7");var r=i("2877"),u=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=u.exports},"4e43":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=i("2f62");function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){r(t,e,i[e])})}return t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u={data:function(){return{head_portrait:"",currentRoute:"",isfirst:!0,headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,uid:4106,token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjEifQ.eyJpc3MiOiJzb3VsIiwiYXVkIjoic291bCIsImp0aSI6IjEiLCJpYXQiOjE1NjM5NjM5MTIsIm5iZiI6MTU2Mzk2MzkxMiwiZXhwIjoxNTY2NTU1OTEyLCJ1aWQiOjQxMDZ9.4SJvjmrx7GxktfJhVPA2guUp8A2rPsVdsHElHQmbcAw",user_text:{nickname:"wyj1",portrait:"/head_tem.jpg",county:"",province:"",city:"",gender:0,protrait_type:0},user_wallet:{account_balance:0,shopping_points:0,retail_points:0,packets_points:0},orderList:[{text:"待付款",icon:"fukuan"},{text:"待发货",icon:"fahuo"},{text:"待收货",icon:"shouhuo"},{text:"待评价",icon:"pingjia"},{text:"退换货",icon:"tuihuo"}],mytoolbarList:[{url:"../../user/keep/keep",text:"我的收藏",img:"/static/img/user/point.png"},{url:"../../user/coupon/coupon",text:"优惠券",img:"/static/img/user/quan.png"},{url:"",text:"新客豪礼",img:"/static/img/user/renw.png"},{url:"",text:"领红包",img:"/static/img/user/momey.png"},{url:"../../user/address/address",text:"收货地址",img:"/static/img/user/addr.png"},{url:"",text:"账户安全",img:"/static/img/user/security.png"},{url:"",text:"银行卡",img:"/static/img/user/bank.png"},{url:"",text:"抽奖",img:"/static/img/user/choujiang.png"}]}},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onLoad:function(){n=this,this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},onReady:function(){},onShow:function(){var e=this;this.currentRoute=getCurrentPages()[0]?getCurrentPages()[0].route:"pages/tabBar/home/home",t.getStorage({key:"user_text",success:function(i){var o=i.data.head_portrait_local,a=i.data.head_portrait;a?o?t.getSavedFileInfo({filePath:o,success:function(t){console.log(t," at pages\\tabBar\\user\\user.vue:238"),n.head_portrait=o},fail:function(t){n.head_portrait="/static/img/face.jpg",n.getUserPortrait(a)}}):n.getUserPortrait(a):n.head_portrait="/static/img/face.jpg",e.hasLogined()},fail:function(t){n.$api.msg("请先登陆"),n.toLogin()}}),0===this.authResult.state&&this.$Request.post(this.$Urlconf.cardAuth.getUserAuthentication).then(function(e){0==e.code&&(t.setStorage({key:"authResult",data:e.data}),n.updateAuth(e.data))})},methods:a({},(0,o.mapMutations)(["hasLogined","updateAuth"]),{getUserPortrait:function(e){var i=this;t.showLoading();var n=t.getStorageSync("user_text");t.downloadFile({url:e,success:function(e){200===e.statusCode&&(console.log("下载成功"," at pages\\tabBar\\user\\user.vue:287"),t.saveFile({tempFilePath:e.tempFilePath,success:function(e){i.head_portrait=e.savedFilePath,n.head_portrait_local=e.savedFilePath,t.setStorage({key:"user_text",data:n})},fail:function(t){console.log(t," at pages\\tabBar\\user\\user.vue:300")}}))},complete:function(){t.hideLoading()}})},toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toOrderList:function(e){t.setStorageSync("tbIndex",e),t.navigateTo({url:"../../user/order_list/order_list?tbIndex="+e})},toSetting:function(){t.navigateTo({url:"../../user/setting/setting"})},toMyQR:function(){t.navigateTo({url:"../../user/myQR/myQR"})},toLogin:function(){t.navigateTo({url:"../../login/login?backroute="+this.currentRoute}),this.isfirst=!1},isLogin:function(){var e=t.getStorageSync("uid");return!!e},toDeposit:function(){t.navigateTo({url:"../../user/deposit/deposit"})},toPage:function(e){e?t.navigateTo({url:e}):t.showToast({title:"模板未包含此页面",icon:"none"})}}),computed:a({},(0,o.mapState)(["hasLogin","authResult"])),filters:{authTitle:function(t){return 0===t?"认证中>":1===t?"已认证":2===t?"认证失败>":"未认证>"}}};e.default=u}).call(this,i("6e42")["default"])},"6ce7":function(t,e,i){"use strict";var n=i("f117"),o=i.n(n);o.a},f117:function(t,e,i){}},[["1828","common/runtime","common/vendor"]]]);