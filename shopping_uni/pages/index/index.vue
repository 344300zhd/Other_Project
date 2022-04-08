<template>
	<view class="page">
		<swiper class="carousel" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
                <image class="carousel" src="../../static/carousel/batmanvssuperman.png"></image>
			</swiper-item>
			<swiper-item>
                <image class="carousel" src="../../static/carousel/spiderman.png"></image>
			</swiper-item>
		</swiper>
		
		<button :loading="!canstart"  type="default" style="margin-top:20rpx" size="mini" @click="start" :disabled="!canstart">启动定时炸弹</button>
		<button type="default"  @click="stop" size="mini">暂停定时炸弹</button>
		<view hover-class="danger" hover-stay-time="500" style="font-size:26px;font-weight: bold;color: red;text-align: center;border:1px solid red">
			{{`炸弹将在${endtime}秒后爆炸`}}
		</view>
		<view class="">
			{{msg}}
		</view>
		<text>一段文本</text>
		<text>一段文本</text>
		
		<view class="main">
			<!-- 进度条 -->
				<progress percent="20" show-info border-radius="5" />
				
				<view class="form">
					<view class="">选择地区----普通选择器</view>
					<view class="" style="display: flex;">
						<view class="" style="color:#808080;font-size: 14px;margin-right: 40rpx;">当前选择</view>
						<picker :range="area" :value="index" @change="pick_area">
							<view>{{area[index]}}</view>
						</picker>
					</view>
					
					<view class="" style="margin-top: 20rpx;">选择日期----日期选择器</view>
					<view class="" style="display: flex;">
						<view class="" style="color:#808080;font-size: 14px;margin-right: 40rpx;">当前选择</view>
						<picker :value="date" mode="date"  @change="pick_date">
							<view>{{date}}</view>
						</picker>
					</view>
					
					<view class="" style="margin-top: 20rpx;">选择时间----时间选择器</view>
					<view class="" style="display: flex;">
						<view class="" style="color:#808080;font-size: 14px;margin-right: 40rpx;">当前选择</view>
						<picker :value="time" mode="time"  @change="pick_time">
							<view>{{time}}</view>
						</picker>
					</view>
				</view>
				
				<view class="" style="background-color: #fff;padding: 10rpx;margin-top: 20rpx;">
					<view class="">
						用户信息
					</view>
					<view class="">
						您所居住的城市:{{area[index]}}
					</view>
					<view class="">
						您预约疫苗的日期:{{date}}
					</view>
					<view class="">
						您预约疫苗的时间:{{time}}
					</view>
					<button type="warn" style="margin-top: 20rpx;">预约</button>
				</view>
				
				<slider @change="" value="5" step="2"/>
				
				<view class="" style="display: flex;">
					<view class="">
						开启实时监控:
					</view>
					<switch checked="true" @change="" />
				</view>
				
				<audio style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" controls></audio>
		
		        <map style="width: 100%; height: 300px;" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
		</view>
	</view>
</template>

<script>
	// 获取全局数据
	const app = getApp().globalData
	export default {
		data() {
			return {
				msg:"",
				timeoutId:'',
				canstart:true,
				intervalid:'',
				endtime:10,//倒计时,
				area:['广州','深圳','东莞','厦门','杭州'],
				index:0,
				date:"1999-01-12",
				time:'00:00',
				current: {
				                poster: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7fbf26a0-4f4a-11eb-b680-7980c8a877b8.png',
				                name: '致爱丽丝',
				                author: '暂无',
				                src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3',
				            },
				            audioAction: {
				                method: 'pause'
				            },
							  id:0, // 使用 marker点击事件 需要填写id
							            title: 'map',
							            latitude: 39.909,
							            longitude: 116.39742,
							            covers: [{
							                latitude: 39.909,
							                longitude: 116.39742,
							                iconPath: '../../../static/location.png'
							            }, {
							                latitude: 39.90,
							                longitude: 116.39,
							                iconPath: '../../../static/location.png'
							            }]
			}
		},
		onLoad() {
			console.log("全局数据:",app.msg);
            uni.request({
            	url:"https://www.imovietrailer.com/superhero/index/carousel/list",
				method:"post",
				success:(res)=>{
					console.log(res)
				}
            })
		}, 	
		methods: {
			pick_area(e){
				this.index = e.target.value
			},
			
			pick_date(e){
				this.date = e.target.value
				console.log(e);
			},
			
			pick_time(e){
				this.time = e.target.value
			},
			
            start(){
				this.canstart = false
				this.endstart()
				this.timeoutId = setTimeout(()=>{
					this.msg = "炸弹爆炸"
				},10000)
			},
			
			stop(){
				this.canstart = true
				clearTimeout(this.timeoutId)
				clearInterval(this.intervalid)
				this.msg = "炸弹拆除"
			},
			
			endstart(){
				this.endtime == 0 ? this.endtime = 10 : this.emdtime = 0
				this.intervalid =  setInterval(()=>{
					this.endtime -= 1
					if(this.endtime == 0) {
						clearInterval(this.intervalid)
					}
					},1000)
			}
		}
	}
</script>

<style>
@import url("index.css");
</style>
