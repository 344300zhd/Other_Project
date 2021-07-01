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
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
            uni.request({
            	url:"https://www.imovietrailer.com/superhero/index/carousel/list",
				method:"post",
				success:(res)=>{
					console.log(res)
				}
            })
		},
		methods: {

		}
	}
</script>

<style>
@import url("index.css");
</style>
