import axios from 'axios';
import {
    sendRequest,
    AuthenticateHeader
} from '../../../helper/requestHelper';

export const AuthService = {
    login,
    getVerifyCode,
};

async function login(data) {
    console.log('data req', data);
    return sendRequest({
        url: 'https://fakebook-server.herokuapp.com/login',
        // url: 'http://localhost:8000/login',
        method: 'POST',
        data: data,
    })
    // return axios({
    //     url: 'https://fakebook-server.herokuapp.com/login',
    //     method: 'POST',
    //     data: data,
    //     headers: await AuthenticateHeader(),
    // })
}

async function getVerifyCode(phone) {
    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/get-verifycode/${phone}`,
        method: 'GET',
        // headers: await AuthenticateHeader(),
    })
}