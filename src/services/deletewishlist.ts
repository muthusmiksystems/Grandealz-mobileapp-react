import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastAndroid } from 'react-native';


export const RemovewishlistHandle = async (data: any) => {

    const token = await AsyncStorage.getItem('loginToken');
    const headers = { 'Authorization': `Bearer ${token}` }
    console.log("data", data)
    return await axios.delete(`${'https://api.grandealz.vytech.co'}/wish-list/${data}`, { headers: headers }).then(response => {
        console.log("Responce in delete api call", response.data);
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