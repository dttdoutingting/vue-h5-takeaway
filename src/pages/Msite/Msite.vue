<template>
  <div class="msite">
    <!-- 首页头部-->
    <HeaderTop title="上海市浦东新区川沙新镇厚度">
      <router-link slot="search" to="serach" class="header_search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link slot="login" to="/login" class="header_login">
        <span class="header_login_text">登录|注册</span>
      </router-link>
    </HeaderTop>
    <div class="miste-content-wrapper">
      <div class="miste-content">
        <!-- 首页导航-->
        <nav class="msite_nav border-1px">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in 2" :key="item">
                <a href="javascript:" class="link_to_food" v-for="item in 8" :key="item">
                  <div class="food_container">
                    <img src="./images/nav/2.jpg">
                  </div>
                  <span>甜品饮品</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination-->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  name: '',
  components: {
    HeaderTop
  },
  mounted () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    .miste-content-wrapper
      position fixed
      top: 45px
      bottom: 46px
      width: 100%
      .msite_nav
        bottom-border-1px(#e4e4e4)
        margin-top 45px
        height 200px
        background-color #fff
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
              background-color #02a774
</style>
