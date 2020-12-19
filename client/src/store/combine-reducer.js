import { combineReducers } from 'redux';
import { auth } from '../components/auth/redux/reducer';
import { removeStore } from '../helper/requestHelper';
import { post } from '../components/post/redux/reducer';
import { profile } from '../components/profile/redux/reducer';
const appReducer = combineReducers({
    auth,
    post,
    profile,
})
const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined;
        removeStore('auth-token');
    }

    return appReducer(state, action);
}

export default rootReducer;