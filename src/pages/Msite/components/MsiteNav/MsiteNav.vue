<template>
	<nav class="msite_nav border-1px">
		<div class="swiper-container"
				 v-if="categorysArr.length>0">
			<div class="swiper-wrapper">
				<div class="swiper-slide"
						 v-for="(cs, index) in categorysArr"
						 :key="index">
					<a href="javascript:"
						 class="link_to_food"
						 v-for="(c,index2) in cs"
						 :key="index2">
						<div class="food_container">
							<img :src="imgBaseUrl+c.image_url">
						</div>
						<span>{{c.title}}</span>
					</a>
				</div>
			</div>
			<!-- Add Pagination-->
			<div class="swiper-pagination"></div>
		</div>
		<img src="./images/msite_back.svg"
				 v-else>
	</nav>
</template>

<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'
import Swiper from 'swiper'
export default {
	name: '',
	components: {},
	data () {
		return {
			imgBaseUrl: 'https://fuss10.elemecdn.com'
		}
	},
	computed: {
		...mapState(['categorys']),

		/*
		根据categorys一维数组生成一个2维数组
		小数组中的元素个数最大是8
		 */
		categorysArr () {
			const { categorys } = this
			// 准备空的2维数组
			const arr = []
			// 准备一个小数组(最大长度为8)
			let minArr = []
			// 遍历categorys
			categorys.forEach(c => {
				// 如果当前小数组已经满了, 创建一个新的
				if (minArr.length === 8) {
					minArr = []
				}
				// 如果minArr是空的, 将小数组保存到大数组中
				if (minArr.length === 0) {
					arr.push(minArr)
				}
				// 将当前分类保存到小数组中
				minArr.push(c)
			})

			return arr
		}
	},
	watch: {
		categorys (value) { // categorys数组中有数据了, 在异步更新界面之前执行
			// 使用setTimeout可以实现效果, 但不是太好
			/*setTimeout(() => {
				// 创建一个Swiper实例对象, 来实现轮播
				new Swiper('.swiper-container', {
					loop: true, // 可以循环轮播
					// 如果需要分页器
					pagination: {
						el: '.swiper-pagination',
					},
				})
			}, 100)*/

			// 界面更新就立即创建Swiper对象
			this.$nextTick(() => {// 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
				// 创建一个Swiper实例对象, 来实现轮播
				new Swiper('.swiper-container', {
					loop: true, // 可以循环轮播
					// 如果需要分页器
					pagination: {
						el: '.swiper-pagination',
					},
				})

				new BScroll('.miste-content-wrapper', {
					click: true
				})
			})

		}
	},
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
