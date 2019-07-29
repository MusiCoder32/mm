<template>
	<view v-if="hasLogin">
		<view v-if="showHeader" class="status" :style="{position:headerPosition,top:statusTop}"></view>
		<view v-if="showHeader" class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="addr"></view>
			<view class="input-box">

			</view>
			<view class="icon-btn">
				<view class="icon tongzhi" @tap="toMsg"></view>
				<view class="icon setting" @tap="toSetting"></view>
			</view>
		</view>
		<!-- 占位 -->
		<view v-if="showHeader" class="place"></view>
		<!-- 用户信息 -->
		<view class="user">
			<!-- 头像 -->
			<view class="left">
				<image :src="head_portrait" @tap="toSetting"></image>
			</view>
			<!-- 昵称,个性签名 -->
			<view class="right">
				<view class="username">{{user_text.nickname}}</view>
				<view class="signature" @tap="toSetting" style="margin-top: 20upx;">
					<navigator style="color: lightsteelblue;" hover-class="navigator-hover" open-type='navigate' url="/pages/cardAuth/cardAuth">
						{{authResult.state|authTitle}}
					</navigator>
				</view>
			</view>
			<!-- 二维码按钮 -->
			<view class="erweima" @tap="toMyQR">
				<view class="icon qr"></view>
			</view>
		</view>
		<!-- VIP banner -->
		<!-- 		<view class="VIP">
			<view class="img">
				<image src="/static/img/VIP.png"></image>
			</view>
			<view class="title">开通VIP会员</view>
			<view class="tis">会员特权</view>
		</view> -->
		<!-- 订单-余额 -->
		<view class="order">
			<!-- 订单类型 -->
			<view class="list">
				<view class="box" v-for="(row,index) in orderList" :key="index" @tap="toOrderList(index)">
					<view class="img">
						<view class="icon" :class="row.icon"></view>
					</view>
					<view class="text">{{row.text}}</view>
				</view>
			</view>
			<!-- 余额 -->
			<view class="balance-info">
				<view class="left">
					<view class="box">
						<view class="num">{{}}</view>
						<view class="text">积分</view>
					</view>
					<view class="box">
						<view class="num">{{}}</view>
						<view class="text">佣金</view>
					</view>
					<view class="box">
						<view class="num">{{}}</view>
						<view class="text">余额</view>
					</view>
				</view>
				<view class="right">
					<view class="box" @tap="toDeposit">
						<view class="img">
							<view class="icon chongzhi"></view>
						</view>
						<view class="text">充值</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 工具栏 -->
		<view class="toolbar">
			<view class="title">我的工具栏</view>
			<view class="list">
				<view class="box" v-for="(row,index) in mytoolbarList" :key="index" @tap="toPage(row.url)">
					<view class="img">
						<image :src="row.img"></image>
					</view>
					<view class="text">{{row.text}}</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';

	var _self;
	export default {
		data() {
			return {
				head_portrait: '/static/img/face.jpg',
				currentRoute: '',
				isfirst: true,
				headerPosition: "fixed",
				headerTop: null,
				statusTop: null,
				showHeader: true,
				//个人信息,
				uid: 4106,
				token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6IjEifQ.eyJpc3MiOiJzb3VsIiwiYXVkIjoic291bCIsImp0aSI6IjEiLCJpYXQiOjE1NjM5NjM5MTIsIm5iZiI6MTU2Mzk2MzkxMiwiZXhwIjoxNTY2NTU1OTEyLCJ1aWQiOjQxMDZ9.4SJvjmrx7GxktfJhVPA2guUp8A2rPsVdsHElHQmbcAw",
				user_text: {
					"nickname": "wyj1",
					"portrait": "/head_tem.jpg",
					"county": "",
					"province": "",
					"city": "",
					"gender": 0,
					"protrait_type": 0
				},
				user_wallet: {
					"account_balance": 0,
					"shopping_points": 0,
					"retail_points": 0,
					"packets_points": 0
				},
				orderList: [{
						text: '待付款',
						icon: "fukuan"
					},
					{
						text: '待发货',
						icon: "fahuo"
					},
					{
						text: '待收货',
						icon: "shouhuo"
					},
					{
						text: '待评价',
						icon: "pingjia"
					},
					{
						text: '退换货',
						icon: "tuihuo"
					}
				],
				// 工具栏列表
				mytoolbarList: [{
						url: '../../user/keep/keep',
						text: '我的收藏',
						img: '/static/img/user/point.png'
					},
					{
						url: '../../user/coupon/coupon',
						text: '优惠券',
						img: '/static/img/user/quan.png'
					},
					{
						url: '',
						text: '新客豪礼',
						img: '/static/img/user/renw.png'
					},
					{
						url: '',
						text: '领红包',
						img: '/static/img/user/momey.png'
					},

					{
						url: '../../user/address/address',
						text: '收货地址',
						img: '/static/img/user/addr.png'
					},
					{
						url: '',
						text: '账户安全',
						img: '/static/img/user/security.png'
					},
					{
						url: '',
						text: '银行卡',
						img: '/static/img/user/bank.png'
					},
					{
						url: '',
						text: '抽奖',
						img: '/static/img/user/choujiang.png'
					},
					// {text:'客服',img:'/static/img/user/kefu.png'},
					// {text:'签到',img:'/static/img/user/mingxi.png'}

				]
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
			this.headerTop = e.scrollTop >= 0 ? null : 0;
			this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
		},
		onLoad() {
			_self = this;
			this.statusHeight = 0;
			// #ifdef APP-PLUS
			this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
		},
		onReady() {
			//此处，演示,每次页面初次渲染都把登录状态重置
		},
		onShow() {
			this.currentRoute = getCurrentPages()[0] ? getCurrentPages()[0].route : "pages/tabBar/home/home"
			uni.getStorage({
				key: 'user_text',
				success: (res) => {
					if (!res.data) {
						if (this.isfirst) {
							//this.toLogin();
						}
						return;
					}
					this.hasLogined();
					let localPortrait = res.data.head_portrait_local
					let remotePortrait = res.data.head_portrait
					// 如果storage中有本地头像路径
					if (res.data.head_portrait_local) {
						//通过uni.getSaveFileInfo来判断本地图片是否被删除
						uni.getSavedFileInfo({
							filePath: localPortrait, //仅做示例用，非真正的文件路径
							success: function(res) {
								console.log(res);
								//本地图片信息获取成功，使用本地图片展示头像
								_self.head_portrait = localPortrait;
							},
							fail: (e) => {
								//本地图片信息获取失败，请请求远程头像资源
								_self.getUserPortrait(remotePortrait)
							}
						});
					} else {
						this.getUserPortrait(remotePortrait)
					}
				},
				fail: (e) => {
					this.$api.msg("请先登陆")
					// this.toLogin();
					this.hasLogined()
				}
			});
			this.$Request.post(this.$Urlconf.cardAuth.getUserAuthentication).then((res) => {
				if (res.code == 0) {
					uni.setStorage({
						key: 'authResult',
						data: res.data
					})
					this.updateAuth(res.data)
				}
			}).catch((err) => {
				console.log(err)
			}).finally(() => {

			})
		},
		methods: {
			...mapMutations(['hasLogined', 'updateAuth']),
			//重新请求用户关头像
			getUserPortrait(imgPath) {
				let user_text = uni.getStorageInfoSync('user_text')
				//uni.saveFile只能传入临时文件地址，故需先下载远程头像
				uni.downloadFile({
					url: imgPath,
					success: (res) => {
						if (res.statusCode === 200) {
							console.log('下载成功');
							// 使用uni.saveFile保存下载的远程头像
							uni.saveFile({
								tempFilePath: res.tempFilePath,
								success: (res) => {
									this.head_portrait = res.savedFilePath;
									user_text.head_portrait_local = res.savedFilePath;
									uni.setStorage({
										key: 'user_text',
										data: user_text
									})
								},
								fail: (err) => {
									console.log(err)
								}
							})

						}
					}
				})

			},
			//消息列表
			toMsg() {
				uni.navigateTo({
					url: '../../msg/msg'
				})
			},
			toOrderList(index) {
				uni.setStorageSync('tbIndex', index);
				uni.navigateTo({
					url: '../../user/order_list/order_list?tbIndex=' + index
				})
			},
			toSetting() {
				uni.navigateTo({
					url: '../../user/setting/setting'
				})
			},
			toMyQR() {
				uni.navigateTo({
					url: '../../user/myQR/myQR'
				})
			},
			toLogin() {
				// uni.showToast({
				// 	title: '请登录',
				// 	icon: "none"
				// });
				uni.navigateTo({
					url: '../../login/login?backroute=' + this.currentRoute
				})
				this.isfirst = false;
			},
			isLogin() {
				//实际应用中,用户登录状态应该用token等方法去维持登录状态.
				const value = uni.getStorageSync('uid');
				if (value) {
					return true;
				}
				return false
			},
			toDeposit() {
				uni.navigateTo({
					url: '../../user/deposit/deposit'
				})
			},
			toPage(url) {
				if (!url) {
					uni.showToast({
						title: '模板未包含此页面',
						icon: "none"
					});
					return;
				}
				uni.navigateTo({
					url: url
				})
			}
		},
		computed: {
			...mapState(['hasLogin', 'authResult'])
		},
		filters: {
			authTitle: function(type) {
				if (type === 0) {
					return '认证中>'
				} else if (type === 1) {
					return '已认证'
				} else if (type === 2) {
					return '认证失败>'
				} else {
					return '未认证'
				}
			}
		}
	}
</script>
<style lang="scss">
	page {
		position: relative;
		background-color: #fff;
	}

	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #f06c7a;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */

	}

	.header {
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #f06c7a;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);

		/*  #endif  */
		.icon-btn {
			width: 120upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;

			.icon {
				color: #fff;
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42upx;
			}
		}
	}

	.place {
		background-color: #f06c7a;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}

	.user {
		width: 92%;
		padding: 0 4%;
		display: flex;
		align-items: center;
		// position: relative;
		background-color: #f06c7a;
		padding-bottom: 120upx;

		.left {
			width: 20vw;
			height: 20vw;
			flex-shrink: 0;
			margin-right: 20upx;
			border-radius: 100%;

			image {
				width: 20vw;
				height: 20vw;
				border-radius: 100%;
			}

		}

		.right {
			width: 100%;

			.username {
				font-size: 36upx;
				color: #fff;
			}

			.signature {
				color: #eee;
				font-size: 28upx;
			}
		}

		.erweima {
			flex-shrink: 0;
			width: 10vw;
			height: 10vw;
			margin-left: 5vw;
			border-radius: 100%;

			display: flex;
			justify-content: center;
			align-items: center;
			background: linear-gradient(to left, #fbbb37 0%, #fcf0d0 105%);

			.icon {
				color: #7b6335;
				font-size: 42upx;
			}
		}
	}

	.order {
		width: 84%;
		margin: 30upx 4% 30upx 4%;
		padding: 30upx 4% 20upx 4%;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0, 0, 0, 0.1);
		border-radius: 15upx;

		.list {
			display: flex;
			border-bottom: solid 1upx #17e6a1;
			padding-bottom: 10upx;

			.box {
				width: 20%;

				.img {
					width: 100%;
					display: flex;
					justify-content: center;

					.icon {
						font-size: 50upx;
						color: #464646;
					}
				}

				.text {
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 28upx;
					color: #3d3d3d;
				}
			}
		}

		.balance-info {
			display: flex;
			padding: 10upx 0;

			.left {
				width: 75%;
				display: flex;

				.box {
					width: 50%;
					font-size: 28upx;

					.num {
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;
						color: #f9a453;
					}

					.text {
						width: 100%;
						display: flex;
						justify-content: center;
						color: #3d3d3d;
						font-size: 28upx;
					}
				}
			}

			.right {
				border-left: solid 1upx #17e6a1;
				width: 25%;

				.box {

					.img {
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;

						.icon {
							font-size: 45upx;
							color: #e78901;
						}
					}

					.text {
						width: 100%;
						display: flex;
						justify-content: center;
						font-size: 28upx;
						color: #3d3d3d;
					}
				}
			}
		}
	}

	.VIP {
		width: 84%;
		margin: -65upx auto 20upx auto;
		padding: 30upx 4%;
		background: linear-gradient(to left, #dea96d 0%, #f6d59b 100%);
		box-shadow: 0upx 0upx 25upx rgba(0, 0, 0, 0.2);
		border-radius: 15upx;
		display: flex;
		align-items: center;

		.img {
			flex-shrink: 0;
			width: 60upx;
			height: 60upx;

			image {
				width: 60upx;
				height: 60upx;
			}
		}

		.title {
			width: 100%;
			color: #796335;
			font-size: 30upx;
		}

		.tis {
			width: 100%;
			display: flex;
			justify-content: flex-end;
			color: #fcf0d0;
			font-size: 26upx;
		}
	}

	.toolbar {
		width: 92%;
		margin: 0 4% 0 4%;
		padding: 0 0 20upx 0;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0, 0, 0, 0.1);
		border-radius: 15upx;

		.title {
			padding-top: 10upx;
			margin: 0 0 10upx 3%;
			font-size: 30upx;
			height: 80upx;
			display: flex;
			align-items: center;
		}

		.list {
			display: flex;
			flex-wrap: wrap;

			.box {
				width: 25%;
				margin-bottom: 30upx;

				.img {
					width: 23vw;
					height: 10.5vw;
					display: flex;
					justify-content: center;

					image {
						width: 9vw;
						height: 9vw;
					}
				}

				.text {
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 26upx;
					color: #3d3d3d;
				}
			}
		}
	}
</style>
