import {configureStore } from '@reduxjs/toolkit';
import loginHandleReducer from "./reducers/login";
import verifyOtpHandleReducer from './reducers/verifyotp';
const store=configureStore({
    reducer:{
        loginHandle:loginHandleReducer,     
        verifyOtpHandle:verifyOtpHandleReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})

export default store;