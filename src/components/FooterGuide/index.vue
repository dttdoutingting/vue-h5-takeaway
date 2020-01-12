<template>
  <footer class="footer_guide border-1px">
    <div
      :class="{on: isCurrent('/msite')}"
      class="guide_item"
      @click="goto('/msite')"
    >
      <span class="item_icon">
        <i class="iconfont icon-waimai"/>
      </span>
      <span>外卖</span>
    </div>
    <div
      :class="{on: isCurrent('/search')}"
      class="guide_item"
      @click="goto('/search')"
    >
      <span class="item_icon">
        <i class="iconfont icon-search"/>
      </span>
      <span>搜索</span>
    </div>
    <div
      :class="{on: isCurrent('/order')}"
      class="guide_item"
      @click="goto('/order')"
    >
      <span class="item_icon">
        <i class="iconfont icon-dingdan"/>
      </span>
      <span>订单</span>
    </div>
    <div
      :class="{on: isCurrent('/profile')}"
      class="guide_item"
      @click="goto('/profile')"
    >
      <span class="item_icon">
        <i class="iconfont icon-geren"/>
      </span>
      <span>我的</span>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    goto(path) {
      this.$router.replace(path)
    },
    isCurrent(path) {
      return this.$route.path === path
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.footer_guide
	border-1px(#e4e4e4)
	position fixed
	z-index 100
	left 0
	right 0
	bottom 0
	background-color #fff
	width 100%
	height 50px
	display flex
	.guide_item
		display flex
		flex 1
		text-align center
		flex-direction column
		align-items center
		margin 5px
		color #999999
		&.on
			color #02a774
		span
			font-size 12px
			margin-top 2px
			margin-bottom 2px
			.iconfont
				font-size 22px
</style>
