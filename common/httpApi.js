/**
 * API接口配置文件
 */
module.exports = {
	home: {
		banner: "index/banner", // 首页banner 
		navlist: "index/navlist", // 首页导航
		juhusuan: "index/juhuasuanlist", // 首页聚划算推荐
	},
	login: {
		signin: "/api/login", // 登陆 
		register: "/api/register", // 注册
		registerCode: "/api/getRegisterCode", // 注册验证码获取
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
