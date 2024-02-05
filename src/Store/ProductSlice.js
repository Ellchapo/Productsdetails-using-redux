import { createSlice } from "@reduxjs/toolkit";

const Productslice = createSlice({
    name:"Product",
    initialState:[],
    reducers:{
        addProduct:(state,action)=>{
          // state=[...state,action.payload];
          state.push(action.payload)
        }
    }
})
export const {addProduct} = Productslice.actions;
export default Productslice.reducer;