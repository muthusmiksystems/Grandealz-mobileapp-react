import { configureStore } from '@reduxjs/toolkit';
import loginHandleReducer from "./reducers/login";
import bannerHandleReducer from './reducers/Banners';
import drawgetHandleReducer from './reducers/Drawgetcall';
import drawwinnersHandleReducer from './reducers/Drawwinner';
import productDrawHandleReducer from './reducers/productdraw';
import addressListHandlerReducer from './reducers/addresslist';
import changepasswordHandleReducer from './reducers/changepassword'
import userDetailsHandleReducer from './reducers/userDetails';

const store = configureStore({
    reducer: {
        loginHandle: loginHandleReducer,
        bannerHandle: bannerHandleReducer,
        drawgetHandle: drawgetHandleReducer,
        drawwinnersHandle: drawwinnersHandleReducer,
        productDrawHandle: productDrawHandleReducer,
        AddressHandle: addressListHandlerReducer,
        ChangepasswordHandle: changepasswordHandleReducer,
        userDetailsHandle: userDetailsHandleReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})

export default store;