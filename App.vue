<script>
	import initApp from '@/common/appInit.js';
	import openApp from '@/common/openApp.js';
	import WebSocket from '@/common/websocket.js';
	// #ifdef H5
	openApp() //创建在h5端全局悬浮引导用户下载app的功能
	// #endif
	import uniIdPageInit from '@/uni_modules/uni-id-pages/init.js';
	export default {
		globalData: {
			searchText: '',
			appVersion: "V1.0.0",
			name: '微AI聊天',
			github_: 'https://github.com/gulihua10010/wxmini-*****',
			github: 'https://github.com/gulihua10010/wxmini-**********',
			blog: 'https://jianwoo.cn',
			blogDetail: 'https://jianwoo.cn/detail?id=3267583046918340611',
			server: "http://192.168.0.103:8080/",
			websocket: "ws://192.168.0.103:8080/"
		},
		onLaunch: function() {
			console.log('App Launch')
			this.globalData.$i18n = this.$i18n
			this.globalData.$t = str => this.$t(str)
			initApp();
			uniIdPageInit()
			uni.request({
				url: this.globalData.server + '/status',
				data: {},
				success: (res) => {
					console.log("status: " + res.data.state);
					uni.setStorageSync('status', res.data.state);
					if (res.data.state) {
						// 连接socket
						this.globalData.$socket = new WebSocket({
							url: this.globalData.websocket + "/websocket"
						})
					}
				},
				fail: (res) => {}
			});


			uni.request({
				url: this.globalData.server + '/cache/YhI86Yjjoko',
				data: {},
				success: (res) => {
					console.log(res.data);
					uni.setStorageSync('isDebug', res.data === 'TRUE');
				},
				fail: (res) => {}
			});


			// #ifdef APP-PLUS
			// #endif

			// #ifdef H5
			// #endif

			// #ifdef APP-PLUS
			//idfa有需要的用户在应用首次启动时自己获取存储到storage中
			/*var idfa = '';
			var manager = plus.ios.invoke('ASIdentifierManager', 'sharedManager');
			if(plus.ios.invoke(manager, 'isAdvertisingTrackingEnabled')){
				var identifier = plus.ios.invoke(manager, 'advertisingIdentifier');
				idfa = plus.ios.invoke(identifier, 'UUIDString');
				plus.ios.deleteObject(identifier);
			}
			plus.ios.deleteObject(manager);
			console.log('idfa = '+idfa);*/
			// #endif
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},

		destroyed() {
			console.log('App destroyed')
			getApp().$socket.close();
		}


	}
</script>

<style lang="scss">
	@import "@/static/icon/iconfont.css";
	@import "@/uni_modules/uview-ui/index.scss";
</style>
