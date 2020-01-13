<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import FooterGuide from '@/components/FooterGuide/index.vue'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  created() {
    // 异步获取address
    this.$store.dispatch('getAddress')
    // 异步获取登录用户信息
    this.$store.dispatch('getUserInfo')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
	width 100%
	height 100%
	background #ffffff
</style>
