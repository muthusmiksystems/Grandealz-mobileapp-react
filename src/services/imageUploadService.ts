import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { personalDetailsUpdate } from "./personalDetailsUpdate";
import { userDetailsHandler } from "../store/reducers/userDetails";

async function fetchJSONAsync() {
    let response = await AsyncStorage.getItem("loginToken");
    console.log("Token......", response)
    return response;
}

export const imageUploadService = async (data) => {
    const key = await fetchJSONAsync();
    const formData = new FormData();
  
    // const newItem={"file":data.fileName,'type':data.type}
    formData.append("file", data)
    // formData.append("type", data.type)

   

    const headers = { 'Content-Type': 'multipart/form-data', 'Authorization': "Bearer " + key, "accept": "/" }

    console.log("image upload....................", formData);
    return await axios.post(`${'https://api.grandealz.vytech.co'}/uploads`, formData, { headers: headers }).then(response => {

        console.log("Image upload Response..........", response.data.file.filename);
        // let data = [...userData, { "profile_pic": "response.data.file.path" }]
      
        return response
    }).catch((err) => {
        console.log("Catch error Api Failed in imageUploadService.......", err)
    })
}