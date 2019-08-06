<template>
	<view>
		<view v-if="showHeader" class="status" :style="{position:headerPosition,top:statusTop}"></view>
		<view v-if="showHeader" class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="title">购物车</view>
		</view>
		<!-- 占位 -->
		<view v-if="showHeader" class="place"></view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="tis" v-if="goodsList.length==0">购物车是空的哦~</view>
			<view class="row" v-for="(row,index) in goodsList" :key="index">
				<!-- 删除按钮 -->
				<view class="menu" @tap.stop="deleteGoods(row.car_id)">
					<view class="icon shanchu"></view>
				</view>
				<!-- 商品 -->
				<view class="carrier" :class="[theIndex==index?'open':oldIndex==index?'close':'']" @touchstart="touchStart(index,$event)"
				 @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">
					<!-- checkbox -->
					<view class="checkbox-box" @tap="selected(index)">
						<view class="checkbox">
							<view :class="[row.selected?'on':'']"></view>
						</view>
					</view>
					<!-- 商品信息 -->
					<view class="goods-info">
						<view class="img" @tap="toGoods(row)">
							<image :src="rootPath+row.imagePath"></image>
						</view>
						<view class="info">
							<view class="title">{{row.goods_name}}({{row.type|typeTitle}})</view>
							<!-- <view class="spec">{{row.spec}}</view> -->
							<view class="price-number">
								<view v-if="row.type==1" class="price">{{'￥'+row.market_price}}</view>
								<view v-if="row.type==3" class="price">积分:{{row.integral_price}}</view>
								<view v-if="row.type==2" class="price" style="display: flex;justify-content: flex-e;flex-direction: row;">
									<text class="product-info-price">{{ '￥'+row.market_price }}</text>
									<text style="font-size: 30upx;padding-top:7upx">/</text>
									<image src="/static/img/icon/dou.png" style="width:40upx;height:40upx" mode=""></image>
									<text class="product-info-price" style="padding-top:7upx">{{ row.price }}</text>
								</view>
								<view class="number">
									<view class="sub" @tap.stop="sub(index)">
										<view class="icon jian"></view>
									</view>
									<view class="input" @tap.stop="discard">
										<input type="number" v-model="row.goods_number" @blur="resetNum($event,index)" />
									</view>
									<view class="add" @tap.stop="add(index)">
										<view class="icon jia"></view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 脚部菜单 -->
		<view class="footer" :style="{bottom:footerbottom}">
			<view class="checkbox-box" @tap="allSelect">
				<view class="checkbox">
					<view :class="[isAllselected?'on':'']"></view>
				</view>
				<view class="text">全选</view>
			</view>
			<view class="delBtn" @tap="deleteList" v-if="selectedList.length>0">删除</view>
			<view class="settlement">
				<view class="btn" @tap="toConfirmation">结算({{selectedList.length}})</view>
				<view class="sum">
					合计:
					<view v-if="type==1" class="money">￥{{sumMarketPrice}}</view>
					<view v-if="type==3" class="money">{{sumIntegral}}积分</view>
					<view v-if="type==2" class="money" style="display: flex;justify-content: flex-e;flex-direction: row;">
						<text class="product-info-price">￥{{sumMarketPrice }}</text>
						<text style="font-size: 30upx;padding-top:7upx">/</text>
						<image src="/static/img/icon/dou.png" style="width:40upx;height:40upx" mode=""></image>
						<text class="product-info-price" style="padding-top:7upx">{{sumPrice}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _self = this;
	export default {
		data() {
			return {
				type: 2, //已选择商品类型
				rootPath: '',
				sumPrice: '0.00',
				sumMarketPrice: '0.00',
				sumIntegral: '0.00',
				headerPosition: "fixed",
				headerTop: null,
				statusTop: null,
				showHeader: true,
				selectedList: [],
				isAllselected: false, //该全选按钮只会部勾选某一类型的商品
				goodsList: [{
					"car_id": 9,
					"goods_id": 34,
					"goods_name": "大礼包",
					"market_price": "1588.00",
					"price": "0.00",
					"integral_price": 0,
					"imagePath": "/upload/goods/5d43edec6b570.png",
					"goods_number": 1,
					"type": 1
				}, {
					"car_id": 8,
					"goods_id": 33,
					"goods_name": "排骨",
					"market_price": "40.00",
					"price": "20.00",
					"integral_price": 0,
					"imagePath": "/upload/goods/5d43ddd9cf092.jpg",
					"goods_number": 1,
					"type": 2
				}, {
					"car_id": 7,
					"goods_id": 31,
					"goods_name": "五花肉",
					"market_price": "30.00",
					"price": "15.00",
					"integral_price": 0,
					"imagePath": "/upload/goods/5d43d20fd5fd8.jpg",
					"goods_number": 1,
					"type": 2
				}],
				//控制滑动效果
				theIndex: null,
				oldIndex: null,
				isStop: false
			}
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
			this.headerTop = e.scrollTop >= 0 ? null : 0;
			this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onShow() {
			uni.getStorage({
				key: 'cartList',
				success: (e) => {
					this.goodsList = e.data;
				},
				fail: () => {
				}
			})
			//匹配购物车原有数据，若购物车中没有该商品，则增加到购物车数据中
			uni.getStorage({
				key: 'saveCart',
				success: (e) => {
					let saveData = e.data
					console.log(e.data);
					let ownCart = true;
					if (e.data.length >= 1) {
						if (this.goodsList.length > 0) {
							let len = saveData.length;
							for (let i = 0; i < len; i++) {
								this.goodsList.forEach((item) => {
									if (item.goods_id == saveData[i].goods_id) {
										saveData.splice(i, 1)
									}
								})
							}
						}
						this.goodsList.push(...e.data);
						uni.setStorage({
							key: 'cartList',
							data: this.goodsList
						})
					}
					uni.removeStorage({
						key: 'saveCart'
					})
				}
			})

		},
		onLoad() {
			this.rootPath = this.$RootHttp.APIHOST + this.$RootHttp.IMGPATH
			//兼容H5下结算条位置
			// #ifdef H5
			this.footerbottom = document.getElementsByTagName('uni-tabbar')[0].offsetHeight + 'px';
			// #endif
			// #ifdef APP-PLUS
			this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
		},
		onHide(){
			this.isAllselected = false;
			this.selectedList=[];
			this.sumIntegral='0.00'
			this.sumMarketPrice='0.00'
			this.sumPrice='0.00'
		},
		methods: {
			//控制左滑删除效果-begin
			touchStart(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				this.oldIndex = this.theIndex;
				this.theIndex = null;
				//初始坐标
				this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
			},
			touchMove(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				let moveX = event.touches[0].pageX - this.initXY[0];
				let moveY = event.touches[0].pageY - this.initXY[1];

				if (this.isStop || Math.abs(moveX) < 5) {
					return;
				}
				if (Math.abs(moveY) > Math.abs(moveX)) {
					// 竖向滑动-不触发左滑效果
					this.isStop = true;
					return;
				}

				if (moveX < 0) {
					this.theIndex = index;
					this.isStop = true;
				} else if (moveX > 0) {
					if (this.theIndex != null && this.oldIndex == this.theIndex) {
						this.oldIndex = index;
						this.theIndex = null;
						this.isStop = true;
						setTimeout(() => {
							this.oldIndex = null;
						}, 150)
					}
				}
			},
			touchEnd(index, $event) {
				//结束禁止触发效果
				this.isStop = false;
			},
			//控制左滑删除效果-end


			//商品跳转
			toGoods(e) {
				uni.navigateTo({
					url: '../../goods/goods?goods_id=' + e.goods_id
				});
			},
			//跳转确认订单页面
			toConfirmation() {
				let tmpList = [];
				let len = this.goodsList.length;
				for (let i = 0; i < len; i++) {
					if (this.goodsList[i].selected) {
						tmpList.push(this.goodsList[i]);
					}
				}
				if (tmpList.length < 1) {
					uni.showToast({
						title: '请选择商品结算',
						icon: 'none'
					});
					return;
				}
				uni.setStorage({
					key: 'buylist',
					data: tmpList,
					success: () => {
						uni.navigateTo({
							url: '../../order/confirmation?rightNow=0'
						})
					}
				})
			},
			judgeAllSelected() {
				// 当某一种类型被全选时,全选按钮为true
				let len = this.goodsList.length;
				let arr = [];
				for (let i = 0; i < len; i++) {
					if (this.goodsList[i].type == this.type) {
						arr.push(this.goodsList[i].car_id);
					}
				}
				this.isAllselected = ((arr.length == this.selectedList.length) && this.goodsList.length > 0) ? true : false
			},
			//删除商品
			deleteGoods(id) {
				let cartUpdateData = {
					carID: id,
					goodsNumber: 0
				}
				this.$Request.post(this.$Urlconf.cart.cartUpdate, cartUpdateData).then((res) => {
					if (res.code == 0) {
						let len = this.goodsList.length;
						for (let i = 0; i < len; i++) {
							if (id == this.goodsList[i].car_id) {
								this.goodsList.splice(i, 1);
								break;
							}
						}
						if (this.selectedList.indexOf(id) > -1) {
							this.selectedList.splice(this.selectedList.indexOf(id), 1);
						}
						//将新的购物车数据保存到缓存
						uni.setStorageSync('cartList', this.goodsList)
						this.judgeAllSelected()
						this.sum();
						this.oldIndex = null;
						this.theIndex = null;
					}
				})

			},
			// 删除商品s
			deleteList() {
				let len = this.selectedList.length;
				while (this.selectedList.length > 0) {
					this.deleteGoods(this.selectedList[0]);
				}
				this.selectedList = [];
				// this.isAllselected = this.selectedList.length == this.goodsList.length && this.goodsList.length > 0;
				this.judgeAllSelected()
				this.sum();
			},
			// 选中商品
			selected(index) {
				//如果已选择列表中无数据||新选择数据与已选择数据的类型不一致
				if (!this.selectedList[0]) {
					this.type = this.goodsList[index].type
					this.goodsList[index].selected = true
					this.selectedList.push(this.goodsList[index].car_id)
					this.sum();
				} else if (this.goodsList[index].type == this.type) {
					this.goodsList[index].selected = this.goodsList[index].selected ? false : true;
					let i = this.selectedList.indexOf(this.goodsList[index].car_id);
					i > -1 ? this.selectedList.splice(i, 1) : this.selectedList.push(this.goodsList[index].car_id);
					this.isAllselected = this.selectedList.length == this.goodsList.length;
					this.sum();
				} else {
					uni.showToast({
						title: '请选择同类型商品',
						icon: 'none'
					})
					return
				}
				// 当某一种类型被全选时,全选按钮为true
				this.judgeAllSelected()
			},
			//全选
			allSelect() {
				let len = this.goodsList.length;
				let arr = [];
				for (let i = 0; i < len; i++) {
					if (this.goodsList[i].type == this.type) {
						this.goodsList[i].selected = this.isAllselected ? false : true;
						arr.push(this.goodsList[i].car_id);
					}
				}
				this.selectedList = this.isAllselected ? [] : arr;
				this.isAllselected = this.isAllselected || this.goodsList.length == 0 ? false : true;
				this.sum();
			},
			//防止用户输入数量不在正常范围
			resetNum(e, index) {
				if (this.goodsList[index].goods_number <= 1) {
					this.goodsList[index].goods_number = 1;
					uni.showToast({
						title: '请输入1-100之间的数值'
					})
				} else if (this.goodsList[index].goods_number >= 100) {
					this.goodsList[index].goods_number = 100;
					uni.showToast({
						title: '请输入1-100之间的数值'
					})
				}
				this.sum()
			},
			// 减少数量
			sub(index) {
				if (this.goodsList[index].goods_number <= 1) {
					return;
				}
				this.goodsList[index].goods_number--;
				this.sum()
			},
			// 增加数量
			add(index) {
				if (this.goodsList[index].goods_number >= 100) {
					return;
				}
				this.goodsList[index].goods_number++;
				this.sum()
			},
			// 合计
			sum() {
				this.sumMarketPrice = 0;
				this.sumPrice = 0;
				this.sumIntegral = 0;
				let len = this.goodsList.length;
				for (let i = 0; i < len; i++) {
					if (this.goodsList[i].selected) {
						this.sumMarketPrice += this.goodsList[i].goods_number * this.goodsList[i].market_price;
						this.sumPrice += this.goodsList[i].goods_number * this.goodsList[i].price;
						this.sumIntegral += this.goodsList[i].goods_number * this.goodsList[i].integral_price;
					}
				}
				this.sumMarketPrice = this.sumMarketPrice.toFixed(2);
				this.sumPrice = this.sumPrice.toFixed(2);
			},
			discard() {
				//丢弃
			}

		},
		filters: {
			typeTitle: function(value) {
				if (value == 1) {
					return '特殊商品'
				}
				if (value == 2) {
					return '普通商品'
				}
				return '积分商品'
			}
		}
	}
</script>
<style lang="scss">
	page {
		position: relative;
		background-color: #fff;
	}

	.checkbox-box {
		display: flex;
		align-items: center;

		.checkbox {
			width: 35upx;
			height: 35upx;
			border-radius: 100%;
			border: solid 2upx #f06c7a;
			display: flex;
			justify-content: center;
			align-items: center;

			.on {
				width: 25upx;
				height: 25upx;
				border-radius: 100%;
				background-color: #f06c7a;
			}
		}

		.text {
			font-size: 28upx;
			margin-left: 10upx;
		}
	}

	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #fff;
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
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #fff;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);

		/*  #endif  */
		.title {
			font-size: 36upx;
		}

	}

	.place {

		background-color: #ffffff;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}

	.goods-list {
		width: 100%;
		padding: 20upx 0 120upx 0;

		.tis {
			width: 100%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
		}

		.row {
			width: calc(92%);
			height: calc(22vw + 40upx);
			margin: 20upx auto;

			border-radius: 15upx;
			box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
			display: flex;
			align-items: center;
			position: relative;
			overflow: hidden;
			z-index: 4;
			border: 0;

			.menu {
				.icon {
					color: #fff;
					// font-size: 25upx;
				}

				position: absolute;
				width: 30%;
				height: 100%;
				right: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: red;
				color: #fff;
				z-index: 2;
			}

			.carrier {
				@keyframes showMenu {
					0% {
						transform: translateX(0);
					}

					100% {
						transform: translateX(-30%);
					}
				}

				@keyframes closeMenu {
					0% {
						transform: translateX(-30%);
					}

					100% {
						transform: translateX(0);
					}
				}

				&.open {
					animation: showMenu 0.25s linear both;
				}

				&.close {
					animation: closeMenu 0.15s linear both;
				}

				background-color: #fff;

				.checkbox-box {
					padding-left: 20upx;
					flex-shrink: 0;
					height: 22vw;
					margin-right: 20upx;
				}

				position: absolute;
				width: 100%;
				padding: 0 0;
				height: 100%;
				z-index: 3;
				display: flex;
				align-items: center;

				.goods-info {
					width: 100%;
					display: flex;
					padding-right: 20upx;

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
							font-size: 20upx;
							background-color: #f3f3f3;
							color: #a7a7a7;
							height: 30upx;
							display: flex;
							align-items: center;
							padding: 0 10upx;
							border-radius: 15upx;
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
							height: 60upx;

							.price {}

							.number {
								display: flex;
								justify-content: center;
								align-items: flex-end;

								.input {
									width: 70upx;
									height: 50upx;
									margin: 0 10upx;
									background-color: #f3f3f3;

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
									background-color: #f3f3f3;
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
	}

	.footer {
		width: 92%;
		padding: 0 4%;
		background-color: #fbfbfb;
		height: 100upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 132upx;
		z-index: 5;

		.delBtn {
			border: solid 1upx #f06c7a;
			color: #f06c7a;
			padding: 0 30upx;
			height: 50upx;
			border-radius: 30upx;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.settlement {
			width: 65%;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: flex-end;

			.sum {
				width: 100%;
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
				margin: 20upx 0;
				height: 50upx;
				background-color: #f06c7a;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 30upx;
			}
		}
	}
</style>
