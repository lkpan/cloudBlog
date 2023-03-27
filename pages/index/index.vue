<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<button @click="add">新增</button>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this.getData()
		},
		methods: {
			 getData(){
				db.collection('article').get().then(res=>{
					console.log(res);
				})
			},
			add(){
				db.collection('cloudDemo').add({
					
				}).then(res=>{
					console.log(res);
				}).catch(err=>{
					uni.showToast({
						title:err.message,
						icon:'none'
					})
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
