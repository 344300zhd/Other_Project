<template>
	<view class="container">
		<!-- 滚动视图 -->
		<!-- 小说标题 -->
		<view class="title">
			<view class="">玄幻小说</view>
			<view class="">全部 {{img.length}} 本 </view>
		</view>
		<!-- 小说横向展示 -->
		<scroll-view scroll-x="true" class="xscroll-container">
			<image :src="item.src" mode="" v-for="item in img"  :key="item.id" class="xscroll-item"></image>
		</scroll-view>
		<!-- 小说纵向展示 -->
		<view style="display: flex;justify-content: space-between;">
			<scroll-view scroll-y="true" class="yscroll-container">
				<image :src="item.src" mode="" v-for="item in img"  :key="item.id" class="yscroll-item"></image>
			</scroll-view>
			<scroll-view scroll-y="true" class="yscroll-container">
				<image :src="item.src" mode="" v-for="item in img"  :key="item.id" class="yscroll-item"></image>
			</scroll-view>
		</view>
		<!-- 滑动视图 -->
		<!-- 横向滑动 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="xswiper">
			<swiper-item v-for="item in img" :key="item.id">
				<image :src="item.src" mode="" style="width: 100%;"></image>
			</swiper-item>
		</swiper>
		<!-- 纵向滑动 -->
		<view style="margin-top: 20rpx;display: flex;justify-content: space-between">
			<swiper :indicator-dots="true" vertical="true" :autoplay="true" :interval="3000" :duration="1000" class="yswiper">
				<swiper-item v-for="item in img" :key="item.id">
					<image :src="item.src" mode="" style="width: 100%;"></image>
				</swiper-item>
			</swiper>
			<swiper :indicator-dots="true" vertical="true" :autoplay="true" :interval="3000" :duration="1000" class="yswiper">
				<swiper-item v-for="item in img" :key="item.id">
					<image :src="item.src" mode="" style="width: 100%;"></image>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			    img:[
					{id:"book1",src:"../../static/book/book1.png"},
					{id:"book2",src:"../../static/book/book2.png"},
					{id:"book3",src:"../../static/book/book3.png"},
					{id:"book4",src:"../../static/book/book4.png"},
					{id:"book5",src:"../../static/book/book5.png"},
					{id:"book6",src:"../../static/book/book6.png"}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url("user.css");
</style>
