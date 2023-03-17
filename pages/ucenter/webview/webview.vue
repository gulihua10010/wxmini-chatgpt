<template>
	<web-view allow :fullscreen="true" :src="url "></web-view>
</template>

<script>
	export default {
		data() {
			return {
				url: '',
			}
		},
		onLoad(item) {
			this.url = decodeURIComponent(item.url) 
		}
	}
</script>

<style lang="scss">
</style>
