<template>
	<view class="cart">
	<!-- 购物车为空 -->
	<view v-if="!cartList.length">
		<image class="w100" src="../../static/cart/noGood.png" mode="scaleToFill"></image>
	</view>
	<!-- 购物车不为空 -->
	<view class="goodtitle" v-if="cartList.length">
		<view class="">
			共 <span class="c-red bold">{{" " + cartList.length + " " }}</span>件商品
		</view>
		<view class="" @tap="deletegood">
			{{deletebtn == false ? "编辑" : "完成"}}
		</view>
	</view>
	
	<view class="good" v-for="(item,index) in cartList" :key="item.id">
		<checkbox-group @change="(e)=>selectgood(e,index)">
			<label>
				<checkbox :value="item.id" :checked="item.check"/><text></text>
			</label>
		</checkbox-group>
		<image class="goodimg" src="../../static/carousel/batmanvssuperman.png" mode=""></image>
		<view class="info">
			<view class="hide2 f-14">
				{{item.name}}
			</view>
			<view class="f-12 c-8080">
				规格:{{item.unit}}
			</view>
			<view class="buy">
				<view class="c-red bold">
					￥{{item.price}}
				</view>
				<view class="num">
					<view class="icon" @tap="changenum(1,index)">+</view>
					<input type="text" v-model="item.num"/>
					<view class="icon" @tap="changenum(0,index)">-</view>
				</view>
			</view>
		</view>
	</view>
	
	<view class="calc">
		<view class="">
			<checkbox-group name="" @change="checkall">
				<label>
					<checkbox :checked="allcheck" /><text>全选</text>
				</label>
			</checkbox-group>
		</view>
		<view class="flex f-14" v-if="!deletebtn">
			<view class="m-t-10">
				<view class="">
					您选择了<span class="c-red bold">{{ " " + goodtype + " "}}</span>种商品，共
					<span class="c-red bold">{{" " + goodnum + " "}}</span>件
				</view>
				<view class="">
					总计:<span class="c-red bold">{{" " + money + " "}}</span>元
				</view>
			</view>
			<view class="btn" @tap="pay">
				结算
			</view>
		</view>
		<view class="btn" v-if="deletebtn" @tap="dodelete">
			删除
		</view>
	
	</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cartList:[
					{
						name:"蝙蝠侠手办+精美小礼品+手机膜三张+精美包装盒+120元话费充值卷",
						price:299,
						unit:"20kg*2",
						id:1,
						num:10,
						check:false
					},{
						name:"蝙蝠侠手办+精美小礼品+手机膜三张+精美包装盒",
						price:188,
						unit:"20kg*1",
						id:2,
						num:20,
						check:false
					},{
						name:"蝙蝠侠手办",
						price:100,
						unit:"10kg*2",
						id:3,
						num:32,
						check:false
					}
				],
				allcheck:false,
				money:0,
				goodtype:0,
				goodnum:0,
				deletebtn:false
			}
		},
		methods: {
			deletegood(){
				this.deletebtn = !this.deletebtn
			},
			
			pay(){
				let self = this
				uni.showModal({
					title:"结算提示",
					content:`你需支付${self.money}元`,
					success:function(res){
						if(res.confirm){
							uni.showToast({
								title:"支付成功"
							})
						}else if(res.cancel){
							uni.showToast({
								title:"取消支付"
							})
						}
					}
				})
			},
			
			dodelete(){
				let self = this
				uni.showModal({
					title:"温馨提示",
					content:"是否确认删除商品?",
					success:function(res){
						if(res.confirm){
							self.cartList = self.cartList.filter(item =>{return item.check != true})
							if(self.cartList.filter(item=> {return item.check == true}).length == 0){
								self.allcheck = false
							}
						}
						}
				})
				
			},
			
			selectgood(e,id){
				let index = id
				this.cartList[index].check = !this.cartList[index].check
				if(this.allcheck == true){
					this.allcheck = !this.allcheck
				}
				if(this.cartList.filter(item=> {return item.check == true}).length == this.cartList.length){
					this.allcheck = true
				}
				this.getnum()
			},
			
			getnum(){
				let checkgood = this.cartList.filter(item=>{return item.check == true})
				this.goodtype = checkgood.length
				this.goodnum = checkgood.reduce((sum,item)=>{
					return sum+item.num
				},0)
				this.money= checkgood.reduce((sum,item)=>{
					return sum+item.num*item.price
				},0)
			},
			
			changenum(type,index){
				switch(type){
					case 0:
					    if(this.cartList[index].num > 0){
							this.cartList[index].num -= 1
						}else{
							this.cartList[index].num = 0
						}  
						this.getnum()
						break;
					case 1:
					    this.cartList[index].num += 1
						this.getnum()
					    break;
				}
			},
			
			checkall(){
				this.allcheck = !this.allcheck
				switch(this.allcheck){
					case true:
					    this.cartList.forEach(item=>{
					    	item.check = true
					    })
						this.getnum()
						break;
					case false:
					    this.cartList.forEach(item=>{
							item.check = false
						})
						this.getnum()
						break;
				}
				
			}
		}
	}
</script>

<style>
@import url("search.css");
</style>
