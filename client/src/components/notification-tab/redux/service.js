import axios from 'axios';
import {
    sendRequest,
    AuthenticateHeader
} from '../../../helper/requestHelper';

export const NotificationService = {
    getNotification,
    editNotification,
    deleteNotification,
};

async function getNotification() {

    return sendRequest({
        url: 'https://fakebook-server.herokuapp.com/notifications',
        method: 'GET',
    })
}
async function editNotification(id) {
    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/notification/${id}`,
        method: 'PATCH',
    })
}
async function deleteNotification(id) {
    console.log("iddddddddd service", id);
    return sendRequest({
        url: `https://fakebook-server.herokuapp.com/delete-notification/${id}`,
        method: 'PATCH',
    })
}

