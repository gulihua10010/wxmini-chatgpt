<template>

	<view id="chatDetail" @click="hide" ref="chatDetail" class="flex-column-start">
		<view style="margin-bottom: 30rpx;">
			<text class="chat-time" v-if="showTime(item.createTime,index)">{{showTime(item.createTime,index)}}</text>
			<view class="padding-top align-center"
				:class="item.isSend ? 'nv-rowever padding-right' : 'padding-left nv-row'">
				<image v-if="item.isSend" class="chat-img" :src="getAvatar(item.isSend)" mode="aspectFill"></image>
				<image v-else class="chat-img" :src="getAvatar(item.isSend)" mode="aspectFill"></image>

				<view style="flex-direction: row;justify-content: center;align-items: center;">
					<view class="nv-chat" style="flex-direction: column;flex-wrap:wrap;">
						<view :class="item.isSend?'margin-right white-bg nv-rowever':'margin-left gr-bg nv-row'"
							class="padding-chat" @click='copy(item)'
							:style="'border-radius: 10rpx;align-items: center;'">

							<rich-text v-if="!item.isImg"
								:style="'font-size: 28rpx;word-wrap: break-word;word-break: break-all; max-width:'+chatDetailBoxMaxWidth+'px'"
								:nodes="item.html" selectable="true"></rich-text>
							<image v-else class="chat-img-ai" @longpress="longpress(item.content)" :src="item.content">
							</image>

						</view>
					</view>
				</view>
			</view>
		</view>



	</view>

</template>

