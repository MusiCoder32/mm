(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/address/edit/edit"],{"1c8e":function(e,t,i){},"43a6":function(e,t,i){"use strict";i.r(t);var a=i("c0f7"),s=i.n(a);for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);t["default"]=s.a},"7e87":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},s=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return s})},c0f7:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return Promise.all([i.e("common/vendor"),i.e("components/mpvue-citypicker/mpvueCityPicker")]).then(i.bind(null,"3874"))},s={components:{mpvueCityPicker:a},data:function(){return{editType:"edit",id:"",contact_man:"王永杰",mobile:"18859325023",address:"每一添",is_default:!1,cityPickerValue:[0,0,1],themeColor:"#007AFF",province:"四川省",city:"成都市",area:"锦江区",region:{label:"请点击选择地址",value:[],cityCode:""}}},methods:{onCancel:function(e){console.log(e," at pages\\user\\address\\edit\\edit.vue:89")},chooseCity:function(){this.$refs.mpvueCityPicker.show()},onConfirm:function(e){var t=e.label.split("-");console.log(t," at pages\\user\\address\\edit\\edit.vue:96"),this.province=t[0],this.city=t[1],this.area=t[2],this.region=e,this.cityPickerValue=e.value,console.log(this.cityPickerValue," at pages\\user\\address\\edit\\edit.vue:102")},isDefaultChange:function(e){this.is_default=e.detail.value},del:function(){var t=this;e.showModal({title:"删除提示",content:"你将删除这个收货地址",success:function(i){i.confirm?t.$Request.post(t.$Urlconf.user.delUserAddress,addressData).then(function(i){0==i.code&&e.setStorage({key:"delAddress",data:{id:t.id},success:function(){e.navigateBack()}})}):i.cancel&&console.log("用户点击取消"," at pages\\user\\address\\edit\\edit.vue:127")}})},save:function(){var t={contact_man:this.contact_man,mobile:this.mobile,province:this.province,city:this.city,area:this.area,address:this.address,is_default:this.is_default?1:0,region:this.region,cityPickerValue:JSON.stringify(this.cityPickerValue)};console.log(t.cityPickerValue," at pages\\user\\address\\edit\\edit.vue:145"),t.contact_man?t.mobile?t.address?0!=this.region.value.length?"edit"==this.editType?(t.id=this.id,this.$Request.post(this.$Urlconf.user.updateUserAddress,t).then(function(i){0==i.code&&(e.setStorage({key:"saveAddress",data:t}),e.navigateBack({delta:1}))})):this.$Request.post(this.$Urlconf.user.addUserAddress,t).then(function(i){0==i.code&&(t.id=i.id,e.setStorage({key:"saveAddress",data:t}),e.navigateBack({delta:1}))}):e.showToast({title:"请选择收件地址",icon:"none"}):e.showToast({title:"请输入收件人详细地址",icon:"none"}):e.showToast({title:"请输入收件人电话号码",icon:"none"}):e.showToast({title:"请输入收件人姓名",icon:"none"})}},onLoad:function(t){var i=this;this.editType=t.type,"edit"==t.type&&e.getStorage({key:"address",success:function(e){i.id=e.data.id,i.contact_man=e.data.contact_man,i.mobile=e.data.mobile,i.address=e.data.address,i.is_default=e.data.is_default,i.cityPickerValue=JSON.parse(e.data.cityPickerValue),console.log(i.cityPickerValue," at pages\\user\\address\\edit\\edit.vue:221"),i.region.label="".concat(e.data.province,"-").concat(e.data.city,"-").concat(e.data.area)}})},onBackPress:function(){if(this.$refs.mpvueCityPicker.showPicker)return this.$refs.mpvueCityPicker.pickerCancel(),!0},onUnload:function(){this.$refs.mpvueCityPicker.showPicker&&this.$refs.mpvueCityPicker.pickerCancel()}};t.default=s}).call(this,i("6e42")["default"])},c599:function(e,t,i){"use strict";var a=i("1c8e"),s=i.n(a);s.a},edb0:function(e,t,i){"use strict";i.r(t);var a=i("7e87"),s=i("43a6");for(var n in s)"default"!==n&&function(e){i.d(t,e,function(){return s[e]})}(n);i("c599");var c=i("2877"),o=Object(c["a"])(s["default"],a["a"],a["b"],!1,null,null,null);t["default"]=o.exports}},[["1802","common/runtime","common/vendor"]]]);