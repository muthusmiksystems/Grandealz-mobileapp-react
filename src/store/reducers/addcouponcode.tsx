import axios from "axios";
import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from 'react-native';


export const AddCouponHandle = createAsyncThunk('put/addcouponHandlecall', async (data, thunkAPI) => {
    try {
        const payload = { "coupon_code": data };
        const token = await AsyncStorage.getItem('loginToken');
        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
        // console.log("headers.data",data,"ssksks",headers)
        let result = await axios.put(`${'https://api.grandealz.vytech.co'}/cart/apply-coupon`, payload, { headers: headers });
        // console.log("Responce in api call",response);
        return result.data
    } catch (err) {
        console.log("catch error Api error.. .. .. w..", err.message);
        // ToastAndroid.showWithGravity(
        //     'Please try again later',
        //     ToastAndroid.SHORT,
        //     ToastAndroid.CENTER,
        // );
    }
})


export const AddCouponHandleSlice = createSlice({
    name: 'AddCouponHandle',
    initialState: {
        data: "No data",
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        console.log(AddCouponHandle, "search....too response")
        builder.addCase(AddCouponHandle.fulfilled, (state, action) => {
            state.data = action.payload;
            // console.log("gggg", state.data)
        })
    },
})
export default AddCouponHandleSlice.reducer;