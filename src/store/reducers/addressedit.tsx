import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Verify_Url } from '../../services/constant';

export const addressEditHandler = createAsyncThunk('posts/AddressEDitcall', async (data,thunkAPI) => {
        
    try {
        const token=await AsyncStorage.getItem('loginToken');
        const headers={'Authorization':`Bearer ${token}`};
        const ids=data.id;
        const payload=data.payload;
        //const design=`${'https://api.grandealz.vytech.co'}/addresses/${id}`;
        console.log("api data inside the log",data)

        let result = await axios.put(`${'https://api.grandealz.vytech.co'}/addresses/${ids}`,payload,{ headers:headers });
        console.log("result inside the adrres edit",result.data.message)
        if (parseInt(result.data.status) === 200) {
            console.log({ responseData: result.data.data });
            return result.data.message;
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

export const addressEditHandleSlice = createSlice({
    name: 'addressEdit',
    initialState: {
        data: "No data",
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
       
        builder.addCase(addressEditHandler.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    },
})
export default addressEditHandleSlice.reducer;


