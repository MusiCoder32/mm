<template>
	<view>
		<view class="block">
			<view class="content">
				<view class="orderinfo">
					<view class="row">
						<view class="nominal">订单号:</view>
						<view class="text">{{order_sn}}</view>
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
					<view v-if="goods_type==2" class="row" @tap="paytype='4'">
						<view class="left">
							<image src="/static/img/icon/price.png"></image>
						</view>
						<view class="center">
							豆支付
						</view>
						<view class="right">
							<radio :checked="paytype=='4'" color="#f06c7a" />
						</view>
					</view>
					<view v-if="goods_type==3" class="row" @tap="paytype='5'">
						<view class="left">
							<image src="/static/img/icon/integral.png"></image>
						</view>
						<view class="center">
							积分支付
						</view>
						<view class="right">
							<radio :checked="paytype=='5'" color="#f06c7a" />
						</view>
					</view>
					<view v-if="goods_type!=3" class="row" @tap="paytype='1'">
						<view class="left">
							<image src="/static/img/banlance.png"></image>
						</view>
						<view class="center">
							余额支付
						</view>
						<view class="right">
							<radio :checked="paytype=='1'" color="#f06c7a" />
						</view>
					</view>
					<view v-if="goods_type!=3" class="row" @tap="paytype='2'">
						<view class="left">
							<image src="/static/img/alipay.png"></image>
						</view>
						<view class="center">
							支付宝支付
						</view>
						<view class="right">
							<radio :checked="paytype=='2'" color="#f06c7a" />
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
		<!-- 打开支付弹层 -->
		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="specClass" @touchmove.stop.prevent="discard">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer" @tap.stop="discard">
				<view class="poupcontent">
					<view class="input-row" @tap.stop="showKeyboard">
						<view class='close-pay' @tap="hiddenKeyboard">×</view>
						<view :class="['item',{'item-active':codeLength==index}]" v-for="(k,index) in arr" :key="index">
							{{code.charAt(index)}}
						</view>
					</view>
					<DigitalKeyboard @change="contToggle" @closeKeyboard="closeKeyboard" :keyBoardSwitch="keyBoardSwitch"
					 :decimalPoint="true"></DigitalKeyboard>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import DigitalKeyboard from '../../../components/digital-keyboard.vue';
	var _self;
	export default {
		components: {
			DigitalKeyboard
		},
		data() {
			return {
				specClass: '', //弹窗css类，控制开关动画
				arr: ['', '', '', '', '', ''],
				code: '',
				codeLength: null,
				length: 6,
				keyBoardSwitch: false,

				boolShow: false,
				market_price: '',
				price: '',
				integral_price: '',
				goods_type: 2,
				order_sn: '',
				orderName: '',
				paytype: '4' //支付类型 alipay/integral
			};
		},
		onLoad(e) {
			_self = this;
			console.log(e)
			this.market_price = +e.market_price;
			// this.price = +e.price;
			this.price = 15;
			this.integral_price = +e.integral_price;
			this.order_sn = e.order_sn;
			this.goods_type = e.goods_type;
			if (this.goods_type == 1) {
				this.paytype = '1'
			} else if (this.goods_type == 2) {
				this.paytype = '4'
			} else if (this.goods_type == 3) {
				this.paytype = '5'
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

			//打开弹窗
			showSpec() {
				this.specClass = 'show';
				this.keyBoardSwitch = true;
				uni.setNavigationBarTitle({
					title: '输入支付密码'
				})
			},
			//关闭弹窗
			hideSpec() {
				this.keyBoardSwitch = false;
				this.specClass = 'none';
				uni.setNavigationBarTitle({
					title: '订单支付'
				})
			},
			discard() {
				//丢弃
			},

			showKeyboard() {
				this.codeLength = this.code.length == 6 ? 5 : this.code.length;
				this.keyBoardSwitch = true;
			},
			hiddenKeyboard() {
				uni.showModal({
					title: '提示',
					content: '确定放弃支付吗？',
					confirmText: '确定',
					cancelText: '继续支付',
					success: function(res) {
						if (res.confirm) {
							_self.keyBoardSwitch = false;
							_self.codeLength = null;
							_self.hideSpec()
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			closeKeyboard(value) {
				console.log(value);
			},
			contToggle(k) {
				let len = this.code.length;
				if (k === '') {
					this.code = this.code.substring(0, len - 1);
					this.codeLength = this.code.length;
					return;
				}
				this.codeLength = len + 1;
				this.code += k.toString();
				if (this.length === len + 1) {
					this.paying();
					this.hideSpec()
				}

			},
			getUserWallet(type) {
				this.$Request.post(this.$Urlconf.user.getUserWallet).then((res) => {
					if (res.code == 0) {
						let account_balance = +res.data.account_balance; //余额
						let packets_integral = +res.data.packets_integral; //积分
						let shopping_integral = +res.data.shopping_integral; //豆
						//判断豆余额
						if (type == '4' && shopping_integral < this.price) {
							let extra = this.price - shopping_integral
							uni.showToast({
								title: '你的豆额不足，还需' + extra + '豆',
								icon: 'none'
							});
							return;
						}
						if (type == '5' && packets_integral < this.integral_price) {
							let extra = this.integral_price - packets_integral
							uni.showToast({
								title: '你的积分不足，还需' + extra + '积分',
								icon: 'none'
							});
							return
						}
						if (type == '1' && account_balance < this.market_price) {
							let extra = this.market_price - account_balance
							uni.showToast({
								title: '你的余额不足，请选择其他支付方式',
								icon: 'none'
							});
							return
						}
						this.showSpec()
					}
				})
			},
			doDeposit() {
				let pay_pwd = uni.getStorageSync('user_text').pay_pwd == 0 ? false : true
				if (!pay_pwd) {
					uni.showToast({
						title: '您还没设置支付密码，请先设置支付密码',
						icon: 'none',
						duration: 2000,
						complete: () => {
							setTimeout(function() {
								uni.navigateTo({
									url: '/pages/user/pws/repws?back=1'
								})
							}, 1000);
						}
					})
					return;
				}
				//如何支付方式为支付宝2或者微信3
				if (this.paytype == '2' || this.paytype == '3') {
					this.otherPay()
				} else {
					this.getUserWallet(this.paytype)
				}

			},
			otherPay() {
				this.paying()
			},
			paying() {
				let payData = {
					orderSn: this.order_sn,
					payType: this.paytype
				}
				this.$Request.post(this.$Urlconf.pay.pay, payData).then((res) => {
					if (res.code == 0) {
						uni.setStorageSync('userWallet', res.data.wallet)
						//如果支付方式为支付宝，取出订单信息，调用支付宝sdk
						console.log(this.paytype)
						if (this.paytype == 2) {
							let alipayInfo = res.data.alipay;
							uni.requestPayment({
								provider: 'alipay',
								orderInfo: alipayInfo,
								success: function(res) {
									console.log('success:' + JSON.stringify(res));
									uni.redirectTo({
										url: '/pages/pay/success/success?order_sn=' + this.order_sn
									});
								},
								fail: function(err) {
									console.log('fail:' + JSON.stringify(err));
								}
							});
						} else if (this.paytype == 3) {

						} else {
							uni.redirectTo({
								url: '/pages/pay/success/success?order_sn=' + this.order_sn
							});
						}
					}
				})
			}
		},
		computed: {
			amount: function() {
				if (this.paytype == 'dou') {
					return parseInt(this.price).toFixed(0) + '金豆'
				} else if (this.paytype == 'integral') {
					return parseInt(this.integral).toFixed(0) + '积分'
				} else if (this.paytype == 'alipay') {
					return parseInt(this.market_price).toFixed(2) + '元'
				}
			},
		}
	}
</script>

<style lang="scss">
	// <--弹层动画样式
	@keyframes showPopup {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes hidePopup {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}

	@keyframes showLayer {
		0% {
			transform: translateY(0);
		}

		100% {
			transform: translateY(-100%);
		}
	}

	@keyframes hideLayer {
		0% {
			transform: translateY(-100%);
		}

		100% {
			transform: translateY(0);
		}
	}

	.popup {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 20;
		display: none;

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 21;
			background-color: rgba(0, 0, 0, 0.6);
		}

		.layer {
			position: fixed;
			z-index: 22;
			bottom: -70%;
			width: 92%;
			padding: 0 4%;
			height: 70%;
			border-radius: 20upx 20upx 0 0;
			background-color: #fff;
			display: flex;
			flex-wrap: wrap;
			align-content: space-between;

			.content {
				width: 100%;
				padding: 20upx 0;
			}

			.btn {
				width: 100%;
				height: 100upx;

				.button {
					width: 100%;
					height: 80upx;
					border-radius: 40upx;
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					background-color: #f47952;
					font-size: 28upx;
				}
			}
		}

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			display: block;

			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		&.service {
			.row {
				margin: 30upx 0;

				.title {
					font-size: 30upx;
					margin: 10upx 0;
				}

				.description {
					font-size: 28upx;
					color: #999;
				}
			}
		}

		&.spec {
			.title {
				font-size: 30upx;
				margin: 30upx 0;
			}

			.sp {
				display: flex;

				view {
					font-size: 28upx;
					padding: 5upx 20upx;
					border-radius: 8upx;
					margin: 0 30upx 20upx 0;
					background-color: #f6f6f6;

					&.on {
						padding: 3upx 18upx;
						border: solid 1upx #f47925;
					}
				}
			}

			.length {
				margin-top: 30upx;
				border-top: solid 1upx #aaa;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-top: 20upx;

				.text {
					font-size: 30upx;
				}

				.number {
					display: flex;
					justify-content: center;
					align-items: center;

					.input {
						width: 80upx;
						height: 60upx;
						margin: 0 10upx;
						background-color: #f3f3f3;
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;

						input {
							width: 80upx;
							height: 60upx;
							display: flex;
							justify-content: center;
							align-items: center;
							text-align: center;
							font-size: 26upx;
						}
					}

					.sub,
					.add {
						width: 60upx;
						height: 60upx;
						background-color: #f3f3f3;
						border-radius: 5upx;

						.icon {
							font-size: 30upx;
							width: 60upx;
							height: 60upx;
							display: flex;
							justify-content: center;
							align-items: center;

						}
					}
				}
			}

		}
	}

	// 弹层动画样式-->

	.poupcontent {
		width: 100vw;
		min-height: 100vh;
		margin: 0;
		box-sizing: border-box;
	}

	.input-row {
		width: 560upx;
		margin: 0 auto;
		padding: 52upx 0;
		box-sizing: border-box;
		font-size: 24px;
		text-align: center;
		flex-direction: row;

		.close-pay {
			position: fixed;
			right: 28upx;
			top: 12upx;
			font-size: 64upx;
			font-weight: 200;
		}

		.item {
			float: left;
			width: 70upx;
			height: 70upx;
			line-height: 70upx;
			border-radius: 10upx;
			margin: 0 10upx;
			border: 1px solid #C8C8C8;
			background: #fff;
			box-sizing: border-box;
		}

		.item-active {
			position: relative;
			border: 1px solid #f4000a;
			transform: scale(1.2);
			--webkit-transform: scale(1.2);
		}
	}


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
