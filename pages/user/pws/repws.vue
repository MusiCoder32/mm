<template>
	<view>
		<view class="content">
			<view class="row">
				<view class="nominal">
					手机号
				</view>
				<view class="input" style="color:#333333">
					<view>{{phoneNumber}}</view>
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					验证码
				</view>
				<view class="input">
					<input :focus="codeFocus" maxlength="6" placeholder="请输入4位验证" type="text" v-model="code" />
					<view class="code" @click="getCode">
						{{getCodeText}}
					</view>
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					新密码
				</view>
				<view class="input">
					<input :focus="newFocus" maxlength="6" placeholder="请输入6位新密码" type="text" v-model="newPassword" />
				</view>
			</view>
			<view class="row">
				<view class="nominal">
					确认密码
				</view>
				<view class="input">
					<input :focus="reFocus" maxlength="6" v-model="repeatPassword" auto-height="true" placeholder="请再次输入新密码"></input>
				</view>
			</view>
		</view>
		<view class="save" @click="doReg">
			<view class="btn">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				back: 1, //来自支付密码修改页面为2，还是来自其他页面
				getCodeisWaiting: false,
				getCodeText: '获取验证码',
				phoneNumber: '',
				code: '',
				newPassword: '',
				repeatPassword: '',
				phFocue: true,
				codeFocus: false,
				oldFocus: false,
				newFocus: false,
				reFocus: false,
			};
		},
		methods: {
			getCode() {
				uni.hideKeyboard()
				if (this.getCodeisWaiting) {
					return;
				}
				// if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber.trim()))) {
				// 	this.$api.msg(this.$i18n.write_phone_alert)
				// 	this.phFocue = true;
				// 	return false;
				// }
				this.$api.msg('验证码已发送')
				this.getCodeisWaiting = true;
				//请求验证码
				this.setTimer()
				this.$Request.post(this.$Urlconf.login.registerCode, {
					'mobile': this.phoneNumber.trim(),
					type: 2 //支付密码修改
				}).then(res => {
					if (res.code == 999) {
						this.getCodeisDisable = false;
					}
				}).catch((err) => {
					this.getCodeisDisable = false;
				})
			},
			setTimer() {
				let holdTime = 60;
				this.Timer = setInterval(() => {
					if (holdTime <= 0) {
						this.getCodeisWaiting = false;
						this.getCodeBtnColor = "#ffffff";
						this.getCodeText = "获取验证码"
						clearInterval(this.Timer);
						return;
					}
					this.getCodeText = "重新获取(" + holdTime + ")"
					holdTime--;

				}, 1000)
			},
			doReg() {
				let reg = /^\d{6}$/;
				if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber.trim()))) {
					uni.showToast({
						title: '请填写正确手机号码',
						icon: "none"
					});
					this.phFocue = true;
					return false;
				}
				//验证码
				if (!/^\d{4}$/.test(this.code.trim())) {
					uni.showToast({
						title: '验证码不正确',
						icon: "none"
					});
					this.codeFocus = true;
					return false;
				}
				if (!reg.test(this.newPassword.trim())) {
					uni.showToast({
						title: '请输入六位数字密码',
						icon: 'none'
					});
					this.newFocus = true
					return;
				}
				if (!reg.test(this.repeatPassword.trim())) {
					uni.showToast({
						title: '请确认密码',
						icon: 'none'
					});
					this.reFocus = true
					return;
				}
				if (this.newPassword != this.repeatPassword) {
					uni.showToast({
						title: this.$i18n.passwdDifference,
						icon: "none"
					});
					this.reFocus = true
					return;
				}
				this.save()
			},
			save() {
				let reData = {
					"code": this.code,
					"pay_password": this.newPassword,
					"repeat_pay_password": this.repeatPassword,
				}

				this.$Request.post(this.$Urlconf.pay.resetPyaPassword, reData).then((res) => {
					if (res.code == 0) {
						uni.navigateBack({
							delta: this.back
						})
					}
				})
			}
		},
		onLoad(e) {
			this.phoneNumber = uni.getStorageSync('user_text').mobile
			if (e.back == 2) {
				this.back = 2;
			} else if (e.back == 1) {
				this.back = 1;
				uni.setNavigationBarTitle({
					title: '设置支付密码'
				});
			}
		},
		onBackPress() {},
		onUnload() {}
	};
</script>
<style lang="scss">
	.save {
		view {
			display: flex;
		}

		position: fixed;
		top: 480upx;
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

			.code {
				font-size: 28upx;
				color: #eee;
				background-color: #f06c7a;
				border-radius: 10upx;
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
