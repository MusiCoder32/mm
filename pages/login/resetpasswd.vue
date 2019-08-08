<template>
	<view>
		<view class="form re">
			<view class="username">
				<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
				<input placeholder="请输入手机号" v-model="phoneNumber" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="code">
				<input placeholder="请输入验证码" v-model="code" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="password">
				<input placeholder="请输入密码" v-model="passwd" password=true placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="password">
				<input placeholder="请确认密码" v-model="passwdConfirm" password=true placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>

			<view class="btn" @tap="doReset">重置密码</view>
		</view>

	</view>
</template>

<script>
	import md5 from "@/common/SDK/md5.min.js";
	export default {
		data() {
			return {
				phoneNumber: "",
				code: '',
				passwd: "",
				passwdConfirm: '',
				getCodeText: '获取验证码',
				getCodeBtnColor: "#ffffff",
				getCodeisWaiting: false
			}
		},
		onLoad() {

		},
		methods: {
			Timer() {},
			getCode() {
				uni.hideKeyboard()
				if (this.getCodeisWaiting) {
					return;
				}
				if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber.trim()))) {
					this.$api.msg(this.$i18n.write_phone_alert)
					return false;
				}
				this.$api.msg('验证码已发送')
				this.getCodeisWaiting = true;
				this.getCodeBtnColor = "rgba(255,255,255,0.5)"
				//请求验证码
				this.setTimer()
				this.$Request.post(this.$Urlconf.login.registerCode, {
					'mobile': this.phoneNumber.trim(),
					type: 2
				}).then(res => {
					if (res.code == 999) {
						this.getCodeisDisable = false;
						this.getCodeBtnColor = "rgba(255,255,255)"
					}
				}).catch((err) => {
					this.getCodeisDisable = false;
					this.getCodeBtnColor = "rgba(255,255,255)"
				})
				//示例用定时器模拟请求效果
				// setTimeout(()=>{
				// 	uni.showToast({title: '验证码已发送',icon:"none"});
				// 	//示例默认1234，生产中请删除这一句。
				// 	this.code=1234;
				// 	this.setTimer();
				// },1000)
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
			doReset() {
				uni.hideKeyboard()
				//模板示例部分验证规则
				if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))) {
					uni.showToast({
						title: '请填写正确手机号码',
						icon: "none"
					});
					return false;
				}
				//示例验证码，实际使用中应为请求服务器比对验证码是否正确。
				if (this.code.length == 0) {
					this.$api.msg(this.$i18n.write_code)
					return false
				}
				if (this.code.trim().length != 4) {
					uni.showToast({
						title: '验证码不正确',
						icon: "none"
					});
					return false;
				}
				// 校验密码
				if (!(/((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,12}$/.test(this.passwd.trim()))) {
					this.$api.msg(this.$i18n.passwdError)
					return false;
				}
				if (this.passwd != this.passwdConfirm) {
					uni.showToast({
						title: this.$i18n.passwdDifference,
						icon: "none"
					});
					return false;
				}
				uni.showLoading({
					title: '提交中...'
				})
				this.toRetrievePassword()

			},
			toRetrievePassword() {
				const retrievePasswordData = {
					code: this.code,
					mobile: this.phoneNumber,
					password: this.passwd,
					repeat_password: this.passwdConfirm,
				}
				this.$Request.post(this.$Urlconf.login.retrievePassword, retrievePasswordData).then(res => {
					if (res.code == 0) {
						uni.navigateBack({
							delta: 1
						});
					}
				})
			},
		}
	}
</script>

<style lang="scss">
	@import "../../static/css/login.scss";
</style>
