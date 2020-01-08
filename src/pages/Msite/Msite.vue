<template>
  <div class="msite">
    <HeaderTop title="上海市浦东新区川沙新镇厚度">
      <router-link slot="search" to="serach" class="header_search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link slot="login" to="/login" class="header_login">
        <span class="header_login_text">登录|注册</span>
      </router-link>
    </HeaderTop>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  name: '',
  components: {
    HeaderTop
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
</style>
