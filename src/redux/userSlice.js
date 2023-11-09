import { createSlice } from '@reduxjs/toolkit'
import { loginUser, userProfile, userNameEdit } from './API.js';


const userSlice = createSlice({
  name: 'user',
  initialState: 
  {
   token: null,
   userInfo: ""
  },
  reducers:
  {
   reset: (state) =>{
      state.token = null;
      state.userInfo = "";
   }
  },
  extraReducers: (builder) => {
    builder

    .addCase(loginUser.fulfilled,(state, action)=>{
      state.token = action.payload.body.token;
   })
    .addCase(userProfile.fulfilled,(state, action)=>{
      state.userInfo = action.payload.body;
   })
    .addCase(userProfile.rejected,(state)=>{
      state.userInfo = "";
   })
    .addCase(userNameEdit.fulfilled,(state, action)=>{
      state.userInfo = action.payload.body;
   })
 }
})

export const {reset} = userSlice.actions;

export default userSlice.reducer;