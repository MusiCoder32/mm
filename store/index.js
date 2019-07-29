import Vue from 'vue'
import Vuex from 'vuex'
import HttpRequest from '../common/httpRequest.js'
import HttpApi from '../common/httpApi.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
		authResult: uni.getStorageInfoSync('authRusult'),
	},
	mutations: {
		hasLogined(state) {
			state.hasLogin = true;
		},
		login(state, provider) {
			state.hasLogin = true;
			state.userInfo = provider;
			uni.setStorage({ //缓存用户登陆状态
				key: 'user_text',
				data: provider.user_text
			})
			uni.setStorage({ //缓存用户登陆状态
				key: 'token',
				data: provider.token
			})
			uni.setStorage({ //缓存用户登陆状态
				key: 'uid',
				data: provider.uid
			})
			uni.setStorage({ //缓存用户登陆状态
				key: 'user_wallet',
				data: provider.user_wallet
			})
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			// 			HttpRequest.post(HttpApi.login.logout).then(res => {
			// 				if (res.code == 0) {
			// 					uni.showToast({
			// 						title: res.msg,
			// 						icon: 'none'
			// 					});
			// 
			// 				} else {
			// 					uni.showToast({
			// 						title: res.msg,
			// 						icon: 'none'
			// 					});
			// 				}
			// 			}).catch((err) => {
			// 				console.log(err)
			//  
			// 			}).finally(() => {
			// 				clearUserInfo()
			// 				uni.hideLoading();
			// 			})
			clearUserInfo()
		},
		updateAuth(state, value) {
			state.authResult = value
		}
	},
	actions: {

	}
})

function clearUserInfo() {
	uni.removeStorage({ //缓存用户登陆状态
		key: 'user_text',
	})
	uni.removeStorage({ //缓存用户登陆状态
		key: 'token',
	})
	uni.removeStorage({ //缓存用户登陆状态
		key: 'uid',
	})
	uni.removeStorage({ //缓存用户登陆状态
		key: 'user_wallet',
	})
	uni.reLaunch({
		url: '/pages/tabBar/home/home'
	})
}

export default store
