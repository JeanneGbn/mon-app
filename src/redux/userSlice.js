import { createSlice } from '@reduxjs/toolkit'
import { loginUser, userProfile, userNameEdit } from './API';


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
    .addCase(userProfile.rejected,(state,action)=>{
      state.userInfo = "";
      console.log(action.error.message);
   })
    .addCase(userNameEdit.fulfilled,(state, action)=>{
      console.log("Successfully changed user name !");
      state.userInfo = action.payload.body;
   })
 }
})

export const {reset} = userSlice.actions;

export default userSlice.reducer;