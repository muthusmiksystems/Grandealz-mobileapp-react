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
   
    // const userData=useSelector<any>(state=>state.userData.data);
    // console.log("userData",userData)
    const formData = new FormData();
    // formData.append(key'file'data.fileName)
    const newItem={"file":data.fileName,'type':data.type}
    // formData.append('file',newItem)
    formData.append("file", data.filename)
    formData.append("type", data.type)
    // console.log("formData",formData)




    const update=async()=>{
        // const dispatch=useDispatch();
        await personalDetailsUpdate(data).then(
            // dispatch(userData())
        )
    }
    const headers = { 'Content-Type': 'multipart/form-data', 'Authorization': "Bearer " + key ,"accept":"*/*"}

    console.log("image upload....................", formData);
    return await axios.post(`${'https://api.grandealz.vytech.co'}/uploads`,formData, { headers: headers }).then(response => {

        console.log("Country List with codes", formData);
        // let data=[...userData,{"profile_pic":"sdfsdfs"}]
        // update(data)
        return response.data.data
    }).catch((err) => {
        console.log("Catch error Api Failed", err)
    })
}