import { PostService } from "./service";
import { PostConstant } from "./constant";
import { storeData, getData } from "../../../helper/requestHelper";

export const PostAction = {
    likePost,
}

function likePost(data) {
    return dispatch => {
        dispatch({ type: PostConstant.CHANGE_LIKE_REQUEST });
        PostService.likePost(data)
            .then(res => {
                dispatch({
                    type: PostConstant.CHANGE_LIKE_SUCCESS,
                    payload: res.data.content.payload
                })
            })
            .catch(err => {
                dispatch({ type: PostConstant.CHANGE_LIKE_FAILE, payload: err });
            })
    }
}
