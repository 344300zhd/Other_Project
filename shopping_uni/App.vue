<script>
	export default {
		globalData:{
			msg:"全局数据"
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("./style/public.css");
	/*每个页面公共css */
	html,body{
		background-color: #F1F1F1;
		width: 100%;
	}
	view{
		box-sizing: border-box;
	}
</style>
