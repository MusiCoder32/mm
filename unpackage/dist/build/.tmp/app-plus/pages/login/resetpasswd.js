(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/resetpasswd"],{"96e5":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},n=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return n})},"9ee6":function(t,e,i){"use strict";var o=i("fe1d"),n=i.n(o);n.a},aa09:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(i("bcac"));function o(t){return t&&t.__esModule?t:{default:t}}var n={data:function(){return{phoneNumber:"",code:"",passwd:"",passwdConfirm:"",getCodeText:"获取验证码",getCodeBtnColor:"#ffffff",getCodeisWaiting:!1}},onLoad:function(){},methods:{Timer:function(){},getCode:function(){var e=this;if(t.hideKeyboard(),!this.getCodeisWaiting){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber.trim()))return this.$api.msg(this.$i18n.write_phone_alert),!1;this.$api.msg("验证码已发送"),this.getCodeisWaiting=!0,this.getCodeBtnColor="rgba(255,255,255,0.5)",this.setTimer(),this.$Request.post(this.$Urlconf.login.registerCode,{mobile:this.phoneNumber.trim(),type:2}).then(function(t){999==t.code&&(e.getCodeisDisable=!1,e.getCodeBtnColor="rgba(255,255,255)")}).catch(function(t){e.getCodeisDisable=!1,e.getCodeBtnColor="rgba(255,255,255)"})}},setTimer:function(){var t=this,e=60;this.Timer=setInterval(function(){if(e<=0)return t.getCodeisWaiting=!1,t.getCodeBtnColor="#ffffff",t.getCodeText="获取验证码",void clearInterval(t.Timer);t.getCodeText="重新获取("+e+")",e--},1e3)},doReset:function(){return t.hideKeyboard(),/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)?0==this.code.length?(this.$api.msg(this.$i18n.write_code),!1):4!=this.code.trim().length?(t.showToast({title:"验证码不正确",icon:"none"}),!1):/((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,12}$/.test(this.passwd.trim())?this.passwd!=this.passwdConfirm?(t.showToast({title:this.$i18n.passwdDifference,icon:"none"}),!1):(t.showLoading({title:"提交中..."}),void this.toRetrievePassword()):(this.$api.msg(this.$i18n.passwdError),!1):(t.showToast({title:"请填写正确手机号码",icon:"none"}),!1)},toRetrievePassword:function(){var e={code:this.code,mobile:this.phoneNumber,password:this.passwd,repeat_password:this.passwdConfirm};this.$Request.post(this.$Urlconf.login.retrievePassword,e).then(function(e){0==e.code&&t.navigateBack({delta:1})})}}};e.default=n}).call(this,i("6e42")["default"])},bc66:function(t,e,i){"use strict";i.r(e);var o=i("96e5"),n=i("e0d5");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("9ee6");var r=i("2877"),a=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},e0d5:function(t,e,i){"use strict";i.r(e);var o=i("aa09"),n=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);e["default"]=n.a},fe1d:function(t,e,i){}},[["76ab","common/runtime","common/vendor"]]]);