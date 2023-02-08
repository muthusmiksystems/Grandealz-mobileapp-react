import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from 'react-native';


export const AddCouponHandle = async (data) => {

   const payload ={"coupon_code":data};
    const token=await AsyncStorage.getItem('loginToken');
        const headers={'Authorization':`Bearer ${token}`,
                        'Content-Type': 'application/json'
                      }
    console.log("headers.data",data,"ssksks",headers)
    return await axios.put(`${'https://api.grandealz.vytech.co'}/cart/apply-coupon`,payload,{headers:headers}).then(response => {
        // console.log("Responce in api call",response);
         return response.data
    }).catch((err) => {
        console.log("catch error Api error", err.message);
        ToastAndroid.showWithGravity(
            'Please try again later',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    })
}