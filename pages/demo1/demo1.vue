<template>
	<view>
		22
	</view>
</template>

<script>
	const db = uniCloud.database()
	const dbCmd = db.command
	export default {
		data() {
			return {
				
			};
		},
		onLoad() {
			this.getData()
		},
		methods:{
			getData(){
				db.collection('user').where({
					age:dbCmd.gt(25)
				}).get().then(res=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
