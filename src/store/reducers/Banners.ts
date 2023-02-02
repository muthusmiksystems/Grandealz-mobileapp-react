import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import axios from 'axios'
import { Register_Url } from '../../services/constant';

export const bannerHandler = createAsyncThunk('posts/bannerPostcall', async (thunkAPI) => {

    try {
        let result = await axios.get(`${'https://api.grandealz.vytech.co'}/banners`,);
        console.log("result inside the login page",result.data.status)
        return result.data
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

export const bannerHandleSlice = createSlice({
    name: 'bannerHandle',
    initialState: {
        data: "No data",
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
       
         console.log(bannerHandler, "search response")
        builder.addCase(bannerHandler.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    },
})
export default bannerHandleSlice.reducer;


