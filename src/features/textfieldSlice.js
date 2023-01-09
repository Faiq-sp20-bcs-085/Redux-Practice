import { createSlice } from "@reduxjs/toolkit";



const textfieldSlice=createSlice({
    name:'textField',
    initialState:{
        text:''
    },
    reducers:{
        enterData:(state,action)=>{
            state.text=action.payload
        }
    }
})

export const {enterData}= textfieldSlice.actions;

export default textfieldSlice.reducer;