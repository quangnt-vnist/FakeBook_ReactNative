import { combineReducers } from 'redux';
import { auth } from '../components/auth/redux/reducer';
<<<<<<< HEAD
import { post } from '../components/post/redux/reducer';
import { removeStore } from '../helper/requestHelper'
const appReducer = combineReducers({
    auth,
    post
=======
import { removeStore } from '../helper/requestHelper';
import { post } from '../components/post/redux/reducer';
import { profile } from '../components/profile/redux/reducer';
import { getData, removeStore } from '../helper/requestHelper'
const appReducer = combineReducers({
    auth,
    post,
    profile,
>>>>>>> cede9271fdb756e3b90dd45be5ad5ed2c30d4294
})
const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined;
        // await removeStore('auth-token');
        // await removeStore('userId');
        // console.log('userId', await getData("userId"));
    }

    return appReducer(state, action);
}

export default rootReducer;