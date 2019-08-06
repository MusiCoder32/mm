<template>
	<view>
		<view class="block">
			<view class="content">
				<view class="orderinfo">
					<view class="row">
						<view class="nominal">订单名称:</view>
						<view class="text">{{orderName}}</view>
					</view>
					<view class="row">
						<view class="nominal">订单金额:</view>
						<view class="text">{{amount}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="block">
			<view class="title">
				选择支付方式
			</view>
			<view class="content">
				<view class="pay-list">
					<view v-if="goods_type==2" class="row" @tap="paytype='dou'">
						<view class="left">
							<image src="/static/img/icon/price.png"></image>
						</view>
						<view class="center">
							豆支付
						</view>
						<view class="right">
							<radio :checked="paytype=='dou'" color="#f06c7a" />
						</view>
					</view>
					<view v-if="goods_type==3" class="row" @tap="paytype='integral'">
						<view class="left">
							<image src="/static/img/icon/integral.png"></image>
						</view>
						<view class="center">
							积分支付
						</view>
						<view class="right">
							<radio :checked="paytype=='integral'" color="#f06c7a" />
						</view>
					</view>
					<view v-if="goods_type!=3" class="row" @tap="paytype='alipay'">
						<view class="left">
							<image src="/static/img/alipay.png"></image>
						</view>
						<view class="center">
							支付宝支付
						</view>
						<view class="right">
							<radio :checked="paytype=='alipay'" color="#f06c7a" />
						</view>
					</view>
					<!-- 					<view class="row" @tap="paytype='wxpay'">
						<view class="left">
							<image src="/static/img/wxpay.png"></image>
						</view>
						<view class="center">
							微信支付
						</view>
						<view class="right">
							<radio :checked="paytype=='wxpay'" color="#f06c7a" disabled="goods_type==3"/>
						</view>
					</view> -->
				</view>
			</view>
		</view>
		<view class="pay">
			<view class="btn" @tap="doDeposit">立即支付</view>
			<view class="tis">
				点击立即支付，即代表您同意<view class="terms">
					《条款协议》
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				market_price: '',
				price: '',
				integral_price: '',
				goods_type: 2,
				order_sn: '',
				orderName: '',
				paytype: 'dou' //支付类型 alipay/integral
			};
		},
		onLoad(e) {
			console.log(e)
			this.market_price = e.market_price;
			this.price = e.price;
			this.integral_price = e.integral_price;
			this.order_sn = e.order_sn;
			this.goods_type = e.goods_type;
			if (this.goods_type == 1) {
				this.paytype = 'alipay'
			} else if (this.goods_type == 2) {
				this.paytype = 'dou'
			} else if (this.goods_type == 3) {
				this.paytype = 'integral'
			}
			uni.getStorage({
				key: 'paymentOrder',
				success: (e) => {
					if (e.data.length > 1) {
						this.orderName = '多商品合并支付'
					} else {
						this.orderName = e.data[0].name;
					}
					uni.removeStorage({
						key: 'paymentOrder'
					})
				}
			})
		},
		methods: {
			doDeposit() {
				uni.getProvider({
					service: 'payment',
					success: function(res) {
						console.log(res.provider)
						// if (~res.provider.indexOf('qq')) {
						// 	uni.login({
						// 		provider: 'qq',
						// 		success: function(loginRes) {
						// 			console.log(JSON.stringify(loginRes));
						// 		}
						// 	});
						// }
					}
				});
				// uni.requestPayment({
				// 	provider: 'alipay',
				// 	orderInfo: 'alipay_sdk=alipay-sdk-php-20180705&app_id=2016101100661825&biz_content=%7B%22body%22%3A%22sooboo%22%2C%22subject%22%3A%22sooboo%22%2C%22out_trade_no%22%3A%221565060685-8608%22%2C%22timeout_express%22%3A%221d%22%2C%22total_amount%22%3A%220.01%22%2C%22product_code%22%3A%22QUICK_MSECURITY_PAY%22%7D&charset=UTF-8&format=json&method=alipay.trade.app.pay&notify_url=http%3A%2F%2Ft249d62588.zicp.vip%2Fapi%2Fcallback&sign_type=RSA&timestamp=2019-08-06+11%3A04%3A45&version=1.0&sign=f91%2FluNW8oV9sRTn5AyfNcAq7dEjKFWvFNEtzeAe9LlBclzBtu56UpmhpB3c7as2KqEx2OLSBIy5mFViuJ%2F1ERr6P76v0neq1jmb0nWYzkW1zsGecee7nM2iWg14FJHYNySLi8L8D5B6p15tu0XKgF2MA9PCAxGKZo%2FH7fVt4PI%3D',
				// 	success: function(res) {
				// 		console.log('success:' + JSON.stringify(res));
				// 	},
				// 	fail: function(err) {
				// 		console.log('fail:' + JSON.stringify(err));
				// 	}
				// });
				// console.log(11111)
				//模板模拟支付，实际应用请调起微信/支付宝
				uni.showLoading({
					title: '支付中...'
				});
				setTimeout(() => {
					uni.hideLoading();
					uni.showToast({
						title: '支付成功'
					});
					setTimeout(() => {
						uni.redirectTo({
							url: '../../pay/success/success?amount=' + this.amount
						});
					}, 300);
				}, 700)
			}
		},
		computed: {
			amount: function() {
				if (this.paytype == 'dou') {
					return parseInt(this.price).toFixed(0)+'金豆'
				} else if (this.paytype == 'integral') {
					return parseInt(this.integral).toFixed(0)+'积分'
				} else if (this.paytype == 'alipay') {
					return parseInt(this.market_price).toFixed(2)+'元'
				}
			},
		}
	}
</script>

<style lang="scss">
	.block {
		width: 94%;
		padding: 0 3% 40upx 3%;

		.title {
			width: 100%;
			font-size: 34upx;
		}

		.content {
			.orderinfo {
				width: 100%;
				border-bottom: solid 1upx #eee;

				.row {
					width: 100%;
					height: 90upx;
					display: flex;
					align-items: center;

					.nominal {
						flex-shrink: 0;
						font-size: 32upx;
						color: #7d7d7d;
					}

					.text {
						width: 70%;
						margin-left: 10upx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						font-size: 32upx;
					}
				}
			}

			.pay-list {
				width: 100%;
				border-bottom: solid 1upx #eee;

				.row {
					width: 100%;
					height: 120upx;
					display: flex;
					align-items: center;

					.left {
						width: 100upx;
						flex-shrink: 0;
						display: flex;
						align-items: center;

						image {
							width: 80upx;
							height: 80upx;
						}
					}

					.center {
						width: 100%;
						font-size: 30upx;
					}

					.right {
						width: 100upx;
						flex-shrink: 0;
						display: flex;
						justify-content: flex-end;
					}
				}
			}
		}
	}

	.pay {
		margin-top: 20upx;
		width: 100%;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;

		.btn {
			width: 70%;
			height: 80upx;
			border-radius: 80upx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			background-color: #f06c7a;
			box-shadow: 0upx 5upx 10upx rgba(0, 0, 0, 0.2);
		}

		.tis {
			margin-top: 10upx;
			width: 100%;
			font-size: 24upx;
			display: flex;
			justify-content: center;
			align-items: baseline;
			color: #999;

			.terms {
				color: #5a9ef7;
			}
		}
	}
</style>
