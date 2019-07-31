<template>
	<view>
		<view class="content">
			<view class="row">
				<view class="nominal">
					昵称
				</view>
				<view class="input">
					<input focus="true" placeholder="请输入新昵称" type="text" v-model="nickname" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					性别
				</view>
				<view>
					<radio-group @change="radioChange" style="padding-top: 24upx;">
						<label class="set-radio">
							<radio name='gender' value="0" :checked="gender==0" />保密</label>
						<label class="set-radio">
							<radio name='gender' value="1" :checked="gender==1" />男</label>
						<label class="set-radio">
							<radio name='gender' value="2" :checked="gender==2" />女</label>
					</radio-group>
				</view>
			</view>
		</view>
		<view class="save" @tap="save">
			<view class="btn">
				保存修改
			</view>
		</view>
		<!-- 		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValue" @onCancel="onCancel"
		 @onConfirm="onConfirm"></mpvue-city-picker> -->
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
				gender: 0,
				nickname: '',
			};
		},
		methods: {
			radioChange(e) {
				this.gender = e.target.value;
			},
			onCancel(e) {
				console.log(e)
			},
			onConfirm(e) {
				this.region = e;
				this.cityPickerValue = e.value;
			},
			isDefaultChange(e) {
				this.isDefault = e.detail.value;
			},
			doReg() {
				uni.hideKeyboard()

				// 				if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber.trim()))) {
				// 					uni.showToast({
				// 						title: '请填写正确手机号码',
				// 						icon: "none"
				// 					});
				// 					return false;
				// 				}
				// 
				// if (this.code.length == 0) {
				// 	this.$api.msg(this.$i18n.write_code)
				// 	return false
				// }
				// if (this.code.trim().length != 4) {
				// 	uni.showToast({
				// 		title: '验证码不正确',
				// 		icon: "none"
				// 	});
				// 	return false;
				// }
				// 校验用户名
				if (!(/^[a-zA-Z0-9_-]{4,12}$/.test(this.nickname))) {
					this.$api.msg(this.$i18n.nickname_alert)
					return false;
				}
				// // 校验密码
				// if (!(/((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,12}$/.test(this.passwd.trim()))) {
				// 	this.$api.msg(this.$i18n.passwdError)
				// 	return false;
				// }
				// if (this.passwd != this.passwdConfirm) {
				// 	uni.showToast({
				// 		title: this.$i18n.passwdDifference,
				// 		icon: "none"
				// 	});
				// 	return false;
				// }
				//注册
				this.save()
			},

			save() {
				let updateUserInfoData = {
					"nickname": this.nickname,
					"gender": this.gender
				}
				let user_text=uni.getStorageInfoSync('user_text')
				user_text.nickname = this.nickname;
				user_text.gender = this.gender;
				this.$Request.post(this.$Urlconf.user.updateUserInfo, updateUserInfoData).then((res) => {
					if (res.code == 0) {
						uni.setStorage({ //将用户信息更新到storage
							key: 'user_text',
							data: user_text
						})
						uni.navigateBack();
					}
				})
			}
		},
		onLoad(e) {

			uni.getStorage({
				key: 'user_text',
				success: (e) => {
					console.log(e.data)
					this.nickname = e.data.nickname;
					this.gender = e.data.gender;
				}
			})

		},
		onBackPress() {

		},
		onUnload() {

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

			.set-radio {
				font-size: 30upx;
				margin-right: 20upx;
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
