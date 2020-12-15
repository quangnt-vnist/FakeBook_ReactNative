import axios from 'axios';

// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    console.log('quang dẹp trai ghê');
    try {
        console.log('quang async storage');
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

const AuthenticateHeader = async() => {
    const token = await getData('auth-token');

    return {
        'auth-token': token,
        'Content-Type': 'application/json'
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
        // responseType: options.responseType,
        headers: await AuthenticateHeader()
    };

    // console.log('request options', requestOptions);

    return axios(requestOptions)
    .then(res => {
        console.log("axios success", res);
        // return Promise.resolve(res);
    })
    .catch(err => {
        console.log("axios error", err);
        // return Promise.reject(err);
    })
}