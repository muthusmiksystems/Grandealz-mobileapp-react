import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import axios from 'axios'
import { Verify_Url } from '../../services/constant';

export const drawwinnersHandler = createAsyncThunk('posts/Drawwinnerscall', async (thunkAPI) => {
    try {
        console.log(("inside the draw api"));
        
        let result = await axios.get(`${'https://api.grandealz.vytech.co'}/draws/winners`);
        console.log("result inside the DrawWinner data page",result.data.status)
        if (parseInt(result.data.status) === 200) {
            console.log({ responseData: result.data.data });
            return result.data.data;
        } else if(parseInt(result.data.status)== 401 ){
            console.log({responseData: result.data})
        }else {
            console.log('Draw winner Error', result);
            return result.data.message
        }
    } catch (error) {
        console.log('Login Catch Error', error);
    }

})

export const drawwinnersHandleSlice = createSlice({
    name: 'drawWinnersHandle',
    initialState: {
        data: "No data",
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
       
        builder.addCase(drawwinnersHandler.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    },
})
export default drawwinnersHandleSlice.reducer;


