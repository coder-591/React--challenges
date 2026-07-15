import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    dataFeeds:{}
}


export const infiniteFeed = createSlice({
    name:"Feed",
    initialState,

    reducer:{
        fetchData:(state,action)=>{
            

        }

    }
})


