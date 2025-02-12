import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    whishlist:[],
    wishListLoading:false,
    items:0,
}
const headers={
    token:localStorage.getItem('usertoken'),
}
export const addToWhishlist=createAsyncThunk(
    "addToWhishlist/whishlist",
    async(productId)=>{
     const {data}=await axios.post("https://ecommerce.routemisr.com/api/v1/wishlist",{productId},{headers})
     return data
    }
)
export const getWhishList=createAsyncThunk(
    "getWhishList/whishlist",
    async()=>{
        const {data}=await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",{headers})
        return data
    }
)
export const removeFromWhish=createAsyncThunk(
    "removeFromWhish/whishlist",
    async(productId)=>{
    const {data}=await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{headers})
    return data
    }
)

const WhishList=createSlice({
    name:"whishlist",
    initialState,
     extraReducers:(builder)=>{
      builder
      .addCase(addToWhishlist.pending,(state,action)=>{
        state.wishListLoading=true
      })
      .addCase(addToWhishlist.fulfilled,(state,action)=>{
       state.whishlist=action.payload.data
       state.wishListLoading=false
       state.items=action.payload.data.length
      }).addCase(getWhishList.fulfilled,(state,action)=>{
        state.whishlist=action.payload.data
        state.items=action.payload.data.length
      }).addCase(removeFromWhish.fulfilled,(state,action)=>{

      })
    
     }
})
export const whishlistReducer=WhishList.reducer