import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from 'react-native';




export const RemoveCouponHandle = async () => {

    const token=await AsyncStorage.getItem('loginToken');
        const headers={'Authorization':`Bearer ${token}`,'accept': '*/*'}
         console.log("jayaram",headers)
    return await axios.put(`${'https://api.grandealz.vytech.co'}/cart/remove-coupon`,{headers:headers}).then(response => {
        // console.log("Resp",response.data);
         return response.data
    }).catch((err) => {
        console.log("catch error Api error... remove coup", err);
        ToastAndroid.showWithGravity(
            'Please try again later',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    })
}