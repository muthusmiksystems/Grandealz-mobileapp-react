import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import axios from 'axios'
import { Register_Url } from '../../services/constant';

export const registerHandler = createAsyncThunk('posts/loginPostcall', async (data,thunkAPI) => {

    // console.log("Inside the api call", data);
    // console.log(Register_Url,"Response");
    // const payload = data;
    // const headers = { 'Content-Type': 'application/json', }
    // return await axios.post(Register_Url, payload,{ headers: headers }).then(response => {
    //     console.log(Register_Url,"Response", response);
    //     return response
    // }).catch((err) => {
    //     console.log(err)
    // })
    try {
        const payload = data;
        let result = await axios.post(`${'https://api.grandealz.vytech.co'}/auth/register`, payload);
        console.log("result inside the login page",result.data.status)
        if (parseInt(result.data.status) === 200) {
            console.log({ responseData: result.data.data });
            return result.data
        } else if(parseInt(result.data.status)== 401 ){
            console.log({responseData: result.data})
        }else {
            console.log('Login Error', result);
            return result.data.message
        }
    } catch (error) {
        console.log('Login Catch Error', error);
    }

})

export const registerHandleSlice = createSlice({
    name: 'registerHandle',
    initialState: {
        data: "No data",
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
       
         console.log(registerHandler, "search response")
        builder.addCase(registerHandler.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    },
})
export default registerHandleSlice.reducer;


