/**
 * API接口配置文件
 */
module.exports = {

	card: {
		getBandCardList: '/getBandCardList', //查看银行卡列表
		addBankCard: '/addBankCard', //添加银行卡
		delBankCard: '/delBankCard', //删除银行卡
		updateBankCard: '/updateBankCard', //修改银行卡
	},
	cart: {
		cartList: '/carList', //查询购物车数据
		cartAdd: '/addCar', //加入购物车
		cartUpdate: '/changeCar', //修改购物车
		orderList: '/orderList', //查看订单
		addOrder: '/addOrder', //提交订单
	},
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
		getUserWallet: '/getUserWallet', //获取钱包余额
	},
	pay: {
		changePayPassword: '/changePayPassword', //修改支付密码
		resetPyaPassword: '/resetPyaPassword', //重置和首次支付密码
		addUserAddress: '/addUserAddress', //增加用户地址
		defaultUserAddress: '/defaultUserAddress', //设为默认地址
		updateUserAddress: '/updateUserAddress', //修改地址
		delUserAddress: '/delUserAddress', //修改地址
		getUserWallet: '/getUserWallet', //获取钱包余额
		pay: '/pay', //获取钱包余额
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
	}
}
