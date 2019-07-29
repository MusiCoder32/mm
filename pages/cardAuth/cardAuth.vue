<template>
	<view>
		<view v-if="authResult.state === 0">人工审核中，请耐心等待。如有疑问，请联系028-88888</view>
		<view v-if="authResult.state===1">您已认证</view>
		<view v-if="authResult.state===2">失败原因:{{authResult.not_pass_reason}}\n如有疑问，请联系028-88888</view>

		<view v-if="authResult.state == '' || authResult.state == undefined">
			<view class="cu-form-group">
				<view class="title"><text style="color: red;">*</text>姓名：</view>
				<input focus="true" placeholder="请输入真实姓名" name="input" v-model="cardName"></input>
			</view>
			<view class="cu-form-group">
				<view class="title"><text style="color: red;">*</text>身份证号：</view>
				<input placeholder="请输入身份证号" name="input" v-model="cardNumber"></input>
			</view>
			<view @click="selectImg1" class="cu-form-group" style="justify-content: flex-start;">
				<view class="title">身份证照片 ( 正面 )</view>
				<view class="img">
					<image src="../../static/img/cardAuth/camera.png" mode="aspectFit" />
				</view>
			</view>
			<view class="grace-idcard-preview">
				<image :src="pathCard1" @tap="previewImg1" mode="aspectFit" />
			</view>
			<view @click="selectImg2" class="cu-form-group" style="justify-content: flex-start;">
				<view class="title">身份证照片 ( 反面 )</view>
				<view class="img">
					<image src="../../static/img/cardAuth/camera.png" mode="aspectFit" />
				</view>
			</view>
			<view class=" grace-idcard-preview">
				<image :src="pathCard2" @tap="previewImg2" mode="aspectFit" />
			</view>

			<view style="margin-top:38upx;">
				<button type="primary" @tap="doReg">上传</button>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		mapState
	}
	from 'vuex'
	var _self;
	export default {
		data() {
			return {
				idCard1: 0,
				idCard2: 0,
				pathCard1: '../../static/img/cardAuth/idcard1.png',
				pathCard2: '../../static/img/cardAuth/idcard2.png',
				cardName: '',
				cardNumber: ''
			};
		},
		onLoad: function() {
			_self = this;
			console.log(this.authResult.state)
		},
		methods: {
			uploadImage(data, id) {
				uni.uploadFile({
					url: 'http://t249d62588.zicp.vip/api/uploadImage',
					filePath: data,
					name: 'file',
					header: {
						token: uni.getStorageSync('token')
					},
					formData: {
						file: data,
						type: 1
					},
					success: (res) => {
						data = JSON.parse(res.data);
						if (data.code == 0) {
							if (id == 1) {
								this.idCard1 = data.data;
							} else if (id == 2) {
								this.idCard2 = data.data;
							}
						}
						console.log(res)
						console.log(this.idCard1, this.idCard2)
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			selectImg1: function() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success: function(res) {
						_self.pathCard1 = res.tempFilePaths[0];
						_self.uploadImage(_self.pathCard1, 1)
					}
				})
			},
			selectImg2: function() {
				uni.chooseImage({
					count: 1,
					success: function(res) {
						_self.pathCard2 = res.tempFilePaths[0];
						_self.uploadImage(_self.pathCard2, 2)
					}
				})
			},
			previewImg1: function() {
				uni.previewImage({
					urls: [_self.pathCard1]
				});
			},
			previewImg2: function() {
				uni.previewImage({
					urls: [_self.pathCard2]
				});
			},
			doReg() {
				let regName = /^[\u4e00-\u9fa5]{2,4}$/;
				if (!regName.test(this.cardName.trim())) {
					this.$api.msg("真实姓名填写有误");
					return false;
				}
				let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
				if (reg.test(this.cardNumber) === false) {
					this.$api.msg("身份证号码输入不合法");
					return false;
				}
				if (this.pathCard1 == '../../static/img/cardAuth/idcard1.png') {
					uni.showToast({
						title: "请选择身份证正面照片",
						icon: "none"
					});
					return false;
				}
				if (this.pathCard2 == '../../static/img/cardAuth/idcard1.png') {
					uni.showToast({
						title: "请选择身份证背面照片",
						icon: "none"
					});
					return false;
				}
				this.uploadCards()
			},
			uploadCards: function() {
				uni.showLoading({
					title: "资料提交中"
				});
				// 提交认证
				const addUserAuthenticationData = {
					real_name: this.cardName,
					card_id: this.cardNumber,
					imageA: this.idCard1,
					imageB: this.idCard2
				}
				this.$Request.post(this.$Urlconf.cardAuth.addUserAuthentication, addUserAuthenticationData).then((res) => {
					if (res.code != 0) {
						uni.navigateBack({
							delta: 1
						});
					}
					this.$api.msg(res.msg)
				}).catch((err) => {
					console.log(err)
					this.$api.msg(this.$i18n.system_exception)
				}).finally(() => {
					uni.hideLoading();
				})
			}
		},
		computed: {
			...mapState(['authResult'])
		}
	}
</script>
<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}

	.grace-idcard-text {
		line-height: 2em;
		margin-top: 30upx;
	}

	.cu-form-group .img {
		width: 40upx;
		height: 40upx;
		margin-top: -52upx;

	}

	.cu-form-group .img image {
		width: 100upx;
		height: 100upx;
	}

	.cu-form-group .text {
		width: 100%;
		margin-top: 10upx;
		text-align: center;
		line-height: 2em;
	}

	.grace-idcard-preview {
		display: flex;
		justify-content: center;
		background: #FFFFFF;
		width: 100%;
		height: 360upx;
		margin: 0 auto 3upx;
	}

	.grace-idcard-preview image {
		width: 100%;
		height: 90%;
	}
</style>
