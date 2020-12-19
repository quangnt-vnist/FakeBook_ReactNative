import { PostService } from "./service";
import { PostConstant } from "./constant";
import { storeData, getData } from "../../../helper/requestHelper";

export const PostAction = {
    likePost,
    createPost,
}

function likePost(data) {
    return dispatch => {
        dispatch({ type: PostConstant.CHANGE_LIKE_REQUEST });
        PostService.likePost(data)
            .then(res => {
                dispatch({
                    type: PostConstant.CHANGE_LIKE_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: PostConstant.CHANGE_LIKE_FAILE, payload: err });
            })
    }
}

function createPost(data) {
    return dispatch => {
        dispatch({ type: PostConstant.CREATE_POST_REQUEST });
        PostService.createPost(data)
            .then(res => {
                dispatch({
                    type: PostConstant.CREATE_POST_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: PostConstant.CREATE_POST_FAILE, payload: err });
            })
    }
}
