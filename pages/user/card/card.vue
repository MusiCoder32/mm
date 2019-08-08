<template>
	<view>
		<view class="content">
			<view class="list">
				<view class="row" v-for="(row,index) in cardList" :key="index" @tap="select(row)">
					<view class="left">
						<view class="head">
							{{row.open_bank | nameHead}}
						</view>
					</view>
					<view class="center">
						<view class="name-tel">
							<view class="name">{{row.name}}</view>
							<view class="tel">{{row.type|accountType}}</view>
							<view class="default" v-if="row.is_default==1">
								默认
							</view>
						</view>
						<view class="address">
							{{row.account}}
						</view>
					</view>
					<view class="right">
						<view class="icon bianji" @tap.stop="edit(row)">
							编辑
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="add">
			<view class="btn" @tap="add">
				<view class="icon tianjia"></view>添加帐户
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				isSelect: false,
				editType: 'add',
				cardList: [{
					"id": 2, //银行卡id
					"uid": 4105, //用户id
					"account": "5102080192398712", //账号
					"name": "尤畅", //收款人姓名
					"open_bank": "中国银行", //开户银行
					"type": 3, //收款卡号类型 1支付宝 2微信 3银行卡
					"created_at": "1565077280", //添加时间
					"updated_at": "1565077280",
					"state": 0
				}]
			};
		},
		onShow() {
			uni.getStorage({
				key: 'cardList',
				success: (e) => {
					this.cardList = e.data;
				}
			})
			//匹配删除的地址，将其删除
			uni.getStorage({
				key: 'delCard',
				success: (e) => {
					let len = this.cardList.length;
					if (e.data.hasOwnProperty('id')) {
						for (let i = 0; i < len; i++) {
							if (this.cardList[i].id == e.data.id) {
								this.cardList.splice(i, 1);
								break;
							}
						}
						uni.setStorage({
							key: 'cardList',
							data: this.cardList
						})
					}
					uni.removeStorage({
						key: 'delCard'
					})
				}
			})
			uni.getStorage({
				key: 'saveCard',
				success: (e) => {
					let len = this.cardList.length;
					//edit，则表明为修改
					if (this.editType == 'edit') {
						for (let i = 0; i < len; i++) {
							if (this.cardList[i].id == e.data.id) {
								this.cardList.splice(i, 1, e.data);
								uni.setStorage({
									key: 'cardList',
									data: this.cardList
								})
								break;
							}
						}
					} else {
						//add表明新增
						this.cardList.push(e.data);
						uni.setStorage({
							key: 'cardList',
							data: this.cardList
						})
					}
					uni.removeStorage({
						key: 'saveCard'
					})
				}
			})

		},
		onLoad(e) {
			this.$Request.post(this.$Urlconf.card.getBandCardList).then((res) => {
				if (res.code == 0) {
					this.cardList = res.data;
					uni.setStorage({
						'cardList': res.data
					})
				}
			})
		},
		methods: {
			edit(row) {
				this.editType = 'edit'
				uni.setStorage({
					key: 'card',
					data: row,
					success() {
						uni.navigateTo({
							url: "edit/edit?type=edit"
						})
					}
				});

			},
			add() {
				this.editType = 'add'
				uni.navigateTo({
					url: "edit/edit?type=add"
				})
			},
			select(row) {
				//是否需要返回地址(从订单确认页跳过来选收货地址)
				if (!this.isSelect) {
					return;
				}
				uni.setStorage({
					key: 'selectCard',
					data: row,
					success() {
						uni.navigateBack();
					}
				})
			}
		},
		filters: {
			nameHead: (data) => {
				if (data && data.indexOf('银行') > -1) {
					return data
				} else {
					return '其他支付'
				}
			},
			accountType: (type) => {
				if (type == 1) {
					return '支付宝'
				} else if (type == 2) {
					return '微信'
				} else if (type == 3) {
					return '银行卡'
				}
			}
		}
	}
</script>

<style lang="scss">
	view {
		display: flex;
	}

	.icon {
		// &.bianji {
		// 	&:before{content:"\e61b";}
		// }
		// &.tianjia {
		// 	&:before{content:"\e81a";}
		// }
	}

	.add {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
		justify-content: center;
		align-items: center;

		.btn {
			box-shadow: 0upx 5upx 10upx rgba(0, 0, 0, 0.4);
			width: 70%;
			height: 80upx;
			border-radius: 80upx;
			background-color: #f06c7a;
			color: #fff;
			justify-content: center;
			align-items: center;

			.icon {
				height: 80upx;
				color: #fff;
				font-size: 30upx;
				justify-content: center;
				align-items: center;
			}

			font-size: 30upx;
		}
	}

	.list {
		flex-wrap: wrap;

		.row {
			width: 96%;
			padding: 20upx 2%;

			.left {
				width: 180upx;
				flex-shrink: 0;
				align-items: center;

				.head {
					width: 160upx;
					height: 70upx;
					background: linear-gradient(to right, #ccc, #aaa);
					color: #fff;
					justify-content: center;
					align-items: center;
					border-radius: 60upx;
					font-size: 35upx;
				}
			}

			.center {
				width: 100%;
				flex-wrap: wrap;

				.name-tel {
					width: 100%;
					align-items: baseline;

					.name {
						font-size: 34upx;
					}

					.tel {
						margin-left: 30upx;
						font-size: 24upx;
						color: #777;
					}

					.default {

						font-size: 22upx;

						background-color: #f06c7a;
						color: #fff;
						padding: 0 18upx;
						border-radius: 24upx;
						margin-left: 20upx;
					}
				}

				.address {
					width: 100%;
					font-size: 24upx;
					align-items: baseline;
					color: #777;
				}
			}

			.right {
				flex-shrink: 0;
				align-items: center;
				margin-left: 20upx;

				.icon {
					justify-content: center;
					align-items: center;
					width: 160upx;
					height: 60upx;
					border-left: solid 1upx #aaa;
					font-size: 40upx;
					color: #777;
				}
			}
		}
	}
</style>
