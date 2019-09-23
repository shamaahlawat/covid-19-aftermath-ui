import axios from 'axios';
import { GET_ERRORS, REMOVE_USER, SET_CURRENT_USER, DEV_LOGIN_URL, DEV_REDIRECT_URL, BASE_URL} from './constants'

export const handleAuthentication = () => dispatch => {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    if (!vars["code"]) {
        window.location = DEV_LOGIN_URL;
    }
    else{
        let body = {
                grantType: "authorization_code",
                code: vars["code"],
                redirectURL: DEV_REDIRECT_URL,
        }
        axios.post(BASE_URL + "getDevToken", body)
            .then(response => {
                localStorage.setItem('username', response.data.name);
                localStorage.setItem('isLoggedIn', response.data.isValid);
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('userID', response.data.userId);
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: GET_ERRORS,
                    payload: error
                });
            })
    }
}
export const logout = () => dispatch => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    dispatch({
        type: REMOVE_USER,
        payload: null
    });

}
