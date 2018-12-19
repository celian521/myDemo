
import {
    TESTTYPE
} from './action-types';

const receiveUser = (name) => ({type: TESTTYPE, data: name});

export const getUserName = (name) => {
    return dispatch => {
        dispatch(receiveUser(name));
    }
}
