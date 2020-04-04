import { GET_COMPANIES, GET_ERRORS, COMPANIES_LOADING} from '../actions/constants';
const initialState = {
    companies: {
        loading:false
    }
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return {
                ...state,
                loading:action.payload.loading,
                error:action.payload.error
            };
        case GET_COMPANIES:
            return {
                ...state,
                loading:action.payload.loading,
                companies:action.payload.companies,
                hirings:action.payload.hirings,
                hiringFreeze:action.payload.hiringFreeze,
                layoffs:action.payload.layoffs,
            }
        case COMPANIES_LOADING:
            return {
                ...state,
                loading:action.payload.loading
            };
        default:
            return state;
    }
}