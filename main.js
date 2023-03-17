import App from './App'
import i18n from './lang/i18n'


// #ifndef VUE3
import Vue from 'vue'
import websocket from '@/common/websocket.js';
import store from './store';
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
Vue.prototype.$store = store
Vue.prototype.$socket = websocket
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	i18n,
	store,
	...App
})
app.$mount()
// #endif


// #ifdef VUE3
import {createSSRApp} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	app.use(i18n)
	return {app}
}
// #endif
