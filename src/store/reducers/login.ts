import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import axios from 'axios'
import { Login_Url } from '../../services/constant';
export const loginHanlder = createAsyncThunk('posts/loginPostcall', async (data, thunkAPI) => {
   
    try {
        const payload = data;
        let result = await axios.post(`${'https://api.grandealz.vytech.co'}/auth/login`, payload);
<<<<<<< Updated upstream
        console.log("result inside the login page",result.data.status)
        if (parseInt(result.data.status) === 200) {

=======
        // console.log("result inside the login page",result.data.status)
        if (parseInt(result.data.status) === 200) {
>>>>>>> Stashed changes
             console.log("condition 1",{ responseData: result.data.data });
            return result.data
        } else if(parseInt(result.data.status)== 401 ){
            console.log("condition 2",{responseData: result.data})
            return result.data
        }else {
            console.log('Login Error', result);
            return result.data.message
        }
<<<<<<< Updated upstream

    } catch (error:any) {
        console.log('Login Catch Error', error.response);
        return( error.response.data.message)

=======
    } catch (error:any) {
        console.log('Login Catch Error', error.response.data.message);
        return( error.response.data.message)
>>>>>>> Stashed changes
    }
}
)

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


