/**
 * API接口配置文件
 */
module.exports = {
	user: {
		updateUserInfo: '/updateUserInfo'
	},
	login: {
		signin: "/login", // 登陆 
		register: "/register", // 注册
		registerCode: "/getRegisterCode", // 注册验证码获取
		logout: '/logout', //退出登陆
		retrievePassword: '/retrievePassword', //退出登陆
	},
	cardAuth: {
		addUserAuthentication: "/addUserAuthentication", //添加实名认证
		uploadImage: "/uploadImage", //上传身份证图片
		getUserAuthentication: '/getUserAuthentication' //查看实名认证
	},
	common: {
		couponlist: "index/couponlist", // 公共加载商品
		config: "config/getinfo", // 获取服务端配置
		update: "config/update", // 检测更新 
	},
	goods: {
		iteminfo: "items/goodsinfo", // 商品详情 加载 
	}
}
