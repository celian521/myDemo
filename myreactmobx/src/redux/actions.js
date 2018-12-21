
import {
    TESTTYPE
} from './action-types';

const receiveUser = (name) => ({type: TESTTYPE, data: name, temp:'iii'});

export const getUserName = (name) => {
    return dispatch => {
        dispatch(receiveUser(name));
        // dispatch({type: TESTTYPE, data: name});
    }
}
