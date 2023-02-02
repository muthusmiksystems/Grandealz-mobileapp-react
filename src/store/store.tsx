import {configureStore } from '@reduxjs/toolkit';
import loginHandleReducer from "./reducers/login";
import  bannerHandleReducer from './reducers/Banners';
import  addressListHandlerReducer  from './reducers/addresslist';


const store=configureStore({
    reducer:{
        loginHandle:loginHandleReducer,     
        bannerHandle:bannerHandleReducer,
        AddressHandle:addressListHandlerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})

export default store;