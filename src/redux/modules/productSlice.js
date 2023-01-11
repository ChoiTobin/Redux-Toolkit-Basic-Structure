import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
//import axios from "axios";
//import Apis from "../../shared/Apis"
//import { current } from "@reduxjs/toolkit"
//reducer를 만드는걸 도와준다. createslice는 객체를 매개변수로 받고 name:slice이름,init,reducer가 반드시 있어야한다.



/*
const URI = {
    BASE: process.env.REACT_APP_BASE_URI,
};
*/
let initialState ={
    productList:[],
    selectedItem:null,
}

export const __CreateRoom = createAsyncThunk(
    "/chat/__CreateRoom",
    async (payload, thunkAPI) => {
      try {
        const response = await Apis.CreateRoom(payload)
        return thunkAPI.fulfillWithValue(response.data.data);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );


export const productSlice = createSlice({
name:"product",
initialState,
reducers:{
//객체를 받고 함수로 이루어짐
    getAllProducts(state,action){
        state.productList = action.payload.data
    },
    getSingleProduct(state,action){
        state.selectedItem = action.payload.data
    }
},
extraReducers: {
    [__CreateRoom.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__CreateRoom.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productList = action.payload;
      
    },
    [__CreateRoom.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
}
})


export default productSlice.reducer;
//위가 reducers여도 마지막에는 결국 reducer이기 때문에 reducer를 보내줘야한다.