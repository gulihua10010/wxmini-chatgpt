<template>
	<view>
		<view class="nvue-page-head" ref="pagehead" id="pagehead">
			<view class="navbar" ref="navbar">
				<uni-nav-bar :status-bar="true" :leftIconBool="true" @clickLeft="$store.state.utils.back()"
					left-icon="back" :fixed="true" title="外部链接">
				</uni-nav-bar>
			</view>
		</view>
		<view style="margin: 20rpx;text-align: center;">
			点击复制网址<br>并在浏览器中打开:<br>
			<uni-link style='font-size: 36rpx;' :href="url" :text="name"></uni-link>
				
			
		</view>
	</view>
</template>
<script>
	export default {
		onLoad() {

		},
		computed: {

		},
		data() {
			return {
				url:'',
				name: ''
			};
		},
		onLoad(item) {
			this.url = decodeURIComponent(item.url)  
			this.name = item.name
			if(!this.name){
				this.name = this.url
			} 
		},
		created() {

		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>

</style>
