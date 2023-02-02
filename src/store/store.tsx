import {configureStore } from '@reduxjs/toolkit';
import loginHandleReducer from "./reducers/login";
import  bannerHandleReducer from './reducers/Banners';
import  drawgetHandleReducer  from './reducers/Drawgetcall';
import drawwinnersHandleReducer from './reducers/Drawwinner';
import  productDrawHandleReducer from './reducers/productdraw';
import  addressListHandlerReducer  from './reducers/addresslist';
const store=configureStore({
    reducer:{
        loginHandle:loginHandleReducer,     
        bannerHandle:bannerHandleReducer,
	drawgetHandle:drawgetHandleReducer,
        drawwinnersHandle:drawwinnersHandleReducer,
        productDrawHandle:productDrawHandleReducer,
	AddressHandle:addressListHandlerReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})

export default store;