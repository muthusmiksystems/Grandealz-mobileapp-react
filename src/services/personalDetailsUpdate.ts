import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

async function fetchJSONAsync() {
    let response = await AsyncStorage.getItem("loginToken");
    console.log("response data", response)
    return response;
}

export const personalDetailsUpdate = async (payload) => {
    const key = await fetchJSONAsync()
    console.log("Payload in Api...........", payload);

    const headers = { 'Content-Type': 'Application/json', 'Authorization': "Bearer " + key }

    return await axios.put(`${'https://api.grandealz.vytech.co'}/auth`,payload, { headers: headers }).then(response => {
        console.log("personal details update...........", response.data.data);
        return response.data
    }).catch((err) => {
        console.log("Catch error Api Failed", err)
        // return err
    })
}