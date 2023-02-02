import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import axios from 'axios'
import { Verify_Url } from '../../services/constant';

export const VerifyHandler = createAsyncThunk('posts/loginPostcall', async (data,thunkAPI) => {
    try {
        const payload = data.otp;
        const headers={'Authorization':`Bearer ${data.token}` }

        let result = await axios.post(`${'https://api.grandealz.vytech.co'}/auth/verify-otp`, payload,{headers:headers});
        console.log("result inside the verification page",result.data.status)
        // if (parseInt(result.data.status) === 200) {
        //     console.log({ responseData: result.data.data });
        //     return result.data
        // } else if(parseInt(result.data.status)== 401 ){
        //     console.log({responseData: result.data})
        // }else {
        //     console.log('Login Error', result);
        //     return result.data.message
        // }
    } catch (error) {
        console.log('Login Catch Error', error);
    }

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


