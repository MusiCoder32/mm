<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		onLaunch: function() {
			console.log('测试不登陆直接返回的情形');
			uni.getStorage({
				key: 'user_text',
				success: (res) => {
					//如果能获得用户信息表明已登陆
				},
				fail: (e) => {
					// 没得获得用户信息，表明没有登陆
					// this.$api.msg("请先登陆")
					// uni.reLaunch({
					// 	url: '/pages/login/login'
					// })
				}
			});

			this.$Request.get(this.$Urlconf.home.goodsTypeAll).then((res) => {
				if (res.code == 0) {
					this.getGoodTypeAll(res.data)
					uni.setStorage({
						key: 'goodTypeAll',
						data: res.data
					})
				}
			})

		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			...mapMutations(['getGoodTypeAll'])
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "/static/iconfont/font.scss";
</style>
