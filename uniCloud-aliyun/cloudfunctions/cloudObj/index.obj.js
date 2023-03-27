// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
const db = uniCloud.database()
module.exports = {
	 _before:  function () { // 通用预处理器
		
	},
	 async get(num=5){
		return await db.collection('article').limit(num).get()
	},
	add:async ()=>{
		return await db.collection('article').add({
			title:'潘某666',
			content:'这是我的 内容',
			time:Date.now()
		})
	}
}
