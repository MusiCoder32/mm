<template>
	<view>
		<view class="content">
			<view class="row">
				<view class="nominal">
					姓名
				</view>
				<view class="input">
					<input placeholder="请输入帐户所有人姓名" type="text" v-model="name" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					帐户类型
				</view>
				<view class="input">
					<radio-group @change="radioChange">
						<label class="radio">
							<radio value="1" name='pay' :checked="type==1" />支付宝</label>
						<label class="radio">
							<radio value="2" name='pay' :checked="type==2"/>微信</label>
						<label class="radio">
							<radio value="3" name='pay' :checked="type==3"/>银行卡</label>
					</radio-group>
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					帐号
				</view>
				<view class="input">
					<input placeholder="请输入帐号" type="text" v-model="account" />
				</view>
			</view>
			<view class="row" v-if="type==3">
				<view class="nominal">
					开户行
				</view>
				<view class="input">
					<input placeholder="请输入开户行" type="text" v-model="open_bank" />
				</view>
			</view>
			<view class="row" v-if="editType=='edit'" @tap="del">
				<view class="del">
					删除帐户
				</view>
			</view>
		</view>
		<view class="save" @tap="save">
			<view class="btn">
				保存账户
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				editType: '',
				name: '',
				type: 1,
				open_bank: '',
				account: '',
				is_default: false,
				id:0,
			};
		},
		methods: {
			radioChange(evt) {
				this.type = evt.target.value
			},
			onCancel(e) {
				console.log(e)
			},
			isDefaultChange(e) {
				this.is_default = e.detail.value;
			},
			del() {
				uni.showModal({
					title: '删除提示',
					content: '你将删除这个账户',
					success: (res) => {
						if (res.confirm) {
							let delCard = {
								id: this.id
							}
							this.$Request.post(this.$Urlconf.card.delBankCard, delCard).then((res) => {
								if (res.code == 0) {
									uni.setStorage({
										key: 'delCard',
										data: {
											id: this.id
										},
										success() {
											uni.navigateBack();
										}
									})
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});

			},
			save() {
				let cardData = {
					"account": this.account,
					"name": this.name,
					"type": this.type,
					"open_bank": this.open_bank
				}
				if (!cardData.name.trim()) {
					uni.showToast({
						title: '请输入帐户所有人姓名',
						icon: 'none'
					});
					return;
				}
				if (cardData.type == 3 && cardData.open_bank.trim() == '') {
					uni.showToast({
						title: '请输入开户行',
						icon: 'none'
					});
					return;
				}
				if (this.editType == 'edit') {
					cardData.id = this.id
					console.log(cardData)
					this.$Request.post(this.$Urlconf.card.updateBankCard, cardData).then((res) => {
						if (res.code == 0) {
							uni.setStorage({
								key: 'saveCard',
								data: cardData,
							})
							uni.navigateBack({
								delta: 1
							})
						}
					})

				} else {
					//增加银行卡
					console.log(cardData)
					this.$Request.post(this.$Urlconf.card.addBankCard, cardData).then((res) => {
						if (res.code == 0) {
							cardData.id = res.data;
							uni.setStorage({
								key: 'saveCard',
								data: cardData,
							})
							uni.navigateBack({
								delta: 1
							})
						}

					})

				}
			}
		},
		onLoad(e) {
			//获取传递过来的参数

			this.editType = e.type;
			if (e.type == 'edit') {
				uni.getStorage({
					key: 'card',
					success: (e) => {
						console.log(e.data);
						this.id=e.data.id;
						this.account=e.data.account;
						this.name=e.data.name;
						this.type=e.data.type;
						this.open_bank=e.data.open_bank;
					}
				})
			}

		},
		onBackPress() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();
				return true;
			}
		},
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
			}
		}
	};
</script>
<style lang="scss">
	.radio{
		margin-right:20upx;
	}
	.save {
		view {
			display: flex;
		}

		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120upx;
		display: flex;
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

	.content {
		display: flex;
		flex-wrap: wrap;

		view {
			display: flex;
		}

		.row {
			width: 94%;

			margin: 0 3%;
			border-top: solid 1upx #eee;

			.nominal {
				width: 30%;
				height: 120upx;
				font-weight: 200;
				font-size: 30upx;
				align-items: center;
			}

			.input {
				width: 70%;
				padding: 20upx 0;
				align-items: center;
				font-size: 30upx;

				&.switch {
					justify-content: flex-end;
				}

				.textarea {
					margin: 20upx 0;
					min-height: 120upx;
				}
			}

			.del {
				width: 100%;
				height: 100upx;
				justify-content: center;
				align-items: center;
				font-size: 36upx;
				color: #f06c7a;
				background-color: rgba(255, 0, 0, 0.05);
				border-bottom: solid 1upx #eee;
			}
		}
	}
</style>
