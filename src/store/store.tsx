import {configureStore } from '@reduxjs/toolkit';
import loginHandleReducer from "./reducers/login";
const store=configureStore({
    reducer:{
        loginHandle:loginHandleReducer,     

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})

export default store;