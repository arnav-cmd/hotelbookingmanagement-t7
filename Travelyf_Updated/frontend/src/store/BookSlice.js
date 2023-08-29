import {createSlice} from "@reduxjs/toolkit";

const initialState={
   hotel:[],
   date:[],
   guest:[]
};
const BookSlice=createSlice({
    name:"book",
    initialState,
    reducers:{
        hotels:(state,action)=>{
            state.hotel=action.payload;
            // state.hotelname=HotelName;
            // state.city=City;
            // state.area=Area;
        },
        dates:(state,action)=>{
            state.date=action.payload;
        },
        guestcount:(state,action)=>{
            state.guest=action.payload
        }
    }
})
export const {hotels,dates,guestcount}=BookSlice.actions;
export const BookReducer=BookSlice.reducer;