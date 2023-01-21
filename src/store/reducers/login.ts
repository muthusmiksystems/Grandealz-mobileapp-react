import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import axios from 'axios'
import { Login_Url } from '../../services/constant';
export const loginHanlder = createAsyncThunk('posts/loginPostcall', async (thunkAPI) => {

    // console.log("Inside the api call", data);

    const payload = { "email": "cheranc7c7@gmail.com", "password": "Cheran@123"};
    const headers = { 'Content-Type': 'application/json', }
    return await axios.post(Login_Url, payload, { headers: headers }).then(response => {
        console.log("Response", response);
        return response
    }).catch((err) => {
        console.log(err)
    })

})

export const loginHandleSlice = createSlice({
    name: 'loginHandle',
    initialState: {
        data: "No data",
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
       
         console.log(loginHanlder, "search response")
        builder.addCase(loginHanlder.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    },
})
export default loginHandleSlice.reducer;


