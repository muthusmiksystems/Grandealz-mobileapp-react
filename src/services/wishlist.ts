import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const wishlistHandle = async () => {
    const token=await AsyncStorage.getItem('loginToken');
        const headers={'Authorization':`Bearer ${token}` }
    console.log("headers.data",headers)
    return await axios.get(`${'https://api.grandealz.vytech.co'}/wish-list?limit=200&skip=0`,{ headers:headers}).then(response => {
        console.log("Responce in active ticket call",response.data.data);
         return response.data.data
    }).catch((err) => {
        console.log("catch error Api error", err);
    })
}