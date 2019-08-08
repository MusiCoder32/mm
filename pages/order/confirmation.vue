<template>
	<view>
		<!-- 收货地址 -->
		<view class="addr" @tap="selectAddress">
			<view class="icon">
				<image src="../../static/img/addricon.png" mode=""></image>
			</view>
			<view class="right" v-if="addressUsed.id">
				<view class="tel-name">
					<view class="name">
						{{addressUsed.contact_man}}
					</view>
					<view class="name">
						{{addressUsed.mobile}}
					</view>
				</view>
				<view class="addres">
					{{addressUsed.province}}{{addressUsed.city}}{{addressUsed.area}}
					{{addressUsed.address}}
				</view>
			</view>
			<view class="right" v-if="!addressUsed.id">
				<view class="tel-name no-select">
					<text style="color:#FF0000">*</text>请选择收货地址>
				</view>
			</view>
		</view>
		<!-- 购买商品列表 -->
		<view class="buy-list">
			<view class="row" v-for="(row,index) in buylist" :key="index">
				<view class="goods-info">
					<view class="img">
						<image :src="rootPath+row.imagePath"></image>
					</view>
					<view class="info">
						<view class="title">{{row.goods_name}}</view>
						<view class="spec">已选数量:{{row.goods_number}}</view>
						<view class="price-number">
							<view v-if="row.type==1" class="price">￥{{row.market_price*row.goods_number|toFixed}}</view>
							<view v-if="row.type==3" class="price">积分:{{row.integral_price*row.goods_number|toFixed}}</view>
							<view v-if="row.type==2" class="price" style="display: flex;justify-content: flex-e;flex-direction: row;">
								<text class="product-info-price">￥{{row.market_price*row.goods_number|toFixed }}</text>
								<text style="font-size: 30upx;padding-top:7upx">/</text>
								<image src="/static/img/icon/dou.png" style="width:40upx;height:40upx" mode=""></image>
								<text class="product-info-price" style="padding-top:7upx">{{ row.price*row.goods_number|toFixed }}</text>
							</view>
							<view v-if='rightNow' class="number">
								<view class="sub" @click="sub(index)">
									<view class="icon jian"></view>
								</view>
								<view class="input">
									<input type="number" maxlength="3" v-model="row.goods_number" @blur="resetNum" />
								</view>
								<view class="add" @click="add(index)">
									<view class="icon jia"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 提示-备注 -->
		<view class="order">
			<!-- 			<view class="row">
				<view class="left">
					积分 :
				</view>
				<view class="right">
					已扣除{{int}}积分抵扣{{deduction|toFixed}}元
				</view>
			</view> -->
			<view class="row">
				<view class="left">
					备注 :
				</view>
				<view class="right">
					<input placeholder="选填,备注内容" v-model="note" />
				</view>
			</view>
		</view>
		<!-- 明细 -->
		<view class="detail">
			<view class="row">
				<view class="nominal">
					商品金额
				</view>
				<view v-if="type==1" class="content">￥{{sumMarketPrice|toFixed}}</view>
				<view v-if="type==3" class="content">积分:{{sumIntegral|toFixed}}</view>
				<view v-if="type==2" class="content" style="display: flex;justify-content: flex-e;flex-direction: row;">
					<text class="product-info-price"> ￥{{sumMarketPrice|toFixed }}</text>
					<text style="font-size: 30upx;padding-top:7upx">/</text>
					<image src="/static/img/icon/dou.png" style="width:40upx;height:40upx" mode=""></image>
					<text class="product-info-price" style="padding-top:7upx">{{sumPrice|toFixed}}</text>
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					运费
				</view>
				<view class="content">
					￥+{{freight|toFixed}}
				</view>
			</view>
			<!-- 			<view class="row">
				<view class="nominal">
					积分抵扣
				</view>
				<view class="content">
					￥-{{deduction|toFixed}}
				</view>
			</view> -->
		</view>
		<view class="blck">

		</view>
		<view class="footer">
			<view class="settlement">
