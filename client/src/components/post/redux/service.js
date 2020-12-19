import axios from 'axios';
import {
    sendRequest,
    AuthenticateHeader
} from '../../../helper/requestHelper';

export const PostService = {
    likePost,
    createPost,
};

async function likePost(data) {
    console.log('data req', data);
    let url;
    if (data.type === like) {
        url = `https://fakebook-server.herokuapp.com/post/like-post/${data.id}`
    } else {
        url = `https://fakebook-server.herokuapp.com/post/unlike-post/${data.id}`
    }
    return sendRequest({
        url: url,
        method: 'POST',
    })
}

async function createPost(data) {
    console.log('data req', data);

    return sendRequest({
        url: 'https://fakebook-server.herokuapp.com/post/add-post',
        method: 'POST',
        data: data,
    })
}