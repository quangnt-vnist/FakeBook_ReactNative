import { AuthService } from "./service";
import { AuthConstants } from "./constant";
import { storeData, getData } from "../../../helper/requestHelper";

export const AuthActions = {
    login,
}

function login(user) {
    return dispatch => {
        dispatch({ type: AuthConstants.LOGIN_REQUEST });
        console.log('user', user);
        AuthService.login(user)
            .then(async res => {
                console.log('login ok',res);
                await storeData('auth-token', res.data.content.token);
                console.log('token', await getData('auth-token'));
                dispatch({
                    type: AuthConstants.LOGIN_SUCCESS,
                    payload: res.data.content.user
                })
            })
            .catch(err => {
                dispatch({ type: AuthConstants.LOGIN_FAILE, payload: err });
            })
    }
}