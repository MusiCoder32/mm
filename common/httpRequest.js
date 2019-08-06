import configdata from './config'
import cache from './cache'

module.exports = {
	config: function(name) {
		var info = null;
		if (name) {
			var name2 = name.split("."); //字符分割
			if (name2.length > 1) {
				info = configdata[name2[0]][name2[1]] || null;
			} else {
				info = configdata[name] || null;
			}
			if (info == null) {
				let web_config = cache.get("web_config");
				if (web_config) {
					if (name2.length > 1) {
						info = web_config[name2[0]][name2[1]] || null;
					} else {
						info = web_config[name] || null;
					}
				}
			}
		}
		return info;
	},
	post: function(url, data, header) {
		uni.showLoading({
			mask: true
		})
		let token = uni.getStorageSync('token')
		header = header || "application/x-www-form-urlencoded";
		url = this.config("APIHOST") + this.config("APIPATH") + url;
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data,
				method: "POST",
				header: {
					"content-type": header,
					'token': token || '',
				},
				success: function(result) {
					console.log(url+':'+result.data)
					if (result.data.code != 0) {
						uni.showToast({
							title: result.data.msg,
							icon: 'none'
						})
					}
					succ.call(self, result.data)
				},
				fail: function(e) {
					uni.hideLoading()
					uni.showToast({
						title: '通信异常，请稍后再试',
						icon: 'none'
					})
					console.log(e)
					error.call(self, e)
				},
				complete: () => {
					uni.hideLoading()
				}
			})
		})
	},
	get: function(url, data, header) {
		uni.showLoading({
			mast: true
		})
		header = header || "application/x-www-form-urlencoded";
		url = this.config("APIHOST") + this.config("APIPATH") + url;
		return new Promise((succ, error) => {
			uni.request({
				url: url,
				data: data,
				method: "GET",
				header: {
					"content-type": header
				},
				success: function(result) {
					if (result.data.code != 0) {
						uni.showToast({
							title: result.data.msg,
							icon: 'none'
						})
					}
					console.log(url+':'+result.data)
					succ.call(self, result.data)
				},
				fail: function(e) {
					uni.hideLoading()
					uni.showToast({
						title: '通信异常，请稍后再试',
						icon: 'none'
					})
					console.log(e)
					error.call(self, e)
				},
				complete: () => {
					uni.hideLoading()
				}
			})
		})
	}
}
