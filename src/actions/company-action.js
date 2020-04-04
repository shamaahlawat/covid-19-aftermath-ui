import axios from 'axios';
import { GET_COMPANIES, COMPANIES_LOADING, GET_ERRORS} from './constants'

export const getCompanies = () => dispatch => {
    dispatch({
        type: COMPANIES_LOADING,
        payload: {
            loading:true
        }
    });
    axios.get("http://covid-19-companies-aftermath.herokuapp.com/api/company")
        .then(response => {
            let companies = response.data;
            let hirings = [];
            let hiringFreeze =[];
            let layoffs = [];
            for(let i=0; i<companies.length; i++){
                companies[i].key = i+1;
                if(companies[i].hiringStatus=="Hiring"){
                    hirings.push(companies[i]);
                }
                if(companies[i].hiringStatus=="Hiring Freeze"){
                    hiringFreeze.push(companies[i]);
                }
                if(companies[i].hiringStatus=="Layoffs"){
                    layoffs.push(companies[i]);
                }
            }
            dispatch({
                type: GET_COMPANIES,
                payload: {
                    companies:companies,
                    hirings:hirings,
                    hiringFreeze:hiringFreeze,
                    layoffs:layoffs,
                    loading:false
                }
            });
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: {
                    error:error,
                    loading:false
                }
            });
        })
}
export const addCompany = (body) => dispatch => {
    dispatch({
        type: COMPANIES_LOADING,
        payload: {
            loading:true
        }
    });
    axios.post("http://covid-19-companies-aftermath.herokuapp.com/api/company", body)
        .then(response => {
            axios.get("http://covid-19-companies-aftermath.herokuapp.com/api/company")
                .then(response => {
                    let companies = response.data;
                    let hirings = [];
                    let hiringFreeze =[];
                    let layoffs = [];
                    for(let i=0; i<companies.length; i++){
                        companies[i].key = i+1;
                        if(companies[i].hiringStatus=="Hiring"){
                            hirings.push(companies[i]);
                        }
                        if(companies[i].hiringStatus=="Hiring Freeze"){
                            hiringFreeze.push(companies[i]);
                        }
                        if(companies[i].hiringStatus=="Layoffs"){
                            layoffs.push(companies[i]);
                        }
                    }
                    alert("Thank you for your contribution.")
                    dispatch({
                        type: GET_COMPANIES,
                        payload: {
                            companies:companies,
                            hirings:hirings,
                            hiringFreeze:hiringFreeze,
                            layoffs:layoffs,
                            loading:false
                        }
                    });
                })
                .catch(error => {
                    dispatch({
                        type: GET_ERRORS,
                        payload: {
                            error:error,
                            loading:false
                        }
                    });
                })
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: {
                    error:error,
                    loading:false
                }
            });
        })
}