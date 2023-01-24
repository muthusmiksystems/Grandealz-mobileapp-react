import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import axios from 'axios'
import { Verify_Url } from '../../services/constant';

export const VerifyHandler = createAsyncThunk('posts/loginPostcall', async (data,thunkAPI) => {

    console.log("Inside the api call", data);
    const payload = data;
    const headers = { 'Content-Type': 'application/json', }
    return await axios.post(Verify_Url, payload,{ headers: headers }).then(response => {
        console.log(Verify_Url,"Response", response);
        return response
    }).catch((err) => {
        console.log(err)
    })

})

export const verifyHandleSlice = createSlice({
    name: 'registerHandle',
    initialState: {
        data: "No data",
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
       
        builder.addCase(VerifyHandler.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    },
})
export default verifyHandleSlice.reducer;


