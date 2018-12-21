import { combineReducers } from 'redux';

import {
    TESTTYPE,
} from './action-types';


const initUser = {
    name: 'unono'
}

// 产生聊天状态的reducer
function user(state = initUser, action) {
    switch (action.type) {
        case TESTTYPE:
            console.log(state)
            return { ...state, name: action.data };
        default:
            return state
    }
}


export default combineReducers({
    user
})