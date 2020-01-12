<template>
	<div class="page">
		<div class="delivery-wrapper">
			<span class="title">送达时间</span>
			<span class="delivery">{{dateTime | date-format}}分钟</span>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	components: {},
	data () {
		return {
			dateTime: 1578794429153
		}
	}
}
</script>

<style scoped lang="stylus"></style>
