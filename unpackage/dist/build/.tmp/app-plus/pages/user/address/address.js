(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/address/address"],{"52fa":function(e,t,s){"use strict";s.r(t);var a=s("b8f9"),d=s.n(a);for(var r in a)"default"!==r&&function(e){s.d(t,e,function(){return a[e]})}(r);t["default"]=d.a},"56e4":function(e,t,s){},"651b":function(e,t,s){"use strict";var a=s("56e4"),d=s.n(a);d.a},b337:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=(e._self._c,e.__map(e.addressList,function(t,s){var a=e._f("nameHead")(t.contact_man);return{$orig:e.__get_orig(t),f0:a}}));e.$mp.data=Object.assign({},{$root:{l0:s}})},d=[];s.d(t,"a",function(){return a}),s.d(t,"b",function(){return d})},b8f9:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{isSelect:!1,addressList:[{id:1,contact_man:"大黑哥",head:"大",mobile:"18816881688",province:"四川省",city:"成都市",area:"龙泉驿区",address:"北泉路1188号",isDefault:1}]}},onShow:function(){var t=this;e.getStorage({key:"addressList",success:function(e){t.addressList=e.data}}),e.getStorage({key:"delAddress",success:function(s){var a=t.addressList.length;if(s.data.hasOwnProperty("id")){for(var d=0;d<a;d++)if(t.addressList[d].id==s.data.id){t.addressList.splice(d,1);break}e.setStorage({key:"addressList",data:t.addressList})}e.removeStorage({key:"delAddress"})}}),e.getStorage({key:"saveAddress",success:function(s){var a=t.addressList.length;if(s.data.hasOwnProperty("id")){for(var d=0;d<a;d++)if(t.addressList[d].id==s.data.id){t.addressList.splice(d,1,s.data),e.setStorage({key:"addressList",data:t.addressList});break}}else t.addressList.push(s.data),e.setStorage({key:"addressList",data:t.addressList});e.removeStorage({key:"saveAddress"})}})},onLoad:function(e){"select"==e.type&&(this.isSelect=!0)},methods:{edit:function(t){e.setStorage({key:"address",data:t,success:function(){e.navigateTo({url:"edit/edit?type=edit"})}})},add:function(){e.navigateTo({url:"edit/edit?type=add"})},select:function(t){this.isSelect&&e.setStorage({key:"selectAddress",data:t,success:function(){e.navigateBack()}})}},filters:{nameHead:function(e){return e.trim()[0]}}};t.default=s}).call(this,s("6e42")["default"])},ef0d:function(e,t,s){"use strict";s.r(t);var a=s("b337"),d=s("52fa");for(var r in d)"default"!==r&&function(e){s.d(t,e,function(){return d[e]})}(r);s("651b");var i=s("2877"),n=Object(i["a"])(d["default"],a["a"],a["b"],!1,null,null,null);t["default"]=n.exports}},[["6564","common/runtime","common/vendor"]]]);