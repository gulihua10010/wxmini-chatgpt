<template>
	<view>
		<view class="nvue-page-head" ref="pagehead" id="pagehead">
			<view class="navbar" ref="navbar">
				<uni-nav-bar :status-bar="true" :leftIconBool="true" @clickLeft="$store.state.utils.back()"
					left-icon="back" :fixed="true" title="试验功能">
				</uni-nav-bar>
			</view>
		</view>
		<view class="uni-list">
			<view class="container" v-if="!isDebug">
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-list-cell-db">全 AI 对话</view>
					<switch class="switch" :checked='allAI' @change="switchChange1" />
				</view>
				<view class="tips">
					全 AI 对话指的是，你只需要输入一个起始语句，剩下的都交给 AI 吧，让 AI 与 AI 聊天!
					您可以输入"停止"指令 停止对话。<br>
					注意: 在停止之前，你输入的任何语句都是无效的。<br>
					如果你使用的是 API，这将很容易消耗账户的token值。

				</view>
			</view>
			<view v-if="!isDebug" class="divider" />
			<view class="container">
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-list-cell-db">记住上下文</view>
					<switch class="switch" :checked='rememberContext' @change="switchChange2" />
				</view>
				<view class="tips">
					只对 API 模式有效
				</view>
			</view>
			<view class="divider" v-if="!isDebug" />
			<view class="container" v-if="!isDebug">
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-list-cell-db">AI 图片生成</view>
					<switch class="switch" :checked='imgGen' @change="switchChange3" />
				</view>
				<view class="tips">
					只对 API 模式有效, 图片文件将在一天后从服务器上删除, 长按图片可以保存

				</view>
			</view>
		</view>
		<view>
			<u-toast ref="uToast"></u-toast>
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
				rememberContext: true,
				allAI: false,
				isLogin: false,
				isDebug: false,
				loginType: '',
				imgGen: false,
			};
		},
		created() {
			this.loginType = uni.getStorageSync('login_type');
		},
		onReady() {},
		onShow() {
			this.rememberContext = uni.getStorageSync('remember_context');
			this.allAI = uni.getStorageSync('all_ai');
			this.imgGen = uni.getStorageSync('ai_gen_img');

			this.isLogin = uni.getStorageSync('is_login');

			this.isDebug = uni.getStorageSync('isDebug');

		},
		methods: {
			switchChange1: function(e) {
				if (!this.isLogin) {
					return this.showToast('仅登录可用~');
				}

				if (e.detail.value && this.imgGen) {
					this.allAI = false
					return this.showToast('AI 生成图片模式下不支持开启此选项');
				}
				this.allAI = e.detail.value
				uni.setStorageSync('all_ai', e.detail.value)
			},
			switchChange2: function(e) {
				if (!this.isLogin) {
					return this.showToast('仅登录可用~');
				}
				if (this.loginType !== 'api') {
					return this.showToast('仅配置API可用~');
				}
				this.rememberContext = e.detail.value
				uni.setStorageSync('remember_context', e.detail.value)

			},
			switchChange3: function(e) {
				if (!this.isLogin) {
					return this.showToast('仅登录可用~');
				}
				if (this.loginType !== 'api') {
					return this.showToast('仅配置API可用~');
				}
				if (e.detail.value && this.allAI) {
					this.imgGen = false
					return this.showToast('全 AI对话模式下不支持开启此选项');
				}
				this.imgGen = e.detail.value
				uni.setStorageSync('ai_gen_img', e.detail.value)
			},
			showToast(msg) {

				this.$refs.uToast.show({
					message: msg,
					type: 'error',
					duration: 2000,
					position:'bottom'
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	.uni-list-cell {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-list-cell-db {
		flex: 1;
		margin-left: 10rpx;
	}

	.uni-list {
		background-color: #fff;
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.switch {
		margin-right: 10rpx;
	}

	.tips {
		font-size: 27rpx;
		color: #666;
		margin: 0 10rpx;
	}

	.divider {
		background: #666;
		width: 100%;
		height: 2rpx;
		margin: 10rpx 0;
	}

	.container {
		margin: 10rpx;
	}
</style>
