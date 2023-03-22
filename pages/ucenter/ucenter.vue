<template>
	<view class="center">
		<view class="userInfo" @click="login">
			<!-- <view class="defaultAvatarUrl" v-if="isLogin">
				<i class="iconfont icon-APIguanli" style="font-size: 80rpx;color:#04BE02;"></i>
			</view>
			<view class="defaultAvatarUrl" v-else>
				<i class="iconfont icon-APIguanli" style="font-size: 80rpx;color:#AFAFAF;"></i>
			</view>

			<view class="logo-title">
				<text class="uer-name" v-if="isLogin">已配置{{!user.email ? '' : user.email}}</text>
				<text class="uer-name" v-else>未配置</text>
			</view> -->
			<view class="defaultAvatarUrl">
				<image class="logoImg" src="@/static/image/logo.png"></image>
			</view>
			<view class="logo-title">
				<text class="uer-name">{{name}}</text>
			</view> 
		</view>
		<uni-list class="center-list" v-for="(sublist , index) in ucenterList" :key="index">
			<uni-list-item v-for="(item,i) in sublist" :title="item.title" link :rightText="item.rightText" :key="i"
				:clickable="true" :to="item.to" @click="ucenterListClick(item)" :show-extra-icon="true"
				:extraIcon="{type:item.icon,color:'#999','iconFlag': true, size :'25rpx'}">
			</uni-list-item>
		</uni-list>
		<button v-if="isLogin" size="mini" type="default" @click="logout"
			style="background-color: #ab1a29;border-color: #A92A00;height: 70rpx;padding-left: 10rpx;padding-right: 10rpx;margin: 0 50rpx;"><text
				style="color:#ffffff;font-size: 30rpx;">退出</text></button>
		<view>
			<u-notify ref="uNotify"></u-notify>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
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
		data() {
			return {
				ucenterList: [
					[{
							"title": "协议及说明",
							"to": '/pages/ucenter/notice',
							"icon": "icon-zhuyi",
						},
						{
							"title": "Github",
							"event": 'goToGithub',
							"icon": "icon-github1"
						}, {
							"title": "我的博客",
							"event": 'goToBlog',
							"icon": "icon-boke"
						},

						{
							"title": "问题反馈",
							"to": '/pages/ucenter/problem',
							"icon": "icon-wentijieda"
						},

						{
							"title": "试验功能",
							"to": '/pages/ucenter/advance',
							"icon": "icon-shiyan"
						},
						{
							"title": "关于",
							"to": '/pages/ucenter/about',
							"icon": "icon-guanyu_o"
						}
					]
				],
				isLogin: false,
				user: {},
				show: true,
				name: getApp().globalData.name,
			}
		},
		onLoad() {},
		onShow() {
			this.$store.dispatch('getIsLogin').then(res => {
					this.isLogin = res;
				})
				.catch(error => {})
			this.$store.dispatch('getUser').then(res => {
					this.user = res;
				})
				.catch(error => {})
		},
		computed: {
			...mapState({
				userInfo: state => state.userInfo,
			}),
		},
		methods: {
			goToGithub() {
				let url = getApp().globalData.github
				uni.navigateTo({
					url: '/pages/ucenter/link?url=' + url + '&name=Github 项目地址'
				})
			},
			goToBlog() {
				let url = getApp().globalData.blog
				uni.navigateTo({
					url: '/pages/ucenter/link?url=' + url + '&name=简窝博客'
				})
			},
			ucenterListClick(item) {
				if (!item.to && item.event) {
					this[item.event]();
				}
			},
			login() {
				return false;
				// if (!this.isLogin) {
				// 	uni.navigateTo({
				// 		url: '/pages/ucenter/login-withapi'
				// 	})
				// }
			},
			logout() {
				let that = this;
				uni.showModal({
					title: '提示',
					content: '你确认要退出吗? 退出后您的会话数据将会被全部清空!',
					success: function(res) {
						if (res.confirm) {
							that.$store.dispatch('logout');
							that.isLogin = false
							return that.showNotify('退出成功!');
						}
					}
				});

			},
			showNotify(title) {

				this.$refs.uNotify.show({
					type: 'success',
					message: title,
					duration: 1000 * 3,
					safeAreaInsetTop: true
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	.uni-list-chat__header-image {
		margin: 1px;
		/* #ifdef APP-NVUE */
		width: 50px;
		height: 50px;
		/* #endif */
		/* #ifndef APP-NVUE */
		width: 45px;
		height: 45px;
		/* #endif */
	}

	/* #ifndef APP-NVUE */
	view {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	}

	page {
		background-color: #f8f8f8;
	}

	/* #endif*/

	.center {
		flex: 1;
		flex-direction: column;
		background-color: #f8f8f8;
	}

	.userInfo {
		// padding: 20rpx;
		padding-top: 60px;
		background-image: url(../../static/uni-center/headers.png);
		flex-direction: column;
		align-items: center;
	}

	.defaultAvatarUrl {
		width: 150rpx;
		height: 150rpx;
		background-color: #baeeeb;
		border-radius: 100%;
		justify-content: center;
		align-items: center;
	}

	.logo-title {
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
	}

	.uer-name {
		height: 100rpx;
		line-height: 100rpx;
		font-size: 38rpx;
		color: #FFFFFF;
	}

	.center-list {
		margin-bottom: 30rpx;
		background-color: #f9f9f9;
	}

	.center-list-cell {
		width: 750rpx;
		background-color: #007AFF;
		height: 40rpx;
	}

	.grid {
		background-color: #FFFFFF;
		margin-bottom: 6px;
	}

	.uni-grid .text {
		font-size: 16px;
		height: 25px;
		line-height: 25px;
		color: #817f82;
	}

	.uni-grid .item ::v-deep .uni-grid-item__box {
		justify-content: center;
		align-items: center;
	}


	/*修改边线粗细示例*/
	/* #ifndef APP-NVUE */
	.center-list ::v-deep .uni-list--border:after {
		-webkit-transform: scaleY(0.2);
		transform: scaleY(0.2);
		margin-left: 80rpx;
	}

	.center-list ::v-deep .uni-list--border-top,
	.center-list ::v-deep .uni-list--border-bottom {
		display: none;
	}

	/* #endif */
	.item-footer {
		flex-direction: row;
		align-items: center;
	}

	.item-footer-text {
		color: #999;
		font-size: 24rpx;
		padding-right: 10rpx;
	}

	.box {
		margin-top: 60px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.item-footer-badge {
		width: 20rpx;
		height: 20rpx;
		/* #ifndef APP-NVUE */
		border-radius: 50%;
		/* #endif */
		/* #ifdef APP-NVUE */
		border-radius: 10rpx;
		/* #endif */
		background-color: #DD524D;
	}

	.logoImg {
		margin-bottom: 10rpx;
		width: 160rpx;
		height: 160rpx;
		border-radius: 15px;
	}
</style>
