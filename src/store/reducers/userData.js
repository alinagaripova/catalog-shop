import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: "",
  isLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addData(state =  initialState.userData, action ) {
      state.userData = action.payload
    },
    toogleLoading(state =  initialState.isLoading, action ) {
      state.isLoading = action.payload
    },
  }
})

export default userSlice.reducer;