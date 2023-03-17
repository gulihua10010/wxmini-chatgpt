import langEn from './en'
import zhHans from './zh-Hans'
import uniStarterConfig from '../uni-starter.config.js'
const {i18n:{enable:i18nEnable} }= uniStarterConfig
const messages = {
	'en': langEn,
	'zh-Hans': zhHans
}
let currentLang
if(i18nEnable){
	currentLang = uni.getStorageSync('CURRENT_LANG')
}else{
	currentLang = "zh-Hans"
}
// console.log(uni.getStorageSync('CURRENT_LANG'),currentLang);
if (!currentLang) {
	if (uni.getLocale) {
		console.log('获取应用语言:', uni.getLocale());
		let language = 'en'
		if (uni.getLocale() != 'en') {
			language = 'zh-Hans'
		}
		uni.setStorageSync('CURRENT_LANG', language)
		currentLang = language
	} else {
		uni.getSystemInfo({
			success: function(res) {
				console.log('获取设备信息:', res);
				let language = 'zh-Hans'
				if (res.language == 'en') {
					language = 'en'
				}
				uni.setStorageSync('CURRENT_LANG', language)
				currentLang = language
			},
			fail: (err) => {
				console.error(err)
			}
		})
	}
}
let i18nConfig = {
	locale: currentLang, // set locale
	messages // set locale messages
}

// #ifdef VUE2
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)
// #endif

// #ifdef VUE3
import {
	createI18n
} from 'vue-i18n'
const i18n = createI18n(i18nConfig)
// #endif

export default i18n


if(i18nEnable){
console.log(`
	你已开启多语言国际化，将自动根据语言获取【lang/en.js】或【lang/en.js】文件中配置的tabbar的值，
	覆盖你在pages.json中的tabbar的值
	如果你不需要多语言国际化，请打开配置文件uni-starter.config.js找到 -> i18n -> enable把值设置为false
`);
	let initLanguageAfter = () => {
		function $i18n(e){
			// #ifdef VUE3
			return i18n.global.messages[i18n.global.locale][e]
			// #endif
			return i18n.messages[i18n.locale][e]
		}
		setTimeout(function(){
			//底部tabbar更新
			$i18n('tabbar').split(',').forEach((text, index) => {
				// console.log(text);
				uni.setTabBarItem({
					index,
					text,
					complete: e => {
						// console.log("e: " + JSON.stringify(e));
					}
				})
			})
		},1)
	}
	initLanguageAfter()
	uni.$on('changeLanguage', e => {
		console.log('changeLanguage', e);
		initLanguageAfter(e)
	})
}