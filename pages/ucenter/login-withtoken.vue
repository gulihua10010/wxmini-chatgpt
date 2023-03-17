<!-- 账号密码登录页 -->
<template>
	<view class="uni-content">
		<view class="navbar" ref="navbar">
			<uni-nav-bar :status-bar="true" :leftIconBool="true" @clickLeft="$store.state.utils.back()"
				left-icon="back" :fixed="true" title="登录">
			</uni-nav-bar>
		</view>
		<view class="login-logo">
			<image :src="logo"></image>
		</view>
		<!-- 顶部文字 -->
		<text class="title title-box">Access Token登录<text v-if="!isDebug" style="color:red">[可能会被封禁]</text></text>
		<uni-forms>
			<uni-forms-item name="api">
				<uni-easyinput :focus="focusToken" @blur="focusToken = false" class="input-box" @confirm="tokenLogin"
					maxlength="3000" :inputBorder="false" v-model="token" placeholder="请输入Access Token, 以'ey'开头的字符串, 不含Bearer" style="height: 200rpx;"/>
			</uni-forms-item>
		</uni-forms>
		<!-- 带选择框的隐私政策协议组件 -->
		<uni-id-pages-agreements scope="login" ref="agreements"></uni-id-pages-agreements>
		<checkbox-group @change="setSync"  v-if="!isDebug">
			<label class="checkbox-box">
				<checkbox :checked="isSync" style="transform: scale(0.5);margin-right: -6px;" />
				<text class="text">同步官网会话</text>
			</label>
		</checkbox-group>
		<button class="uni-btn" type="primary" @click="tokenLogin" >验证</button>
		<view @click="howFetch"><text style="color: #04498c;font-size: 28rpx;">如何获取？</text></view>
		<view>
			<view class="fab-login-box">
				<view class="item" @click="pwdLogin">
					<i class="iconfont icon-mima" style="font-size: 40rpx;color:#000000;"></i>
					 <text> 密码登录</text>
				</view>
				<view class="item" @click="apiLogin">
					<i class="iconfont icon-a-outline-ftx-token-ftt" style="font-size: 40rpx;color:#000000;"></i>
					 <text>API Key 登录</text>
				</view>
			</view>
		</view>
		<view>
			<u-notify ref="uNotify"></u-notify>
			<u-toast ref="uToast"></u-toast>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				"token": "",
				"focusToken": false,
				"needAgreements":true,
				"logo": "/static/image/logo.png",
				isSync: false,
				isDebug: false,
			}
		},
		onShow() { 
			this.isDebug = uni.getStorageSync('isDebug');
		},
		
		computed: {
			...mapState({
				utils: state => state.utils
			})
		},
		methods: {
			/**
			 * token登录
			 */
			tokenLogin() {
				if (!this.token.length) {
					this.focusToken = true
					return this.showToast('请输入token');
				}
				if (this.needAgreements && this.$refs.agreements && !this.$refs.agreements.getAgree()) {
					return this.$refs.agreements.popup(this.pwdLogin)
				}

				
				let data = {
					"accessToken": this.token,
				} 
				 let that = this;
				 // 请求
				 uni.showLoading({
				 	title: '请求中...'
				 });
				 uni.request({
				 	url: getApp().globalData.server + '/api/auth/token/verify',
				 	method: "POST",
				 	data: JSON.stringify(data),
				 	success: (res) => {
				 		uni.hideLoading();
				 		res = res.data
				 		if (res.status === '000000') {
				 			that.$store.dispatch('loginWithtoken', this.token);
				 			setTimeout(() => {
				 				uni.switchTab({
				 					url: '/pages/chat/session'
				 				})
				 			}, 1000);
				 			return that.showNotify("登录成功!", 'success');
				 		} else {
				 			let msg = res.msg;
				 
				 			if (res.status === '400001') {
				 				msg = "token错误!"
				 			} 
				 			if (!msg) {
				 				msg = "请求出错!";
				 			}
				 			return that.showNotify(msg, 'error');
				 		}
				 	},
				 	fail: (res) => {
				 		uni.hideLoading();
				 		return that.showNotify('请求出错!','error');
				 	}
				 });
			},
			
			setSync(e) {
				this.isSync = !this.isSync
				uni.setStorageSync('sync_session', this.isSync)
			},
			pwdLogin(){
				uni.navigateTo({
					url: '/pages/ucenter/login-withpwd'
				})
			},
			apiLogin(){
				uni.navigateTo({
					url: '/pages/ucenter/login-withapi'
				})
			},
			howFetch(){
				uni.navigateTo({
					url: '/pages/ucenter/fetch-token'
				})
			},
			showNotify(title, type) {
			
				this.$refs.uNotify.show({
					type: type,
					message: title,
					duration: 1000 * 3,
					safeAreaInsetTop: true
				})
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
	// 隐藏 edge 浏览器的密码查看按钮

	/* #ifdef H5 */
	.input-box ::v-deep {
		.uni-input-input[type="password"] {
			&::-ms-reveal {
				display: none;
			}
		}
	}

	/* #endif */

	.uni-content {
		padding: 0 60rpx;
		overflow: hidden;
	}

	.login-logo {
		// display: none;
		text-align: center;
		margin-top: 60rpx;
	}

	.login-logo image {
		width: 160rpx;
		height: 160rpx;

	}

	/* #ifndef APP-NVUE */
	@media screen and (min-width: 690px) {
		.uni-content {
			/* #ifndef H5 */
			padding: 0;
			max-width: 300px;
			margin-left: calc(50% - 200px);
			/* #endif */
			/* #ifdef H5 */
			margin: 0 auto;
			position: relative;
			top: 100px;
			padding: 30px 40px 80px 40px;
			max-width: 450px;
			max-height: 450px;
			border-radius: 10px;
			box-shadow: 0 0 20px #efefef;
			background-color: #FFF;
			/* #endif */
		}

		/* #ifdef H5 */
		.login-logo {
			display: flex;
			justify-content: center;
		}

		.login-logo image {
			width: 60px;
			height: 60px;
		}

		.register-back {
			display: none;
		}

		uni-button {
			padding-bottom: 1px;
		}

		/* #endif */
	}

	.uni-content view {
		box-sizing: border-box;
	}

	/* #endif */



	.title {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		padding: 18px 0;
		font-weight: 800;
		flex-direction: column;
	}

	.tip {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		color: #BDBDC0;
		font-size: 11px;
		margin: 6px 0;
	}


	/* #ifndef APP-NVUE */
	// 解决小程序端开启虚拟节点virtualHost引起的 class = input-box丢失的问题 [详情参考](https://uniapp.dcloud.net.cn/matter.html#%E5%90%84%E5%AE%B6%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%AE%9E%E7%8E%B0%E6%9C%BA%E5%88%B6%E4%B8%8D%E5%90%8C-%E5%8F%AF%E8%83%BD%E5%AD%98%E5%9C%A8%E7%9A%84%E5%B9%B3%E5%8F%B0%E5%85%BC%E5%AE%B9%E9%97%AE%E9%A2%98)
	.uni-content ::v-deep .uni-easyinput__content,
	/* #endif */

	.input-box {
		height: 44px;
		background-color: #F8F8F8 !important;
		border-radius: 0;
		font-size: 14px;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex: 1;
	}

	.link {
		color: #04498c;
		cursor: pointer;
	}

	.uni-content ::v-deep .uni-forms-item__inner {
		padding-bottom: 8px;
	}

	.uni-btn {
		text-align: center;
		height: 40px;
		line-height: 40px;
		margin: 15px 0 10px 0;
		color: #FFF !important;
		border-radius: 5px;
		font-size: 16px;
	}

	.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd {
		height: auto !important;
	}

	@media screen and (min-width: 690px) {
		.uni-content {
			height: 600px;
		}
	}

	.forget {
		font-size: 12px;
		color: #8a8f8b;
	}

	.link-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: space-between;
		margin-top: 20px;
	}

	.link {
		font-size: 12px;
	}
	
	/* #ifndef APP-NVUE */
	.fab-login-box,
	.item {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	}
	/* #endif */
	
	.fab-login-box {
		flex-direction: row;
		flex-wrap: wrap;
		width: 750rpx;
		justify-content: space-around;
		position: fixed;
		bottom:50rpx;
		left: 0;
	}
	
	.item {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 200rpx;
		cursor: pointer;
	}
	.text {
		font-size: 24rpx;
		color: #8a8f8b;
	}
	.checkbox-box ,.uni-label-pointer{
		align-items: center;
		display: flex;
		flex-direction: row;
	}
	
	.checkbox-box ::v-deep .uni-checkbox-input{
		border-radius: 100%;
	}
	
	.checkbox-box ::v-deep .uni-checkbox-input.uni-checkbox-input-checked{
		border-color: $uni-color-primary;
		color: #FFFFFF !important;
		background-color: $uni-color-primary;
	}
	
</style>
