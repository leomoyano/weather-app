import{createSlice} from '@reduxjs/toolkit'

export const selectedLocationSlice = createSlice({
    name: 'locationList',
    initialState: {
        locationList: [],
        isLoading: false,
        errorMsg: null,
    },
    reducers:{
        addLocation:(state, action)=>{
            state.locationList.push(action.payload);
        },
        removeLocation:(state, action)=>{
            const locationName = action.payload;
            state.locationList = state.locationList.filter((location) => location.id !== locationName)
        },
        errorMessage:(state, action)=>{
            state.errorMsg = action.payload.errorMsg;
        },
    }
})

export const { addLocation, removeLocation, errorMessage } = selectedLocationSlice.actions;
export default selectedLocationSlice.reducer;