import axios from "axios";





export const CartDrawlistHandle = async () => {

    return await axios.get(`${'https://api.grandealz.vytech.co'}/draws?limit=4&skip=1&status=Publish`).then(response => {
        console.log("Responce on Cart Draw list",response.data);
         return response.data
    }).catch((err) => {
        console.log("catch error Api error", err);
    })
}