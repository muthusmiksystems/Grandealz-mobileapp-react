import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

async function fetchJSONAsync() {
    let response = await AsyncStorage.getItem("loginToken");
    console.log("response data", response)
    return response;
}

export const quizGet = async () => {
    const key = await fetchJSONAsync()
    const headers = { 'Content-Type': 'Application/json', 'Authorization': "Bearer " + key }

    return await axios.get(`${'https://api.grandealz.vytech.co'}/orders/get-quiz`, { headers: headers }).then(response => {

        // console.log("Quiz question................", response);

        return response
    }).catch((err) => {
        console.log("Catch error Api Failed", err)
    })
}