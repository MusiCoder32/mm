<template>
	<view>
		<view class="content">
			<view class="list">
				<view class="row" @click="editInfo('nickname')">
					<view class="title">昵称</view>
					<view class="right">
						<view class="tis">{{nickname}}</view>
						<view class="icon xiangyou"></view>
					</view>
				</view>
				<view class="row" @click="editInfo('gender')">
					<view class="title">性别</view>
					<view class="right">
						<view class="tis">{{gender}}</view>
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
		mapMutations
	} from 'vuex';

	export default {
		data() {
			return {
				gender: 0,
				nickname: "小明"
			};
		},
		onShow() {
			uni.getStorage({
				key: 'user_text',
				success: (res) => {
					if (res.data.gender == 0) {
						this.gender = "保密";
					} else if (res.data.gender == 1) {
						this.gender = "男";
					} else if (res.data.gender == 2) {
						this.gender = "男";
					} else {
						this.gender = "保密";
					}
					this.nickname = res.data.nickname;
					console.log(res.data.nickname)
				},
				fail: (e) => {

				}
			});

		},
		onLoad() {},
		methods: {
			...mapMutations(['logout']),
			showType(tbIndex) {
				this.tabbarIndex = tbIndex;
				this.list = this.orderList[tbIndex];
			},
			editInfo(item) {
				uni.navigateTo({
					url: '/pages/user/setting/setItem/edit_info?item=' + item,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
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
