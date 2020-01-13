<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <!--current-->
        <li
          v-for="(good, index) in goods"
          :key="index"
          :class="{current: index===currentIndex}"
          class="menu-item current"
          @click="clickMenuItem(index)">
          <span class="text bottom-border-1px">
            <img v-lazy="good.icon" v-if="good.icon" class="icon" >
            {{ good.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  name: '',
  components: {},
  data() {
    return {
      scrollY: 0, // 右侧滑动的Y轴坐标 (滑动过程时实时变化)
      tops: [], // 所有右侧分类li的top组成的数组  (列表第一次显示后就不再变化)
      food: {} // 需要显示的food
    }
  },
  computed: {
    ...mapState(['goods']),

    // 计算得到当前分类的下标
    currentIndex() {
      return 1
    }
  },
  mounted() {
    this.$store.dispatch('getShopGoods', () => { // 数据更新后执行
      this.$nextTick(() => { // 列表数据更新显示后执行
        this._initScroll()
        // this._initTops()
      })
    })
  },
  methods: {
    // 初始化滚动
    _initScroll() {
      // 列表显示之后创建
      new BScroll('.menu-wrapper', {
        click: true
      })
    },
    clickMenuItem(index) {
      console.log(index)
    }

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .goods
    display: flex
    position absolute
    top 195px
    bottom 46px
    width: 100%
    background #fff
    overflow hidden
    .menu-wrapper
      flex: 0 0 80px
      width 80px
      background #f3f5f7
      .menu-item
        display: table
        height 54px
        width 56px
        padding 0 12px
        ling-height 14px
        &.current
          position: relative
          z-index 10
          margin-top -1px
          background #ffffff
          color $green
          font-weight 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
</style>