<!-- 				<view class="sum">合计:<view class="money">￥{{sumPrice|toFixed}}</view>
				</view> -->
				<view class="btn" @tap="toPay">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type: 2,
				rootPath: '',
				rightNow: true,
				number: 1,
				buylist: [{
					"car_id": 23,
					"goods_id": 33,
					"goods_name": "排骨",
					"market_price": "40.00",
					"price": "20.00",
					"integral_price": 0,
					"imagePath": "/upload/goods/5d43ddd9cf092.jpg",
					"goods_number": 1,
					"type": 2
				}, {
					"car_id": 24,
					"goods_id": 32,
					"goods_name": "猪尾",
					"market_price": "30.00",
					"price": "15.00",
					"integral_price": 0,
					"imagePath": "/upload/goods/5d43dda62007d.jpg",
					"goods_number": 1,
					"type": 2
				}, {
					"car_id": 22,
					"goods_id": 31,
					"goods_name": "五花肉",
					"market_price": "30.00",
					"price": "15.00",
					"integral_price": 0,
					"imagePath": "/upload/goods/5d43d20fd5fd8.jpg",
					"goods_number": 1,
					"type": 2
				}], //订单列表
				sumPrice: '0.00',
				sumMarketPrice: '0.00',
				sumIntegral: '0.00',
				freight: 0, //运费
				note: '', //备注
				int: 1200, //抵扣积分
				deduction: 0, //抵扣价格
				addressUsed: {
					id: '',
					"contact_man": '',
					"mobile": '',
					"province": '',
					"city": '',
					"area": '',
					"address": '',
					"is_default": '',
					"region": '',
					"cityPickerValue": ''
				}

			};
		},
		onLoad(e) {
			console.log(e.rightNow);
			if (e.rightNow == 0) {
				this.rightNow = false
			}
			this.rootPath = this.$RootHttp.APIHOST + this.$RootHttp.IMGPATH;
		},
		onShow() {
			//页面显示时，加载订单信息
			uni.getStorage({
				key: 'buylist',
				success: (ret) => {
					this.buylist = ret.data;
					console.log(JSON.stringify(this.buylist));
					this.type = ret.data[0].type;
					this.sum()
					// this.deduction = this.int / 100;
					// this.sumPrice = this.goodsPrice + this.freight;
				}
			});
			//获取默认地址
			uni.getStorage({
				key: 'addressList',
				success: (e) => {
					if (e.data.length >= 1) {
						this.addressUsed = e.data.filter((item) => {
							if (item.is_default == 1) {
								return item
							}
						});
						if (!this.addressUsed.id) {
							this.addressUsed = e.data[0]
						}
					} else {
						this.addressUsed = [];
						uni.showToast({
							title: '您还未保存任何收货地址，请先设置收货地址',
							icon: 'none',
							duration: 2000
						})
					}
				}
			})
		},
		onHide() {

		},
		onBackPress() {
			//页面后退时候，清除订单信息
			this.clearOrder();
		},
		filters: {
			toFixed: function(x) {
				return parseFloat(x).toFixed(2);
			}
		},
		methods: {
			//选择收货地址
			selectAddress() {
				uni.navigateTo({
					url: '../user/address/address?type=select'
				})
			},
			//防止用户输入数量不在正常范围
			resetNum() {
				if (this.buylist[0].goods_number <= 1) {
					this.buylist[0].goods_number = 1;
					uni.showToast({
						title: '请输入1-100之间的数值'
					})
				} else if (this.buylist[0].goods_number >= 100) {
					this.buylist[0].goods_number = 100;
					uni.showToast({
						title: '请输入1-100之间的数值'
					})
				}
				this.sum()
			},
			// 减少数量
			sub(index) {
				if (this.buylist[0].goods_number <= 1) {
					return;
				}
				this.buylist[0].goods_number--;
				this.sum()
			},
			// 增加数量
			add(index) {
				if (this.buylist[0].goods_number >= 100) {
					return;
				}
				this.buylist[0].goods_number++;
				this.sum()
			},
			sum() {
				this.sumPrice = 0;
				this.sumMarketPrice = 0;
				this.sumIntegral = 0;
				//合计
				let len = this.buylist.length;
				for (let i = 0; i < len; i++) {
					this.sumPrice = this.sumPrice + (this.buylist[i].goods_number * this.buylist[i].price);
					this.sumMarketPrice = this.sumMarketPrice + (this.buylist[i].goods_number * this.buylist[i].market_price);
					this.sumIntegral = this.sumIntegral + (this.buylist[i].goods_number * this.buylist[i].integral_price);
				}
			},
			clearOrder() {
				uni.removeStorage({
					key: 'buylist',
					success: (res) => {
						this.buylist = [];
						console.log('remove buylist success');
					}
				});
			},
			toPay() {
				//商品列表
				let paymentOrder = [];
				let cartData = []; //用于最后删除购物车
				let len = this.buylist.length;
				let addOrderData = {
					data: ''
				}
				let arrOrder = []
				for (let i = 0; i < len; i++) {
					let objOrder = {};
					objOrder.goodsID = this.buylist[i].goods_id
					objOrder.goodsNumber = this.buylist[i].goods_number
					if (!this.rightNow) {
						objOrder.carID = this.buylist[i].car_id
					}
					arrOrder.push(objOrder)
					paymentOrder.push(this.buylist[i]);
					cartData.push(this.buylist[i].car_id);
				}
				addOrderData.data = JSON.stringify(arrOrder)
				if (paymentOrder.length == 0) {
					uni.showToast({
						title: '订单信息有误，请重新购买',
						icon: 'none'
					});
					return;
				}
				this.$Request.post(this.$Urlconf.cart.addOrder, addOrderData).then((res) => {
					if (res.code == 0) {
						uni.redirectTo({
							url: "../pay/payment/payment?price=" + this.sumPrice +
								"&market_price=" + this.sumMarketPrice +
								"&integral_price=" + this.sumIntegral +
								"&goods_type=" + this.type +
								"&order_sn=" + res.data 
						})
						//来自购物车是为false
						if (!this.rightNow) {
							uni.getStorage({
								key: 'cartList',
								success: (e) => {
									let cartList = e.data
									let len = cartData.length
									if (cartList.length >= 1) {
										for (var i = 0; i < len; i++) {
											if (cartData.indexOf(cartList[i].goods_id) > -1) {
												cartList.splice(i, 1);
												i--;
											}
										}
										uni.setStorage({
											key: 'cartList',
											data: cartList
										})
									}
								},
								fail: () => {}
							})

						}
						uni.setStorage({
							key: 'paymentOrder',
							data: paymentOrder,
							success: () => {}
						})

					}
				})

			},
		}
	}
