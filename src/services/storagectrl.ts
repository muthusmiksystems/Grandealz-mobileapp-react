import AsyncStorage from '@react-native-async-storage/async-storage'

class StorageController {
    constructor() {
        
    }

    async setItem(key:string, value:string) {
        if (value && value != null && value != undefined && value.toString().trim() != "") {
            return await AsyncStorage.setItem(key, value.toString());
        } else {
            return await AsyncStorage.setItem(key, "");
        }

    }

    async getItem(key:string) {
        return await AsyncStorage.getItem(key); 
       }

    async removeItem(key:string){
        return await AsyncStorage.removeItem(key);
    } 
    async getAllKeys() {
        return await AsyncStorage.getAllKeys();
    }

    async getAllKeyValuePairs() {
        try {
            const result: any = {};
            const keys = await AsyncStorage.getAllKeys();
            for (const key of keys) {
                const val = await AsyncStorage.getItem(key);
                result[key] = val;
            }
            return result;
        } catch (error) {
            //alert(error);
        }
    };

    async clearAllData() {
            await AsyncStorage.getAllKeys().then(async keys => {
                await AsyncStorage.multiRemove(keys as string[]).then(resp=>{
                    console.log('logout',resp);
                })
            });
          
           
    }
}


export default StorageController;