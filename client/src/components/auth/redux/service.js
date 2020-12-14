import {
    getStorage
} from '../../../config';
import {
    sendRequest
} from '../../../helpers/requestHelper';

export const AuthService = {
    login,
};

async function login(data) {
    return sendRequest({
        url: 'https://fakebook-server.herokuapp.com/login/auth/login',
        method: 'POST',
        data
    }, false, false, 'auth')
}