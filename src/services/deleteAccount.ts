import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

async function fetchJSONAsync() {
    let response = await AsyncStorage.getItem("loginToken");
    console.log("response data", response)
    return response;
}

export const deleteAccount = async () => {
    const key = await fetchJSONAsync()
    const headers = { 'Content-Type': 'Application/json', 'Authorization': "Bearer " + key }

    return await axios.delete(`${'https://api.grandealz.vytech.co'}/auth/deactivate-account`, { headers: headers }).then(response => {

        console.log("Delete Acc................", response);

        return response
    }).catch((err) => {
        console.log("Catch error Api Failed", err)
    })
}