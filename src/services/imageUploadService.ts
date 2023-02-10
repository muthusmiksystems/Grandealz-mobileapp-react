import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { personalDetailsUpdate } from "./personalDetailsUpdate";

async function fetchJSONAsync() {
    let response = await AsyncStorage.getItem("loginToken");
    console.log("response data", response)
    return response;
}

export const imageUploadService = async (data) => {
    const key = await fetchJSONAsync();
    const formData = new FormData();
    // const newItem={"file":data.fileName,'type':data.type}
    formData.append("file", data.filename)
    formData.append("type", data.type)
    const headers = { 'Content-Type': 'multipart/form-data', 'Authorization': "Bearer " + key, "accept": "*/*" }

    console.log("image upload....................", formData);
    return await fetch('https://api.grandealz.vytech.co/uploads', {
        method: 'post',
        body: formData,
        headers: {
            'Content-Type': 'multipart/form-data;',
            'Authorization': "Bearer " + key,
            'accept': '*/*',
        }
    }).then(response => {

        console.log("Country List with codes", response);
        return response
    }).catch((err) => {
        console.log("Catch error Api Failed", err)
    })
}