<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		onLaunch: function() {
			console.log(2)
			this.$Request.get(this.$Urlconf.home.goodsTypeAll).then((res) => {
				console.log(res)
				if (res.code == 0) {
					this.getGoodTypeAll(res.data)
					uni.setStorage({
						key:'goodTypeAll',
						data:res.data
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