<script>
	import utils from '@/common/utils.js';
	import {
		mapState
	} from 'vuex'
	export default {
		name: 'UniChatDetail',
		props: {
			type: {
				type: String,
				default: 'user'
			},
			item: {
				type: Object,
				default: {}
			},
			index: {
				type: Number,
				default: 0
			},
			list: {
				type: Array,
				default: []
			}
		},
		computed: {
			cssVars() {
				return {
					"--width": this.systemInfo.screenWidth - 210
				};
			}

		},
		created() {
			this.chatDetailBoxMaxWidth = this.systemInfo.screenWidth - 110;
		},
		data() {
			return {
				chatDetailBoxMaxWidth: 0,
				safeBottom: 0,
				systemInfo: uni.getSystemInfoSync(),
				onPlay: false,

			};
		},
		methods: {
			copy: function(item) {
				if (item.isImg) {
					return false;
				}
				uni.setClipboardData({
					data: item.content.trim(),
					success: function() {
						console.log('复制成功!');
					}
				});

			},
			longpress: function(content) {
				let that = this;
				uni.showModal({
					title: '提示',
					content: '你确定要保存到本地吗?',
					success: function(res) {
						if (res.confirm) {
							that.saveImage(content)
						}
					}
				});

			},
			saveImage(url) {
				let that = this;
				uni.authorize({
					scope: 'scope.writePhotosAlbum',
					success: () => {
						// 已授权
						that.download(url);
					},
					fail: () => {
						// 拒绝授权，获取当前设置
						uni.getSetting({
							success: (result) => {
								if (!result.authSetting['scope.writePhotosAlbum']) {
									that.isAuth()
								}
							}
						});
					}
				})
			},
			//前期未授权提示
			isAuth() {
				uni.showModal({
					content: '由于您还没有允许保存图片到您相册里,无法进行保存,请点击确定允许授权',
					success: (res) => {
						if (res.confirm) {
							uni.openSetting({
								success: (result) => {
									console.log(result.authSetting);
								}
							});
						}
					}
				});
			},
			download(url) {
				uni.showLoading({
					title: '正在保存...'
				});
				const downloadTask = uni.downloadFile({
					url: url,
					success: (res) => {
						console.log(res)
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success: (res) => {
								return uni.showToast({
									title: '保存成功!',
									icon: 'success',
									duration: 1000
								});
							},
							fail: (res) => {
								console.log(res)
								uni.hideLoading();
								return uni.showToast({
									title: '保存失败',
									icon: 'error',
									duration: 1000
								});
							}
						})

					},
					fail: (res) => {
						console.log(res)
						uni.hideLoading();
						return uni.showToast({
							title: '保存失败',
							icon: 'error',
							duration: 1000
						});
					}
				})
			},
			getAvatar: function(flagUser) {
				return this.$store.state.utils.getAvatar(flagUser);
			},
			hide: function() {
				uni.hideKeyboard()
			},
			showTime: function(time, index) {
				var last_index = index - 1;

				if (last_index >= 0) {
					var last_time = this.list[last_index]['createTime'];
					var difference = parseInt(time.toString().slice(0, -3)) - parseInt(last_time.toString().slice(0, -
						3));

					if (difference < 60) {
						return false;
					} else {
						return this.$store.state.utils.formatChatTime(time)
					}
				} else {
					return this.$store.state.utils.formatChatTime(time)
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.ing {
		width: 100%;

	}

	.header-dh {
		position: fixed;
		justify-content: flex-end;
		padding-bottom: 15rpx;
		width: 750rpx;
		background-color: #f1f1f1;
		z-index: 20;
	}

	.padding-chat {
		padding: 22rpx;
	}

	.margin-right {
		margin-right: 20rpx;
	}

	.margin-left {
		margin-left: 20rpx;
	}

	.padding-left {
		padding-left: 20rpx;
	}

	.flex-column-start {
		flex-direction: column;
		justify-content: center;
	}

	.chat-img {
		border-radius: 10rpx;
		width: 85rpx;
		height: 85rpx;
		background-color: #FFFFFF;
	}

	.chat-img-ai {
		border-radius: 10rpx;
		width: 400rpx;
		height: 400rpx;
		background-color: #FFFFFF;
	}

	.flex-row-around {
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}

	.flex-row-between {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.status_bar-fixed {
		width: 750rpx;
		background-color: #f1f1f1;
		z-index: 20;
	}

	.center-box {
		width: 720rpx;
		padding-left: 25rpx;
	}

	.tb-nv {
		width: 50rpx;
		height: 50rpx;
	}

	.wid {
		width: 480rpx;
	}

	.box-normal {
		width: 750rpx;
		height: 0;
		background-color: #FFFFFF;
	}

	.flex-row-around {
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}

	.tb-text {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.flex-column-center {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: fixed !important;
		background-color: #f3f3f3;
		border-radius: 10rpx;
		z-index: 9999999;
	}

	.safeArea {
		width: 750rpx;
		position: fixed;
		bottom: 0px;
		background-color: #f3f3f3;
	}


	.bottom-foot-char {
		background-color: #f1f1f1;
		//width: 750rpx;
		padding: 20rpx 0 20rpx 0;
		/* #ifndef APP-NVUE */
		flex-flow: row;
		/* #endif */
	}

	.padding-top {
		padding-top: 10rpx;
	}

	.padding-right {
		padding-right: 20rpx;
	}

	.justify-end {
		flex-direction: row-reverse;
	}

	.nv-chat {
		flex-wrap: wrap-reverse;
	}

	.nv-row {
		flex-direction: row
	}

	.nv-rowever {
		flex-direction: row-reverse
	}

	.white-bg {
		background-color: #95eb67;
	}

	.gr-bg {
		background-color: #ffffff;
	}


	.chat-time {
		text-align: center;
		padding-top: 18rpx;
		font-size: 28rpx;
		color: #8f8f8f;
		margin-bottom: 20rpx;
	}

	.system-msg {
		text-align: center;
		padding-top: 18rpx;
		font-size: 24rpx;
		color: #8f8f8f;
	}

	.ing {
		top: 50rpx;
		position: absolute;
		text-align: center;
		justify-content: center;
		align-items: center;
	}


	.scroll-view_H {
		flex-direction: row;
		padding-top: 60rpx;
		padding-bottom: 60rpx;
		height: 380rpx;
		width: 750rpx;
		flex-wrap: wrap;
	}

	code {
		background-color: #ccc;
		color: #333;
		display: inline-block;
		padding: 2rpx;
	}


	pre code,
	.language-java {
		background-color: #202123;
		color: #FFFFFF;
		display: inline-block;
		overflow: auto;
		white-space: pre;
		padding: 10rpx;
		border-radius: 10rpx;
		width: 95%;
	}

	img {
		width: 500rpx;
	}
</style>
