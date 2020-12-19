import axios from 'axios';
import {
    sendRequest,
    AuthenticateHeader
} from '../../../helper/requestHelper';

export const AuthService = {
    login,
    register,
    getVerifyCode,
};

async function login(data) {
    console.log('data req', data);
    return sendRequest({
        url: 'https://fakebook-server.herokuapp.com/login',
        method: 'POST',
        data: data,
    })
}

async function register(data) {
    console.log('data req', data);
    return sendRequest({
        url: 'https://fakebook-server.herokuapp.com/register',
        method: 'POST',
        data: data,
    })
}

async function getVerifyCode(phone) {
    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/get-verifycode/${phone}`,
        method: 'GET',
        // headers: await AuthenticateHeader(),
    })
}