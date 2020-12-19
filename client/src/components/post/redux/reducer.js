
import {
    PostConstant
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

export function post(state = initState, action) {

    // console.log('action type:  ', action.type);
    switch (action.type) {

        case PostConstant.CHANGE_LIKE_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null
            };

        case PostConstant.CHANGE_LIKE_SUCCESS:
            return {
                ...state,
                post: action.payload,
                listPost: state.listPost.filter(e => (e._id === action.payload._id) ? action.payload : e),
                isLoading: false,
                error: null
            };

        case PostConstant.CHANGE_LIKE_FAILE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };

        case PostConstant.CREATE_POST_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null
            };

        case PostConstant.CREATE_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                // listPost: state.listPost.filter(e => (e._id === action.payload._id) ? action.payload : e),
                isLoading: false,
                error: null
            };

        case PostConstant.CREATE_POST_FAILE:
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