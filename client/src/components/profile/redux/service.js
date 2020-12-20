import axios from 'axios';
import {
    sendRequest,
    AuthenticateHeader
} from '../../../helper/requestHelper';

export const ProfileService = {
    changeAvatar,
};

async function changeAvatar(data) {
    console.log('data req', data);
    let url;

    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/profile/${data.id}/change-information`,
        method: 'POST',
        data: data,
    })
}