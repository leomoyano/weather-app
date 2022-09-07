import{createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 10,
}
export const selectedLocationSlice = createSlice({
    name: 'locationList',
    initialState: {
        locationList: [],
        isLoading: false,
        error: null,
    },
    reducers:{
        addLocation:(state, action)=>{
            state.locationList.push(action.payload);
        },
        removeLocation:(state)=>{
            // state.locationList.slice();
        },
        incrementBy:(state, action) => { 
            state.value += action.payload 
        },
        
        reset: (state) => {
            state.value = 0;
        },
    }
})

export const {addLocation, removeLocation, incrementBy, reset} = selectedLocationSlice.actions;
export default selectedLocationSlice.reducer;