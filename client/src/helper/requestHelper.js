import axios from 'axios';

// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        console.log("store data success");
    } catch (e) {
        console.log("store error");
    }
}

export const getData = async (key) => {
    try {
        const token = await AsyncStorage.getItem(key)
        if (token !== null) {
            console.log("get token success");
            return token;
        }
    } catch (e) {
        console.log("get token faile");
        return null;
    }
}

export const removeStore = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log("remove success");
    } catch (e) {
        console.log("remove faile");
    }
}

/**
 * Hàm gọi request đến server
 * @param {*} data Cấu trúc của data bao gồm (url method, data)
 * @url : url của api gọi đến
 * @method : phương thức gọi
 * @data : data truyền đi - có thể có hoặc không
 */
export async function sendRequest(options) {

    const requestOptions = {
        url: options.url,
        method: options.method,
        data: options.data,
        params: options.params,
        responseType: options.responseType,
        headers: await AuthenticateHeader()
    };

    return axios(requestOptions).then(res => {

        console.log("success");
        return Promise.resolve(res);
    }).catch(err => {

        console.log("error");
        return Promise.reject(err);
    })
}