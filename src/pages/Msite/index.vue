<template>
  <div class="msite">
    <!-- 首页头部-->
    <HeaderTop :title="address.name">
      <router-link
        slot="search"
        to="/serach"
        class="header_search">
        <i class="iconfont icon-sousuo"/>
      </router-link>
      <router-link
        slot="login"
        :to="userInfo._id?'/userInfo':'/login'"
        class="header_login">
        <span
          v-if="userInfo._id"
          class="header_login_text"
        >登录|注册</span>
        <span
          v-else
          class="header_login_text"
        >
          <i class="iconfont icon-person"/>
        </span>
      </router-link>
    </HeaderTop>
    <div class="miste-content-wrapper">
      <div class="miste-content">
        <!-- 首页导航-->
        <MsiteNav />
        <!-- 首页附近商家-->
        <div class="msite_shop_list border-1px">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"/>
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
import HeaderTop from '@/components/HeaderTop/index.vue'
import MsiteNav from './components/MsiteNav.vue'
import ShopList from '@/components/ShopList/index.vue'
export default {
  name: '',
  components: {
    HeaderTop,
    MsiteNav,
    ShopList
  },
  computed: {
    ...mapState(['address', 'userInfo'])
  },
  mounted() {
    this.$store.dispatch('getCategorys')
    this.$store.dispatch('getShops')
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
