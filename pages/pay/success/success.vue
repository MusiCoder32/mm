<template>
	<view>
		<view class="icon">
			<image src="/static/img/success.png"></image>
		</view>
		<view class="tis">
			支付成功
		</view>
		<view class="pay-amount">
			订单:{{order_sn}}
		</view>
		<view class="back">
			<view class="btn" @tap="toUser">个人中心</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_sn:0
			};
		},
		onLoad(e) {
			this.order_sn = e.order_sn;
			uni.setStorageSync('')
		},
		methods: {
			toUser() {
				uni.setStorageSync('tbIndex',1)
				uni.navigateTo({
					url: '/pages/user/order_list/order_list?tbIndex=1'
				})
			}
		},
	}
</script>

<style lang="scss">
	view{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
.icon{
	width: 100%;
	margin-top: 10vw;
	image{
		width: 25vw;
		height: 25vw;
	}
}
.tis{
	width: 100%;
	margin-top: 20upx;
	font-size: 48upx;
}
.pay-amount{
	width: 100%;
	margin-top: 10upx;
	font-size: 32upx;
}
.back{
	position: absolute;
	width: 100%;
	bottom: 80upx;
	.btn{
		padding: 0 50upx;
		height: 70upx;
		border: solid 2upx #f06c7a;
		color: #f06c7a;
		align-items: center;
		border-radius: 10upx;
		font-size: 34upx;
	}
}
</style>
