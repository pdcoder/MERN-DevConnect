import axios from 'axios';

import {
    ADD_POST,
    GET_ERRORS,
    GET_POSTS,
    GET_POST,
    POST_LOADING,
    DELETE_POST
} from './types';

//Add Post
export const addPost = postData => dispatch => {
    dispatch(clearErrors());
    axios.post('/api/posts',postData)
    .then(res => dispatch({
        type: ADD_POST,
        payload: res.data
    }))
    .catch(err => 
    dispatch({ 
    type: GET_ERRORS,
    payload: err.response.data}));
};