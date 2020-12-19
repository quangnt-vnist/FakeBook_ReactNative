
import {
    ProfileConstant
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
    listPost: [],
}

export function profile(state = initState, action) {

    // console.log('action type:  ', action.type);
    switch (action.type) {

        case ProfileConstant.CHANGE_AVATAR_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null
            };

        case ProfileConstant.CHANGE_AVATAR_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                //listPost: state.listPost.filter(e => (e._id === action.payload._id) ? action.payload : e),
                isLoading: false,
                error: null
            };

        case ProfileConstant.CHANGE_AVATAR_FAILE:
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