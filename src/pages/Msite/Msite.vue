<template>
	<div class="msite">
		<!-- 首页头部-->
		<HeaderTop :title="address.name">
			<router-link slot="search"
									 to="/serach"
									 class="header_search">
				<i class="iconfont icon-sousuo"></i>
			</router-link>
			<router-link slot="login"
									 to="/login"
									 class="header_login">
				<span class="header_login_text">登录|注册</span>
			</router-link>
		</HeaderTop>
		<div class="miste-content-wrapper">
			<div class="miste-content">
				<!-- 首页导航-->
				<MsiteNav />
				<!-- 首页附近商家-->
				<div class="msite_shop_list border-1px">
					<div class="shop_header">
						<i class="iconfont icon-xuanxiang"></i>
						<span class="shop_header_title">附近商家</span>
					</div>
					<ShopList />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import MsiteNav from './components/MsiteNav/MsiteNav.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
export default {
	name: '',
	components: {
		HeaderTop,
		MsiteNav,
		ShopList
	},
	mounted () {
		this.$store.dispatch('getCategorys')
		this.$store.dispatch('getShops')
	},
	computed: {
		...mapState(['address', 'userInfo'])
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.msite // 首页
	width 100%
	.miste-content-wrapper
		position fixed
		top 45px
		bottom 46px
		width 100%
		.msite_shop_list
			top-border-1px(#e4e4e4)
			margin-top 10px
			background #fff
			.shop_header
				padding 10px 10px 0
				.shop_icon
					margin-left 5px
					color #999
				.shop_header_title
					color #999
					font-size 14px
					line-height 20px
</style>
