import {DEV_LOGOUT_URL, GET_ERRORS, REMOVE_USER, SET_CURRENT_USER} from '../actions/constants';
import isEmpty from '../helpers/is-empty'
const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case REMOVE_USER:
            window.location = DEV_LOGOUT_URL;
            return {
                ...state,
                isAuthenticated: false,
                user:{}
            };
        default:
            return state;
    }
}