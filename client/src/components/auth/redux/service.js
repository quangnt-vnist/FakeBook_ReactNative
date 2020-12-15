import {
    sendRequest
} from '../../../helper/requestHelper';

export const AuthService = {
    login,
};

async function login(data) {
    console.log('data req', data);
    return sendRequest({
        // url: 'https://fakebook-server.herokuapp.com/login',
        url: 'http://localhost:8000/login',
        method: 'POST',
        data: data,
    })
}