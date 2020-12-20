import { NotificationService } from "./service";
import { NotificationConstant } from "./constant";

export const NotificationAction = {
    getNotification,
    editNotification,
    deleteNotification,
}

function getNotification() {
    return dispatch => {
        dispatch({ type: NotificationConstant.GET_NOTI_REQUEST });
        NotificationService.getNotification()
            .then(res => {
                dispatch({
                    type: NotificationConstant.GET_NOTI_SUCCESS,
                    payload: res.data.content.data
                })
            })
            .catch(err => {
                dispatch({ type: NotificationConstant.GET_NOTI_FAILE, payload: err });
            })
    }
}
function editNotification(id) {
    return dispatch => {
        dispatch({ type: NotificationConstant.EDIT_NOTI_REQUEST });
        NotificationService.editNotification(id)
            .then(res => {
                dispatch({
                    type: NotificationConstant.EDIT_NOTI_SUCCESS,
                    payload: res.data.content.data
                })
            })
            .catch(err => {
                dispatch({ type: NotificationConstant.EDIT_NOTI_FAILE, payload: err });
            })
    }
}
function deleteNotification(id) {
    return dispatch => {
        dispatch({ type: NotificationConstant.DELETE_NOTI_REQUEST });
        NotificationService.deleteNotification(id)
            .then(res => {
                dispatch({
                    type: NotificationConstant.DETELE_NOTI_SUCCESS,
                    payload: res.data.content.data
                })
            })
            .catch(err => {
                dispatch({ type: NotificationConstant.DELETE_NOTI_FAILE, payload: err });
            })
    }
}