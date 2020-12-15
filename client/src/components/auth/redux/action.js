import { AuthService } from "./service";
import { AuthConstants } from "./constant";
import { storeData } from "../../../helper/requestHelper";

export const AuthActions = {
    login,
}

function login(user) {
    return dispatch => {
        console.log('user', user);
        dispatch({ type: AuthConstants.LOGIN_REQUEST });
        AuthService.login(user)
            .then(res => {
                storeData('auth-token', res.data.content.token);
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