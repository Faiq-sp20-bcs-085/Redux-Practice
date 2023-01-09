import { createSlice } from "@reduxjs/toolkit";



const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        amount:0,
        total:0,
    },
    reducers:{
        AddToCart:(state,action)=>{
            let {price}=state.cartItems;
            const cartIndex=state.cartItems.findIndex((item)=> item.id === action.payload.id );
            if(cartIndex>=0){
                state.cartItems[cartIndex].qty=state.cartItems[cartIndex].qty+1;
                state.cartItems[cartIndex].total=state.cartItems[cartIndex].qty * state.cartItems[cartIndex].price
                state.amount++;
            }
            else{
                
                state.cartItems.push({...action.payload,qty:1,total:price})
                state.amount++;
            }
        },

       calculatetotal:(state)=>{
        let amt=0;
        let tot=0;
        state.cartItems.forEach((item)=>{
            amt=amt+ item.qty;
            tot=tot+ (item.qty*item.price);
        })
        state.amount=amt;
        state.total=tot;

       },
       addItem:(state,action)=>{
        const id=action.payload;
        let cartItem=state.cartItems.find((item)=> item.id === id);
        cartItem.qty++;
        state.amount++;
       },
       clearCart:(state,action)=>{
        state.cartItems=[];
       },
        
       removeItem:(state,action)=>{
        let id=action.payload;
        const cartItem=state.cartItems.find((item)=>item.id=== id);
        cartItem.qty--;
        state.amount--;
       }
       
    }
})

export const {AddToCart,calculatetotal,addItem,clearCart,removeItem}=cartSlice.actions

export default cartSlice.reducer;