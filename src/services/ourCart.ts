import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

async function fetchJSONAsync() {
    let response = await AsyncStorage.getItem("loginToken");
    return response;
  }

export const ourCartPage=async()=>{
    const key= await fetchJSONAsync()
    const headers={'Content-Type':'Application/json','Authorization':"Bearer "+key}
    return await axios.get(`${'https://api.grandealz.vytech.co'}/cart`,{headers:headers}).then(response => {
        console.log("Response on  get cart service...", response.data.data);
        return response.data.data
    }).catch((err) => {
        console.log("Catch error Api Failed",err)
    })
    }
