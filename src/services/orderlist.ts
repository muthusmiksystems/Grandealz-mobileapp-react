import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const orderlistHandle = async () => {

    const token=await AsyncStorage.getItem('loginToken');
        const headers={'Authorization':`Bearer ${token}`}
        console.log("headers.data",headers)
    return await axios.get(`${'https://api.grandealz.vytech.co'}/orders?limit=20&skip=0`,{ headers:headers}).then(response => {
        console.log("Responce in orderlist call",response.data.data);
        return response.data.data

    }).catch((err) => {
        console.log("catch error order Api error", err);
    })
}