(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/goods"],{"05e5":function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{beforeHeaderzIndex:11,afterHeaderzIndex:10,beforeHeaderOpacity:1,afterHeaderOpacity:0,showBack:!0,swiperList:[{id:1,img:"https://ae01.alicdn.com/kf/HTB1Mj7iTmzqK1RjSZFjq6zlCFXaP.jpg"},{id:2,img:"https://ae01.alicdn.com/kf/HTB1fbseTmzqK1RjSZFLq6An2XXaL.jpg"},{id:3,img:"https://ae01.alicdn.com/kf/HTB1dPUMThnaK1RjSZFtq6zC2VXa0.jpg"},{id:4,img:"https://ae01.alicdn.com/kf/HTB1OHZrTXzqK1RjSZFvq6AB7VXaw.jpg"}],currentSwiper:0,anchorlist:[],selectAnchor:0,serviceClass:"",specClass:"",shareClass:"",goodsData:{id:1,name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",price:"127.00",number:1,service:[{name:"正品保证",description:"此商品官方保证为正品"},{name:"极速退款",description:"此商品享受退货极速退款服务"},{name:"7天退换",description:"此商品享受7天无理由退换服务"}],spec:["XS","S","M","L","XL","XXL"],comment:{number:102,userface:"../../static/img/face.jpg",username:"大黑哥",content:"很不错，之前买了很多次了，很好看，能放很久，和图片色差不大，值得购买！"}},selectSpec:null,isKeep:!1,descriptionStr:'<div style="text-align:center;"><img width="100%" src="https://ae01.alicdn.com/kf/HTB1t0fUl_Zmx1VjSZFGq6yx2XXa5.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB1LzkjThTpK1RjSZFKq6y2wXXaT.jpg"/><img width="100%" src="https://ae01.alicdn.com/kf/HTB18dkiTbvpK1RjSZPiq6zmwXXa8.jpg"/></div>'}},onLoad:function(t){console.log(t.cid," at pages\\goods\\goods.vue:248")},onReady:function(){this.calcAnchor()},onPageScroll:function(t){this.selectAnchor=t.scrollTop>=this.anchorlist[2].top?2:t.scrollTop>=this.anchorlist[1].top?1:0;var e=375;t.scrollTop=t.scrollTop>e?375:t.scrollTop,this.afterHeaderOpacity=t.scrollTop*(1/e),this.beforeHeaderOpacity=1-this.afterHeaderOpacity,this.beforeHeaderzIndex=t.scrollTop>0?10:11,this.afterHeaderzIndex=t.scrollTop>0?11:10},onReachBottom:function(){t.showToast({title:"触发上拉加载"})},mounted:function(){},methods:{swiperChange:function(t){this.currentSwiper=t.detail.current},toMsg:function(){t.navigateTo({url:"../msg/msg"})},toChat:function(){t.navigateTo({url:"../msg/chat/chat?name=客服008"})},share:function(){this.shareClass="show"},hideShare:function(){var t=this;this.shareClass="hide",setTimeout(function(){t.shareClass="none"},150)},keep:function(){this.isKeep=!this.isKeep},joinCart:function(){if(null==this.selectSpec)return this.showSpec(function(){t.showToast({title:"已加入购物车"})});t.showToast({title:"已加入购物车"})},buy:function(){var t=this;if(null==this.selectSpec)return this.showSpec(function(){t.toConfirmation()});this.toConfirmation()},toRatings:function(){t.navigateTo({url:"ratings/ratings"})},toConfirmation:function(){var e=[],o={id:this.goodsData.id,img:"../../static/img/goods/p1.jpg",name:this.goodsData.name,spec:"规格:"+this.goodsData.spec[this.selectSpec],price:this.goodsData.price,number:this.goodsData.number};e.push(o),t.setStorage({key:"buylist",data:e,success:function(){t.navigateTo({url:"../order/confirmation"})}})},showComments:function(t){},setSelectSpec:function(t){this.selectSpec=t},sub:function(){this.goodsData.number<=1||this.goodsData.number--},add:function(){this.goodsData.number++},toAnchor:function(e){this.selectAnchor=e,t.pageScrollTo({scrollTop:this.anchorlist[e].top,duration:200})},calcAnchor:function(){var e=this;this.anchorlist=[{name:"主图",top:0},{name:"评价",top:0},{name:"详情",top:0}];var o=t.createSelectorQuery().select("#comments");o.boundingClientRect(function(o){var s=0;s=plus.navigator.getStatusbarHeight();var i=t.upx2px(100);e.anchorlist[1].top=o.top-i-s,e.anchorlist[2].top=o.bottom-i-s}).exec()},back:function(){t.navigateBack()},showService:function(){console.log("show"," at pages\\goods\\goods.vue:392"),this.serviceClass="show"},hideService:function(){var t=this;this.serviceClass="hide",setTimeout(function(){t.serviceClass="none"},200)},showSpec:function(t){console.log("show"," at pages\\goods\\goods.vue:404"),this.specClass="show",this.specCallback=t},specCallback:function(){},hideSpec:function(){var t=this;this.specClass="hide",this.selectSpec&&this.specCallback&&this.specCallback(),this.specCallback=!1,setTimeout(function(){t.specClass="none"},200)},discard:function(){}}};e.default=o}).call(this,o("6e42")["default"])},"3cc3":function(t,e,o){"use strict";o.r(e);var s=o("05e5"),i=o.n(s);for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);e["default"]=i.a},7438:function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},i=[];o.d(e,"a",function(){return s}),o.d(e,"b",function(){return i})},7495:function(t,e,o){"use strict";var s=o("c44c"),i=o.n(s);i.a},9218:function(t,e,o){"use strict";o.r(e);var s=o("7438"),i=o("3cc3");for(var n in i)"default"!==n&&function(t){o.d(e,t,function(){return i[t]})}(n);o("7495");var c=o("2877"),a=Object(c["a"])(i["default"],s["a"],s["b"],!1,null,null,null);e["default"]=a.exports},c44c:function(t,e,o){}},[["cc7d","common/runtime","common/vendor"]]]);