import Vue from 'vue'
import Vuex from 'vuex'
import HttpRequest from '../common/httpRequest.js'
import HttpApi from '../common/httpApi.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
		authResult: uni.getStorageSync('authResult'), //authResult.state获取认证状态
		goodTypeAll: []
	},
	mutations: {
		getGoodTypeAll(state, data) {
			state.goodTypeAll = data
		},
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

			uni.showLoading({
				mask: true,
			})
			state.hasLogin = false;
			state.userInfo = {};
			try {
				uni.clearStorageSync();
			} catch (e) {
				// error
			}
			uni.hideLoading()
			uni.reLaunch({
				url: '/pages/login/login'
			})
		},
		updateAuth(state, value) {
			state.authResult = value
		}
	},
	actions: {

	}
})

export default store
