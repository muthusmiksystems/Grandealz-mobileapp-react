import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Register_Url } from "./constant";   
import { Login_Url } from "./constant";

async function fetchJSONAsync() {
    let response = await AsyncStorage.getItem("loginToken");
    console.log("response data",response)
    return response;
  }

export const registerPost=async()=>{
    const payload = { "email": "cheranc7c7@gmail.com", "password": "Cheran@123"};
    const headers = { 'Content-Type': 'application/json', }
    return await axios.post(Register_Url, payload, { headers: headers }).then(response => {
        console.log("Response", response);
        return response
    }).catch((err) => {
        console.log(err)
    })

}


export const loginPost = async () => {
    const payload = { "email": "cheranc7c7@gmail.com", "password": "Cheran@123" };
    const key=fetchJSONAsync()
    const headers = { 'Content-Type': 'application/json', 'Authorization': "Bearer " + key }
    return await axios.post(Login_Url, payload, { headers: headers }).then(response => {
        console.log("Response", response);
        return response
    }).catch((err) => {
        console.log("Catch error Api Failed", err)
    })
}


export const drawGetCall = async () => {

    return await axios.get(`${'https://api.grandealz.vytech.co'}/draws`).then(response => {
        console.log("Responce in Drawgetcall",response.data.data);
        return response.data
    }).catch((err) => {
        console.log("catch error Api error", err);
    })
}

export const drawWinnerGet = async (data: string) => {

    return await axios.get(`${'https://api.grandealz.vytech.co'}/draws/${data}`).then(response => {
        //console.log("Responce in Drawgetcall",response.data.data);
        return response.data
    }).catch((err) => {
        console.log("catch error Api error", err);
    })
}

export const drawCommingGet = async (data: string) => {

    return await axios.get(`${'https://api.grandealz.vytech.co'}/draws?${data}`).then(response => {
        //console.log("Responce in Drawgetcall",response.data.data);
        return response.data
    }).catch((err) => {
        console.log("catch error Api error", err);
    })
}

