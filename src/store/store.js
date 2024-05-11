import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cart-slices'

const store = configureStore({
  reducer:{
    cart:cartReducer,
  }
})

export default store;

//리덕스를 사용하기 위해선
//index.js에서 app컴포넌트를 provide로 감싸야함