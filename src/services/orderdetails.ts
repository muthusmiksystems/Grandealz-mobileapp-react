import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const orderdetailsHandle = async (data) => {

    const token=await AsyncStorage.getItem('loginToken');
        const headers={'Authorization':`Bearer ${token}`}
        console.log("headers.data",headers,"wwwwww",data)
    return await axios.get(`${'https://api.grandealz.vytech.co'}/orders/${data}`,{ headers:headers}).then(response => {
        console.log("Responce in orderdetails call",response.data.data);
        return response.data.data

    }).catch((err) => {
        console.log("catch error orderdetails Api error", err);
    })
}