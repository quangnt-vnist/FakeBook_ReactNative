import axios from 'axios';

// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = (key, value) => {
    try {
        AsyncStorage.setItem(key, value);
        console.log("store data success");
    } catch (e) {
        console.log("store data error");
    }
}

export const getData = (key) => {
    try {
        const token = AsyncStorage.getItem(key)
        if (token !== null) {
            console.log("get data success");
            return token;
        }
    } catch (e) {
        console.log("get data failure");
        return null;
    }
}

export const removeStore = (key) => {
    try {
        AsyncStorage.removeItem(key);
        console.log("remove success");
    } catch (e) {
        console.log("remove failure");
    }
}

export const AuthenticateHeader = async() => {
    const token = getData('auth-token');
    // console.log('authenticate token', token);
    return {
        'auth-token': token,
        "Content-Type": "application/json"
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
        headers: await AuthenticateHeader()
    };

    return axios(requestOptions)
    .then(res => {
        console.log("axios success");
        return Promise.resolve(res);
    })
    .catch(err => {
        console.log("axios error", err);
        return Promise.reject(err);
    })
}