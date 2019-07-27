<template>
	<view>
		<view class="cu-form-group">
			<view class="title"><text style="color: red;">*</text>姓名：</view>
			<input focus="true" placeholder="请输入身份证上对应的姓名" name="input"></input>
		</view>
		<view class="cu-form-group">
			<view class="title"><text style="color: red;">*</text>身份证号：</view>
			<input placeholder="请输入身份证号" name="input"></input>
		</view>
		<view @click="selectImg1" class="cu-form-group" style="justify-content: flex-start;">
			<view class="title">身份证照片 ( 正面 )</view>
			<view class="img">
				<image src="../../static/img/cardAuth/camera.png" mode="aspectFit" />
			</view>
		</view>
		<view class="grace-idcard-preview">
			<image :src="idCard1" @tap="previewImg1" mode="aspectFit" />
		</view>
		<view @click="selectImg2" class="cu-form-group" style="justify-content: flex-start;">
			<view class="title">身份证照片 ( 反面 )</view>
			<view class="img">
				<image src="../../static/img/cardAuth/camera.png" mode="aspectFit" />
			</view>
		</view>
		<view class=" grace-idcard-preview">
			<image :src="idCard2" @tap="previewImg2" mode="aspectFit" />
		</view>


		<view style="margin-top:38upx;">
			<button type="primary" @tap="uploadCards">上传</button>
		</view>
	</view>
</template>
<script>
	var _self;
	export default {
		data() {
			return {
				idCard1: '../../static/img/cardAuth/idcard1.png',
				idCard2: '../../static/img/cardAuth/idcard2.png'
			};
		},
		onLoad: function() {
			_self = this;
		},
		methods: {
			uploadImage(data) {
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
						console.log(res)
					},
					fail:(err)=>{
						console.log(err)
					}
				})
			},
			selectImg1: function() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success: function(res) {
						_self.idCard1 = res.tempFilePaths[0];
						_self.uploadImage(_self.idCard1)
					}
				})
			},
			selectImg2: function() {
				uni.chooseImage({
					count: 1,
					success: function(res) {
						_self.idCard2 = res.tempFilePaths[0];
						_self.uploadImage(_self.idCard2)
					}
				})
			},
			previewImg1: function() {
				uni.previewImage({
					urls: [_self.idCard1]
				});
			},
			previewImg2: function() {
				uni.previewImage({
					urls: [_self.idCard2]
				});
			},
			uploadCards: function() {
				if (this.idCard1 == '../../static/imgs/idcard1.png' || this.idCard2 == '../../static/imgs/idcard2.png') {
					uni.showToast({
						title: "请选择身份证照片",
						icon: "none"
					});
					return;
				}
				// 因底层限制一次上传一个
				uni.showLoading({
					title: "上传中"
				});
				// 上传正面
				var uploadTask1 = uni.uploadFile({
					url: 'https://unidemo.dcloud.net.cn/upload',
					filePath: _self.idCard1,
					fileType: 'image',
					name: 'data',
					success: function(uploadFileRes) {
						// 上传成功后返回服务器端保存的路径
						console.log(uploadFileRes.data);
						// 上传背面
						var uploadTask2 = uni.uploadFile({
							url: 'https://unidemo.dcloud.net.cn/upload',
							filePath: _self.idCard2,
							fileType: 'image',
							name: 'data',
							success: function(uploadFileRes) {
								// 上传成功后返回服务器端保存的路径
								console.log(uploadFileRes.data);
								// 至此2张照片上传完毕
								uni.hideLoading();
							}
						});
					}
				});
			}
		},
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
