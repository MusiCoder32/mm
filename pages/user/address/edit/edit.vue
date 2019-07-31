<template>
	<view>
		<view class="content">
			<view class="row">
				<view class="nominal">
					收件人
				</view>
				<view class="input">
					<input placeholder="请输入收件人姓名" type="text" v-model="contact_man" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					电话号码
				</view>
				<view class="input">
					<input placeholder="请输入收件人电话号码" type="text" v-model="mobile" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					所在地区
				</view>
				<view class="input" @tap="chooseCity">
					{{region.label}}
				</view>

			</view>
			<view class="row">
				<view class="nominal">
					详细地址
				</view>
				<view class="input">
					<textarea v-model="address" auto-height="true" placeholder="输入详细地址"></textarea>
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					设置默认地址
				</view>
				<view class="input switch">
					<switch color="#f06c7a" :checked="is_default" @change=isDefaultChange />
				</view>
			</view>
			<view class="row" v-if="editType=='edit'" @tap="del">
				<view class="del">
					删除收货地址
				</view>
			</view>
		</view>
		<view class="save" @tap="save">
			<view class="btn">
				保存地址
			</view>
		</view>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValue" @onCancel="onCancel"
		 @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				editType: '',
				id: '',
				contact_man: '',
				mobile: '',
				address: '',
				is_default: false,
				cityPickerValue: [0,0,0],//此处不能删为空，不然初次进入地址选择组件异常
				themeColor: '#007AFF',
				province: '',
				city: "",
				area: "",
				region: {
					label: "请点击选择地址",
					value: [],
					cityCode: ""
				}
			};
		},
		methods: {
			onCancel(e) {
				console.log(e)
			},
			chooseCity() {
				this.$refs.mpvueCityPicker.show()
			},
			onConfirm(e) {
				let cityArr = e.label.split('-');
				console.log(cityArr)
				this.province = cityArr[0];
				this.city = cityArr[1];
				this.area = cityArr[2];
				this.region = e;
				this.cityPickerValue = e.value;
				console.log(this.cityPickerValue)
			},
			isDefaultChange(e) {
				this.is_default = e.detail.value;
			},
			del() {
				uni.showModal({
					title: '删除提示',
					content: '你将删除这个收货地址',
					success: (res) => {
						if (res.confirm) {
							let delUserAddressData =  {
								id:this.id
							}
							this.$Request.post(this.$Urlconf.user.delUserAddress, delUserAddressData).then((res) => {
								if (res.code == 0) {
									uni.setStorage({
										key: 'delAddress',
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
				let addressData = {
					"contact_man": this.contact_man,
					"mobile": this.mobile,
					"province": this.province,
					"city": this.city,
					"area": this.area,
					"address": this.address,
					"is_default": this.is_default ? 1 : 0,
					"region": this.region,
					"cityPickerValue": JSON.stringify(this.cityPickerValue)
				}
				console.log(addressData.cityPickerValue)
				if (!addressData.contact_man) {
					uni.showToast({
						title: '请输入收件人姓名',
						icon: 'none'
					});
					return;
				}
				if (!addressData.mobile) {
					uni.showToast({
						title: '请输入收件人电话号码',
						icon: 'none'
					});
					return;
				}
				if (!addressData.address) {
					uni.showToast({
						title: '请输入收件人详细地址',
						icon: 'none'
					});
					return;
				}
				if (!this.cityPickerValue) {
					uni.showToast({
						title: '请选择收件地址',
						icon: 'none'
					});
					return;
				}
				if (this.editType == 'edit') {
					addressData.id = this.id
					this.$Request.post(this.$Urlconf.user.updateUserAddress, addressData).then((res) => {
						if (res.code == 0) {
							uni.setStorage({
								key: 'saveAddress',
								data: addressData,
							})
							uni.navigateBack({
								delta: 1
							})
						}
					})

				} else {
					//增加收货地址
					this.$Request.post(this.$Urlconf.user.addUserAddress, addressData).then((res) => {
						if (res.code == 0) {
							addressData.id = res.data;
							uni.setStorage({
								key: 'saveAddress',
								data: addressData,
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
					key: 'address',
					success: (e) => {
						this.id = e.data.id;
						console.log(this.id)
						this.contact_man = e.data.contact_man;
						this.mobile = e.data.mobile;
						this.address = e.data.address;
						this.is_default = Boolean(e.data.is_default);
						this.cityPickerValue = JSON.parse(e.data.cityPickerValue);
						console.log(this.cityPickerValue)
						this.region.label = `${e.data.province}-${e.data.city}-${e.data.area}`
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
