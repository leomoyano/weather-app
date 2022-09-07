import{createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 10,
}
export const selectedLocationSlice = createSlice({
    name:'selectedLocation',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value += 1 
        },
        decrement:(state)=>{
            state.value -= 1 
        },
        incrementBy:(state, action) => { 
            state.value += action.payload 
        },
        
        reset: (state) => {
            state.value = 0;
        },
        
    }
})

export const {increment, decrement, incrementBy, reset} = selectedLocationSlice.actions;
export default selectedLocationSlice.reducer;