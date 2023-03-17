<template>
	<view class="about">
		<view class="navbar" ref="navbar">
			<uni-nav-bar :status-bar="true" :leftIconBool="true" @clickLeft="$store.state.utils.back()" left-icon="back"
				:fixed="true" title="关于">
			</uni-nav-bar>
		</view>
		<view class="box">
			<image class="logoImg" src="@/static/image/logo.png"></image>
			<text class="tip appName">{{name}}</text>
			<text class="tip">Version {{version}}</text>
		</view>
		<view class="copyright">
			<text class="agreement" @click="goToAgreement">《{用户协议}》</text>
			<text class="hint">Copyright © {{year}}</text>
		</view>
		<view style="margin: 10px 20px;">
			<ul>
				<li>1.此{{platform}}由 Uni-App 构建，Github:<navigator :url="'/pages/ucenter/link?url='+github_">
						{{github_}}
					</navigator>
				</li>
			</ul>

		</view>
		<view>
			<button open-type="share" class="share-btn">
				<image class="pyq" src="@/static/image/pyq.png"></image>
				<view class="share-text">分享</view>
			</button>
		</view>
	</view>
</template>
<script>
	// #ifdef APP
	import UniShare from '@/uni_modules/uni-share/js_sdk/uni-share.js';
	const uniShare = new UniShare()
	// #endif
	export default {
		components: {},
		// #ifdef APP
		onBackPress({
			from
		}) {
			if (from == 'backbutton') {
				this.$nextTick(function() {
					uniShare.hide()
				})
				return uniShare.isShow;
			}
		},
		// #endif
		onLoad() {
			// #ifdef APP-PLUS
			this.version = plus.runtime.version
			// #endif
		},
		computed: {},
		data() {
			return {
				version: getApp().globalData.appVersion,
				year: "2023",
				name: getApp().globalData.name,
				platform: "小程序",
				github_: getApp().globalData.github_,
				github: getApp().globalData.github,
				isDebug: false
			};
		},
		created() {
			uni.setNavigationBarTitle({
				title: "关于 " + getApp().globalData.name
			})
			this.year = (new Date).getFullYear()
			// #ifndef  MP-WEIXIN
			this.platform = "网站"
			// #endif
		},
		onShow() {
			this.isDebug = uni.getStorageSync('isDebug');
		},
		onShareAppMessage(res) {
			return {
				title: this.name,
				path: '/pages/chat/session',
				imageUrl: '/static/image/share_screen_slot.png'
			}
		},
		onNavigationBarButtonTap() {
			let {
				download,
				appName,
				slogan,
				logo
			} = this.about
			uniShare.show({
				content: { //公共的分享类型（type）、链接（herf）、标题（title）、summary（描述）、imageUrl（缩略图）
					type: 0,
					href: download,
					title: appName,
					summary: slogan,
					imageUrl: logo +
						'?x-oss-process=image/resize,m_fill,h_100,w_100' //压缩图片解决，在ios端分享图过大导致的图片失效问题
				},
				menus: [{
						"img": "/static/app-plus/sharemenu/wechatfriend.png",
						"text": this.$t('common.wechatFriends'),
						"share": {
							"provider": "weixin",
							"scene": "WXSceneSession"
						}
					},
					{
						"img": "/static/app-plus/sharemenu/wechatmoments.png",
						"text": this.$t('common.wechatBbs'),
						"share": {
							"provider": "weixin",
							"scene": "WXSceneTimeline"
						}
					},
					{
						"img": "/static/app-plus/sharemenu/weibo.png",
						"text": this.$t('common.weibo'),
						"share": {
							"provider": "sinaweibo"
						}
					},
					{
						"img": "/static/app-plus/sharemenu/qq.png",
						"text": "QQ",
						"share": {
							"provider": "qq"
						}
					},
					{
						"img": "/static/app-plus/sharemenu/copyurl.png",
						"text": this.$t('common.copy'),
						"share": "copyurl"
					},
					{
						"img": "/static/app-plus/sharemenu/more.png",
						"text": this.$t('common.more'),
						"share": "shareSystem"
					}
				],
				cancelText: this.$t('common.cancelShare'),
			}, e => { //callback
				console.log(e);
			})
		},
		methods: {
			goToAgreement() {
				uni.navigateTo({
					url: '/pages/ucenter/notice'
				})
			},

		}
	}
</script>
<style lang="scss" scoped>
	/* #ifndef APP-NVUE */
	view {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	}

	/* #endif */
	.about {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.box {
		margin-top: 60px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.logoImg {
		margin-bottom: 10rpx;
		width: 160rpx;
		height: 160rpx;
		border-radius: 15px;
	}

	.pyq {
		margin-top: 10rpx;
		width: 80rpx;
		height: 80rpx;
		border: none;
	}

	.share-btn {
		background-color: transparent;
	}

	.share-text {
		margin: 0;
		padding: 0;
		line-height: 30rpx;
	}

	.share-btn::after {
		border: none;
	}

	.tip {
		text-align: center;
		font-size: 24rpx;
		margin-top: 10px;
		padding: 10rpx;
	}

	.appName {
		margin-top: 20px;
		font-size: 42rpx;
		font-weight: 500;
	}

	.copyright {
		font-size: 32rpx;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		bottom: 20px;
		// left: 0;
		position: fixed;
	}

	.agreement-box {
		justify-content: center;
	}

	.agreement {
		color: #2285ff;
		font-size: 26rpx;
	}

	.hint {
		text-align: center;
		color: #999999;
		font-size: 26rpx;
	}

	ul {
		padding: 0;
		margin: 0;
	}

	ul li {
		list-style: none;
		word-break: break-all;

	}
</style>
