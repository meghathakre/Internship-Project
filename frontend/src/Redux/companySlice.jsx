import { createSlice } from "@reduxjs/toolkit";


const companySlice=createSlice({
    name:"mycompanycard",
    initialState:{
        card:[]

    },
    reducers:{
addtocomapany:(state,action)=>{
    const mydata=state.card.filter((key)=>key.id==action.payload.id)
    
}
    }
})
export const { }= companySlice.actions;
export default companySlice.reducer;