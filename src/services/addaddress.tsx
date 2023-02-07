import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';






export const AddAddressHandle = async (data: string) => {

    const token = await AsyncStorage.getItem('loginToken');
    const headers = { 'Authorization': `Bearer ${token}` }
    return await axios.post(`${'https://api.grandealz.vytech.co'}/addresses`,{data},{headers:headers}).then(response => {
        console.log("Responce in addaddress",response.data.data);
        return response.data
    }).catch((err) => {
        console.log("catch error addaddress Api error", err);
    })
}