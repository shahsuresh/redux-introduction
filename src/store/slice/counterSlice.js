import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:1,
    },
    reducers:{
        // setCount:()=>{},
        incrementCount: (state,action) => {
            state.value += 1
          },
        decrementCount: (state,action)=>{
            state.value-=1;
        },
        resetToZero: (state,action)=>{
            state.value = 0 ;

        }

    }

})
// Action creators are generated for each case reducer function
export const { setCount,incrementCount, decrementCount,resetToZero} = counterSlice.actions;

export default counterSlice.reducer;