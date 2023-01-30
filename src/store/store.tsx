import {configureStore } from '@reduxjs/toolkit';
import loginHandleReducer from "./reducers/login";
import  bannerHandleReducer from './reducers/Banners';
import  drawgetHandleReducer  from './reducers/Drawgetcall';
import drawwinnersHandleReducer from './reducers/Drawwinner';
const store=configureStore({
    reducer:{
        loginHandle:loginHandleReducer,     
        bannerHandle:bannerHandleReducer,
        drawgetHandle:drawgetHandleReducer,
        drawwinnersHandle:drawwinnersHandleReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})

export default store;