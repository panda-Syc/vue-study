import Vue from "vue"
import Vuex from "vuex"

Vue.use( Vuex );

export const store = new Vuex.Store({
	state:{
      product:[
        {
          name:"草莓",
          price:100,
        },
        {
          name:"荔枝",
          price:80,
        },
        {
          name:"苹果",
          price:60,
        },
        {
          name:"香蕉",
          price:40,
        }
      ],
	},
	getters:{
		newProduct:( state )=>{
			var newProduct=state.product.map( res=>{
				return{
					name:res.name,
					price:res.price/2
				}
			} )
			return newProduct;
		}
	},
	mutations:{
		arrChange:( state )=>{
			state.product.forEach( res=>{
				res.price+=1;
			} )
		},
		arrChange2:( state )=>{
			state.product.forEach( res=>{
				res.price-=1;
			} )
		},
		arrChange4:( state,ply )=>{
			state.product.forEach( res=>{
				res.price-=ply;
			} )
		},
		arrChange6:( state )=>{
			state.product.forEach( res=>{
				res.price-=10;
			} )	
		}
	},
	actions:{
		arrChange3:( context,ply )=>{
			setTimeout( function(){
				context.commit( "arrChange4",ply );
			},2000 )
		},
		arrChange5:( context )=>{
			setTimeout( function(){
				context.commit( "arrChange6" );
			} )
		}
	}
})