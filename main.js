import Vue from 'vue'
import store from './store'
import App from './App'

import HttpRequest from './common/httpRequest'
import HttpApi from './common/httpApi.js'
import i18n from './common/zh_cn.js'
import RootHttp from './common/config.js'

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)


// import Json from './Json' //测试用数据
/**
 *  因工具函数属于公司资产, 所以直接在Vue实例挂载几个常用的函数
 *  所有测试用数据均存放于根目录json.js
 *  
 *  css部分使用了App.vue下的全局样式和iconfont图标，有需要图标库的可以留言。
 *  示例使用了uni.scss下的变量, 除变量外已尽量移除特有语法,可直接替换为其他预处理器使用
 */
const msg = (title, duration = 1500, mask = false, icon = 'none') => {
	//统一提示方便全局修改
	if (Boolean(title) === false) {
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}
// const json = type=>{
// 	//模拟异步请求数据
// 	return new Promise(resolve=>{
// 		setTimeout(()=>{
// 			resolve(Json[type]);
// 		}, 500)
// 	})
// }
// 
const prePage = () => {
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}


Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$api = {
	msg,
	prePage
};

Vue.prototype.$RootHttp = RootHttp
Vue.prototype.$Request = HttpRequest
Vue.prototype.$Sysconf = HttpRequest.config
Vue.prototype.$Urlconf = HttpApi

Vue.prototype.checkLogin = function(backpage, backtype = '') {
	var uid = uni.getStorageSync('uid');
	if (!uid) {
		uni.redirectTo({
			url: 'pages/login/login?backpage=' + backpage + '&backtype=' + backtype
		});
		return false;
	}
	return [SUID, SRAND, SNAME, SFACE];
}


// 全局词条
Vue.prototype.$i18n = i18n

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
