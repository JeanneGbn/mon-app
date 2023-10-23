import { createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios';


export const userNameEdit=createAsyncThunk(
    'user/userNameEdit',
    async(nameEdit)=>{
      const request = await Axios.put(`http://127.0.0.1:3001/api/v1/user/profile`, nameEdit, {
        headers:{
        "Accept": "application/json",
        "Authorization": `Bearer${localStorage.getItem("token").replaceAll('"','')}`}
      });
      const response = await request.data;
      return response;
    }
    );
    
    export const loginUser=createAsyncThunk(
      'user/loginUser',
      async(userCredential)=>{
            const request = await Axios.post(`http://127.0.0.1:3001/api/v1/user/login`, userCredential);
            const response = await request.data;
            localStorage.setItem("token", JSON.stringify(response.body.token))
            return response;
      }
    );
    
    export const userProfile=createAsyncThunk(
      'user/userProfile',
      async()=>{
         const request = await Axios.post(`http://127.0.0.1:3001/api/v1/user/profile`, null, {
            headers: {
               "Accept": "application/json",
               "Authorization": `Bearer${localStorage.getItem("token").replaceAll('"','')}`}
         })
         const response = await request.data;
        return response;
      }
    )