<template>
	<nav class="msite_nav border-1px">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide"
						 v-for="item in 2"
						 :key="item">
					<a href="javascript:"
						 class="link_to_food"
						 v-for="item in 8"
						 :key="item">
						<div class="food_container">
							<img src="./images/nav/1.jpg">
						</div>
						<span>甜品饮品</span>
					</a>
				</div>
			</div>
			<!-- Add Pagination-->
			<div class="swiper-pagination"></div>
		</div>
	</nav>
</template>

<script>
export default {
	name: '',
	components: {},
	data () {
		return {

		}
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.msite_nav
	bottom-border-1px(#e4e4e4)
	padding-top 15px
	height 200px
	background #fff
	.swiper-container
		width 100%
		height 100%
		.swiper-wrapper
			width 100%
			height 100%
			.swiper-slide
				display flex
				justify-content center
				align-items flex-start
				flex-wrap wrap
				.link_to_food
					width 25%
					.food_container
						display block
						width 100%
						text-align center
						padding-bottom 10px
						font-size 0
						img
							display inline-block
							width 50px
							height 50px
					span
						display block
						width 100%
						text-align center
						font-size 13px
						color #666
		.swiper-pagination
			>span.swiper-pagination-bullet-active
				background #02a774
</style>
