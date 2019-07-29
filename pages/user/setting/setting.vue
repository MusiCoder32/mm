<template>
	<view>
		<view class="content">
			<view class="list">
				<view class="row" @click="editPortrait">
					<view class="title">头像</view>
					<view class="right">
						<view class="left">
							<image :src="head_portrait" mode=""></image>
						</view>
						<view class="icon xiangyou"></view>
					</view>
				</view>
				<view class="row" @click="editInfo('nickname')">
					<view class="title">昵称</view>
					<view class="right">
						<view class="tis">{{user_text.nickname}}</view>
						<view class="icon xiangyou"></view>
					</view>
				</view>
				<view class="row" @click="editInfo('gender')">
					<view class="title">性别</view>
					<view class="right">
						<view class="tis">{{user_text.gender|genderTitle}}</view>
						<view class="icon xiangyou"></view>
					</view>
				</view>
			</view>
		</view>
		<view class="list-cell log-out-btn" @click="logout">
			<text class="cell-tit">退出登录</text>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	var _self;
	export default {
		data() {
			return {
				user_text: {},
				head_portrait: ''
			};
		},
		onShow() {
			uni.getStorage({
				key: 'user_text',
				success: (res) => {
					this.user_text = res.data;
					if (res.data.head_portrait_local) {
						this.head_portrait = res.data.head_portrait_local;
					} else {
						this.head_portrait = res.data.head_portrait;
					}
				},
				fail: (e) => {

				}
			});

		},
		onLoad() {
			_self = this;
		},
		methods: {
			...mapMutations(['logout']),
			showType(tbIndex) {
				this.tabbarIndex = tbIndex;
				this.list = this.orderList[tbIndex];
			},
			editPortrait() {
				uni.chooseImage({
					count: 1,
					success: function(res) {
						let upload_head_portrait = res.tempFilePaths[0]
						//将头像图片重新保存到本地，以防止之前的照片被删除
						uni.saveFile({
							tempFilePath: upload_head_portrait,
							success: function(saveRes) {
								upload_head_portraitt = saveRes.savedFilePath;
							},
							fail: (e) => {
								console.log(e)
							}
						});
						uni.showLoading()
						//上传用户选择的头像到服务器
						uni.uploadFile({
							url: _self.$RootHttp.APIHOST + _self.$RootHttp.APIPATH + '/uploadUserPortrait',
							filePath: res.tempFilePaths[0],
							name: 'file',
							header: {
								token: uni.getStorageSync('token')
							},
							formData: {
								file: res.tempFilePaths[0],
							},
							success: (result) => {
								console.log(result)
								if (JSON.parse(result.data).code == 0) {
									let user_text = uni.getStorageInfoSync('user_text');
									//将头像的运程地址保存在storage
									user_text.head_portrait = _self.$RootHttp.APIHOST + _self.$RootHttp.APIPATH +JSON.parse(result.data).data.filename
									//将头像的本地地址保存在storage
									user_text.head_portrait_local = upload_head_portrait
									uni.setStorage({
										key: 'user_text',
										data: user_text
									})
									// 用户头像上传成功后，才展示保存的本地头像
									_self.head_portrait = upload_head_portrait
								} else {
									this.$api.msg(JSON.parse(result.data).msg)
								}
							},
							fail: (err) => {
								console.log(err)
							},
							complete: function() {
								uni.hideLoading()
							}
						})

					}
				})
			},
			editInfo(item) {
				uni.navigateTo({
					url: '/pages/user/setting/setItem/edit_info?item=' + item,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		computed: {
			...mapState([''])
		},
		filters: {
			genderTitle: function(type) {
				if (type == 0) {
					return "保密";
				}
				if (type == 1) {
					return "男";
				}
				if (type == 2) {
					return "女";
				}
				return "保密";
			}
		}

	}
</script>

<style lang="scss">
	page {
		background-color: #f3f3f3;
	}

	.icon {
		font-size: 30upx;

	}

	.left {
		width: 20vw;
		height: 20vw;
		flex-shrink: 0;
		margin-right: 20upx;
		border: solid 1upx #fff;
		border-radius: 100%;

		image {
			width: 20vw;
			height: 20vw;
			border-radius: 100%;
		}

	}

	.content {

		.list {
			width: 96%;
			padding-left: 4%;
			background-color: #fff;
			margin-bottom: 20upx;

			.row {
				widows: 100%;
				min-height: 90upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: solid 1upx #eee;

				&:last-child {
					border-bottom: none;
				}

				.title {
					font-size: 32upx;
					color: #333;
				}

				.right {
					display: flex;
					align-items: center;
					color: #999;

					.tis {
						font-size: 26upx;
						margin-right: 5upx;
						max-height: 120upx;

						image {
							width: 100upx;
							height: 100upx;
							border-radius: 100%;
							margin: 10upx 0;
						}
					}

					.icon {
						width: 40upx;
						color: #cecece;
					}
				}

			}
		}
	}

	.list-cell {
		display: flex;
		align-items: baseline;
		padding: 20upx 30upx;
		line-height: 60upx;
		position: relative;
		background: #fff;
		justify-content: center;

		&.log-out-btn {
			margin-top: 40upx;

			.cell-tit {
				color: $uni-color-logout;
				text-align: center;
				margin-right: 0;
			}
		}

		&.cell-hover {
			background: #fafafa;
		}

		&.b-b:after {
			left: 30upx;
		}

		&.m-t {
			margin-top: 16upx;
		}

		switch {
			transform: translateX(16upx) scale(.84);
		}
	}
</style>
