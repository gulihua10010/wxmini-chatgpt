// #ifdef APP-NVUE
const animation = uni.requireNativePlugin('animation');
// #endif
export default {
	data() {
		return {
			systemInfo: [],
			searchTranslateX: 0,
			pageheadHeight:0,
		}
	},
	created() {
		// #ifdef APP-NVUE
		this.systemInfo = uni.getSystemInfoSync();
		if(this.systemInfo.screenWidth == 768){
			this.searchTranslateX = parseInt(this.systemInfo.screenWidth / 2 - 88);
		}else if(this.systemInfo.screenWidth == 834){
			this.searchTranslateX = parseInt(this.systemInfo.screenWidth / 2 - 138);
		}else if(this.systemInfo.screenWidth == 1024){
			this.searchTranslateX = parseInt(this.systemInfo.screenWidth / 2 - 220);
		}else if(this.systemInfo.screenWidth > 700){
			this.searchTranslateX = parseInt(this.systemInfo.screenWidth / 2 - 100);
		}else{
			this.searchTranslateX = parseInt(this.systemInfo.screenWidth / 2 - 50) * 2;
		}
	 
		// #endif
 
	}, 
	mounted() {
		// #ifdef APP-NVUE
		var query = uni.createSelectorQuery()
		query.select('#pagehead').boundingClientRect(data => {
			this.pageheadHeight = data.height;
		}).exec(); 
		// #endif
	},
	beforeDestroy() {
	},
	methods: {
		getEl(el) {
			// #ifdef APP-NVUE
			if (typeof el === 'string' || typeof el === 'number') return el;
			if (WXEnvironment) {
				return el.ref;
			} else {
				return el instanceof HTMLElement ? el : el.$el;
			}
			// #endif
		},
	}
}
