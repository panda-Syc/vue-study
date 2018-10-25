<template>
 	<div id="product-list-one">
 		<h2>Product List One</h2>
 		<ul>
 			<li v-for="product in getters">
 				<span>{{ product.name }}</span>
 				<span class="price">${{ product.price }}</span>
 			</li>

 		</ul>
 		<button @click="add()">点击添加</button>
 		<button @click="arrChange2()">点击减少</button>
 		<button @click="priceArr(5)">点击变化</button>
 		<button @click="arrChange5()">点击变化2</button>
 	</div>
</template>

<script>
import { mapMutations } from "vuex"
import { mapActions } from "vuex"
export default {
	computed:{
		products(){
			return this.$store.state.product;
		},
		getters(){
			/*var newArr=this.$store.state.product.map( res=>{
				return{
					name:res.name,
					price:res.price/2
				}
			} )
			return newArr;*/
			return this.$store.getters.newProduct;
		}
	},
	methods:{
		add(){
			this.$store.commit( "arrChange" );
		},
		...mapMutations([
			"arrChange2"
		]),
		priceArr(ply){
			this.$store.dispatch( "arrChange3",ply );
		},
		...mapActions([
			"arrChange5"
		])

	}
}
</script>

<style scoped>
#product-list-one{
	background: #fff8b1;
	box-shadow: 1px 2px 3px rgba( 0,0,0,0.2 );
	margin-bottom: 30px;
	padding:  10px 20px;
}
#product-list-one ul{
	padding: 0;
}
#product-list-one li{
	display: inline-block;
	margin-right: 10px;
	margin-top: 10px;
	padding: 20px;
	background: rgba(255,255,255,0.7);
}
.price{
	font-weight: bold;
    color: #E8800C;
}
</style>