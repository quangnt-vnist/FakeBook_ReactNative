import axios from 'axios';
import {
    sendRequest,
    AuthenticateHeader
} from '../../../helper/requestHelper';

export const PostService = {
    likePost,
    getAllPost,
    getCommentPost,
    addCommentPost,
    createPost,
    reportPost
};

async function getAllPost() {
    let url = `https://fakebook-server.herokuapp.com/post/get-list-post`
    return sendRequest({
        url: url,
        method: 'GET',
    })
}

async function likePost(data) {
    console.log('data req', data);
    let url;
    if (data.type === "like") {
        url = `https://fakebook-server.herokuapp.com/post/like-post/${data.id}`
    } else {
        url = `https://fakebook-server.herokuapp.com/post/unlike-post/${data.id}`
    }
    return sendRequest({
        url: url,
        method: 'POST',
    })
}

async function getCommentPost(id) {
    console.log('post id', id);

    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/post/get-comment/${id}`,
        method: 'GET',
    })
}

async function addCommentPost(id, data) {
    console.log('post id', data, id);

    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/post/set-comment/${id}`,
        method: 'POST',
        data: data
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

async function reportPost(id, data) {
    console.log('post report', data, id);

    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/post/report-post/${id}`,
        method: 'POST',
        data: data
    })
}