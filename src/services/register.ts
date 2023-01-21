import axios from "axios";
import { Register_Url } from "./constant";

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