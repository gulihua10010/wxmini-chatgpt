<template>
	<view>
		
		<view class="nvue-page-head" ref="pagehead" id="pagehead">
			<view class="navbar" ref="navbar">
				<uni-nav-bar :status-bar="true" :leftIconBool="true" @clickLeft="$store.state.utils.back()"
					left-icon="back" :fixed="true" title="问题反馈">
				</uni-nav-bar>
			</view>
		</view>
		<!--  #ifdef  MP-WEIXIN -->
		<view style="margin: 10px 20px;">
			你可以到相关 <uni-link color='blue' fontSize="18" :href="github" text="Github 项目"></uni-link>
			或者是我的个人博客<uni-link   color='blue' fontSize="18" :href="blog" text="简窝博客"></uni-link>中进行留言反馈!
			两者我都会收到相关邮件通知! 做的好的话麻烦给个 star 或者赞哦~
		</view>
		<!--  #endif -->
		<!--  #ifndef  MP-WEIXIN -->
		
		<view style="margin: 10px 20px;">
			你可以到相关 <a :href="github">Github 项目</a>
			或者是我的个人博客<a :href="blog">简窝博客</a>中进行留言反馈!
			两者我都会收到相关邮件通知! 做的好的话麻烦给个 star 或者赞哦~
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
