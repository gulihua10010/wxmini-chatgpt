<template>
	<view>
		<view class="nvue-page-head" ref="pagehead" id="pagehead">
			<view class="navbar" ref="navbar">
				<uni-nav-bar :status-bar="true" :leftIconBool="true" @clickLeft="$store.state.utils.back()" left-icon="back" :fixed="true"
					 title="协议及说明">
				</uni-nav-bar>
			</view>
		</view>
		<view style="margin: 10px 20px;" v-if="isDebug">
			<ul>
				<li>1.本{{platform}}是 基于 <strong> ChatAI-turbo</strong> 做的{{weixin}} {{platform}}端 AI 聊天应用；</li>
				<li>2.{{platform}}完全开源免费，后续可能会适当加一些广告来维持服务器的运营费用；</li>
				<li>3.<strong style="color:red">[重要]:</strong>{{platform}}和服务器端的程序不会对账号密码、accessToken、 API-Key、用户信息做任何存储和日志记录，这点可以放心使用。
				开发者高度优先考虑您的API密钥/Access Token/账号信息的安全，并非常小心地处理它。您的密钥将专门存储在您的{{client}}中，并且永远不会与任何第三方实体共享。它仅用于授权的预期用途，而不是用于任何其他未经授权的用途。 源代码已经开源，可以查看验证。如何您不信任本{{platform}},可以使用API-Key的方式，用完可以随时在官网删除相关API-Key；</li>
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
		<view style="margin: 10px 20px;" v-else>
			<ul>
				<li>1.本{{platform}}是 基于 <strong> ChatAI-turbo</strong> 做的{{weixin}} {{platform}}端 AI 聊天应用；</li>
				<li>2.{{platform}}完全开源免费，后续可能会适当加一些广告来维持服务器的运营费用；</li>
				<li>3.<strong style="color:red">[重要]:</strong>{{platform}}和服务器端的程序不会对账号密码、accessToken、API-Key、用户信息做任何存储和日志记录，这点可以放心使用。
				开发者高度优先考虑您的API密钥/Access Token/账号信息的安全，并非常小心地处理它。您的密钥将专门存储在您的{{client}}中，并且永远不会与任何第三方实体共享。它仅用于授权的预期用途，而不是用于任何其他未经授权的用途。 源代码已经开源，可以查看验证。如何您不信任本{{platform}},可以使用API-Key的方式，用完可以随时在官网删除相关API-Key；</li>
				<li>5.服务器的带宽不高，服务请求可能会花一些时间，可能由于超时不能保证每次都能请求成功；</li>
				<li>6.<strong style="color:red">[免责声明]:</strong>本{{platform}}({{appName}})仅供娱乐, 且仅用于测试和学习研究！禁止将源码({{platform}}端和服务端)用于商业用途，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断。
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
				validTime:"2023-03-09",
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
