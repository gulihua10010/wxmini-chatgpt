<template>
	<view>
		<view class="nvue-page-head" ref="pagehead" id="pagehead">
			<view class="navbar" ref="navbar">
				<uni-nav-bar :status-bar="true" :leftIconBool="true" @clickLeft="$store.state.utils.back()"
					left-icon="back" :fixed="true" title="生成并获取 API Key">
				</uni-nav-bar>
			</view>
		</view>
		<!--  #ifdef  MP-WEIXIN -->
		<view style="margin: 10px 20px;">
			<view style="margin: 10px 20px;">
				 访问我的 <uni-link   color='blue' fontSize="18" :href="blog" text="博客"></uni-link> 查看获取教程。
			</view>
		</view>
		<!--  #endif -->
		<!--  #ifndef  MP-WEIXIN -->
		<view style="margin: 10px 20px;">
			 通过<a href="https://openai.com/api/">https://openai.com/api/</a>注册登录后，到
			<a href="https://platform.openai.com/account/api-keys">https://platform.openai.com/account/api-keys</a>页面，点击
			 <strong>[Create new secret key]</strong>按钮后进行生成，然后把 Api Key拷贝到输入框中。
		</view>
		<!--  #endif -->
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
				github: getApp().globalData.github,
				blog: getApp().globalData.blogDetail
			};
		},
		created() {

		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>

</style>
