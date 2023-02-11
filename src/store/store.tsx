import { configureStore } from '@reduxjs/toolkit';
import loginHandleReducer from "./reducers/login";
import bannerHandleReducer from './reducers/Banners';
import drawgetHandleReducer from './reducers/Drawgetcall';
import drawwinnersHandleReducer from './reducers/Drawwinner';
import productDrawHandleReducer from './reducers/productdraw';
import addressListHandlerReducer from './reducers/addresslist';
import changepasswordHandleReducer from './reducers/changepassword'
<<<<<<< Updated upstream
import userDetailsHandleReducer from './reducers/userDetails';
import AddCouponHandleReducer from './reducers/addcouponcode';
=======
>>>>>>> Stashed changes

const store = configureStore({
    reducer: {
        loginHandle: loginHandleReducer,
        bannerHandle: bannerHandleReducer,
        drawgetHandle: drawgetHandleReducer,
        drawwinnersHandle: drawwinnersHandleReducer,
        productDrawHandle: productDrawHandleReducer,
        AddressHandle: addressListHandlerReducer,
<<<<<<< Updated upstream
        ChangepasswordHandle: changepasswordHandleReducer,
        userDetailsHandle: userDetailsHandleReducer,
        AddCouponHandle:AddCouponHandleReducer,
=======
        ChangepasswordHandle: changepasswordHandleReducer
>>>>>>> Stashed changes
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})

export default store;