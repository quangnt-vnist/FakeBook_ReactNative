import { combineReducers } from 'redux';
import { auth } from '../components/auth/redux/reducer';
import { post } from '../components/post/redux/reducer';
import { removeStore } from '../helper/requestHelper'
const appReducer = combineReducers({
    auth,
    post
})
const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined;
        removeStore('auth-token');
    }

    return appReducer(state, action);
}

export default rootReducer;