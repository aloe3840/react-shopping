//createSlices
//slice : name, initialState, actions이 있음

import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const cartSlice = createSlice({
  name:"cart",
  initialState,
  reducers:{
    //reducers에는 제공할 함수를 기록
    //추가하기
    addToCart(state, action){
      state.push(action.payload)
    },
    //제거하기
    removeFromCart(state, action){
      return state.filter((item)=>item.id !== action.payload)
    }
  }
})

export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;