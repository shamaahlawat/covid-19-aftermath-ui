// constants.js

export const GET_ERRORS = 'GET_ERRORS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const DEV_REDIRECT_URL = "http://localhost:3000/home"
export const DEV_LOGIN_URL = "https://idp.prod.sso.platform.prod.walmart.com/platform-sso-server/authorize?response_type=code&client_id=a52254cd-f91d-4e2a-9ae6-1d28a8922922&scope=openid%20profile%20email&redirect_uri=" + DEV_REDIRECT_URL + "&nonce=constello&state=constello"
export const TOKEN_URL = "https://idp.prod.sso.platform.prod.walmart.com/platform-sso-server/token"
export const DEV_LOGOUT_URL = "https://idp.prod.sso.platform.prod.walmart.com/platform-sso-server/ppidp/logout?post_logout_redirect_uri=http://localhost:3000/logout";
export const BASE_64_CRED = "ZGQ4YTdlOTYtZmQ0Ni00MDJlLWFkMzAtNjJhNDViYWVkNjU3OkFPd21yV0RSb3RKZVVCMnZSN0JFYl9lY1hzcDZaU2hHUi1qNXl0cWgyREM3V1pGZzIyLV95dFB0LUdiQzJWLUIya0dtdnVoYjZJLWdMTUNmejhTTmZGaw=="
export const BASE_URL = "http://constello-services.walmartlabs.com/services/"