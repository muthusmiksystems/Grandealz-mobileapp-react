import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios'

async function fetchJSONAsync() {
    let response = await AsyncStorage.getItem("loginToken");
    console.log("response data", response)
    return response;
}
export const userDetailsHandler = createAsyncThunk('posts/userDeatilsPostcall', async (thunkAPI) => {

    try {
        const key = await fetchJSONAsync()
        const headers = { 'Content-Type': 'Application/json', 'Authorization': "Bearer " + key }

        let result = await axios.get(`${'https://api.grandealz.vytech.co'}/auth/me/`, { headers: headers });
        //console.log("result inside the login page",result.data.status)
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

export const userDetailsHandleSlice = createSlice({
    name: 'userDetailsHandle',
    initialState: {
        data: "No data",
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {

        console.log(userDetailsHandler, "search response")
        builder.addCase(userDetailsHandler.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    },
})
export default userDetailsHandleSlice.reducer;


