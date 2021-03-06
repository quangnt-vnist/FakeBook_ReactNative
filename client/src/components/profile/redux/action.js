import { ProfileService } from "./service";
import { ProfileConstant } from "./constant";
import { storeData, getData } from "../../../helper/requestHelper";

export const ProfileAction = {
    changeAvatar,
}

function changeAvatar(data) {
    return dispatch => {
        dispatch({ type: ProfileConstant.CHANGE_AVATAR_REQUEST });
        ProfileService.changeAvatar(data)
            .then(res => {
                dispatch({
                    type: ProfileConstant.CHANGE_AVATAR_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: ProfileConstant.CHANGE_AVATAR_FAILE, payload: err });
            })
    }
}
