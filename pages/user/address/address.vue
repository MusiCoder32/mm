<template>
	<view>
		<view class="content">
			<view class="list">
				<view class="row" v-for="(row,index) in addressList" :key="index" @tap="select(row)">
					<view class="left">
						<view class="head">
							{{row.contact_man|nameHead}}
						</view>
					</view>
					<view class="center">
						<view class="name-tel">
							<view class="name">{{row.contact_man}}</view>
							<view class="tel">{{row.mobile}}</view>
							<view class="default" v-if="row.is_default==1">
								默认
							</view>
						</view>
						<view class="address">
							{{row.province}}{{row.city}}{{row.area}}{{row.address}}
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
				<view class="icon tianjia"></view>新增地址
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				isSelect: false,
				editType:'add',
				addressList: [{
					id: 1,
					contact_man: "",
					head: "",
					mobile: "",
					province: "",
					city: '',
					area: '',
					address: '',
					is_default: 0
				}]
			};
		},
		onShow() {
			uni.getStorage({
				key: 'addressList',
				success: (e) => {
					this.addressList = e.data;
				}
			})
			//匹配删除的地址，将其删除
			uni.getStorage({
				key: 'delAddress',
				success: (e) => {
					let len = this.addressList.length;
					if (e.data.hasOwnProperty('id')) {
						for (let i = 0; i < len; i++) {
							if (this.addressList[i].id == e.data.id) {
								this.addressList.splice(i, 1);
								break;
							}
						}
						uni.setStorage({
							key: 'addressList',
							data: this.addressList
						})
					}
					uni.removeStorage({
						key: 'delAddress'
					})
				}
			})
			uni.getStorage({
				key: 'saveAddress',
				success: (e) => {
					let len = this.addressList.length;
					//edit，则表明为修改
					if (this.editType == 'edit') {
						for (let i = 0; i < len; i++) {
							if (this.addressList[i].id == e.data.id) {
								this.addressList.splice(i, 1, e.data);
								uni.setStorage({
									key: 'addressList',
									data: this.addressList
								})
								break;
							}
						}
					} else {
						//add表明新增
						this.addressList.push(e.data);
						uni.setStorage({
							key: 'addressList',
							data: this.addressList
						})
					}
					uni.removeStorage({
						key: 'saveAddress'
					})
				}
			})
		},
		onLoad(e) {
			if (e.type == 'select') {
				this.isSelect = true;
			}
		},
		methods: {
			edit(row) {
				this.editType = 'edit'
				uni.setStorage({
					key: 'address',
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
					key: 'selectAddress',
					data: row,
					success() {
						uni.navigateBack();
					}
				})
			}
		},
		filters: {
			nameHead: (data) => {
				return data.trim()[0]
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
				width: 90upx;
				flex-shrink: 0;
				align-items: center;

				.head {
					width: 70upx;
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
					width: 80upx;
					height: 60upx;
					border-left: solid 1upx #aaa;
					font-size: 40upx;
					color: #777;
				}
			}
		}
	}
</style>
