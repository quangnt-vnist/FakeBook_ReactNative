
import {
    NotificationConstant
} from "./constant";

export const CallApiStatus = {
    INITIALIZED: 0,
    CALLING: 1,
    FINISHED: 2,
}
var initState = {
    calledAPI: CallApiStatus.INITIALIZED,
    error: null,
    isLoading: false,
    listNotification: [],
}

export function notification(state = initState, action) {

    switch (action.type) {

        case NotificationConstant.GET_NOTI_REQUEST:
        case NotificationConstant.EDIT_NOTI_REQUEST:
        case NotificationConstant.DELETE_NOTI_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null
            };

        case NotificationConstant.GET_NOTI_SUCCESS:
            return {
                ...state,
                notification: action.payload,
                isLoading: false,
                error: null
            };

        case NotificationConstant.EDIT_NOTI_SUCCESS:
            return {
                ...state,
                notification: action.payload,
                isLoading: false,
                error: null
            };

        case NotificationConstant.DELETE_NOTI_SUCCESS:
            return {
                ...state,
                notification: action.payload,
                isLoading: false,
                error: null
            };

        case NotificationConstant.GET_NOTI_FAILE:
        case NotificationConstant.EDIT_NOTI_FAILE:
        case NotificationConstant.DELETE_NOTI_FAILE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        default:
            return {
                ...state
            };
    }
}