</script>

<style lang="scss">
	.addr {
		width: 86%;
		padding: 20upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;
		display: flex;

		.icon {
			width: 80upx;
			height: 80upx;
			display: flex;
			align-items: center;

			image {
				width: 60upx;
				height: 60upx;
			}
		}

		.tel-name {
			width: 100%;
			display: flex;
			font-size: 32upx;

			.tel {
				margin-left: 40upx;
			}
		}

		.no-select {
			height: 80upx;
			line-height: 80upx
		}

		.addres {
			width: 100%;
			font-size: 26upx;
			color: #999;
		}
	}

	.buy-list {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			margin: 30upx 0;

			.goods-info {
				width: 100%;
				display: flex;

				.img {
					width: 22vw;
					height: 22vw;
					border-radius: 10upx;
					overflow: hidden;
					flex-shrink: 0;
					margin-right: 10upx;

					image {
						width: 22vw;
						height: 22vw;
					}
				}

				.info {
					width: 100%;
					height: 22vw;
					overflow: hidden;
					display: flex;
					flex-wrap: wrap;
					position: relative;

					.title {
						width: 100%;
						font-size: 28upx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						// text-align: justify;
						overflow: hidden;
					}

					.spec {
						font-size: 22upx;
						background-color: #f3f3f3;
						color: #a7a7a7;
						height: 40upx;
						display: flex;
						align-items: center;
						padding: 0 10upx;
						border-radius: 20upx;
						margin-bottom: 20vw;
					}

					.price-number {
						position: absolute;
						width: 100%;
						bottom: 0upx;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						font-size: 28upx;
						height: 40upx;

						.price {
							color: #f06c7a;
						}

						.number {
							display: flex;
							justify-content: center;
							align-items: flex-end;

							.input {
								width: 70upx;
								height: 50upx;
								margin: 0 10upx;
								background-color: #d5d5d5;

								input {
									width: 70upx;
									height: 50upx;
									display: flex;
									justify-content: center;
									align-items: center;
									text-align: center;
									font-size: 26upx;
								}
							}

							.sub,
							.add {
								width: 50upx;
								height: 50upx;
								background-color: #d5d5d5;
								border-radius: 5upx;

								.icon {
									font-size: 22upx;
									width: 50upx;
									height: 50upx;
									display: flex;
									justify-content: center;
									align-items: center;

								}
							}
						}

					}
				}
			}
		}
	}

	.order {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			margin: 20upx 0;
			height: 40upx;
			display: flex;

			.left {
				font-size: 28upx;
			}

			.right {
				margin-left: 40upx;
				font-size: 26upx;
				color: #999;

				input {
					font-size: 26upx;
					color: #999;
				}
			}
		}
	}

	.blck {
		width: 100%;
		height: 100upx;
	}

	.footer {
		width: 92%;
		padding: 0 4%;
		background-color: #fbfbfb;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 0upx;
		z-index: 5;

		.settlement {
			width: 80%;
			display: flex;
			justify-content: flex-end;
			align-items: center;

			.sum {
				width: 50%;
				font-size: 28upx;
				margin-right: 10upx;
				display: flex;
				justify-content: flex-end;

				.money {
					font-weight: 600;
				}
			}

			.btn {
				padding: 0 30upx;
				height: 60upx;
				background-color: #f06c7a;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30upx;
				border-radius: 40upx;
			}
		}
	}

	.detail {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			height: 60upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.nominal {
				font-size: 28upx;
			}

			.content {
				font-size: 26upx;
				color: #f06c7a;
			}
		}
	}
</style>
