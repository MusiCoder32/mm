(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/setting/setting"],{"041f":function(t,e,a){"use strict";a.r(e);var n=a("6a19"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=o.a},1595:function(t,e,a){"use strict";a.r(e);var n=a("c2e1"),o=a("041f");for(var r in o)"default"!==r&&function(t){a.d(e,t,function(){return o[t]})}(r);a("fc6d");var i=a("2877"),s=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"6a19":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,o=a("2f62");function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),n.forEach(function(e){i(t,e,a[e])})}return t}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var s={data:function(){return{user_text:{},head_portrait:""}},onShow:function(){var e=this;t.getStorage({key:"user_text",success:function(t){e.user_text=t.data,t.data.head_portrait_local?e.head_portrait=t.data.head_portrait_local:e.head_portrait=t.data.head_portrait},fail:function(t){}})},onLoad:function(){n=this},methods:r({},(0,o.mapMutations)(["logout"]),{showType:function(t){this.tabbarIndex=t,this.list=this.orderList[t]},editPortrait:function(){t.chooseImage({count:1,success:function(e){var a=this,o=e.tempFilePaths[0];t.saveFile({tempFilePath:o,success:function(t){o=t.savedFilePath},fail:function(t){console.log(t," at pages\\user\\setting\\setting.vue:87")}}),t.showLoading(),t.uploadFile({url:n.$RootHttp.APIHOST+n.$RootHttp.APIPATH+"/uploadUserPortrait",filePath:e.tempFilePaths[0],name:"file",header:{token:t.getStorageSync("token")},formData:{file:e.tempFilePaths[0]},success:function(e){if(0==JSON.parse(e.data).code){var r=t.getStorageSync("user_text");r.head_portrait=n.$RootHttp.APIHOST+n.$RootHttp.APIPATH+JSON.parse(e.data).data.filename,r.head_portrait_local&&(t.getFileInfo({filePath:r.head_portrait_local,success:function(t){console.log(t," at pages\\user\\setting\\setting.vue:113")}}),t.removeSavedFile({filePath:r.head_portrait_local,complete:function(t){console.log(t," at pages\\user\\setting\\setting.vue:119")}})),r.head_portrait_local=o,t.setStorage({key:"user_text",data:r}),n.head_portrait=o}else a.$api.msg(JSON.parse(e.data).msg)},fail:function(t){console.log(t," at pages\\user\\setting\\setting.vue:135")},complete:function(){t.hideLoading()}})}})},editInfo:function(e){t.navigateTo({url:"/pages/user/setting/setItem/edit_info?item="+e,success:function(t){},fail:function(){},complete:function(){}})}}),computed:r({},(0,o.mapState)([""])),filters:{genderTitle:function(t){return 0==t?"保密":1==t?"男":2==t?"女":"保密"}}};e.default=s}).call(this,a("6e42")["default"])},"799c":function(t,e,a){},c2e1:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t._f("genderTitle")(t.user_text.gender));t.$mp.data=Object.assign({},{$root:{f0:a}})},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},fc6d:function(t,e,a){"use strict";var n=a("799c"),o=a.n(n);o.a}},[["eb83","common/runtime","common/vendor"]]]);