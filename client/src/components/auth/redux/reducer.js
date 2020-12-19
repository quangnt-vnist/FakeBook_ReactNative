
import {
    AuthConstants
} from "./constant";

export const CallApiStatus = {
    INITIALIZED: 0,
    CALLING: 1,
    FINISHED: 2,
}
var initState = {
    calledAPI: CallApiStatus.INITIALIZED,
    user: {},
    error: null,
    forgotPassword: false,
    reset_password: false,
    isLoading: false
}

export function auth(state = initState, action) {

    console.log('action type:  ', action.type);
    switch (action.type) {

        case AuthConstants.LOGIN_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AuthConstants.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null
            };

        case AuthConstants.LOGIN_FAILE:
            return {
                ...state,
                isLoading: false,
                user: {
                    _id: null,
                    name: null,
                    email: null,
                    roles: null,
                    company: null
                },
                error: action.payload
            };

        case AuthConstants.REGISTER_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AuthConstants.REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null
            };

        case AuthConstants.REGISTER_FAILE:
            return {
                ...state,
                isLoading: false,
                user: {
                    _id: null,
                    name: null,
                    email: null,
                    roles: null,
                    company: null
                },
                error: action.payload
            };

        case AuthConstants.GET_VERIFY_CODE_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AuthConstants.GET_VERIFY_CODE_SUCCESS:
            return {
                ...state,
                verifycode: action.payload,
                isLoading: false,
                error: null
            };

        case AuthConstants.GET_VERIFY_CODE_FAILE:
            return {
                ...state,
                isLoading: false,
                user: {
                    _id: null,
                    name: null,
                    email: null,
                    roles: null,
                },
                error: action.payload
            };
        case AuthConstants.CHECK_VERIFY_CODE_REQUEST:

            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AuthConstants.CHECK_VERIFY_CODE_SUCCESS:
            return {
                ...state,
                verifycode: action.payload,
                isLoading: false,
                error: null
            };

        case AuthConstants.CHECK_VERIFY_CODE_FAILE:
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