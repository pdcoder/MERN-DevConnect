import setAuthToken from "../utils/setAuthoken";
import axios from 'axios';
import { GET_ERRORS} from './types';

//Register
export const registerUser = (userData,history) => {

    axios.post('/api/user/register',userData)
    .then(res => history.push('/login'))
    .catch(err => 
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    })
);
};

//Login
export const loginUser = userData => dispatch => {
    axios.post('/api/users/login',userData)
    .then(res => {
        const {token} = res.data;
        localStorage.setItem('jwtToken',token);
        setAuthToken(token);
    })
    .catch(err => 
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    })
);
};

//Set logged in user
export const setCurrUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

//Logout user
export const logoutuser = () => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrUser({}));
};