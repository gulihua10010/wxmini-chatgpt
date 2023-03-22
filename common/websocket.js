import $store from '@/store/index.js';
class websocket {
	constructor(arg) {
		this.timer = null
		this.url = arg.url
		this.isOnline = false
		this.socket = null
		this.reconnectErrorTime = 0
		this.reconnectClosedTime = 0
		this.isOpenReconnect = true
		this.loadFinish = false;
		this.retryTime = 30;
		this.retrySecTime = 2;
		this.isClosed = false;
		this.isError = false;
		this.timer = null;
		// 获取当前用户相关信息
		let user = uni.getStorageSync('user')
		this.user_token = uni.getStorageSync('token')
		this.user = user ? user : {},
			this.TO = false;
		console.log("websocket!!!!!");
		// 连接和监听
		if (this.user) {
			this.connectSocket()
		}
	}
	// 断线重连
	reconnect(type) {
		console.log(this.isOnline)
		console.log("进入reconnect准备重新链接")
		if (this.isOnline) {
			return
		}
		if (type === 1 && this.isError) {
			return;
		}
		if (this.reconnectClosedTime >= this.retryTime || this.reconnectErrorTime >= this.retryTime) {
			return this.reconnectConfirm()
		}
		if (type === 1) {
			this.reconnectClosedTime += 1
		}
		if (type === 2) {
			this.reconnectErrorTime += 1
		}
		console.log("重新链接: " + this.reconnectClosedTime)
		console.log("重新链接: " + this.reconnectErrorTime)
		this.connectSocket();

	}
	// 连接socket
	connectSocket() {
		console.log("链接connectSocket")
		let that = this;
		this.socket = uni.connectSocket({
			url: this.url,
			complete: () => {}
		})
		// 监听连接成功
		this.socket.onOpen(() => {
			this.onOpen()


		})
		// 监听接收信息
		this.socket.onMessage((res) => this.onMessage(res))
		// 监听断开
		this.socket.onClose((e) => this.onClose(e))
		// 监听错误
		this.socket.onError(() => this.onError())
		uni.onSocketClose(function(res) {
			console.log('WebSocket 已关闭！');
			that.isClosed = true;

		});

		this.socket.onClose((e) => {
			console.log(e);
			that.isClosed = true;
		})
	}
	sendMessage(message, callback) {
		if (!this.socket) {
			typeof callback === 'function' && callback(false, message);
			return;
		}
		this.socket.send({
			data: message,
			success() {
				// console.log('success')
				typeof callback === 'function' && callback(true, message);
			},
			fail() {
				console.log('fail')
				typeof callback === 'function' && callback(false, message);
			}
		})
	}
	onOpen() {
		// 用户上线
		this.isOnline = true
		this.isError = false
		this.isClosed = false
		uni.$emit('onStatus', this.isOnline)
		console.log('websocket连接成功')
		this.isOpenReconnect = true
		let that = this;
		this.timer = setInterval(function() {
			let data = {
				heart: 'ping',
				time: (new Date()).getTime()
			}
			// console.log("ping");
			that.sendMessage(JSON.stringify(data), (isSucc, res) => {
				if (!isSucc) {
					if (that.timer) {
						clearInterval(that.timer)
					}
				}

			})
		}, 30000);


	}
	onMessage(message) {
		// console.log(message.data);
		let data = JSON.parse(message.data);
		if (data.heart !== 'pong') {
			uni.$emit('onMessage', data)
		} else {
			// console.log("pong");
		}
	}

	// 监听关闭
	onClose(e) {
		// 用户下线
		this.isOnline = false
		this.socket = null
		this.isClosed = true;
		uni.$emit('onStatus', this.isOnline)
		if (this.timer) {
			clearInterval(this.timer)
		}
		console.log('socket连接已关闭')
		if (this.isOpenReconnect) {
			console.log("2秒后重新链接")
			var that = this;
			setTimeout(function() {
				that.reconnect(1);
			}, this.retrySecTime * 1000);
		}

	}
	// 监听连接错误
	onError() {
		// 用户下线
		this.isOnline = false
		this.socket = null
		this.isError = true;
		uni.$emit('onStatus', this.isOnline)
		if (this.timer) {
			clearInterval(this.timer)
		}
		console.log('socket连接错误')
		if (!this.socket && this.isOpenReconnect) {
			console.log("2秒后重新链接")
			var that = this;
			setTimeout(function() {
				that.reconnect(2);
			}, this.retrySecTime * 1000);
		}
	}
	// 关闭连接
	close() {
		if (this.socket) {
			this.socket.close()
		}
		if (this.timer) {
			clearInterval(this.timer)
		}
		this.isOpenReconnect = false
		this.isClosed = true;
		uni.$emit('onStatus', this.isOnline)
	}
	initSocketLogin(login) {
		this.socket.send({
			data: JSON.stringify(login),
			success() {
				console.log('用户IM登录成功:success')
			},
			fail(e) {
				console.log('用户IM登录失败fail:' + e)
			}
		})
	}
	// 断线重连提示
	reconnectConfirm() {
		// this.connectSocket()
		this.reconnectClosedTime = 0
		this.reconnectErrorTime = 0
	}
	// 验证是否上线
	checkOnline() {
		if (!this.isOnline) {
			// 断线重连提示
			this.reconnectConfirm()
			return false
		}
		return true
	}
	// 发送消息
	send(message, onProgress = false) {
		uni.sendSocketMessage({
			data: JSON.stringify(message),
			success: () => {

			},
			fail: () => {

			}
		})
	}
}

export default websocket
