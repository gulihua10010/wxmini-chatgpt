import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Utils from '@/common/utils.js';
export default new Vuex.Store({
	state: {
		utils: new Utils(),
		userInfo: {},
		is_login: false,
		token: '',
		authType: "pwd",
		loading: false,
		webSocket: null,

	},
	mutations: {
		updateUser(state, {
			k,
			v
		}) {
			if (state.userInfo) {
				state.userInfo[k] = v
				uni.setStorageSync('user', state.userInfo)
			}
		}
	},
	actions: {
		getIsLogin({
			state,
			dispatch
		}) {
			return uni.getStorageSync('is_login');
		},
		getUser({
			state,
			dispatch
		}) {
			if (uni.getStorageSync('is_login') && uni.getStorageSync('login_type') === 'pwd') {
				return uni.getStorageSync('user');
			}
			return false;
		},
		// 登录后处理
		loginWithpwd({
			state,
			dispatch
		}, res) {
			// 存储到本地存储中
			state.is_login = true
			state.token = res.accessToken
			state.login_type = "pwd"
			res.is_login = true;
			uni.removeStorageSync('sessionList');
			uni.removeStorageSync('chatList');
			uni.setStorageSync('remember_context', false);
			uni.setStorageSync('all_ai', false);
			uni.setStorageSync('ai_gen_img', false);
			
			uni.setStorageSync('user', res)
			uni.setStorageSync('uid', res.id)
			uni.setStorageSync('token', res.accessToken)
			uni.setStorageSync('is_login', true)
			uni.setStorageSync('login_type', "pwd")
		},
		loginWithapi({
			state,
			dispatch
		}, apiKey) {
			this.state.is_login = true
			this.state.token = apiKey
			this.state.login_type = "api"
			// 存储到本地存储中
			let res = {};
			res.apiKey = apiKey;
			res.is_login = true;
			uni.removeStorageSync('sessionList');
			uni.removeStorageSync('chatList');
			uni.setStorageSync('remember_context', false);
			uni.setStorageSync('all_ai', false);
			uni.setStorageSync('ai_gen_img', false);
			
			
			uni.setStorageSync('is_login', true)
			uni.setStorageSync('login_type', "api")
			uni.setStorageSync('user', res)
			uni.setStorageSync('token', apiKey) 
		},
		loginWithtoken({
			state,
			dispatch
		}, token) {
			// 存到状态中
			this.state.is_login = true
			this.state.token = token
			this.state.login_type = "token"
			// 存储到本地存储中
			let res = {};
			res.accessToken = token;
			res.is_login = true;
			uni.removeStorageSync('sessionList');
			uni.removeStorageSync('chatList');
			uni.setStorageSync('remember_context', false);
			uni.setStorageSync('all_ai', false);
			uni.setStorageSync('ai_gen_img', false);
			
			uni.setStorageSync('user', res)
			uni.setStorageSync('token', token)
			uni.setStorageSync('is_login', true)
			uni.setStorageSync('login_type', "token") 
		},
		logout({
			state,
			dispatch
		}) {
			// 存到状态中
			this.state.is_login = false
			this.state.token = ''
			this.state.login_type = ""
			uni.removeStorageSync('user');
			uni.removeStorageSync('token');
			uni.removeStorageSync('sessionList');
			uni.removeStorageSync('chatList');
			uni.removeStorageSync('login_type');
			uni.setStorageSync('is_login', false);
			uni.setStorageSync('remember_context', true);
			uni.setStorageSync('all_ai', false);
			uni.setStorageSync('ai_gen_img', false);
			uni.setStorageSync('showDemoTips', true);
			uni.setStorageSync('sync_session', false);
		}



	}

})
