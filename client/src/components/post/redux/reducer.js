
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

        case PostConstant.GET_COMMENT_POST_REQUEST:
        case PostConstant.ADD_COMMENT_POST_REQUEST:
        case PostConstant.CREATE_POST_REQUEST:
        case PostConstant.REPORT_POST_REQUEST:
        case PostConstant.CHANGE_AVATAR_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case PostConstant.GET_COMMENT_POST_SUCCESS:
            return {
                ...state,
                comment: action.payload,
                isLoading: false,
                error: null
            };

        case PostConstant.ADD_COMMENT_POST_SUCCESS:
            return {
                ...state,
                comment: action.payload,
                isLoading: false,
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
        case PostConstant.CHANGE_AVATAR_SUCCESS:
            return {
                ...state,
                post: action.payload,
                // listPost: state.listPost.filter(e => (e._id === action.payload._id) ? action.payload : e),
                isLoading: false,
                error: null
            };

        case PostConstant.REPORT_POST_SUCCESS:
            return {
                ...state,
                post: action.payload,
                // listPost: state.listPost.filter(e => (e._id === action.payload._id) ? action.payload : e),
                isLoading: false,
                error: null
            };

        case PostConstant.GET_COMMENT_POST_FAILE:
        case PostConstant.ADD_COMMENT_POST_FAILE:
        case PostConstant.CREATE_POST_FAILE:
        case PostConstant.REPORT_POST_FAILE:
        case PostConstant.CHANGE_AVATAR_FAILE:
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