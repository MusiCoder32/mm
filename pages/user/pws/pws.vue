<template>
	<view>
		<view class="content">
			<view class="row">
				<view class="nominal">
					旧密码
				</view>
				<view class="input">
					<input :focus="oldFocus" maxlength="6" placeholder="请输入6位旧密码" type="text" v-model="oldPassword" />
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
			<view class="row">
				<view class="nominal">
					<navigator style="color: lightsteelblue;" hover-class="navigator-hover" open-type='navigate' url="/pages/user/pws/repws?back=2">
						重置支付密码>
					</navigator>
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
				oldPassword: '',
				newPassword: '',
				repeatPassword: '',
				oldFocus:true,
				newFocus:false,
				reFocus:false,
			};
		},
		methods: {
			doReg() {
				let reg = /^\d{6}$/;
				if (!this.oldPassword.trim() && !reg.test(this.oldPassword.trim())) {
					uni.showToast({
						title: '请输入6位数字密码',
						icon: 'none'
					});
					this.oldFocus = true
					return;
				}
				if (!this.newPassword.trim() && !reg.test(this.newPassword.trim())) {
					uni.showToast({
						title: '请输入六位数字密码',
						icon: 'none'
					});
					this.newFocus = true
					return;
				}
				if (!this.repeatPassword.trim() && !reg.test(this.repeatPassword.trim())) {
					uni.showToast({
						title: '请输入六位数字密码',
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
				let pwsData = {
					"old_pay_password": this.oldPassword,
					"pay_password": this.newPassword,
					"repeat_pay_password": this.repeatPassword,
				}

				this.$Request.post(this.$Urlconf.pay.changePayPassword, pwsData).then((res) => {
					if (res.code == 0) {
						uni.navigateBack({
							delta:1
						})
					}
				})
			}
		},
		onLoad(e) {},
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
