import { combineReducers } from 'redux';
import companyReducer from './company-reducer'
export default combineReducers({
    companies: companyReducer
});