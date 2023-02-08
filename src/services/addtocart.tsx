import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from 'react-native';
export const AddtoCartHandle = async (data) => {
    const payload ={ "draw":data, "qty":1};
    const token=await AsyncStorage.getItem('loginToken');
        const headers={'Authorization':`Bearer ${token}`}
    console.log("headers.data",headers,"aaaaa",payload)
    return await axios.post(`${'https://api.grandealz.vytech.co'}/cart`,payload,{ headers:headers}).then(response => {
        console.log("Responce call",response.data);
         return response.data
    }).catch((err) => {
        console.log("catch error Api error", err);
        ToastAndroid.showWithGravity(
            'Please try again later',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    })
}