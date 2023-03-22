<template>
	<view>
		<view class="nvue-page-head" ref="pagehead" id="pagehead">
			<view class="navbar" ref="navbar">
				<uni-nav-bar :status-bar="true" :leftIconBool="true" @clickLeft="$store.state.utils.back()" left-icon="back" :fixed="true"
					 title="协议及说明">
				</uni-nav-bar>
			</view>
		</view>
		<view style="margin: 10px 20px;">
			<ul>
				<li>1.本{{platform}}是 基于 <strong> ChatAI-turbo</strong> 做的{{weixin}} {{platform}}端 AI 聊天应用；</li>
				<li>2.{{platform}}完全开源免费，后续可能会适当加一些广告来维持服务器的运营费用；</li>
				<li>3.禁止发布违反相关法律法规和官网隐私政策的内容，一经发现，直接拉黑；</li>
				<li>4.服务器的带宽不高，服务请求可能会花一些时间，可能由于超时不能保证每次都能请求成功；</li>
				<li>5.<strong style="color:red">[免责声明]:</strong>本{{platform}}({{appName}})仅供娱乐, 且仅用于测试和学习研究！禁止将源码({{platform}}端和服务端)用于商业用途，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断。
				<br>开发者对任何用户操作所导致的问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害。
				<br>请勿将本项目的任何内容用于商业或非法目的，否则后果自负。
				<br>以任何方式查看此网站的使用者都应仔细阅读此声明。作者保留随时更改或补充此免责声明的权利。
				一旦使用并操作了本{{platform}}，则视为您已接受此免责声明。
				</li>
			</ul>
			<view>
				<ul style="float: right;">
					<li>应用名称: {{appName}}</li>
					<li>生效时间: {{validTime}}</li>
				</ul>
				</view>
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
				platform:"小程序",
				weixin:"微信",
				client:"微信小程序",
				appName:getApp().globalData.name,
				validTime:"2023-03-21",
				isDebug:false
				
			};
		},
		onShow() {
			this.isDebug = uni.getStorageSync('isDebug');
		},
		created() {
			// #ifndef  MP-WEIXIN
			 this.platform = "网站"
			 this.weixin = ""
			 this.client = "浏览器"
			// #endif
		},
		methods: {
			 
		}
	}
</script>
<style lang="scss" scoped>
	ul{
		padding: 0;
		margin: 0;
	}
	ul li{
		list-style:none;
		
	}
</style>
