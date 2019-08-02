/**
 * API接口配置文件
 */
module.exports = {
	home: {
		getAdList: '/getAdList', //首页轮播图
		goodsTypeList: '/goodsTypeList', //商品分类
		goodsTypeAll: '/goodsTypeAll', //商品分类带数据
		goodsList: '/goodsList', //所有商品查询接口
		goodsText: '/goodsText', //商品请情
		delUserAddress: '/delUserAddress', //修改地址
	},
	user: {
		updateUserInfo: '/updateUserInfo', //修改用户基本信息
		getUserAddress: '/getUserAddress', //查询用户地址
		addUserAddress: '/addUserAddress', //增加用户地址
		defaultUserAddress: '/defaultUserAddress', //设为默认地址
		updateUserAddress: '/updateUserAddress', //修改地址
		delUserAddress: '/delUserAddress', //修改地址
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
