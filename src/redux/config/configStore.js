//configureStore 자동셋업됨 devtools,combinereducer,thunk

import { configureStore } from "@reduxjs/toolkit";

import productSlice from "../modules/productSlice";

const store = configureStore({
    
  reducer: {
    productSlice
  },
  
  //dev tool을 개발 환경에서만 설정
  // devTools: process.env.REACT_APP_MOD !== "production",
});

export default store;