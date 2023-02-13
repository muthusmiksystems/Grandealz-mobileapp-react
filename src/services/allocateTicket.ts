import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

async function fetchJSONAsync() {
    let response = await AsyncStorage.getItem("loginToken");
    console.log("response data", response)
    return response;
}

export const allocteTickets = async (data) => {
    console.log("Allocate ticket order id.........", data)
    const sendData = { "order_id": data };
    const key = await fetchJSONAsync()
    const headers = { 'accept': "*/*", 'Authorization': "Bearer " + key }
    console.log("Headers........", sendData);
    return await axios.post(`${'https://api.grandealz.vytech.co'}/orders/allocate-tickets/${data}`,{}, { headers: headers }).then((response) => {
        console.log("respsonse sujith............................", response.data);
        // console.log("Quiz question................", `${'https://api.grandealz.vytech.co'}/orders/allocate-tickets/${data}`);
        return response.data;
    }).catch((err) => {
        console.log("Catch error Api Failed", err);

    })
}