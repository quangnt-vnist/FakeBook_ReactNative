import { AuthService } from "./service";
import { AuthConstants } from "./constant";
import { storeData, getData } from "../../../helper/requestHelper";

export const AuthActions = {
    login,
    register,
    getVerifyCode,
}

function login(user) {
    return dispatch => {
        dispatch({ type: AuthConstants.LOGIN_REQUEST });
        console.log('user', user);
        AuthService.login(user)
            .then(res => {
                // console.log('login ok', res.data.content);
                storeData('auth-token', res.data.content.payload.token);
                storeData('userId', res.data.content.payload.id);
                // console.log('token', getData('auth-token'));
                dispatch({
                    type: AuthConstants.LOGIN_SUCCESS,
                    payload: res.data.content.payload
                })
            })
            .catch(err => {
                console.log('lỗi đăng nhập');
                dispatch({ type: AuthConstants.LOGIN_FAILE, payload: err });
            })
    }
}
function register(user) {
    return dispatch => {
        dispatch({ type: AuthConstants.REGISTER_REQUEST });
        AuthService.register(user)
            .then(res => {
                storeData('auth-token', res.data.content.payload.token);
                storeData('userId', res.data.content.payload.id);
                dispatch({
                    type: AuthConstants.REGISTER_SUCCESS,
                    payload: res.data.content.payload
                })
            })
            .catch(err => {
                console.log('lỗi đăng KÝ    ');
                dispatch({ type: AuthConstants.REGISTER_FAILE, payload: err });
            })
    }
}

function getVerifyCode(phone) {
    return dispatch => {
        dispatch({ type: AuthConstants.GET_VERIFY_CODE_REQUEST });
        AuthService.getVerifyCode(phone)
            .then(async res => {
                console.log('ok', res.data.content);
                dispatch({
                    type: AuthConstants.GET_VERIFY_CODE_SUCCESS,
                    payload: res.data.content.code
                })
            })
            .catch(err => {
                console.log('looix rooif');
                dispatch({ type: AuthConstants.GET_VERIFY_CODE_FAILE, payload: err });
            })
    }
}