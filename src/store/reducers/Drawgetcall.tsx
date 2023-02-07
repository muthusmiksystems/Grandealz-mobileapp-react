import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import axios from 'axios'
import { Verify_Url } from '../../services/constant';

export const drawgetHandler = createAsyncThunk('posts/Drawgetcall', async (thunkAPI) => {
    try {
        console.log(("inside the draw api"));
        
        let result = await axios.get(`${'https://api.grandealz.vytech.co'}/draws`);
        console.log("result inside the Draw page",result.data.status)
        if (parseInt(result.data.status) === 200) {
            console.log({ responseData: result.data.data });
            return result.data.data
        } else if(parseInt(result.data.status)== 401 ){
            console.log({responseData: result.data})
        }else {
            console.log('Draw Error', result);
            return result.data.message
        }
    } catch (error) {
        console.log('Login Catch Error', error);
    }

})

export const drawgetHandleSlice = createSlice({
    name: 'drawGetHandle',
    initialState: {
        data: "No data",
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
       
        builder.addCase(drawgetHandler.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    },
})
export default drawgetHandleSlice.reducer;


