import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

async function fetchJSONAsync() {
    let response = await AsyncStorage.getItem("loginToken");
    console.log("response data", response)
    return response;
}

export const AddAddressHandle = async (data) => {
    const key = await fetchJSONAsync()
    const headers = { "Content-Type": "application/json" , 'Authorization': "Bearer " + key }
    console.log(headers,"token..........",data)
    

  return await axios.post(`${'https://api.grandealz.vytech.co'}/addresses`,data,{headers:headers}).then(response => {
        console.log("Responce in addaddress",response.data.data);
        console.log("Responce in akil thanveer",response.data);
        return response.data.message   
    }).catch((err) => {
        console.log("catch error addaddress Api error", err);
    })
}